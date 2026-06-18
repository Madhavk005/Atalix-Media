"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 w-full bg-[#1E1E1E] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-atalix-accent opacity-5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-[#56C8FF] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium tracking-widest text-atalix-accent uppercase block">
            Our Philosophy
          </span>
        </motion.div>

        {/* Hero-style Typography Statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-heading font-bold tracking-tight uppercase"
        >
          We don&apos;t follow trends.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white">We create them.</span>
        </motion.h2>

        <div className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Descriptive Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-[1.6]">
              At Atalix Media, we don&apos;t believe creativity should follow a template. Our philosophy is rooted in challenging convention, questioning what&apos;s familiar and creating work that feels fresh in a market crowded with repetition.
            </p>
            <p className="text-lg md:text-xl font-light text-white/50 leading-[1.6]">
              We combine modern thinking, bold ideas and strategic creativity to help brands communicate in ways that feel relevant today and not five years ago.
            </p>
          </motion.div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-12 justify-center pt-8 lg:pt-0">
            {/* Strategy First */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="group relative border-l border-white/10 pl-8 hover:border-atalix-accent transition-colors duration-500"
            >
              <span className="text-[12px] tracking-widest text-white/40 uppercase mb-3 block group-hover:text-atalix-accent transition-colors duration-500">01 — Core Pillar</span>
              <h3 className="text-2xl md:text-3xl font-heading uppercase text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">Strategy First</h3>
              <p className="text-white/60 font-light text-base leading-relaxed">
                Every beautiful design starts with a calculated roadmap. We don&apos;t guess. Data and insight drive the aesthetic.
              </p>
            </motion.div>

            {/* Flawless Execution */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="group relative border-l border-white/10 pl-8 hover:border-[#56C8FF] transition-colors duration-500"
            >
              <span className="text-[12px] tracking-widest text-white/40 uppercase mb-3 block group-hover:text-[#56C8FF] transition-colors duration-500">02 — Standard</span>
              <h3 className="text-2xl md:text-3xl font-heading uppercase text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">Flawless Execution</h3>
              <p className="text-white/60 font-light text-base leading-relaxed">
                Motion, gradients, typography. The details aren&apos;t the details. They make the design. We push boundaries on every pixel.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
