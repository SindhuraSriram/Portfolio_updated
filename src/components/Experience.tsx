import React from 'react';
import { Building2, Code, Database, Globe } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';

const experiences = [
  {
    company: 'University of Florida (IFAS)',
    location: 'Gainesville, FL, United States',
    role: 'OPS Research Technician',
    date: 'April 2024 - Present',
    icon: Globe,
    tech: 'Machine Learning, Deep Learning, Predictive Analytics, Time Series Analysis, Data Preprocessing and Feature Engineering, Long Short-Term Memory (LSTM), Convolutional Neural Networks (CNN), Remote Sensing
',
    description: [ 'Developed machine learning and deep learning models for crop yield forecasting using hyperspectral reflectance and plant height data across varying nitrogen rates.', 
'Applied remote sensing, GIS, and physics-constrained ML techniques to model soil moisture and analyze crop health and response to environmental conditions.', 'Designed and evaluated predictive frameworks to support precision agriculture, optimize nitrogen fertilizer application, and improve decision-making for sustainable farming practices.', 
'Implemented ConvLSTM-based hydrological modeling to forecast soil moisture and precipitation, capturing spatiotemporal patterns using satellite-derived datasets.',
]
  },
 {
  company: 'Virtusa Corporation',
  location: 'Milpitas, CA, United States',
  role: 'Software Engineer Intern',
  date: 'July 2024 - November 2024',
  icon: Code,
  tech: 'JavaScript, XML, jQuery, Microsoft Azure, REST APIs, XSLT, WSDL, Postman, AJAX',
  description: [
    'Configured and optimized HTML forms and UI elements using jQuery, AJAX, and XML for Verint’s Case Management portal, reducing form load times by 15%.',
    'Developed and integrated REST APIs with Azure endpoints using XSL Transformers and WSDL, enhancing data processing efficiency by 20%.',
    'Implemented backend automation workflows using FL Web Services and chain components to streamline case management and minimize manual intervention.'
  ]
},
 {
    company: 'University of Florida (IFAS) ',
    location: 'Gainesville, FL, United States',
    role: 'Graduate Research Assistant',
    date: 'May 2023 - December 2023',
    icon: Globe,
    tech: 'Python, Mask R-CNN, QGIS, Remote Sensing, Spatial Analysis, Deep Learning, Data Interpretation, Image Processing, Time Series Analysis',
    description: [
      'Developed advanced deep learning models using Mask R-CNN and ArcticDEM time-series to detect retrogressive thaw slumps (RTS) across the Arctic, achieving 99% validation accuracy for 2,747 RTS detections.',
      'Performed pan-Arctic volumetric quantification of RTS-driven mass wasting events, estimating over 327.6 million m³ of permafrost loss and evaluating climate-induced terrain changes.',
      'Integrated spatial analysis using QGIS with satellite and hyperspectral data to quantify the environmental impact of RTS, correlating thaw slump activities with climate variables and carbon release rates.'
    ]
},
 {
    company: 'Tata Consultancy Services (Citi Credit Corp)',
    location: 'Hyderabad, India',
    role: 'Systems Engineer - Data Modeler',
    date: 'September 2021 - December 2022',
    icon: Database,
    tech: 'Erwin Data Modeler, Teradata, Hive, Oracle SQL, Snowflake, Collibra, Data Warehousing, ETL',
    description: [
      'Spearheaded data management initiatives, increasing Citi Credit Corp’s profitability by 4% through advanced warehousing and ETL techniques.',
      'Led the design and implementation of comprehensive data models using Erwin, HiveQL, Teradata, and Oracle SQL, boosting customer satisfaction by 25%.',
      'Enhanced metadata governance by automating Collibra DGC workflows, reducing data inconsistencies by 20% across a 50,000+ user dataset.',
      'Optimized data retrieval and reporting processes, accelerating query execution times by 30% through schema restructuring and query optimization.',
      'Built scalable ETL pipelines to standardize data across multiple sources, minimizing integration errors by 25%.'
    ]
},
  {
    company: 'Tata Consultancy Services (Citi Credit Corp)',
    location: 'Hyderabad, India',
    role: 'Systems Engineer - Data Analyst',
    date: 'August 2020 - August 2021',
    icon: Globe,
    tech: 'SAS, Python, PySpark, Tableau, Machine Learning, Data Visualization',
    description: [
      'Conducted statistical analysis on Citi Credit Corp’s credit data using SAS Studio, deriving actionable insights for customer credit services.',
      'Developed ML-powered credit risk classification models using SAS Viya and Neural Networks, improving accuracy by 6%.',
      'Enhanced data processing efficiency by 30% through optimized big data pipelines using PySpark for fraud detection workflows.'
    ]
},
  {
    company: 'Tata Consultancy Services',
    location: 'Chennai, India',
    role: 'Credit Analyst Intern',
    date: 'January 2020 - May 2020',
    icon: Building2,
    tech: 'Python, Tableau, GRETL, Machine Learning, Neural Networks, Data Analysis',
    description: [
      'Developed a machine learning-based credit scoring system with 96% precision using the German Credit Risk dataset, enhancing loan approval accuracy.',
      'Integrated CNN-based customer risk modeling, increasing credit risk prediction accuracy by 15%.',
      'Engineered neural network-powered regression models for predictive credit risk classification, optimizing loan decision-making efficiency.'
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
      'Developed a web-based Gate Pass Generation System with HTML, CSS, and JavaScript to manage IT equipment movement, ensuring streamlined request tracking.',
      'Integrated form-based data entry with PHP and MySQL, improving data management efficiency by 25% through real-time database synchronization.',
      'Designed a real-time dashboard for transaction history tracking, enhancing system responsiveness and usability.'
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
