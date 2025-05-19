"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-70 dark:bg-purple-600/10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl opacity-70 dark:bg-blue-600/10"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to transform your creative workflow?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Join thousands of creators and businesses already using Pixelcraft
            AI to create stunning visuals in record time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3 p-8 space-y-4">
              <h3 className="text-2xl font-bold">
                Start your free trial today
              </h3>
              <p className="text-muted-foreground">
                Get 50 credits to experience the full power of Pixelcraft AI. No
                credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12"
                  />
                </div>
                <Button size="lg" className="h-12">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <a href="#terms" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>

              <div className="pt-4 space-y-3">
                <h4 className="font-medium">What you&apos;ll get:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "50 image generation credits",
                    "5 background removals",
                    "Basic editing features",
                    "Standard resolution outputs",
                    "Email support",
                    "No credit card required",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 relative">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/90 text-primary-foreground mb-4">
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2v4" />
                      <path d="m6.34 6.34-2.83-2.83" />
                      <path d="M2 12h4" />
                      <path d="m6.34 17.66-2.83 2.83" />
                      <path d="M12 18v4" />
                      <path d="m17.66 17.66 2.83 2.83" />
                      <path d="M22 12h-4" />
                      <path d="m17.66 6.34 2.83-2.83" />
                      <path d="M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12Z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    </svg>
                  </div>
                  <p className="text-xl font-medium">Join over 10,000+ users</p>
                  <p className="text-muted-foreground mt-1">
                    creating incredible visuals every day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-sm text-muted-foreground space-y-4"
        >
          <p>No commitments. Cancel anytime.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6 7 17l-5-5" />
                <path d="m22 10-7.5 7.5L13 16" />
              </svg>
              <span>Continuous updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
