import { Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(255, 255, 255)', 'rgb(6, 78, 59)']
  );

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <motion.div 
          style={{ color: textColor }}
          className="flex items-center space-x-2"
        >
          <Sparkles className="h-6 w-6" />
          <span className="text-2xl font-bold">SHR-Technology</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {['Solutions', 'Pricing', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: textColor }}
              className="hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <Button 
          className={`
            relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-400 
            hover:from-emerald-600 hover:to-teal-500 text-white
            ${isScrolled ? 'shadow-md' : 'shadow-lg shadow-emerald-500/30'}
          `}
        >
          <motion.span
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          Get Started
        </Button>
      </div>
    </motion.nav>
  );
}