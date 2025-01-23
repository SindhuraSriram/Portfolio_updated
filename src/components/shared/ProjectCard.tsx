import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  icon: LucideIcon;
  tech: string;
  description: string[];
  url?: string;
}

export function ProjectCard({ title, icon: Icon, tech, description, url }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween" }}
      className="bg-white dark:bg-dark-card rounded-2xl p-8 card-shadow"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text-primary mb-4">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:text-dark-text-primary dark:hover:text-primary transition-colors"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div className="mb-4">
        <span className="text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-dark-text-primary px-3 py-1 rounded-full">
          {tech}
        </span>
      </div>
      <ul className="space-y-3 text-gray-700 dark:text-dark-text-secondary">
        {description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}