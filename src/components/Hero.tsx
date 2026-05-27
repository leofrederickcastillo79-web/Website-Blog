import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6 bg-stone-900 border-b border-[#D4AF37]/30">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1596700688009-17ce284e365f?q=80&w=2670&auto=format&fit=crop')", // Use a subtle historical/academic image
          backgroundBlendMode: "luminosity"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/80 to-[#F9F6F0] dark:to-stone-900"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-sm tracking-widest uppercase">
            A Historical Character Analysis
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight text-balance">
            Intellect, Conscience, <br className="hidden md:block"/><span className="italic text-[#D4AF37] font-light">and</span> Nation
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed border-t border-stone-700 pt-8 mt-8">
            Exploring the formation of José Rizal’s character, intellect, and enduring heroism through the interplay of family, education, and colonial struggle.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#D4AF37] to-transparent block"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
