import React from 'react';
import { AnimatedSection } from './shared/AnimatedSection';
import { SkillCard } from './shared/SkillCard';

const skills = {
  'Programming Languages': [
    'Python', 'Java', 'C++', 'JavaScript', 'R', 'SAS', 'MATLAB', 'HTML/CSS', 'XML', 'React.js'
  ],
  'Machine Learning & AI': [
    'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'OpenCV',
    'LangChain', 'LangGraph', 'Hugging Face', 'LLaMA', 'PySpark', 'NLP', 'Generative AI', 'Neural Networks'
  ],
  'Databases & Storage': [
    'PostgreSQL', 'Oracle SQL', 'MySQL', 'MongoDB', 'Neo4J',
    'Teradata', 'HiveQL', 'Snowflake', 'FAISS', 'Qdrant', 'ChromaDB'
  ],
  'Cloud & MLOps': [
    'AWS (SageMaker, S3, Glue, Lambda, Kinesis, CloudWatch)', 'Azure (Databricks, Synapse, App Services)', 
    'Docker', 'Kubernetes', 'MLflow', 'FastAPI', 'Anaconda'
  ],
  'Data Engineering & ETL': [
    'Apache Airflow', 'ETL Pipelines', 'Data Modeling', 'Data Standardization', 'Big Data Processing'
  ],
  'Data Analytics & Visualization': [
    'Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Power BI', 'QGIS', 'GRETL'
  ],
  'APIs & Backend Frameworks': [
    'REST APIs', 'SOAP', 'WSDL', 'AJAX', 'JSON', 'Flask', 'Django'
  ],
  'Development Tools & Platforms': [
    'Git', 'JIRA', 'VS Code', 'Jupyter', 'Trello', 'Miro', 'Collibra', 'Erwin Data Modeler'
  ],
  'Office & Productivity': [
    'Microsoft Excel', 'Word', 'PowerPoint'
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
