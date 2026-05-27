import { Quote } from "lucide-react";
import { SectionData } from "../data";
import { motion } from "motion/react";

interface BlogSectionProps {
  data: SectionData;
}

export function BlogSection({ data }: BlogSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 md:mb-32 scroll-mt-32 relative z-10"
      id={data.id}
    >
      <div className="bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-xl border border-stone-200/60 dark:border-stone-800/80 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-500 relative overflow-hidden">
        {/* Subtle decorative background gradient within card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B8860B]/5 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 dark:border-stone-800 pb-8 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2C1B10]/5 dark:bg-[#5D4037]/10 text-[#2C1B10] dark:text-[#B8860B] text-xs font-bold uppercase tracking-[0.15em] rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]"></span>
              {data.category}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
              {data.title}
            </h2>
          </div>
        </div>

        {data.subsections.map((sub, idx) => (
          <div key={idx} className="mt-14 first:mt-0 relative z-10">
            {sub.title && (
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#2C1B10] dark:text-[#D2B48C]">
                  {sub.title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-stone-200 dark:from-stone-800 to-transparent"></div>
              </div>
            )}

            {sub.content && sub.content.length > 0 && (
              <div className="space-y-6 text-stone-600 dark:text-stone-300 text-lg md:text-[1.15rem] leading-[1.8] font-light">
                {sub.content.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            )}

            {sub.imagePlaceholder && (
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="my-12 group"
              >
                <div className="rounded-[2rem] overflow-hidden border border-stone-200 dark:border-[#333] shadow-lg relative h-72 md:h-[450px]">
                  <img
                    src={sub.imagePlaceholder.url}
                    alt={sub.imagePlaceholder.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent pointer-events-none opacity-60"></div>
                </div>
                {sub.imagePlaceholder.caption && (
                  <p className="mt-4 text-center text-sm md:text-base font-medium text-stone-500 italic flex items-center justify-center gap-2">
                    <span className="w-4 h-[1px] bg-stone-400"></span>
                    {sub.imagePlaceholder.caption}
                    <span className="w-4 h-[1px] bg-stone-400"></span>
                  </p>
                )}
              </motion.div>
            )}

            {sub.quote && (
              <blockquote className="my-12 relative px-8 py-10 md:px-12 md:py-14 rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C1B10]/5 to-[#B8860B]/5 dark:from-[#B8860B]/10 dark:to-transparent opacity-50 pointer-events-none"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#2C1B10] to-[#B8860B]"></div>
                <Quote className="absolute top-8 left-8 w-16 h-16 text-[#B8860B] opacity-[0.15] -rotate-6" />
                
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-stone-800 dark:text-stone-200 relative z-10 leading-snug">
                  "{sub.quote}"
                </p>
              </blockquote>
            )}

            {sub.listType === "timeline" && sub.listItems && (
              <div className="mt-12 overflow-hidden mx-auto max-w-3xl">
                {sub.listItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="grid grid-cols-[70px_32px_1fr] sm:grid-cols-[100px_40px_1fr] md:grid-cols-[140px_48px_1fr] gap-0 relative group"
                  >
                    <div className="text-right pr-3 md:pr-6 pt-1 md:pt-1.5 transition-transform duration-300 group-hover:-translate-x-1">
                      <span className="inline-block text-xs sm:text-sm md:text-base font-bold font-serif text-[#2C1B10] dark:text-[#B8860B] leading-tight text-balance bg-[#2C1B10]/5 dark:bg-[#B8860B]/10 px-2 md:px-3 py-1.5 rounded-lg">
                        {item.marker}
                      </span>
                    </div>

                    <div className="relative flex justify-center">
                      <div className="w-4 h-4 rounded-full border-[3px] border-white dark:border-[#1A1A1A] bg-[#B8860B] dark:bg-[#B8860B] mt-2 z-10 shadow-[0_0_0_4px_rgba(44,27,16,0.05)] dark:shadow-[0_0_0_4px_rgba(184,134,11,0.1)] shrink-0 transition-transform duration-500 group-hover:scale-150"></div>
                      
                      {i !== sub.listItems!.length - 1 && (
                        <div className="absolute top-6 bottom-[-24px] w-[2px] bg-gradient-to-b from-[#2C1B10]/20 to-[#2C1B10]/5 dark:from-[#B8860B]/20 dark:to-[#B8860B]/5 z-0 group-hover:from-[#B8860B]/50 transition-colors duration-500"></div>
                      )}
                    </div>

                    <div className="pb-10 pl-2 sm:pl-4 md:pl-6 transition-transform duration-300 group-hover:translate-x-1">
                      <div className="bg-stone-50 dark:bg-[#222] p-5 sm:p-6 md:p-8 rounded-[1.5rem] border border-stone-200 dark:border-stone-800 shadow-sm group-hover:shadow-md group-hover:border-[#B8860B]/30 transition-all duration-300">
                        <h4 className="text-xl md:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-stone-600 dark:text-stone-400 text-[0.95rem] md:text-base leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {sub.listType === "cards" && sub.listItems && (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {sub.listItems.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="group bg-gradient-to-b from-stone-50 to-white dark:from-[#222] dark:to-[#1A1A1A] p-8 rounded-[2rem] border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(184,134,11,0.15)] hover:border-[#B8860B]/40 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8860B]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150"></div>
                    
                    <span className="text-[#B8860B] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                      {item.marker}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-4 pr-6">
                      {item.title}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400 text-base leading-[1.7] font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
