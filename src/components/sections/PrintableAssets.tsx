"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function PrintableAssets() {
  const [activeItem, setActiveItem] = useState<{ type: 'images', urls: string[] } | { type: 'pdf', url: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeCarousel = useCallback(() => {
    setActiveItem(null);
  }, []);

  const nextImage = useCallback((e: React.MouseEvent | null) => {
    if (e) e.stopPropagation();
    if (activeItem?.type === 'images') {
      setCurrentIndex((prev) => (prev + 1) % activeItem.urls.length);
    }
  }, [activeItem]);

  const prevImage = useCallback((e: React.MouseEvent | null) => {
    if (e) e.stopPropagation();
    if (activeItem?.type === 'images') {
      setCurrentIndex((prev) => (prev - 1 + activeItem.urls.length) % activeItem.urls.length);
    }
  }, [activeItem]);

  // Handle keyboard events and body overflow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowRight") nextImage(null);
      if (e.key === "ArrowLeft") prevImage(null);
    };
    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, closeCarousel, nextImage, prevImage]);

  const openCarousel = (images: string[]) => {
    setActiveItem({ type: 'images', urls: images });
    setCurrentIndex(0);
  };

  const openPdf = (url: string) => {
    setActiveItem({ type: 'pdf', url });
  };

  const assets = [
    { 
      title: "SRF Catalogue", 
      subtitle: "PDF Document", 
      img: null, 
      pdf: "/projects/SRF/SRF Catalogue.pdf" 
    },
    { 
      title: "Fabric Specs", 
      subtitle: "GSM Carousel", 
      img: "/projects/Jitesh Fabrics/GSM Carousel/001.jpg",
      carouselImages: [
        "/projects/Jitesh Fabrics/GSM Carousel/001.jpg",
        "/projects/Jitesh Fabrics/GSM Carousel/002.jpg",
        "/projects/Jitesh Fabrics/GSM Carousel/003.jpg",
        "/projects/Jitesh Fabrics/GSM Carousel/004.jpg",
        "/projects/Jitesh Fabrics/GSM Carousel/005.jpg",
      ]
    },
    { 
      title: "Machine Info", 
      subtitle: "Technical Specs", 
      img: "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 1@4x.png",
      carouselImages: [
        "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 1@4x.png",
        "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 2@4x.png",
        "/projects/Jitesh flexFabrics/Machinery Carousel/JF Machine InfoArtboard 3@4x.png",
        "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 4@4x.png",
        "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 5@4x.png",
        "/projects/Jitesh Fabrics/Machinery Carousel/JF Machine InfoArtboard 6@4x.png",
      ]
    },
    { 
      title: "FNP Lookbook", 
      subtitle: "Brand Identity", 
      img: "/projects/FNP/Carousel/002.jpg",
      carouselImages: [
        "/projects/FNP/Carousel/001.jpg",
        "/projects/FNP/Carousel/002.jpg",
        "/projects/FNP/Carousel/003.jpg",
        "/projects/FNP/Carousel/004.jpg",
        "/projects/FNP/Carousel/005.jpg",
      ]
    }
  ];

  return (
    <section className="relative py-32 w-full bg-[#1E1E1E] overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium tracking-widest text-atalix-accent uppercase block">
            Physical Identity
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-heading font-bold tracking-tight uppercase text-white"
        >
          Brand <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white">Assets.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 text-lg md:text-xl font-light text-white/60 max-w-3xl leading-[1.6]"
        >
          A brand shouldn&apos;t lose its identity the moment it leaves the screen. Whether it&apos;s packaging, visiting cards, thank-you notes, newspaper insertions, hoardings, posters or flyers, every touchpoint should feel unmistakably like your brand. We carefully align colors, typography, messaging and visual aesthetics to create assets that are cohesive, memorable, and impactful.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 md:mt-32">
          {assets.map((asset, i) => {
            const Content = (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                onClick={() => {
                  if (asset.carouselImages) openCarousel(asset.carouselImages);
                  else if (asset.pdf) openPdf(asset.pdf);
                }}
                className="group relative p-10 rounded-[32px] overflow-hidden bg-white/[0.05] border border-white/5 shadow-2xl flex flex-col justify-between aspect-square hover:bg-white/[0.08] transition-colors duration-500 cursor-pointer"
              >
                {asset.img && (
                  <Image src={asset.img} alt={asset.title} fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" />
                )}
                {!asset.img && asset.pdf && (
                  <div className="absolute top-10 right-10 opacity-10 font-heading font-black text-6xl group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 ease-out z-0">
                    PDF
                  </div>
                )}
                {(asset.carouselImages || asset.pdf) && (
                  <div className="absolute top-8 right-8 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
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

            return <div key={i}>{Content}</div>;
          })}
        </div>
      </div>

      {/* Fullscreen Carousel Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeCarousel}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110] bg-black/50 p-2 rounded-full"
              onClick={(e) => { e.stopPropagation(); closeCarousel(); }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {activeItem.type === 'images' && (
              <>
                {/* Prev Button */}
                <button 
                  className="absolute left-4 md:left-12 p-4 text-white/50 hover:text-white transition-colors z-[110]"
                  onClick={prevImage}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                </button>

                {/* Image Container */}
                <div 
                  className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image 
                        src={activeItem.urls[currentIndex]} 
                        alt={`Carousel image ${currentIndex + 1}`} 
                        fill 
                        className="object-contain drop-shadow-2xl" 
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next Button */}
                <button 
                  className="absolute right-4 md:right-12 p-4 text-white/50 hover:text-white transition-colors z-[110]"
                  onClick={nextImage}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[110]" onClick={(e) => e.stopPropagation()}>
                  {activeItem.urls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-atalix-accent scale-125" : "bg-white/30 hover:bg-white/50"}`}
                    />
                  ))}
                </div>
              </>
            )}

            {activeItem.type === 'pdf' && (
              <div 
                className="relative w-[90vw] h-[90vh] md:w-[70vw] md:h-[90vh] flex flex-col items-center justify-center rounded-[24px] overflow-hidden bg-white mt-8"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe src={activeItem.url} className="w-full h-full border-none" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
