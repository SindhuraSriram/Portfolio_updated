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
                I'm a software engineer with over 3 years of experience in data modeling, machine learning, 
                and full-stack development. Currently pursuing my Master's in Computer Science at the 
                University of Florida, I'm passionate about building scalable solutions and solving complex 
                problems through technology.
              </p>
              <p>
                My expertise spans across data engineering, machine learning, and cloud platforms. I've 
                worked on projects ranging from credit risk analysis systems to real-time fraud detection, 
                always focusing on delivering high-impact solutions.
              </p>
              <p>
                I'm particularly interested in the intersection of machine learning and software engineering, 
                where I can leverage both domains to create innovative solutions. When I'm not coding, I enjoy 
                exploring new technologies and contributing to open-source projects.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}