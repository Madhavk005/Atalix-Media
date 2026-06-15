"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 w-full bg-[#1E1E1E] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-atalix-accent opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-[13px] font-medium tracking-widest text-white/50 uppercase mb-4 block">
            Our Philosophy
          </span>
        </motion.div>

        {/* Manifesto Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* Main Manifesto Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 md:row-span-2 relative p-10 md:p-16 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group flex flex-col justify-end shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-4xl md:text-5xl lg:text-[5vw] leading-[1.1] font-heading font-bold tracking-tight uppercase text-white/90 z-10 relative">
              We don&apos;t follow trends.<br />
              <span className="text-atalix-accent">We create them.</span>
            </h2>
            <p className="mt-8 text-[18px] md:text-[22px] text-white/60 font-light max-w-xl z-10 relative leading-[1.6]">
              Our philosophy is rooted in challenging convention, questioning what&apos;s familiar, and creating work that feels fresh in a market crowded with repetition.
            </p>
          </motion.div>

          {/* Strategy Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative p-10 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group shadow-2xl"
          >
            <div className="h-full flex flex-col justify-between z-10 relative">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-white/50 text-xl font-heading">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold uppercase text-white mb-3">Strategy First</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">Every beautiful design starts with a calculated roadmap. We don&apos;t guess.</p>
              </div>
            </div>
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-atalix-accent opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          {/* Execution Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative p-10 rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl group shadow-2xl"
          >
            <div className="h-full flex flex-col justify-between z-10 relative">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-white/50 text-xl font-heading">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold uppercase text-white mb-3">Flawless<br />Execution</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">Motion, gradients, typography. The details aren&apos;t the details. They make the design.</p>
              </div>
            </div>
            {/* Hover Glow */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#56C8FF] opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
