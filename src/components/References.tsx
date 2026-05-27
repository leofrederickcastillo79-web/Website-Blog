import { references } from '../data';

export function ReferencesSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto relative z-10">
      <div className="flex flex-col items-center mb-12">
        <div className="w-10 h-1 bg-[#B8860B] mb-6 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 text-center">
          References & Sources
        </h2>
      </div>
      
      <div className="bg-white/60 dark:bg-[#1A1A1A]/60 backdrop-blur-xl rounded-[2rem] p-10 md:p-14 border border-stone-200/50 dark:border-stone-800 shadow-xl">
        <ul className="space-y-8">
          {references.map((ref, idx) => {
            // Very simple URL extraction to make links clickable if present
            const urlMatch = ref.match(/(https?:\/\/[^\s]+)/);
            const textPart = urlMatch ? ref.replace(urlMatch[0], '') : ref;

            return (
              <li key={idx} className="group flex gap-4 text-stone-600 dark:text-stone-400 text-sm md:text-base leading-[1.8] font-light">
                <span className="text-[#B8860B] font-serif italic opacity-60 group-hover:opacity-100 transition-opacity">[{idx + 1}]</span>
                <div>
                  <span dangerouslySetInnerHTML={{ __html: textPart }} />
                  {urlMatch && (
                    <a 
                      href={urlMatch[0]} 
                      target="_blank" 
                      rel="norenoopener" 
                      className="block mt-1 text-[#B8860B] hover:underline"
                    >
                      {urlMatch[0]}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
