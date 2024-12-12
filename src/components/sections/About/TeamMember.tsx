import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  index: number;
}

export function TeamMember({ image, name, role, bio, social, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-emerald-900">{name}</h3>
        <p className="text-emerald-600 mb-3">{role}</p>
        <p className="text-emerald-700 mb-4">{bio}</p>
        <div className="flex space-x-4">
          {social.twitter && (
            <a href={social.twitter} className="text-emerald-500 hover:text-emerald-600">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} className="text-emerald-500 hover:text-emerald-600">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.github && (
            <a href={social.github} className="text-emerald-500 hover:text-emerald-600">
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}