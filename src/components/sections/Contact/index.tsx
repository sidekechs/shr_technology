import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { SectionTitle } from '@/components/ui/section-title';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@shr-technology.com",
    link: "mailto:contact@shr-technology.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Business Ave, Tech City, TC 12345",
    link: "#"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have questions? We'd love to hear from you."
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 text-emerald-600 hover:text-emerald-700"
                  >
                    <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-900">{item.title}</h4>
                      <p>{item.details}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}