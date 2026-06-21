import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Reels from "@/components/sections/Reels";

import PrintableAssets from "@/components/sections/PrintableAssets";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-atalix-bg-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Reels />
      {/* <Photoshoot /> */}
      <PrintableAssets />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}
