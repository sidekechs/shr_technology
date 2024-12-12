import { motion } from 'framer-motion';
import { TeamMember } from './TeamMember';
import { SectionTitle } from '@/components/ui/section-title';

const team = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    name: "David Chen",
    role: "CEO & Founder",
    bio: "15+ years of experience in digital marketing and business growth.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
    name: "Sarah Johnson",
    role: "Head of Marketing",
    bio: "Expert in developing marketing strategies for local businesses.",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
    name: "Michael Roberts",
    role: "Technical Lead",
    bio: "Passionate about creating innovative solutions for business growth.",
    social: {
      linkedin: "#",
      github: "#"
    }
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About SHR-Technology"
          subtitle="Meet the team behind your success"
          className="text-center mb-12"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-emerald-700">
            At SHR-Technology, we're passionate about helping local businesses thrive in the digital age. 
            Our platform connects businesses with expert marketing agents who understand their unique needs 
            and local market dynamics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}