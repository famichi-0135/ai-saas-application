"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "CreativeHub",
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "Pixelcraft AI has transformed our content creation process. What used to take hours now takes minutes, and the quality is consistently impressive. The background removal tool alone has saved our design team countless hours.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Freelance Designer",
    company: "Self-employed",
    avatar: "https://i.pravatar.cc/150?img=51",
    content: "As a freelancer, I need tools that help me deliver high-quality work efficiently. Pixelcraft AI gives me the ability to create professional designs for my clients without breaking my budget. The image generation feature feels like having an assistant designer.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Social Media Manager",
    company: "TrendSetters Inc.",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Managing social media content for multiple brands used to be overwhelming. Pixelcraft AI helps me create consistent, on-brand visuals quickly. The compression tool ensures everything loads fast on mobile platforms too.",
    rating: 4,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "E-commerce Owner",
    company: "ModernHome",
    avatar: "https://i.pravatar.cc/150?img=17",
    content: "The background removal tool has revolutionized our product photography. We've seen a 30% increase in conversion rates since implementing clean, professional product images created with Pixelcraft AI.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Nakamura",
    role: "Content Creator",
    company: "Digital Nomad",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "I've tried many AI image tools, but Pixelcraft stands out for its intuitive interface and consistent results. The customer service is exceptional too - they responded to my questions within hours.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by creative professionals
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See what our users have to say about their experience with Pixelcraft AI.
          </p>
          <div className="flex justify-center items-center gap-1 pt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-primary text-primary" />
            ))}
            <span className="ml-2 font-medium">4.9/5 from 1,000+ reviews</span>
          </div>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-20 max-w-4xl mx-auto grayscale opacity-70"
        >
          {["CreativeHub", "TrendSetters", "ModernHome", "DigitalAgency", "StudioWorks"].map((company) => (
            <div key={company} className="flex items-center h-8">
              <span className="text-lg font-semibold tracking-tight">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="h-full rounded-xl border bg-background p-6 shadow-sm flex flex-col justify-between">
      <div className="mb-4">
        <Quote className="h-6 w-6 text-muted-foreground opacity-70" />
        <div className="mt-3 space-y-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < testimonial.rating
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
          <p className="text-muted-foreground">
            {testimonial.content}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}