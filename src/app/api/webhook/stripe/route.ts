/* eslint-disable @typescript-eslint/no-unused-vars */
import { stripe } from "@/config/stripe";
import { prisma } from "@/lib/prisma";
import { handleSubscriptionCreated, handleSubscriptionDeleted, handleSubscriptionUpdated } from "@/lib/subscriptions";
import { SubscriptionStatus } from "@prisma/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request, response: Response) {
  try {
    let event;
    const body = await request.text();
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (endpointSecret) {
      const signature = request.headers.get("stripe-signature") as string;
      try {
        event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
      } catch {
        console.log(`⚠️  Webhook signature verification failed.`);
        return new NextResponse("webhook error", { status: 400 });
      }
    }

    if (!event) {
      return new NextResponse("Webhook Evnet Error", { status: 500 });
    }

    const subscriptions = event.data.object as Stripe.Subscription;

    // Handle the event
    switch (event.type) {
      case "customer.subscription.created": {
        await handleSubscriptionCreated(subscriptions);
        break;
      }

      case "customer.subscription.updated": {
        await handleSubscriptionUpdated(subscriptions);
        break;
      }

      case "customer.subscription.updated":
        {
          await handleSubscriptionDeleted(subscriptions);
          break;
        }
    }

    // Return a 200 response to acknowledge receipt of the event
    return NextResponse.json({success: true});
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
