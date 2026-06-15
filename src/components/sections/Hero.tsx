"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Limit parallax to roughly max 15px
      const x = (e.clientX / window.innerWidth - 0.5) * 30; // -15px to 15px
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#1E1E1E]">
      
      {/* Animated Aurora Gradients Behind Typography */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden">
        
        {/* Gradient 01: Deep Blue Base */}
        <motion.div 
          animate={{
            x: ["-10vw", "10vw", "-10vw"],
            y: ["0vh", "-10vh", "0vh"],
            scale: [1, 1.25, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
          className="absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vh] mix-blend-screen rounded-[100%]"
          style={{ 
            background: "radial-gradient(circle at center, rgba(29,161,242,0.35) 0%, rgba(29,161,242,0) 70%)", 
            filter: "blur(120px)" 
          }}
        />
        
        {/* Gradient 02: Cyan Flow */}
        <motion.div 
          animate={{
            x: ["10vw", "-15vw", "10vw"],
            y: ["-5vh", "5vh", "-5vh"],
            scale: [1.1, 0.85, 1.1],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
          className="absolute bottom-[-25%] right-[-5%] w-[65vw] h-[55vh] mix-blend-screen rounded-[100%]"
          style={{ 
            background: "radial-gradient(circle at center, rgba(86,200,255,0.25) 0%, rgba(86,200,255,0) 70%)", 
            filter: "blur(140px)" 
          }}
        />

        {/* Gradient 03: Soft White Core Highlight */}
        <motion.div 
          animate={{
            x: ["-5vw", "15vw", "-5vw"],
            y: ["10vh", "-5vh", "10vh"],
            scale: [0.9, 1.3, 0.9]
          }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          className="absolute bottom-[-5%] left-[30%] w-[45vw] h-[45vh] mix-blend-screen rounded-[100%]"
          style={{ 
            background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)", 
            filter: "blur(100px)" 
          }}
        />

        {/* Gradient 04: Ambient Light Azure */}
        <motion.div 
          animate={{
            x: ["15vw", "-10vw", "15vw"],
            y: ["-10vh", "0vh", "-10vh"],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute bottom-[5%] right-[20%] w-[50vw] h-[40vh] mix-blend-screen rounded-[100%]"
          style={{ 
            background: "radial-gradient(circle at center, rgba(130,216,255,0.15) 0%, rgba(130,216,255,0) 70%)", 
            filter: "blur(120px)" 
          }}
        />
      </div>

      {/* Grid Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-soft-light z-[1]" />

      {/* Top Content (Pushed down slightly to account for fixed navbar) */}
      <div className="container relative z-10 px-6 md:px-12 mx-auto pt-40 w-full flex justify-end">
        {/* Top Right Paragraph */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-[300px]"
        >
          <p className="text-[22px] font-semibold leading-[1.2] text-right md:text-left text-white/90">
            Creative content<br />
            for brands<br />
            that refuse<br />
            to look <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white font-bold">ordinary.</span>
          </p>
        </motion.div>
      </div>

      {/* Center/Bottom Monumental Typography */}
      <div className="relative z-10 w-full flex-grow flex items-end justify-center pb-[5vh]">
        <motion.div
          animate={{ 
            x: mousePosition.x, 
            y: mousePosition.y 
          }}
          transition={{ type: "spring", stiffness: 40, damping: 30 }}
          className="w-full flex justify-center pointer-events-none"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-black font-heading tracking-tighter w-full text-center text-shine"
            style={{ 
              fontSize: "clamp(80px, 20vw, 620px)", 
              letterSpacing: "-0.07em", 
              lineHeight: "0.85",
              width: "100%",
              maxWidth: "95%"
            }}
          >
            ATALIX
          </motion.h1>
        </motion.div>
      </div>

      {/* Bottom Bar: Left & Right info */}
      <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 flex justify-between items-end z-20">
        {/* Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 0.7, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-1 text-[13px] font-medium text-white tracking-wider"
        >
          <p>Creative Agency</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="uppercase text-[10px] tracking-widest text-white">Accepting New Projects</span>
          </div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 0.6, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[12px] font-medium text-white uppercase tracking-widest"
        >
           <motion.div
             animate={{ opacity: [0.6, 1, 0.6] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           >
             Scroll To Explore &darr;
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
