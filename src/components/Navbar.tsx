"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 text-white pointer-events-none"
    >
      <div className="flex items-center justify-between">
        
        {/* Left: Minimal Logo */}
        <div className="flex items-center pointer-events-auto">
          <Link href="/">
            <Image 
              src="/atalix-logo-white.png" 
              alt="ATALIX MEDIA" 
              width={200}
              height={80}
              className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:opacity-80 transition-opacity" 
            />
          </Link>
        </div>

        {/* Right: CTA Button */}
        <div className="pointer-events-auto">
          <Link 
            href="/#contact" 
            className="px-[28px] py-[14px] rounded-[999px] bg-white text-black text-[13px] font-bold tracking-wide transition-all duration-300 inline-block hover:bg-atalix-accent hover:text-white hover:shadow-[0_0_30px_rgba(29,161,242,0.35)] hover:scale-[1.03]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
