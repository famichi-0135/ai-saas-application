"use server";

import { stripe } from "@/config/stripe";
import { prisma } from "@/lib/prisma";
import { StripeState } from "@/types/actions";
import { currentUser } from "@clerk/nextjs/server";


export async function createStripeSession(
  prevState: StripeState,
  formData: FormData
): Promise<StripeState> {
  const priceId = formData.get("priceId") as string;
  console.log(priceId);

  const user = await currentUser();
  if (!user) {
    throw new Error("認証が必要です");
  }

  try {
    const dbuser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    let customerId = dbuser?.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
        metadata: {
          // userId: user.id,
          clerkId: user.id,
        },
      });

      await prisma.user.update({
        where: { clerkId: user.id },
        data: {
          stripeCustomerId: customer.id,
        },
      });

      customerId = customer.id;
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.BASE_URL}/dashboard/?success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/dashboard/?canceled=true`,
      metadata: {
        clerkId: user.id,
      },
    });
    console.log(session);

    if (!session.url) {
      throw new Error("セッションの作成に失敗しました");
    }

    return {
      status: "success",
      error: "",
      redirectUrl: session.url,
    };
  } catch (err) {
    console.error("Stripe session creation error", err);
    return {
      status: "error",
      error: "決済処理中にエラーが発生しました",
      redirectUrl: "",
    };
  }
}
