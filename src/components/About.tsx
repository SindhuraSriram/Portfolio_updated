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
                I’m a Software Engineer with over 3 years of experience in data modeling, machine learning, and full-stack development. Currently pursuing my Master’s in Computer Science at the University of Florida, I’m passionate about building scalable solutions and solving complex problems through technology.
              </p>
              <p>
                My work spans the intersection of machine learning, MLOps, and cloud architecture, where I build and scale intelligent systems that solve real-world problems. From credit risk scoring to real-time fraud detection, I’ve developed end-to-end solutions that integrate data pipelines, model training, and deployment in production environments.
              </p>
              <p>
                I’m particularly passionate about the operationalization of ML models, using tools like Docker, AWS SageMaker, Azure, MLflow, and integrating them into robust, cloud-native architectures. My experience also includes building LLM-based chatbots, contributing to climate research using deep learning, and maintaining a strong focus on performance, accuracy, and impact.
              </p>
              <p>
                When I’m not working on technical projects, you’ll find me exploring emerging AI tools, fine-tuning open-source models, or collaborating with the tech community to learn and contribute.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
