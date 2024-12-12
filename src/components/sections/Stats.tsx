import { motion } from "framer-motion";
import { fadeInUp } from '@/lib/animations';

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "2500+", label: "Active Agents" },
  { value: "150+", label: "Local Markets" },
  { value: "45M+", label: "Revenue Generated" }
];

export function Stats() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className="p-6 bg-white/50 backdrop-blur rounded-lg shadow-lg"
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-4xl font-bold text-emerald-700 mb-2"
            >
              {stat.value}
            </motion.div>
            <div className="text-emerald-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}