import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-dark-text-primary">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'sriramsindhura@gmail.com',
              href: 'mailto:sriramsindhura@gmail.com'
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+1 352 709 9837',
              href: 'tel:+13527099837'
            },
            {
              icon: Linkedin,
              title: 'LinkedIn',
              content: 'Connect with me',
              href: 'https://www.linkedin.com/in/sindhura-sriram/'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={index}>
                <motion.a
                  href={item.href}
                  target={item.icon === Linkedin ? '_blank' : undefined}
                  rel={item.icon === Linkedin ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white dark:bg-dark-card rounded-2xl p-8 card-shadow block"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-dark-text-primary">{item.title}</h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary group-hover:text-primary transition-colors flex items-center justify-center">
                    {item.content}
                    {item.icon === Linkedin && <ExternalLink size={16} className="ml-2" />}
                  </p>
                </motion.a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
