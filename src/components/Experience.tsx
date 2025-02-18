import React from 'react';
import { Building2, Code, Database, Globe } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';

const experiences = [
  {
    company: 'University of Florida',
    location: 'Gainesville, FL, United States',
    role: 'OPS Research Technician',
    date: 'April 2024 - Present',
    icon: Globe,
    tech: 'Python, TensorFlow, Keras, ConvLSTM, CNN, RCNN, Geospatial Data Analysis',
    description: [
      'Developed a predictive framework for yield estimation utilizing ensemble classification models and deep learning architectures like CNNs, significantly improving crop yield forecasting accuracy.',
      'Implemented a ConvLSTM-based hydrological model to forecast soil moisture and precipitation levels, leveraging spatiotemporal dependencies in remote sensing datasets.',
      'Engineered a RCNN-based geospatial analysis system to model soil-water-precipitation interactions, enabling high-resolution climate impact predictions for agricultural sustainability.'
    ]
  },
  {
    company: 'Virtusa Corporation',
    location: 'Milpitas, CA, United States',
    role: 'Software Engineer Intern',
    date: 'July 2024 - November 2024',
    icon: Code,
    tech: 'JavaScript, XML, jQuery, Microsoft Azure, REST APIs',
    description: [
      'Configured custom HTML forms and UI elements with jQuery, AJAX, and XML for Verint\'s Case Management, reducing form load times by 15%.',
      'Developed REST API integrations with Azure endpoints using XSL Transformers and WSDL, improving data processing efficiency by 20%.',
      'Integrated FL Web Service with form adapters to streamline backend processes, ensuring efficient data transmission.'
    ]
  },
  {
    company: 'University of Florida',
    location: 'Gainesville, FL, United States',
    role: 'Graduate Research Assistant',
    date: 'May 2023 - December 2023',
    icon: Globe,
    tech: 'Python, Mask R-CNN, QGIS, Remote Sensing, Spatial Analysis',
    description: [
      'Orchestrated Arctic-wide Retrogressive Thaw Slump (RTS) detection using Mask R-CNN and ArcticDEM time-series, achieving 99% validation performance for 2,747 RTS, enhancing environmental monitoring precision.',
      'Performed volumetric RTS change detection using spatial analysis in QGIS, estimating sediment yield at 31,710m³ and analyzing satellite imagery to derive latitudinal dependencies on climate variations beyond 71°N.'
    ]
  },
  {
    company: 'Tata Consultancy Services (Citi Credit Corp)',
    location: 'Hyderabad, India',
    role: 'Systems Engineer - Data Modeler',
    date: 'September 2021 - December 2022',
    icon: Database,
    tech: 'Erwin Data Modeler, Teradata, Hive, Oracle SQL, Snowflake, Collibra',
    description: [
      'Restructured Citi Credit Corp’s process workflows, increasing profitability by 4% and enhancing **data modeling, retrieval, and reporting efficiency**.',
      'Optimized **metadata governance** by implementing **Collibra DGC-based automation**, reducing data inconsistencies by 20% across a **50,000+ user dataset** in retail and mortgage loan processing.',
      'Directed **database schema modifications** using HiveQL, Teradata, Oracle SQL, and Snowflake, **accelerating query execution times by 30%**.',
      'Engineered scalable **ETL pipelines** to standardize cross-platform data, reducing **integration errors by 25%** across five different data warehouses.'
    ]
  },
  {
    company: 'Tata Consultancy Services (Citi Credit Corp)',
    location: 'Hyderabad, India',
    role: 'Systems Engineer - Data Analyst',
    date: 'August 2020 - August 2021',
    icon: Globe,
    tech: 'SAS, Python, PySpark, Tableau, Machine Learning',
    description: [
      'Analyzed **Citi Credit Corp’s customer financial datasets** using **SAS Studio and Tableau**, generating actionable insights through **data visualization-driven decision-making**.',
      'Improved **mortgage loan classification accuracy** by **6%** through **SAS Viya-powered ML models**, integrating **Neural Networks for enhanced credit risk assessment**.',
      'Optimized **big data processing pipelines** using **PySpark**, achieving a **30% increase in computational efficiency** for fraud detection workflows.'
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
      'Designed a **Python-based alternative credit scoring system**, achieving **96% precision** on the German Credit Risk dataset, improving **loan approval decision accuracy**.',
      'Applied **CNN-based customer risk modeling**, enhancing **credit risk prediction accuracy by 15%**, leading to a **20% increase in automated approval efficiency**.',
      'Developed **Neural Network-powered regression models** for predictive credit risk classification, optimizing Citi’s **credit scoring and default risk assessment**.'
    ]
  },
  {
    company: 'ITC Limited',
    location: 'Secunderabad, India',
    role: 'Website Developer Intern',
    date: 'November 2018 - December 2018',
    icon: Code,
    tech: 'JavaScript, HTML/CSS, MongoDB, PHP, MySQL',
    description: [
      'Developed a **web-based Gate Pass Generation System** with **HTML, CSS, and JavaScript** to manage **IT equipment movement**, ensuring streamlined request tracking.',
      'Integrated **form-based data entry** with **PHP and MySQL**, improving **data management efficiency by 25%** through real-time database synchronization.',
      'Designed a **real-time dashboard** for **transaction history tracking**, enhancing **system responsiveness and usability**.'
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
