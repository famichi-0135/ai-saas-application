import Stripe from "stripe";
import { prisma } from "./prisma";
import { SubscriptionStatus } from "@prisma/client";
import { STRIPE_PLANS } from "@/config/plans";

function getPlanDetails(subscription: Stripe.Subscription) {
  const priceId = subscription.items.data[0].price.id;
  let status: SubscriptionStatus = "STARTER";
  let credits = 5;

  switch (priceId) {
    case STRIPE_PLANS.STARTER:
      status = "STARTER";
      credits = 50;
      break;

    case STRIPE_PLANS.PRO:
      status = "PRO";
      credits = 120;
      break;

    case STRIPE_PLANS.ENTERPRISE:
      status = "ENTERPRISE";
      credits = 300;
      break;
  }

  return { priceId, status, credits };
}

export async function handleSubscriptionCreated(
  subscriptions: Stripe.Subscription
) {
  const { priceId, status, credits } = getPlanDetails(subscriptions);

  return prisma.user.update({
    where: { stripeCustomerId: subscriptions.customer as string },
    data: {
      subscriptionStatus: status,
      credits: credits,
      subscriptions: {
        create: {
          stripeSubscriptionId: subscriptions.id,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscriptions.items.data[0].current_period_end * 1000
          ),
        },
      },
    },
  });
}

export async function handleSubscriptionUpdated(
  subscriptions: Stripe.Subscription
) {
  const { priceId, status, credits } = getPlanDetails(subscriptions);

  return prisma.user.update({
    where: { stripeCustomerId: subscriptions.customer as string },
    data: {
      subscriptionStatus: subscriptions.cancel_at_period_end ? "FREE" : status,
      credits: subscriptions.cancel_at_period_end ? 5 : credits,
      subscriptions: {
        update: {
          stripeSubscriptionId: subscriptions.id,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscriptions.items.data[0].current_period_end * 1000
          ),
        },
      },
    },
  });
}

export async function handleSubscriptionDeleted(
  subscriptions: Stripe.Subscription
) {
  return prisma.user.update({
    where: { stripeCustomerId: subscriptions.customer as string },
    data: {
      subscriptionStatus: "FREE",
      credits: 5,
      subscriptions: {
        delete: {
          stripeSubscriptionId: subscriptions.id,
        },
      },
    },
  });
}
