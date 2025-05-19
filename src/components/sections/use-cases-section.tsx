"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PanelTop, ShoppingBag, Coffee, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "designers",
    icon: PanelTop,
    title: "Designers & Creatives",
    description:
      "Accelerate your creative workflow with AI-powered tools that generate inspiration and automate tedious tasks.",
    benefits: [
      "Generate mood boards and concept art",
      "Remove backgrounds in seconds",
      "Create consistent visual assets",
      "Experiment with unlimited styles",
    ],
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg",
  },
  {
    id: "marketers",
    icon: ShoppingBag,
    title: "Marketers",
    description:
      "Create high-converting visual content for campaigns, social media, and ads without the need for a design team.",
    benefits: [
      "Generate on-brand marketing visuals",
      "Create social media graphics quickly",
      "Optimize images for various platforms",
      "Maintain brand consistency across materials",
    ],
    image: "https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg",
  },
  {
    id: "social-media",
    icon: Coffee,
    title: "Social Media Managers",
    description:
      "Keep your content calendar full with eye-catching visuals that drive engagement and grow your audience.",
    benefits: [
      "Create engaging platform-specific content",
      "Generate trending visual styles",
      "Repurpose existing content into new formats",
      "Maintain consistent posting schedule",
    ],
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
  },
  {
    id: "businesses",
    icon: Users,
    title: "Small Businesses",
    description:
      "Access professional-quality design and image editing without the expense of hiring specialists or agencies.",
    benefits: [
      "Create professional marketing materials",
      "Build a consistent brand identity",
      "Optimize product images for e-commerce",
      "Develop content for various platforms",
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tailored for every creative need
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See how professionals across industries use Pixelcraft AI to
            transform their creative workflows.
          </p>
        </motion.div>

        <Tabs defaultValue="designers" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="flex items-center gap-2"
                >
                  <useCase.icon className="h-4 w-4" />
                  <span className="hidden md:inline">
                    {useCase.title.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {useCases.map((useCase) => (
            <TabsContent
              key={useCase.id}
              value={useCase.id}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
                    <useCase.icon className="h-4 w-4" />
                    <span>For {useCase.title}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {useCase.description}
                  </h3>
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div className="rounded-full bg-primary/10 p-1 mt-1">
                          <svg
                            className="h-3 w-3 text-primary"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button className="group">
                    <span>Explore {useCase.title} Solutions</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]"
                >
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute left-6 bottom-6 right-6">
                    <p className="text-white text-lg font-medium">
                      {useCase.title}
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Success Story</CardTitle>
                      <CardDescription>
                        How others are using Pixelcraft
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-muted-foreground italic border-l-2 pl-4 border-primary/50">
                        &quot;Pixelcraft AI has reduced our image production time by
                        75% while maintaining our brands visual quality and
                        consistency &quot;;
                        <footer className="mt-2 font-medium text-foreground">
                          — Alex Chen, Creative Director
                        </footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Results</CardTitle>
                      <CardDescription>Measurable impact</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Time Saved</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full w-[75%]"></div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span>Cost Reduction</span>
                        <span className="font-medium">60%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full w-[60%]"></div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Popular Use</CardTitle>
                      <CardDescription>
                        Most common applications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div
                              className={cn(
                                "h-2 w-2 rounded-full",
                                index === 0
                                  ? "bg-primary"
                                  : index === 1
                                  ? "bg-purple-500"
                                  : "bg-pink-500"
                              )}
                            ></div>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
