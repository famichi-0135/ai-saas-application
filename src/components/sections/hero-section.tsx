"use client";

import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 flex-col flex justify-center items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-70 dark:bg-purple-600/10"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_720px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button variant="outline" className="rounded-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  {/* <span>AI-Powered Creative Suite</span> */}
                  <span>強力な画像生成ツール</span>
                </Button>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Create stunning visuals with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500">
                  AI-powered
                </span>{" "}
                tools
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                {/* Generate images, remove backgrounds, compress files, and more with our
                intuitive platform designed for creators, marketers, and businesses. */}
                画像生成、背景削除、トリミング、圧縮ありとあらゆる加工をこのサービス一つで迅速に行えます。
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-1 max-w-sm space-y-2">
                <Input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="h-12 rounded-lg"
                />
                <p className="text-xs text-muted-foreground">
                  FREEユーザーに登録で5クレジットプレゼント‼
                </p>
              </div>
              <Button size="lg" className="h-12 px-8">
                
                  
                
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4 text-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">4.9/5</span> from
                over 1,000+ reviews
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:pl-10 mx-auto w-full max-w-[90%] lg:max-w-none"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950/40 dark:to-indigo-950/40 shadow-xl">
              <div className="absolute inset-0 bg-grid-slate-400/[0.05] bg-[bottom_1px_center] dark:bg-grid-slate-700/[0.05]"></div>
              <Image
                src="https://images.pexels.com/photos/7311920/pexels-photo-7311920.jpeg"
                alt="AI generated image examples"
                fill
                className="object-cover rounded-xl object-center z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <div className="bg-background/30 backdrop-blur-md p-4 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-foreground">
                    Try: &quot;綺麗な星空をお願い。&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-purple-600/20 filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
