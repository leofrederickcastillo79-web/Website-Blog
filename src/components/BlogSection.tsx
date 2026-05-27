import { BookOpen, MapPin, Milestone, Quote } from "lucide-react";
import { SectionData } from "../data";
import { motion } from "motion/react";

interface BlogSectionProps {
  data: SectionData;
}

export function BlogSection({ data }: BlogSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-24 scroll-mt-28"
      id={data.id}
    >
      <div className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/50 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#1A362D]/10 dark:bg-[#4A645A]/20 text-[#1A362D] dark:text-[#A3B8AD] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            {data.category}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A362D] dark:text-stone-100">
            {data.title}
          </h2>
        </div>

        {data.subsections.map((sub, idx) => (
          <div key={idx} className="mt-12 first:mt-0">
            {sub.title && (
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A362D] dark:text-[#A3B8AD] mb-6">
                {sub.title}
              </h3>
            )}

            {sub.content && sub.content.length > 0 && (
              <div className="space-y-6 text-stone-700 dark:text-stone-300 text-lg leading-relaxed">
                {sub.content.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            )}

            {sub.imagePlaceholder && (
              <div className="my-10">
                <div className="rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm relative h-64 md:h-[400px]">
                  <img
                    src={sub.imagePlaceholder.url}
                    alt={sub.imagePlaceholder.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 pointer-events-none"></div>
                </div>
                {sub.imagePlaceholder.caption && (
                  <p className="mt-3 text-center text-sm font-medium text-stone-500 italic">
                    {sub.imagePlaceholder.caption}
                  </p>
                )}
              </div>
            )}

            {sub.quote && (
              <blockquote className="mt-8 relative bg-[#F9F6F0] dark:bg-stone-900/60 p-8 rounded-2xl border-l-4 border-[#D4AF37]">
                <Quote className="absolute top-4 left-4 w-12 h-12 text-[#D4AF37] opacity-20" />
                <p className="text-xl md:text-2xl font-serif italic text-stone-800 dark:text-stone-200 relative z-10 leading-relaxed">
                  "{sub.quote}"
                </p>
              </blockquote>
            )}

            {sub.listType === "timeline" && sub.listItems && (
              <div className="mt-10 space-y-2 md:space-y-4">
                {sub.listItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 md:gap-8 relative pb-6 last:pb-0 pt-4"
                  >
                    {i !== sub.listItems!.length - 1 && (
                      <div className="absolute left-[39px] md:left-[55px] top-12 bottom-[-16px] w-0.5 bg-[#4A645A]/30"></div>
                    )}

                    <div className="flex-shrink-0 w-20 md:w-28 pt-1.5 flex flex-col items-end z-10">
                      <span className="text-sm md:text-base font-bold font-serif text-[#1A362D] dark:text-[#D4AF37] text-right break-words">
                        {item.marker}
                      </span>
                    </div>

                    <div className="relative z-10 w-4 h-4 rounded-full border-4 border-white dark:border-stone-900 bg-[#D4AF37] dark:bg-[#D4AF37] mt-2.5 flex-shrink-0 shadow-sm ml-[-33px] md:ml-[-41px]"></div>

                    <div className="flex-1 bg-stone-50 dark:bg-stone-800/80 p-5 md:p-6 rounded-2xl border border-stone-100 dark:border-stone-700/80 shadow-sm">
                      <h4 className="text-lg md:text-xl font-bold font-serif text-[#1A362D] dark:text-stone-200 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {sub.listType === "cards" && sub.listItems && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {sub.listItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-stone-50 dark:bg-stone-900/40 p-6 rounded-2xl border border-stone-200 dark:border-stone-700/50 hover:border-[#D4AF37]/50 transition-colors shadow-sm"
                  >
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 block">
                      {item.marker}
                    </span>
                    <h4 className="text-lg font-bold font-serif text-[#1A362D] dark:text-stone-200 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {data.quote && (
          <blockquote className="mt-10 relative bg-[#F9F6F0] dark:bg-stone-900/60 p-8 border-l-4 border-[#D4AF37]">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-[#D4AF37] opacity-20" />
            <p className="text-xl md:text-2xl font-serif italic text-stone-800 dark:text-stone-200 relative z-10 leading-relaxed">
              "{data.quote}"
            </p>
          </blockquote>
        )}
      </div>
    </motion.section>
  );
}
