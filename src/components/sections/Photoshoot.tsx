"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photoshoot() {
  return (
    <section className="relative py-32 w-full overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-atalix-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium tracking-widest text-atalix-accent uppercase block">
            Visual Storytelling
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-heading font-bold tracking-tight uppercase text-white"
        >
          Photo<br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white">Shoot.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 text-lg md:text-xl font-light text-white/60 max-w-3xl leading-[1.6]"
        >
          Every photoshoot begins long before the camera starts rolling. We research your industry, study market trends, analyze competitors and develop detailed mood boards to ensure every frame serves a purpose. Whether it&apos;s cinematic product photography or brand-focused visual campaigns, we create imagery that reflects your identity, captures attention, and elevates your brand.
        </motion.p>

        {/* Minimal Gallery Layout: 2 Large Top, 3 Small Bottom */}
        <div className="flex flex-col gap-4 mt-20 md:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden glassmorphism-black group cursor-pointer border border-white/5 hover:border-atalix-accent/50 hover:shadow-[0_0_40px_-10px_rgba(29,161,242,0.3)] transition-all duration-500"
            >
              <Image src="/projects/FNP/Carousel/001.jpg" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="FNP Product Photography" />
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <p className="text-2xl font-heading font-bold uppercase drop-shadow-md">FNP Product</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden glassmorphism-black group cursor-pointer border border-white/5 hover:border-atalix-accent/50 hover:shadow-[0_0_40px_-10px_rgba(29,161,242,0.3)] transition-all duration-500"
            >
              <Image src="/projects/KOOK Stores/Cargo Pants Carousel/Cargo-CarouselArtboard-1.png" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="KOOK Stores Campaigns" />
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <p className="text-2xl font-heading font-bold uppercase drop-shadow-md">KOOK Stores</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px]">
            {[
              { title: "Jitesh Fabrics", img: "/projects/Jitesh Fabrics/Before It Reaches To You.webp" },
              { title: "Jitesh Sports", img: "/projects/Jitesh Fabrics/IPL Jersey.png" },
              { title: "Beyond Bricks", img: "/projects/Beyond Bricks/Just Listed.png" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-3xl overflow-hidden glassmorphism-black group cursor-pointer border border-white/5 hover:border-atalix-accent/50 hover:shadow-[0_0_40px_-10px_rgba(29,161,242,0.3)] transition-all duration-500"
              >
                <Image src={item.img} fill className="object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" alt={item.title} />
                <div className="absolute bottom-6 left-6 pointer-events-none">
                  <p className="text-xl font-heading font-bold uppercase drop-shadow-md">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
