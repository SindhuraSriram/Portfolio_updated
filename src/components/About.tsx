import { motion } from 'framer-motion';
import { AnimatedSection } from './shared/AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p> 
I’m a Machine Learning Engineer with a strong software engineering foundation, passionate about solving real-world problems through scalable, cloud-based solutions. 
With 3+ years of experience in data modeling, ML, and full-stack development, I specialize in building intelligent systems that blend robust architecture with smart automation. 
Currently, I’m focused on precision agriculture research and deploying LLM-powered solutions — thriving at the intersection of ML, cloud, and product engineering.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
