import { timelineEvents } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function InteractiveTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-24 py-16 px-4 md:px-12 bg-[#1A362D] dark:bg-stone-900 rounded-[3rem] text-stone-100 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Historical Timeline</h2>
          <p className="text-[#A3B8AD] text-lg max-w-2xl mx-auto">Key events shaping the life, character, and legacy of José Rizal.</p>
        </div>

        <div className="space-y-4">
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Vertical line connecting nodes */}
              {idx !== timelineEvents.length - 1 && (
                <div className="absolute left-[47px] top-20 bottom-[-24px] w-0.5 bg-[#4A645A]/50 z-0 hidden md:block"></div>
              )}

              <button 
                onClick={() => toggleExpand(idx)}
                className="relative z-10 w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-[#1A362D] border-4 border-[#D4AF37] text-white font-serif font-bold text-sm sm:text-base text-center leading-tight p-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform text-balance break-words">
                  {event.year}
                </div>
                
                <div className="flex-grow flex items-center justify-between w-full">
                  <h3 className="text-2xl font-bold font-serif text-white">{event.title}</h3>
                  <ChevronDown className={`w-6 h-6 text-[#A3B8AD] transition-transform duration-300 flex-shrink-0 ${expandedIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden md:pl-[144px]"
                  >
                    <div className="p-6 mt-2 bg-white/5 border border-white/5 rounded-2xl text-[#A3B8AD] leading-relaxed text-lg">
                      {event.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
