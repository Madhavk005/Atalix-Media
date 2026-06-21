import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-atalix-bg-primary overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
      <StickyCTA />
    </main>
  );
}
