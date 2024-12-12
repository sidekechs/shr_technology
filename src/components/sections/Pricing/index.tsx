import { SectionTitle } from '@/components/ui/section-title';
import { PriceCard } from './PriceCard';

const plans = [
  {
    title: "Starter",
    price: "$99",
    features: [
      "Up to 5 agent connections",
      "Basic analytics",
      "Email support",
      "Market insights"
    ]
  },
  {
    title: "Professional",
    price: "$199",
    features: [
      "Up to 15 agent connections",
      "Advanced analytics",
      "Priority support",
      "Custom reporting",
      "AI matching algorithm"
    ],
    isPopular: true
  },
  {
    title: "Enterprise",
    price: "$399",
    features: [
      "Unlimited agent connections",
      "Real-time analytics",
      "24/7 dedicated support",
      "Custom solutions",
      "API access"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that best fits your business needs"
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}