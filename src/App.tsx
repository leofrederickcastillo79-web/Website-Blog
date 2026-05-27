import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Moon, Sun, ArrowUp } from "lucide-react";
import { filters, sectionsData, Category } from "./data";
import { Hero } from "./components/Hero";
import { FilterBar } from "./components/FilterBar";
import { BlogSection } from "./components/BlogSection";
import { AboutAuthors } from "./components/AboutAuthors";
import { ReferencesSection } from "./components/References";

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Category | "All" | "About the Authors">("All");
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
    <div className="min-h-screen relative font-sans overflow-x-hidden w-full">
      <div className="fixed inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[100] mix-blend-overlay"></div>
      
      {/* Background Decorative Elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#B8860B]/5 dark:bg-[#B8860B]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#2C1B10]/5 dark:bg-[#D2B48C]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#2C1B10] to-[#B8860B] transform origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-white/70 dark:bg-[#1A1A1A]/70 backdrop-blur-xl shadow-lg border border-white dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:scale-105 transition-transform"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />

        <div className="relative pt-6">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10 w-full">
          <AnimatePresence mode="popLayout">
            {activeFilter !== "About the Authors" && filteredSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <BlogSection data={section} />
              </motion.div>
            ))}
            {activeFilter === "About the Authors" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <AboutAuthors />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ReferencesSection />
      </main>

      {/* Back to top FAB */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-[#2C1B10] dark:bg-[#B8860B] text-[#F4ECD8] dark:text-[#1A1412] shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
