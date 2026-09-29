import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { WhyOxyFlow } from "@/components/sections/why-oxyflow";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { DownloadSection } from "@/components/sections/download";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhyOxyFlow />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <Pricing />
        <DownloadSection />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
