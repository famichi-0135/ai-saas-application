"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for trying out Pixelcraft AI.",
    price: { monthly: 0, annually: 0 },
    credits: 50,
    features: [
      { name: "50 image generation credits", included: true },
      { name: "5 background removals", included: true },
      { name: "Basic image editing", included: true },
      { name: "Standard resolution outputs", included: true },
      { name: "Community support", included: true },
      { name: "Priority processing", included: false },
      { name: "Advanced editing tools", included: false },
      { name: "API access", included: false },
      { name: "Custom model fine-tuning", included: false },
    ],
    highlightFeature: "Great for occasional use",
    cta: "Sign Up Free",
    popular: false,
  },
  {
    id: "starter",
    name: "Starter",
    description: "For content creators and small businesses.",
    price: { monthly: 19, annually: 15 },
    credits: 200,
    features: [
      { name: "200 image generation credits", included: true },
      { name: "50 background removals", included: true },
      { name: "Advanced image editing", included: true },
      { name: "High resolution outputs", included: true },
      { name: "Email support", included: true },
      { name: "Priority processing", included: true },
      { name: "Advanced editing tools", included: true },
      { name: "API access", included: false },
      { name: "Custom model fine-tuning", included: false },
    ],
    highlightFeature: "Most popular for creators",
    cta: "Get Started",
    popular: true,
  },
  {
    id: "pro",
    name: "Professional",
    description: "For professionals and growing teams.",
    price: { monthly: 49, annually: 39 },
    credits: 500,
    features: [
      { name: "500 image generation credits", included: true },
      { name: "Unlimited background removals", included: true },
      { name: "Advanced image editing", included: true },
      { name: "Ultra HD resolution outputs", included: true },
      { name: "Priority support", included: true },
      { name: "Priority processing", included: true },
      { name: "Advanced editing tools", included: true },
      { name: "API access", included: true },
      { name: "Custom model fine-tuning", included: false },
    ],
    highlightFeature: "Best for professionals",
    cta: "Go Professional",
    popular: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for larger organizations.",
    price: { monthly: "Custom", annually: "Custom" },
    credits: "Custom",
    features: [
      { name: "Unlimited image generation", included: true },
      { name: "Unlimited background removals", included: true },
      { name: "Advanced image editing", included: true },
      { name: "Ultra HD resolution outputs", included: true },
      { name: "Dedicated support", included: true },
      { name: "Priority processing", included: true },
      { name: "Advanced editing tools", included: true },
      { name: "API access", included: true },
      { name: "Custom model fine-tuning", included: true },
    ],
    highlightFeature: "Tailored for organizations",
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose the plan thats right for you. Start for free, upgrade anytime.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <Tabs
            defaultValue="monthly"
            value={billingCycle}
            onValueChange={(value) => setBillingCycle(value as "monthly" | "annually")}
            className="w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annually">
                Annually
                <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600 dark:bg-green-900/20 dark:text-green-400">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard plan={plan} billingCycle={billingCycle} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
          <p className="text-muted-foreground mb-6">Contact our sales team for a tailored plan that meets your specific needs.</p>
          <Button variant="outline" className="gap-2">
            <span>Contact Sales</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ 
  plan, 
  billingCycle 
}: { 
  plan: typeof plans[0]; 
  billingCycle: "monthly" | "annually";
}) {
  // Correctly type the price based on whether it's a number or string
  const price = typeof plan.price[billingCycle] === 'number' 
    ? `$${plan.price[billingCycle]}` 
    : plan.price[billingCycle];

  return (
    <Card className={cn(
      "h-full transition-all duration-200 hover:shadow-md",
      plan.popular && "border-primary relative shadow-md"
    )}>
      {plan.popular && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
          <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Popular
          </div>
        </div>
      )}

      <CardHeader className="space-y-1">
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{price}</span>
            {typeof plan.price[billingCycle] === 'number' && (
              <span className="text-muted-foreground ml-1">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {typeof plan.credits === 'number' 
              ? `Includes ${plan.credits} credits per ${billingCycle === "monthly" ? "month" : "year"}` 
              : `${plan.credits} credits`}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{plan.highlightFeature}</span>
          </p>
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                {feature.included ? (
                  <Check className="h-4 w-4 text-green-500 mt-0.5" />
                ) : (
                  <X className="h-4 w-4 text-muted-foreground mt-0.5" />
                )}
                <span className={cn(!feature.included && "text-muted-foreground")}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={cn("w-full", 
            plan.id === "free" && "bg-muted hover:bg-muted/80 text-foreground",
            plan.popular && "bg-primary"
          )}
          variant={plan.id === "free" ? "secondary" : "default"}
        >
          {plan.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}