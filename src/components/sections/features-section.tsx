"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Image as ImageIcon, 
  SlidersHorizontal, 
  Wand2
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "image-generation",
    icon: Sparkles,
    title: "AI Image Generation",
    description: "Generate high-quality images from text descriptions. Create stunning visuals for your projects in seconds.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "background-removal",
    icon: Layers,
    title: "Background Removal",
    description: "Instantly remove backgrounds from images with perfect precision. Save hours of manual editing time.",
    image: "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "image-compression",
    icon: ImageIcon,
    title: "Smart Compression",
    description: "Reduce file sizes without compromising quality. Optimize images for web use while maintaining visual fidelity.",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "editing-tools",
    icon: SlidersHorizontal,
    title: "Advanced Editing",
    description: "Access a comprehensive suite of AI-powered editing tools. Enhance, retouch, and transform your images.",
    image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg",
    color: "from-green-500 to-emerald-500",
  },
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = React.useState(features[0].id);

  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
            <Wand2 className="inline-block h-4 w-4 mr-1" />
            AI-Powered Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Unleash your creativity</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Our powerful AI tools help you create, edit, and optimize images with just a few clicks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeFeature === feature.id ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br bg-opacity-60 z-10"></div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20"></div>
                <div className="absolute left-6 bottom-6 right-6 z-30">
                  <div className="p-4 bg-background/30 backdrop-blur-md rounded-lg border border-white/10">
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard
                  feature={feature}
                  isActive={activeFeature === feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  feature, 
  isActive, 
  onClick 
}: { 
  feature: typeof features[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border p-5 transition-all hover:shadow-md cursor-pointer",
        isActive 
          ? "border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10"
          : "border-border bg-background hover:border-primary/20 hover:bg-primary/5"
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "shrink-0 rounded-full p-1",
          isActive ? `bg-gradient-to-br ${feature.color}` : "bg-muted"
        )}>
          <feature.icon className={cn(
            "h-5 w-5", 
            isActive ? "text-white" : "text-foreground"
          )} />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium leading-none">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}