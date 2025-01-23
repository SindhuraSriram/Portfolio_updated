import React from 'react';
import { Building2, Code, Database, Globe } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';

const experiences = [
  {
    company: 'Virtusa Corporation',
    location: 'Milpitas, CA, United States',
    role: 'Software Engineer Intern',
    date: 'July 2024 - November 2024',
    icon: Code,
    tech: 'JavaScript, XML, jQuery, Microsoft Azure, REST APIs',
    description: [
      'Configured custom HTML forms and UI elements with jQuery, AJAX and XML for Verint\'s Case Management, reducing form load times by 15%',
      'Developed REST API integrations with Azure endpoints, using XSL Transformers and WSDL, improving data processing efficiency by 20%',
      'Integrated FL Web Service with form adapters to streamline backend processes, enabling efficient data transmission'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Hyderabad, India',
    role: 'Systems Engineer - Data Modeler',
    date: 'September 2021 - December 2022',
    icon: Database,
    tech: 'Erwin Data Modeler, Teradata, Hive, Oracle SQL, Snowflake, Collibra',
    description: [
      'Optimized Citi Credit Corp\'s data workflows, increasing profitability by 4% and enhancing data modeling, retrieval, and reporting efficiency',
      'Managed database object creation/modification using HiveQL, Teradata, Oracle SQL and Snowflake improving data retrieval by 30%',
      'Built scalable ETL processes to handle large volumes of data across multiple platforms',
      'Collaborated with cross-functional teams to develop data governance frameworks using Collibra and reduced data inconsistencies by 20%'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai, India',
    role: 'Systems Engineer - Data Analyst',
    date: 'August 2020 - August 2021',
    icon: Globe,
    tech: 'SAS, Python, PySpark, Tableau, Machine Learning',
    description: [
      'Analyzed Citi Credit Corp\'s customer data using SAS Studio and Tableau, generating actionable insights through data visualization',
      'Improved credit data classification with SAS Viya and Python-based machine learning using Neural Networks',
      'Streamlined data workflows using PySpark with a 30% boost in query performance'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai, India',
    role: 'Credit Analyst Intern',
    date: 'January 2020 - May 2020',
    icon: Building2,
    tech: 'Python, Tableau, GRETL, ML, Neural Networks',
    description: [
      'Built an alternative credit scoring system using Python and neural networks, achieving 96% accuracy',
      'Applied CNNs to transaction data, boosting credit risk prediction accuracy by 15%',
      'Automated credit risk classification using regression models and neural networks, improving approval efficiency by 20%'
    ]
  },
  {
    company: 'ITC Limited',
    location: 'Secunderabad, India',
    role: 'Website Developer Intern',
    date: 'November 2018 - December 2018',
    icon: Code,
    tech: 'JavaScript, HTML/CSS, MongoDB',
    description: [
      'Developed a web-based Gate Pass Generation System using HTML, CSS, and JavaScript to create, track, and manage IT equipment requests',
      'Implemented form-based data entry and transaction history tracking with PHP and MySQL, improving data management efficiency by 25%',
      'Designed a real-time dashboard for request tracking and history management, ensuring seamless user experience and system responsiveness'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-dark-text-primary">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <AnimatedSection key={index}>
                <div className="bg-white dark:bg-dark-card rounded-2xl p-8 card-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text-primary">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-gray-600 dark:text-dark-text-secondary">{exp.location}</p>
                        </div>
                        <span className="text-gray-500 dark:text-dark-text-secondary text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          {exp.date}
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-dark-text-secondary bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          {exp.tech}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-700 dark:text-dark-text-secondary">
                            <span className="mr-2 text-primary dark:text-primary">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}