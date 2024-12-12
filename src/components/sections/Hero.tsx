import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Hero() {
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "120%",
            width: "100%"
          }}
        />
      </motion.div>
      
      {/* Dynamic Gradient Overlay */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/90 via-emerald-400/80 to-transparent z-10"
      >
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0
              }}
              animate={{
                y: [null, "-100%"],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl text-white"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 bg-emerald-400 rounded-full"
            />
            <span className="text-sm">New: AI-Powered Agent Matching</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl font-bold mb-6 relative"
          >
            Transform Your
            <br />
            <span className="text-emerald-200 relative">
              Local Business
              <motion.div
                className="absolute -inset-x-6 inset-y-0 bg-emerald-400/20 -skew-x-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 text-emerald-50"
          >
            Connect with verified marketing agents who understand your local
            market and help your business grow. Start scaling your presence today.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex space-x-4"
          >
            <Button className="bg-white hover:bg-emerald-50 text-emerald-900 px-8 py-6 text-lg group">
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-400/50 hover:border-emerald-300/50 px-8 py-6 text-lg flex items-center"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}