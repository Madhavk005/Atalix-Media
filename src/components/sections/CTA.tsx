"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 w-full overflow-hidden bg-atalix-bg-primary">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-atalix-accent opacity-[0.05] rounded-full blur-[120px] animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center p-12 md:p-24 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group"
        >
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-soft-light" />
          
          <span className="text-atalix-accent text-[11px] font-bold tracking-widest uppercase mb-6 block">Ready to scale?</span>
          
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.9] font-heading font-black tracking-tighter text-white mb-8 max-w-4xl">
            LET&apos;S BUILD YOUR<br />NEXT BIG IDEA.
          </h2>
          
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mb-12">
            Whether you need a complete brand overhaul, high-end video production, or a data-driven performance campaign—we&apos;re ready to execute.
          </p>

          <Link href="/contact" className="group/btn relative px-10 py-5 rounded-[999px] overflow-hidden bg-white text-black font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(29,161,242,0.4)] border border-transparent hover:border-atalix-accent hover:text-white">
            <div className="absolute inset-0 bg-atalix-accent translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
              Start Your Project
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
