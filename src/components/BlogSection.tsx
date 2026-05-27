import { BookOpen, MapPin, Milestone, Quote } from 'lucide-react';
import { SectionData } from '../data';
import { motion } from 'motion/react';

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A362D] dark:text-stone-100">
            {data.title}
          </h2>
        </div>

        <div className="space-y-6 text-stone-700 dark:text-stone-300 text-lg leading-relaxed">
          {data.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {data.quote && (
          <blockquote className="mt-10 relative bg-[#F9F6F0] dark:bg-stone-900/60 p-8 rounded-2xl border-l-4 border-[#D4AF37]">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-[#D4AF37] opacity-20" />
            <p className="text-xl md:text-2xl font-serif italic text-stone-800 dark:text-stone-200 relative z-10">
              "{data.quote}"
            </p>
          </blockquote>
        )}

        {data.keyTakeaways && (
          <div className="mt-10 bg-[#1A362D]/5 dark:bg-stone-900/80 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold font-serif text-[#1A362D] dark:text-[#A3B8AD] mb-6 flex items-center gap-2">
              <Milestone className="w-6 h-6 text-[#D4AF37]" />
              Key Insights
            </h3>
            <ul className="space-y-4">
              {data.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-stone-700 dark:text-stone-300">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#D4AF37]"></span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.cards && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.cards.map((card, idx) => (
              <div key={idx} className="bg-stone-50 dark:bg-stone-900/50 rounded-2xl p-6 border border-stone-200 dark:border-stone-700/50 hover:border-[#D4AF37]/50 dark:hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-lg font-bold font-serif text-[#1A362D] dark:text-stone-200 mb-1">{card.title}</h4>
                {card.subtitle && (
                  <p className="text-sm font-medium text-[#D4AF37] mb-4">{card.subtitle}</p>
                )}
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
