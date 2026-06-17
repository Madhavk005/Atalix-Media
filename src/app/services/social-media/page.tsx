import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

export default function SocialMediaService() {
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
            SOCIAL<br />MEDIA
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-16">
            A perfectly curated feed means very little if nobody cares about what&apos;s on it. It&apos;s about creating content that reaches the right people, sparks meaningful engagement, and drives measurable growth. We combine strategy, creativity and audience insights to build social media ecosystems that not only look cohesive but also deliver results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
            {['Content Strategy', 'Community Management', 'Organic Growth', 'Analytics Setup'].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center min-h-[160px]">
                <h3 className="text-lg font-heading font-bold uppercase tracking-wide text-white/90">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Approach */}
      <section className="py-24 relative z-10">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">01 / The Approach</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
                Scroll-stopping<br/>growth loops.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                [Placeholder for detailed approach text. Explain how your social strategy focuses on engagement metrics, algorithm understanding, and creating native content formats like Reels and TikToks.]
              </p>
              <ul className="space-y-4">
                {['Platform-Native Storytelling', 'Community & Comment Moderation', 'Data-Driven Content Pillars'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-atalix-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="aspect-square md:aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden flex items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-atalix-accent/10 to-transparent" />
               <span className="text-white/20 font-heading font-bold uppercase tracking-widest">[Social Grid / Analytics Mockup]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-24 relative z-10 bg-white/[0.01] border-y border-white/5">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">02 / Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Campaign Highlights</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative aspect-[9/16] rounded-[24px] overflow-hidden bg-[#1a1a1a] border border-white/5 cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-heading font-bold uppercase tracking-widest">[Reel {item}]</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">[Campaign Name]</h3>
                  <div className="flex items-center gap-4 text-xs font-bold text-white/60">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> +[X]% Reach</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 relative z-10">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="text-center mb-20">
            <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-4 block">03 / Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">How we work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Audit & Strategy', desc: '[Explain analyzing current presence, defining KPIs, and content calendar.]' },
              { title: 'Content Creation', desc: '[Explain shooting, designing, and writing engaging copy.]' },
              { title: 'Publish & Analyze', desc: '[Explain posting schedules, community engagement, and monthly reporting.]' }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden">
                <div className="text-6xl font-heading font-black text-white/5 absolute -top-4 -right-4">0{i+1}</div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase mt-8">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.desc}</p>
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
