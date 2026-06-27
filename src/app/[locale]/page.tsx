import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Integrations from "@/components/sections/Integrations";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Features from "@/components/sections/Features";
import Cards from "@/components/sections/Cards";
import Roadmap from "@/components/sections/Roadmap";
import Faq from "@/components/sections/Faq";
import Support from "@/components/sections/Support";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Integrations />
      <FeatureStrip />
      <Features />
      <Cards />
      <Roadmap />
      <Faq />
      <Support />
      <Cta />
      <Footer />
    </main>
  );
}
