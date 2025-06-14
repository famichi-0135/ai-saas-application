// import './globals.css';
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/provider/theme-provider";
// import { Toaster } from '@/components/ui/toastr';

export const metadata: Metadata = {
  title: "Pixelcraft AI - Image Generation and Editing Platform",
  description:
    "Generate stunning images, remove backgrounds, compress files, and more with our AI-powered creative suite.",
  keywords:
    "AI, image generation, background removal, image compression, design tools",
  openGraph: {
    title: "Pixelcraft AI - Image Generation and Editing Platform",
    description:
      "Generate stunning images, remove backgrounds, compress files, and more with our AI-powered creative suite.",
    url: "https://pixelcraft.ai",
    siteName: "Pixelcraft AI",
    images: [
      {
        url: "https://images.pexels.com/photos/7311920/pexels-photo-7311920.jpeg",
        width: 1200,
        height: 630,
        alt: "Pixelcraft AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      {/* <Toaster /> */}
    </ThemeProvider>
  );
}
