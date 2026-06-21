import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Founders from "@/components/sections/Founders";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-atalix-bg-primary overflow-hidden">
      <Navbar />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar on this page, or let About section handle it */}
        <About />
        <Founders />
      </div>
      <Footer />
      <StickyCTA />
    </main>
  );
}
