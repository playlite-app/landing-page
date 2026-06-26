import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Features from "@/components/sections/Features";
import Cards from "@/components/sections/Cards";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureStrip />
      <Features />
      <Cards />
      <Cta />
      <Footer />
    </main>
  );
}
