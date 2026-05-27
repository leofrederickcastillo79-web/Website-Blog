import { references } from '../data';
import { BookMarked } from 'lucide-react';

export function ReferencesSection() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto border-t border-stone-200 dark:border-stone-800">
      <div className="flex items-center gap-3 mb-8">
        <BookMarked className="w-6 h-6 text-[#1A362D] dark:text-[#A3B8AD]" />
        <h2 className="text-2xl font-serif font-bold text-[#1A362D] dark:text-stone-200">References</h2>
      </div>
      
      <div className="bg-white dark:bg-stone-800/40 rounded-3xl p-8 border border-stone-200 dark:border-stone-800 shadow-sm">
        <ul className="space-y-6">
          {references.map((ref, idx) => (
            <li key={idx} className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed pl-6 relative">
              <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              {ref}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
