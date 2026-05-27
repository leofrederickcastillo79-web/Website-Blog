import { Category, filters } from '../data';
import { motion } from 'motion/react';

interface FilterBarProps {
  activeFilter: Category | 'All';
  onFilterChange: (category: Category | 'All') => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const allFilters = ['All', ...filters];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8 px-4 sticky top-0 z-40 bg-[#F9F6F0]/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
      {allFilters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter as Category | 'All')}
            className={`relative px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300
              ${
                isActive
                  ? 'text-white'
                  : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800'
              }
            `}
          >
            {isActive && (
              <motion.div
                layoutId="active-filter-pill"
                className="absolute inset-0 bg-[#1A362D] dark:bg-[#4A645A] rounded-full z-[-1]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {filter}
          </button>
        );
      })}
    </div>
  );
}
