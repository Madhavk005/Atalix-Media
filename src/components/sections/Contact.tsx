"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-48 w-full bg-[#1E1E1E] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#56C8FF] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium tracking-widest text-atalix-accent uppercase block">
            Get In Touch
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-heading font-bold tracking-tight uppercase text-white"
        >
          Let&apos;s Build <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white">Something Amazing.</span>
        </motion.h2>

        <div className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          
          {/* Left Info Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl h-full justify-center"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase">Instagram</span>
              <a href="https://instagram.com/atalixmedia" target="_blank" rel="noreferrer" className="text-xl font-medium text-white/80 hover:text-atalix-accent transition-colors">
                @atalixmedia
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase">Email</span>
              <a href="mailto:hello@atalixmedia.com" className="text-xl font-medium text-white/80 hover:text-atalix-accent transition-colors">
                hello@atalixmedia.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase">Whatsapp</span>
              <a href="#" className="text-xl font-medium text-white/80 hover:text-atalix-accent transition-colors">
                Chat on Whatsapp
              </a>
            </div>
          </motion.div>

          {/* Right Form Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="p-10 md:p-14 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl"
          >
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-3 focus-within:border-atalix-accent transition-colors">
                  <input type="text" placeholder="Name" className="bg-transparent outline-none text-white placeholder:text-white/30 w-full text-lg font-light" />
                </div>
                <div className="flex flex-col gap-2 border-b border-white/10 pb-3 focus-within:border-atalix-accent transition-colors">
                  <input type="email" placeholder="Email" className="bg-transparent outline-none text-white placeholder:text-white/30 w-full text-lg font-light" />
                </div>
                <div className="flex flex-col gap-2 border-b border-white/10 pb-3 focus-within:border-atalix-accent transition-colors">
                  <input type="text" placeholder="Company" className="bg-transparent outline-none text-white placeholder:text-white/30 w-full text-lg font-light" />
                </div>
                <div className="flex flex-col gap-2 border-b border-white/10 pb-3 focus-within:border-atalix-accent transition-colors">
                  <input type="text" placeholder="Budget" className="bg-transparent outline-none text-white placeholder:text-white/30 w-full text-lg font-light" />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-white/10 pb-3 focus-within:border-atalix-accent transition-colors h-32">
                <textarea placeholder="Tell us about your project" className="bg-transparent outline-none text-white placeholder:text-white/30 w-full h-full resize-none text-lg font-light" />
              </div>

              <button type="button" className="group relative w-full md:w-max px-10 py-5 rounded-[999px] font-bold tracking-wide border border-white/10 overflow-hidden transition-all mt-4 self-end bg-white/[0.02] hover:border-atalix-accent hover:shadow-[0_0_30px_rgba(29,161,242,0.2)]">
                <div className="absolute inset-0 bg-atalix-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white text-white/80 transition-colors">
                  Send Inquiry
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
