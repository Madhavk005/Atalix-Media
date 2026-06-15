"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function StickyCTA() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
    >
      <Link href="/#contact" className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/[0.05] backdrop-blur-3xl border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-[1.05] relative overflow-hidden">
        {/* Glow behind icon */}
        <div className="absolute inset-0 bg-atalix-accent opacity-0 group-hover:opacity-10 blur-[10px] transition-opacity duration-500" />
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-500 group-hover:scale-110" />
      </Link>
    </motion.div>
  );
}
