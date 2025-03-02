import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl text-gray-600 dark:text-gray-400">Hello, I'm</h2>
          <h1 className="text-7xl font-bold text-gradient">Sindhura Sriram</h1>
          <p className="text-3xl text-gray-600 dark:text-gray-400">
            Software Engineer & ML Enthusiast
          </p>
          
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/sindhura-sriram/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:sindhura.sriram@ufl.edu"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/SindhuraSriram"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white dark:bg-dark-card rounded-full shadow-lg hover:text-primary transition-colors"
            >
              <Github size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
