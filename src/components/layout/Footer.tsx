import { Sparkles } from 'lucide-react';

const footerLinks = {
  solutions: ['Marketing', 'Analytics', 'Commerce'],
  support: ['Documentation', 'Guides', 'Contact'],
  company: ['About', 'Blog', 'Careers'],
  legal: ['Privacy', 'Terms']
};

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-2xl font-bold">SHR-Technology</span>
            </div>
            <p className="text-emerald-300 max-w-md">
              Connecting local businesses with the right marketing agents to drive growth and success.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-400">
          <p>© 2024 SHR-Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}