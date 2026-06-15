"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="relative py-32 w-full bg-[#1E1E1E] overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[13px] font-medium tracking-widest text-white/50 uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-[52px] leading-[1.1] font-heading font-bold uppercase max-w-xl text-white">
            Creative Services<br />That Drive Results.
          </h2>
        </motion.div>

        {/* Complete Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Branding */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative p-10 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group shadow-2xl hover:border-atalix-accent/30 transition-all cursor-pointer"
          >
            <Link href="/services/branding" className="absolute inset-0 z-50" />
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
              <h3 className="text-4xl font-heading font-bold uppercase text-white tracking-tight">Branding</h3>
              <div className="flex items-center gap-4 text-white/50 text-[13px] font-medium tracking-widest uppercase">
                <span className="group-hover:text-white transition-colors duration-300">Strategy</span>
                <span className="text-atalix-accent opacity-50 group-hover:opacity-100">&rarr;</span>
                <span className="group-hover:text-white transition-colors duration-300 delay-100">Positioning</span>
                <span className="text-atalix-accent opacity-50 group-hover:opacity-100">&rarr;</span>
                <span className="group-hover:text-white transition-colors duration-300 delay-200">Identity</span>
                <span className="text-atalix-accent opacity-50 group-hover:opacity-100">&rarr;</span>
                <span className="group-hover:text-white transition-colors duration-300 delay-300">Guidelines</span>
              </div>
            </div>
            {/* Animated Orbit Background */}
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-700">
              <div className="absolute inset-0 rounded-full border border-white animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-white animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-atalix-accent animate-[spin_10s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-atalix-accent blur-[80px] rounded-full" />
            </div>
          </motion.div>

          {/* Card 2: Video Production */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 relative p-10 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group shadow-2xl hover:border-atalix-accent/30 transition-all cursor-pointer"
          >
            <Link href="/services/video-production" className="absolute inset-0 z-50" />
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-50 transition-opacity duration-500"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunny-51197-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-black/40 to-transparent" />
            </div>
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
              <h3 className="text-3xl font-heading font-bold uppercase text-white tracking-tight">Video<br/>Production</h3>
              <div className="flex flex-col gap-2 text-white/50 text-[13px] font-medium tracking-widest uppercase">
                <span className="group-hover:text-white transition-colors">Reels</span>
                <span className="group-hover:text-white transition-colors delay-75">Shorts</span>
                <span className="group-hover:text-white transition-colors delay-150">Brand Films</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Graphic Design */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 relative p-10 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group shadow-2xl hover:border-atalix-accent/30 transition-all cursor-pointer"
          >
            <Link href="/services/graphic-design" className="absolute inset-0 z-50" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-8">
               {/* Stacked Posters */}
               <div className="w-40 h-52 bg-white/5 border border-white/10 rounded-2xl absolute transform -rotate-6 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-x-16 group-hover:-rotate-12 group-hover:scale-105 shadow-2xl backdrop-blur-sm" />
               <div className="w-40 h-52 bg-white/10 border border-white/10 rounded-2xl absolute transform transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-8 group-hover:scale-105 shadow-2xl z-10 backdrop-blur-sm" />
               <div className="w-40 h-52 bg-atalix-accent/20 border border-atalix-accent/50 rounded-2xl absolute transform rotate-6 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-16 group-hover:rotate-12 group-hover:scale-105 shadow-2xl z-20 backdrop-blur-xl" />
            </div>
            <div className="absolute top-10 left-10 z-30">
              <h3 className="text-3xl font-heading font-bold uppercase text-white tracking-tight">Graphic<br/>Design</h3>
            </div>
          </motion.div>

          {/* Card 4: Social Media */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="row-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 relative p-12 md:p-14 rounded-[32px] overflow-hidden bg-[#252525] border border-white/5 backdrop-blur-3xl group shadow-2xl flex flex-col justify-end hover:border-atalix-accent/30 transition-all cursor-pointer"
          >
            <Link href="/services/social-media" className="absolute inset-0 z-50" />
            {/* Animated Aurora Glow */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `
                  radial-gradient(circle at 85% 20%, rgba(29,161,242,0.22), transparent 35%),
                  radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 50%)
                `,
                filter: "blur(80px)"
              }}
            />

            {/* Grain Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-soft-light"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Huge Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-[180px] md:text-[220px] text-white opacity-[0.02] blur-[2px] pointer-events-none select-none z-0 tracking-tighter">
              SOCIAL
            </div>

            {/* Text Content (Top Left) */}
            <div className="absolute top-12 left-12 md:top-14 md:left-14 z-30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-atalix-accent text-[10px] tracking-[0.2em] font-bold uppercase opacity-60">
                  ● Service
                </span>
              </div>
              <h3 className="text-2xl md:text-[28px] leading-[1.1] font-heading font-bold uppercase text-white tracking-tight">
                Social<br/>Media
              </h3>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="relative z-20 grid grid-cols-2 md:grid-cols-3 gap-3 w-full mt-32 pointer-events-none">
              
              {/* Reel */}
              <div className="col-span-1 h-24 md:h-32 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-[24px] shadow-inner flex flex-col items-start justify-end p-5 transition-all duration-500 ease-out group-hover:border-atalix-accent/25 group-hover:shadow-[0_0_30px_rgba(29,161,242,0.15)] group-hover:-translate-y-1">
                <div className="w-6 h-6 rounded-full border border-white/20 mb-auto flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[5px] border-transparent border-l-white ml-0.5" />
                </div>
                <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide">Reel</span>
              </div>

              {/* Carousel */}
              <div className="col-span-1 md:col-span-2 h-24 md:h-32 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-[24px] shadow-inner flex flex-col items-start justify-end p-5 transition-all duration-500 ease-out group-hover:border-atalix-accent/25 group-hover:shadow-[0_0_30px_rgba(29,161,242,0.15)] group-hover:-translate-y-1 delay-[50ms] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-5 flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                   <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
                <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide">Carousel</span>
              </div>

              {/* Post */}
              <div className="col-span-1 h-16 md:h-20 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-[24px] shadow-inner flex items-center justify-start px-5 transition-all duration-500 ease-out group-hover:border-atalix-accent/25 group-hover:shadow-[0_0_30px_rgba(29,161,242,0.15)] group-hover:-translate-y-1 delay-[100ms]">
                <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide">Single Post</span>
              </div>

              {/* Story */}
              <div className="col-span-1 md:col-span-2 h-16 md:h-20 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-[24px] shadow-inner flex items-center justify-between px-5 transition-all duration-500 ease-out group-hover:border-atalix-accent/25 group-hover:shadow-[0_0_30px_rgba(29,161,242,0.15)] group-hover:-translate-y-1 delay-[150ms]">
                <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide">Story Format</span>
                <div className="w-8 h-1 rounded-full bg-white/10" />
              </div>

              {/* Analytics Dashboard */}
              <div className="col-span-2 md:col-span-3 h-16 md:h-20 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-[24px] shadow-inner flex items-center justify-between px-6 transition-all duration-500 ease-out group-hover:border-atalix-accent/25 group-hover:shadow-[0_0_30px_rgba(29,161,242,0.15)] group-hover:-translate-y-1 delay-[200ms]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">Live Analytics Tracking</span>
                </div>
                <div className="flex items-end gap-1 h-6">
                   <div className="w-1.5 h-2 bg-white/20 rounded-sm" />
                   <div className="w-1.5 h-4 bg-white/40 rounded-sm group-hover:h-5 transition-all duration-700" />
                   <div className="w-1.5 h-6 bg-atalix-accent rounded-sm group-hover:h-8 transition-all duration-700" />
                </div>
              </div>

            </div>

          </motion.div>

          {/* Card 5: Performance Ads */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 relative p-10 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group shadow-2xl flex flex-col justify-between hover:border-atalix-accent/30 transition-all cursor-pointer"
          >
            <Link href="/services/performance-ads" className="absolute inset-0 z-50" />
            <h3 className="text-3xl font-heading font-bold uppercase text-white tracking-tight z-30">Performance<br/>Ads</h3>
            
            {/* Funnel Animation */}
            <div className="flex flex-col items-center gap-2 mt-8 w-full z-20">
              <div className="bg-white/5 py-4 px-4 rounded-2xl border border-white/10 w-full text-center text-xs tracking-widest uppercase font-medium group-hover:bg-atalix-accent/20 group-hover:text-white transition-colors duration-500 text-white/50">Awareness</div>
              <div className="bg-white/5 py-4 px-4 rounded-2xl border border-white/10 w-[85%] text-center text-xs tracking-widest uppercase font-medium group-hover:bg-atalix-accent/40 group-hover:text-white transition-colors duration-500 delay-100 text-white/50">Interest</div>
              <div className="bg-white/5 py-4 px-4 rounded-2xl border border-white/10 w-[70%] text-center text-xs tracking-widest uppercase font-medium group-hover:bg-atalix-accent/60 group-hover:text-white transition-colors duration-500 delay-200 text-white/50">Purchase</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
