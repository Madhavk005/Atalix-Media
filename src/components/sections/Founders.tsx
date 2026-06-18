"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founders() {
  return (
    <section className="relative py-16 lg:py-24 w-full bg-[#1E1E1E] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-atalix-accent opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 px-6 md:px-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium tracking-widest text-atalix-accent uppercase block">
            Leadership
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-heading font-bold tracking-tight uppercase text-white"
        >
          The people behind <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white">Atalix</span>
        </motion.h2>

        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Vansh Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full shrink-0 aspect-[4/3] md:aspect-[3/2] rounded-[32px] overflow-hidden bg-[#111] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop&grayscale=true" 
                alt="Vansh Rai" 
                fill
                className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Overlapping Glass Card */}
            <div className="relative flex-1 flex flex-col -mt-16 md:-mt-24 mx-4 md:mx-8 bg-[#1E1E1E]/60 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:border-atalix-accent transition-colors duration-500 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-atalix-accent opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-white mb-4 group-hover:text-atalix-accent transition-colors duration-500">
                  Vansh<br/>Rai
                </h3>
                <p className="text-white/80 font-light leading-relaxed mb-4 text-sm md:text-base">
                  While creativity gets the spotlight, Vansh Rai believes it&apos;s structure that keeps the lights on. While others focus on what&apos;s visible, he&apos;s focused on what keeps everything running smoothly behind the scenes.
                </p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-white/50 font-light leading-relaxed text-sm md:text-base mt-2">
                      From operations, structure to client experience, his obsession is creating systems that raise the bar so high that brands notice the difference and remember it long after they&apos;ve worked with us.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 group-hover:opacity-0 transition-opacity duration-300">
                <span>Hover to read more</span>
                <span className="w-4 h-[1px] bg-white/40" />
              </div>
            </div>
          </motion.div>

          {/* Arshdeep Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full shrink-0 aspect-[4/3] md:aspect-[3/2] rounded-[32px] overflow-hidden bg-[#111] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&grayscale=true" 
                alt="Arshdeep Sukhija" 
                fill
                className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
              />
              {/* Inner Gradient for Text legibility just in case */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Overlapping Glass Card */}
            <div className="relative flex-1 flex flex-col -mt-16 md:-mt-24 mx-4 md:mx-8 bg-[#1E1E1E]/60 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] group-hover:border-[#56C8FF] transition-colors duration-500 overflow-hidden">
              {/* Card Accent Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#56C8FF] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-white mb-4 group-hover:text-[#56C8FF] transition-colors duration-500">
                  Arshdeep<br/>Sukhija
                </h3>
                <p className="text-white/80 font-light leading-relaxed mb-4 text-sm md:text-base">
                  Arshdeep Sukhija didn&apos;t start Atalix Media to add another agency to the market. He started it because too many brands were still being marketed like it was yesterday.
                </p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-white/50 font-light leading-relaxed text-sm md:text-base mt-2">
                      Inspired by global trends and modern creative thinking, he set out to bring a fresher, bolder perspective to the Indian market, one that values ideas as much as execution. Because sometimes, the best way to stand out is to stop doing what everyone else is doing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 group-hover:opacity-0 transition-opacity duration-300">
                <span>Hover to read more</span>
                <span className="w-4 h-[1px] bg-white/40" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
