"use client";

import { motion } from "framer-motion";

export default function Photoshoot() {
  return (
    <section className="relative py-32 w-full overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-atalix-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium tracking-widest text-white/50 uppercase mb-4 block">
            Visual Storytelling
          </span>
          <h2 className="text-[52px] leading-[1.1] font-heading font-bold uppercase">
            PHOTOSHOOT
          </h2>
        </motion.div>

        {/* Minimal Gallery Layout: 2 Large Top, 3 Small Bottom */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden glassmorphism-black group cursor-pointer border border-white/5 hover:border-atalix-accent/50 hover:shadow-[0_0_40px_-10px_rgba(29,161,242,0.3)] transition-all duration-500"
            >
              <img src="/projects/FNP/Carousel/001.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="FNP Product Photography" />
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
              <img src="/projects/KOOK Stores/Cargo Pants Carousel/Cargo-CarouselArtboard-1.png" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="KOOK Stores Campaigns" />
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
                <img src={item.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" alt={item.title} />
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
