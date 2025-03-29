import { Award } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';
import { motion } from 'framer-motion';

const certifications = [
  'AWS Certified Solutions Architect',
  'SAS Certified Specialist: Base Programming Using SAS 9.4',
  'IBM Data Science Specialization',
  'Collibra Integration Engineer Learning Path',
];

export function Certifications() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-dark-text-primary">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-dark-card p-8 rounded-2xl card-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">{cert}</p>
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary mt-1">Verified Certificate</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
