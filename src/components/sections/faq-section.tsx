"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the credit system work?",
    answer: "Credits are used for various operations in Pixelcraft AI. One credit is typically consumed for each image generation, while background removals and other operations may use different amounts. Free accounts start with 50 credits, and paid plans include monthly credit allowances that reset each billing cycle. You can also purchase additional credits as needed."
  },
  {
    question: "Can I use the generated images commercially?",
    answer: "Yes! All images you create with Pixelcraft AI are yours to use for personal or commercial purposes. You retain full rights to the content you generate. However, please be aware of potential copyright or trademark issues if you create images that closely resemble existing protected works."
  },
  {
    question: "How accurate is the background removal tool?",
    answer: "Our AI-powered background removal is highly accurate for most images, especially those with clear subjects. It works well with portraits, products, and objects with defined edges. Complex subjects like hair or transparent items may occasionally require minor touch-ups, which can be done using our editing tools."
  },
  {
    question: "What image formats are supported?",
    answer: "Pixelcraft AI supports all common image formats including JPG, PNG, WebP, and HEIF/HEIC. For the best quality results with background removal, we recommend using high-resolution images in PNG or JPG format. Generated images can be exported in various formats based on your needs."
  },
  {
    question: "Is there a limit to image resolution?",
    answer: "Free accounts can generate images up to 1024×1024 pixels. Starter plans support up to 2048×2048 pixels, while Professional and Enterprise plans allow for higher resolutions up to 4096×4096 pixels. Background removal works on images of any resolution across all plans, though processing time may vary."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings page. Navigate to Billing > Subscription and click 'Cancel Subscription'. Your access will continue until the end of your current billing period. We don't offer refunds for partial billing periods, but you're welcome to use the service until the subscription expires."
  },
  {
    question: "Is there an API available for developers?",
    answer: "Yes, Professional and Enterprise plans include API access that allows you to integrate Pixelcraft AI features directly into your applications, websites, or workflows. Our comprehensive API documentation includes examples for popular programming languages and frameworks. Enterprise plans offer additional API call volume and dedicated support."
  },
  {
    question: "What happens to my data and uploaded images?",
    answer: "We take privacy seriously. Your uploaded images are stored securely and only used to provide the services you request. We do not use your images to train our models unless you explicitly opt in. You can delete your images at any time from your account. Please refer to our Privacy Policy for complete details on data handling."
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Get answers to the most common questions about Pixelcraft AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? Our support team is here to help.
          </p>
          <a
            href="#support"
            className="inline-flex items-center text-primary hover:underline"
          >
            <span>Visit our help center</span>
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}