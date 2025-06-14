"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Instagram,
  Facebook,
  Youtube,
  Github,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/40 py-16 mt-auto flex-col flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div>
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Pixelcraft AI</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-4">
              Empower your creativity with AI-powered tools that help you create
              stunning visuals in minutes, not hours.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link
                href="#facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </div>
              </Link>
              <Link
                href="#youtube"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </div>
              </Link>
              <Link
                href="#github"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#api"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="#integrations"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#status"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#documentation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#tutorials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#community"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#help-center"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#press"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#partners"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pixelcraft AI. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="#sitemap"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}
