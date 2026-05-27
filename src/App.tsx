import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Moon, Sun, ArrowUp } from "lucide-react";
import { filters, sectionsData, Category } from "./data";
import { Hero } from "./components/Hero";
import { FilterBar } from "./components/FilterBar";
import { BlogSection } from "./components/BlogSection";
import { ReferencesSection } from "./components/References";

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");
  const [isDark, setIsDark] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredSections =
    activeFilter === "All"
      ? sectionsData
      : sectionsData.filter((section) => section.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#D4AF37] transform origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-stone-800/80 backdrop-blur-md shadow-md text-stone-800 dark:text-stone-200 hover:scale-105 transition-transform"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Main Content */}
      <main>
        <Hero />

        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="max-w-4xl mx-auto px-6 py-16">
          <AnimatePresence mode="popLayout">
            {filteredSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
              >
                <BlogSection data={section} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <ReferencesSection />
      </main>

      {/* Back to top FAB */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#1A362D] text-white shadow-xl hover:bg-[#11231d] hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
