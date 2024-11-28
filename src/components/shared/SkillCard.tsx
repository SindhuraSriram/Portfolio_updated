import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  items: string[];
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween" }}
      className="bg-white dark:bg-dark-card rounded-2xl p-8 card-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text-primary mb-6">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-primary/10 dark:bg-gray-800 text-gray-900 dark:text-dark-text-primary rounded-full text-sm font-medium skill-tag"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}