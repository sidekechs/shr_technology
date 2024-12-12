import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export function SolutionCard({ icon: Icon, title, description, features, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="h-14 w-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-emerald-600" />
      </div>
      <h3 className="text-2xl font-bold text-emerald-900 mb-3">{title}</h3>
      <p className="text-emerald-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-emerald-700">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full">Learn More</Button>
    </motion.div>
  );
}