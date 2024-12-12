import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  index: number;
}

export function PriceCard({ title, price, features, isPopular, index }: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        p-8 rounded-2xl shadow-lg
        ${isPopular ? 'bg-gradient-to-br from-emerald-500 to-teal-400 text-white ring-2 ring-emerald-500' : 'bg-white'}
      `}
    >
      {isPopular && (
        <span className="px-3 py-1 text-sm bg-white/20 rounded-full mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-emerald-900'}`}>
        {title}
      </h3>
      <div className="mt-4 mb-6">
        <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-emerald-900'}`}>
          {price}
        </span>
        <span className={isPopular ? 'text-emerald-100' : 'text-emerald-600'}>/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check className={`h-5 w-5 mr-2 ${isPopular ? 'text-emerald-100' : 'text-emerald-500'}`} />
            <span className={isPopular ? 'text-emerald-100' : 'text-emerald-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          isPopular
            ? 'bg-white text-emerald-600 hover:bg-emerald-50'
            : 'bg-emerald-600 text-white hover:bg-emerald-700'
        }`}
      >
        Get Started
      </Button>
    </motion.div>
  );
}