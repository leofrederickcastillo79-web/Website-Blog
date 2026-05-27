import { Category, filters } from '../data';
import { motion } from 'motion/react';

interface FilterBarProps {
  activeFilter: Category | 'All';
  onFilterChange: (category: Category | 'All') => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const allFilters = ['All', ...filters];

  return (
    <div className="sticky top-6 z-40 px-4 flex justify-center pointer-events-none pb-4">
      <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 p-2 bg-white/70 dark:bg-[#1A1A1A]/70 backdrop-blur-xl border border-white dark:border-stone-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-2xl pointer-events-auto transition-all duration-300 max-w-full">
        {allFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter as Category | 'All')}
              className={`relative px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? 'text-white'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-black/5 dark:hover:bg-white/5'
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-gradient-to-r from-[#1A362D] to-[#2C4A40] dark:from-[#3a5248] dark:to-[#4A645A] shadow-[0_2px_10px_rgba(26,54,45,0.3)] rounded-xl z-[-1]"
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
