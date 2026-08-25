import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Capabilities } from "@/components/sections/Capabilities";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Products } from "@/components/sections/Products";
import { ConnectedSystem } from "@/components/sections/ConnectedSystem";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Industries } from "@/components/sections/Industries";
import { GoogleRating } from "@/components/sections/GoogleRating";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Capabilities />
      <Services />
      <WhyUs />
      <Products />
      <ConnectedSystem />
      <HowWeWork />
      <Industries />
      <GoogleRating />
      <CTA />
    </>
  );
}
