"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#1E1E1E] pt-32 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Huge Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[25vw] leading-none font-black tracking-tighter text-white opacity-[0.02] font-heading translate-y-1/4">
          ATALIX
        </h1>
      </div>

      {/* Aurora glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] bg-atalix-accent opacity-[0.05] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container px-6 md:px-12 mx-auto relative z-10 flex flex-col justify-between items-center text-center gap-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
           <span className="text-atalix-accent text-sm tracking-[0.3em] font-semibold uppercase">
            Let&apos;s Build The Future
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-[7rem] leading-[0.9] font-heading font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30">
            DON&apos;T JUST DREAM.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-end gap-12 border-t border-white/10 pt-12 text-[13px] font-medium tracking-wide text-white/50">
          
          {/* Left / Logo Area */}
          <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
            <Image 
              src="/atalix-logo-white.png" 
              alt="ATALIX MEDIA" 
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto object-contain opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-2" 
            />
            <p className="max-w-[250px] leading-relaxed">
              Creative agency building brands for tomorrow.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 uppercase tracking-widest text-[11px]">
            <span className="hover:text-white transition-colors cursor-pointer">Creative</span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Social Media</span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Branding</span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Growth Strategy</span>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 items-center lg:items-end text-center lg:text-right uppercase tracking-widest text-[11px]">
             <a href="https://www.instagram.com/atalixmedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-white hover:text-atalix-accent transition-colors flex items-center gap-2">
              Follow us on Instagram <span className="text-atalix-accent">&rarr;</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590335791616" target="_blank" rel="noreferrer" className="text-white hover:text-atalix-accent transition-colors flex items-center gap-2">
              Follow us on Facebook <span className="text-atalix-accent">&rarr;</span>
            </a>
            <span>&copy; {new Date().getFullYear()} ATALIX Media. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
