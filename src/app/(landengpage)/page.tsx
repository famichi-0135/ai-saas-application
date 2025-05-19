// Update the import path if the file is named 'Header.tsx' (case-sensitive) or adjust as needed
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { CtaSection } from '@/components/sections/cta-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FaqSection } from '@/components/sections/faq-section';

export default function Home() {
  return (
    <div className="relative w-full">
      <main className="flex min-h-screen flex-col">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}