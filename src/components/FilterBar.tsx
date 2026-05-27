import { Category, filters } from '../data';
import { motion } from 'motion/react';

interface FilterBarProps {
  activeFilter: Category | 'All' | 'About the Authors';
  onFilterChange: (category: Category | 'All' | 'About the Authors') => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const allFilters = ['All', ...filters, 'About the Authors'];

  return (
    <div className="sticky top-6 z-40 px-4 flex justify-center pointer-events-none pb-4">
      <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 p-2 bg-white/70 dark:bg-[#1A1A1A]/70 backdrop-blur-xl border border-white dark:border-stone-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-2xl pointer-events-auto transition-all duration-300 max-w-full">
        {allFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter as Category | 'All' | 'About the Authors')}
              className={`relative px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? 'text-[#F4ECD8]'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-black/5 dark:hover:bg-white/5'
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-gradient-to-r from-[#2C1B10] to-[#4E342E] dark:from-[#4E342E] dark:to-[#6B4E31] shadow-[0_2px_10px_rgba(44,27,16,0.3)] rounded-xl z-[-1]"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
