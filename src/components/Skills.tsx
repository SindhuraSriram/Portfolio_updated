import React from 'react';
import { AnimatedSection } from './shared/AnimatedSection';
import { SkillCard } from './shared/SkillCard';

const skills = {
  'Programming Languages': [
    'Python', 'Java', 'C++', 'JavaScript', 'R', 'SAS', 'HTML/CSS', 'MATLAB', 'XML'
  ],
  'Machine Learning & AI': [
    'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'Scikit-learn', 'OpenCV',
    'LangChain', 'Llama', 'Hugging Face', 'PySpark'
  ],
  'Databases & Storage': [
    'PostgreSQL', 'Oracle SQL', 'MySQL', 'MongoDB', 'Neo4J', 'Teradata', 'HiveQL', 'Qdrant', 'Snowflake', 'FAISS', 'ChromaDB'
  ],
  'Cloud & DevOps': [
    'AWS (Glue, Kinesis, CloudWatch)', 'Azure Databricks', 'Docker', 'Kubernetes', 'FastAPI', 'Anaconda'
  ],
  'Data Analytics & Visualization': [
    'Tableau', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'QGIS', 'GRETL'
  ],
  'Software Development & APIs': [
    'REST APIs', 'Flask', 'Django', 'AJAX', 'JSON', 'XML', 'SOAP', 'WSDL'
  ],
  'Tools & Platforms': [
    'Git', 'JIRA', 'Collibra', 'Erwin', 'Jupyter', 'VS Code', 'Miro', 'Trello'
  ],
  'Office & Productivity Tools': [
    'Microsoft Office Suite (Excel, Word, PowerPoint)'
  ],
  'Specialized Skills': [
    'Machine Learning', 'Deep Learning', 'Neural Networks', 'NLP', 'Generative AI', 
    'ETL Processes', 'Data Modeling', 'Cloud Computing', 'Distributed Systems', 'Predictive Analytics'
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
