import React from 'react';
import { AnimatedSection } from './shared/AnimatedSection';
import { SkillCard } from './shared/SkillCard';

const skills = {
  'Programming Languages': [
    'Python', 'Java', 'C++', 'JavaScript', 'HTML/CSS', 'R', 'MATLAB', 'XML', 'SAS'
  ],
  'Frameworks & Libraries': [
    'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Pandas', 'NumPy', 'Sklearn', 'PySpark', 'AJAX'
  ],
  'Databases & Cloud': [
    'PostgreSQL', 'Oracle SQL', 'MySQL', 'MongoDB', 'Neo4J', 'Teradata', 'HiveQL', 'AWS', 'Azure', 'Snowflake'
  ],
  'Tools & Platforms': [
    'Git', 'JIRA', 'Tableau', 'Collibra', 'Erwin', 'Anaconda', 'Jupyter', 'VS Code', 'Miro', 'Trello'
  ],
  'Specialized Skills': [
    'Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP', 'Data Modeling', 'System Design',
    'Cloud Computing', 'Distributed Systems', 'REST APIs', 'ETL'
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-dark-text-primary">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <AnimatedSection key={category}>
              <SkillCard category={category} items={items} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}