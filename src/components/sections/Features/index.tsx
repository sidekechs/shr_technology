import { Globe2, Users, TrendingUp } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { SectionTitle } from '@/components/ui/section-title';

const features = [
  {
    icon: Globe2,
    title: "Global Reach, Local Impact",
    description: "Connect with agents who understand your local market dynamics"
  },
  {
    icon: Users,
    title: "Verified Agents",
    description: "Work with pre-vetted professionals who deliver results"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Scale your business with data-driven strategies"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Choose SHR-Technology?"
          subtitle="We connect local businesses with the right marketing agents to drive growth and success."
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}