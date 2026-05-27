import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image Setup */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596700688009-17ce284e365f?q=80&w=2670&auto=format&fit=crop')", // Subtle historical/academic image
            backgroundBlendMode: "luminosity"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A362D]/80 via-[#1A362D]/60 to-[#F9F6F0] dark:from-[#0a0a0a]/90 dark:via-[#121110]/80 dark:to-[#121110]"></div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 w-full pt-10 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Decorative Top Accent */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#D4AF37]/60"></div>
            <span className="px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              Historical Character Analysis
            </span>
            <div className="w-12 h-[1px] bg-[#D4AF37]/60"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-bold text-white mb-8 leading-[1.05] tracking-tight text-balance relative">
            <span className="block italic font-light text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl mb-2 lg:mb-[-10px] opacity-90 transform -rotate-2">The Formation of</span>
            Intellect, Conscience, <br className="hidden md:block"/>
            <span className="italic text-stone-300 font-light">&amp;</span> Nation
          </h1>
          
          <p className="text-lg md:text-2xl text-stone-200/90 max-w-2xl mx-auto leading-relaxed border-t border-stone-100/10 pt-8 mt-4 font-light">
            Exploring the life of <strong className="text-white font-serif font-medium">José Rizal</strong> through the interplay of family, education, and his enduring colonial struggle.
          </p>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[#D4AF37] uppercase tracking-widest text-[10px] font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent block"
        ></motion.div>
      </motion.div>
    </section>
  );
}
