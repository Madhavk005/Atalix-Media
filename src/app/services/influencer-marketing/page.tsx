import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

export default function InfluencerMarketingService() {
  return (
    <main className="min-h-screen bg-atalix-bg-primary overflow-hidden flex flex-col">
      <Navbar />
      
      <section className="relative pt-48 pb-32 w-full flex-grow flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-atalix-accent opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container px-6 md:px-12 mx-auto relative z-10 flex flex-col items-center text-center">
          <Link href="/#services" className="mb-12 inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-white/50 uppercase hover:text-white transition-colors border border-white/10 px-6 py-2 rounded-full bg-white/[0.02] backdrop-blur-md">
            <span>&larr;</span> Back to Services
          </Link>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-heading font-black tracking-tighter text-white mb-8">
            INFLUENCER<br />MARKETING
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-16">
            A million followers don&apos;t automatically make someone the right influencer. That&apos;s why we curate influencer options based on your industry, audience, objectives and brand personality. From UGC creators, niche micro-influencers to large-scale macro influencers, we provide a tailored selection, allowing you to choose the voices that best represent your brand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
            {['Creator Discovery', 'Campaign Strategy', 'UGC Content', 'Relationship Management'].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center min-h-[160px]">
                <h3 className="text-lg font-heading font-bold uppercase tracking-wide text-white/90">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
