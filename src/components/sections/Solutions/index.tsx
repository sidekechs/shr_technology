import { Megaphone, BarChart3, ShoppingCart } from 'lucide-react';
import { SolutionCard } from './SolutionCard';
import { SectionTitle } from '@/components/ui/section-title';

const solutions = [
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Reach your target audience effectively with data-driven marketing strategies.",
    features: [
      "Social media management",
      "Content marketing",
      "SEO optimization",
      "Email campaigns"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Make informed decisions with comprehensive business analytics.",
    features: [
      "Real-time dashboards",
      "Performance tracking",
      "Customer insights",
      "ROI analysis"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Commerce",
    description: "Streamline your sales process and boost revenue.",
    features: [
      "E-commerce integration",
      "Payment processing",
      "Inventory management",
      "Order fulfillment"
    ]
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Comprehensive Solutions"
          subtitle="Everything you need to grow your local business"
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}