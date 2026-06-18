"use client";

import { motion } from "framer-motion";

export default function Reels() {
  const categories = [
    { title: "Valedora", subtitle: "Valentine's Day Campaign", video: "/projects/Valedora/Valentine's Day Reel.mp4" },
    { title: "FNP", subtitle: "Reel Series", video: "/projects/FNP/Reel 01.mp4" },
    { title: "KOOK Stores", subtitle: "Logo Animation", video: "/projects/KOOK Stores/KOOK Stores Logo Animation.mp4" },
    { title: "Beyond Bricks", subtitle: "Promotional Ad", video: "/projects/Beyond Bricks/BB Buyer Access Pass.mp4" },
    { title: "KOOK Stores", subtitle: "Product Reel", video: "/projects/KOOK Stores/Cargo Pants Difference Reel.mp4" }
  ];

  // Duplicate for seamless infinite loop
  const duplicatedCategories = [...categories, ...categories];

  return (
    <section className="relative py-32 lg:py-48 w-full bg-[#1E1E1E] overflow-hidden flex flex-col justify-center">
      
      {/* Background glow for context */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-atalix-accent opacity-10 blur-[150px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-10 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-[13px] font-medium tracking-widest text-atalix-accent uppercase block">
            Featured Work
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-heading font-bold tracking-tight uppercase text-white"
        >
          Reel First <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-atalix-accent to-white">Experience.</span>
        </motion.h2>
      </div>

      {/* Infinite Horizontal Sliding Area */}
      <div className="relative w-full flex overflow-hidden py-10 mask-edges">
        <motion.div 
          className="flex gap-6 md:gap-8 w-max pr-6 md:pr-8"
          style={{ willChange: "transform" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 // Adjust speed here
          }}
          whileHover={{ animationPlayState: "paused" }} // Pause on hover doesn't natively work with framer-motion this way easily without complex state, so we'll rely on pure sliding or let it slide.
        >
          {duplicatedCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="reel-card relative w-[280px] h-[480px] md:w-[380px] md:h-[650px] shrink-0 rounded-[32px] overflow-hidden bg-white/[0.05] border border-white/10 group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/30"
            >
              {/* Internal Glass Highlight */}
              <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none z-20" />
              
              <video 
                src={`${cat.video}#t=0.001`} 
                muted 
                loop 
                playsInline 
                preload="metadata"
                onMouseEnter={(e) => {
                  const playPromise = e.currentTarget.play();
                  if (playPromise !== undefined) {
                    playPromise.catch(() => {
                      // Ignore the play() interruption error when pause() is called quickly
                    });
                  }
                }}
                onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1] z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/90 via-[#1E1E1E]/20 to-transparent pointer-events-none z-10" />
              
              <div className="absolute bottom-10 left-10 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-atalix-accent text-xs font-semibold tracking-widest uppercase mb-2 block">{cat.subtitle}</span>
                <h3 className="text-3xl font-heading font-bold uppercase text-white tracking-tight">{cat.title}</h3>
              </div>
              
              {/* Play Button Icon */}
              <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 z-20">
                 <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-white ml-1" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
