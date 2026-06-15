"use client";

import { motion } from "framer-motion";

export default function Founders() {
  return (
    <section className="relative py-24 w-full bg-[#1E1E1E]">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-[13px] font-medium tracking-widest text-white/50 uppercase">
            The people behind Atalix
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vansh Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:bg-white/[0.04]"
          >
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-[45%] aspect-[4/5] sm:aspect-auto overflow-hidden bg-[#151515]">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop&grayscale=true" 
                  alt="Vansh Rai" 
                  className="w-full h-full object-cover filter grayscale opacity-60 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div className="p-10 sm:w-[55%] flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-bold mb-6 uppercase tracking-tight text-white">Vansh<br/>Rai</h3>
                <p className="text-[16px] leading-[1.6] text-white/60 font-light">
                  While creativity gets the spotlight, Vansh Rai believes it&apos;s structure that keeps the lights on.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arshdeep Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative rounded-[32px] overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:bg-white/[0.04]"
          >
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-[45%] aspect-[4/5] sm:aspect-auto overflow-hidden bg-[#151515]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&grayscale=true" 
                  alt="Arshdeep Sukhija" 
                  className="w-full h-full object-cover filter grayscale opacity-60 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div className="p-10 sm:w-[55%] flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-bold mb-6 uppercase tracking-tight text-white">Arshdeep<br/>Sukhija</h3>
                <p className="text-[16px] leading-[1.6] text-white/60 font-light">
                  Arshdeep Sukhija didn&apos;t start Atalix Media to add another agency to the market. He started it because too many brands were still being marketed like it was yesterday.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
