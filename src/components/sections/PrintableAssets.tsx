"use client";

import { motion } from "framer-motion";

export default function PrintableAssets() {
  const assets = [
    { title: "SRF Catalogue", subtitle: "PDF Document", img: null, link: "/projects/SRF/SRF Catalogue.pdf" },
    { title: "Fabric Specs", subtitle: "GSM Carousel", img: "/projects/Jitesh Fabrics/GSM Carousel/001.jpg" },
    { title: "Machine Info", subtitle: "Technical Specs", img: "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 1@4x.png" },
    { title: "FNP Lookbook", subtitle: "Brand Identity", img: "/projects/FNP/Carousel/002.jpg" }
  ];

  return (
    <section className="relative py-32 w-full bg-[#1E1E1E] overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <span className="text-[13px] font-medium tracking-widest text-white/50 uppercase mb-4 block">
            Physical Identity
          </span>
          <h2 className="text-[52px] leading-[1.1] font-heading font-bold uppercase tracking-tight text-white max-w-xl">
            Brand Assets.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, i) => {
            const Content = (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="group relative p-10 rounded-[32px] overflow-hidden bg-white/[0.05] border border-white/5 shadow-2xl flex flex-col justify-between aspect-square hover:bg-white/[0.08] transition-colors duration-500 cursor-pointer"
              >
                {asset.img && (
                  <img src={asset.img} alt={asset.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" />
                )}
                {!asset.img && asset.link && (
                  <div className="absolute top-10 right-10 opacity-10 font-heading font-black text-6xl group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 ease-out z-0">
                    PDF
                  </div>
                )}
                <div className="mt-auto z-10 relative">
                  {asset.subtitle && (
                    <span className="text-xs font-medium tracking-widest text-atalix-accent uppercase mb-2 block">{asset.subtitle}</span>
                  )}
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-tight text-white">
                    {asset.title}
                  </h3>
                </div>
              </motion.div>
            );

            return asset.link ? (
              <a href={asset.link} target="_blank" rel="noopener noreferrer" key={i} className="block">
                {Content}
              </a>
            ) : (
              <div key={i}>{Content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
