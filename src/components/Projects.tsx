import React, { useState } from 'react';
import { Cloud, Bot, Shield, Brain, Activity, Cpu, Camera, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';

const projects = [
  {
    title: 'Llama2 Medical Chatbot',
    icon: MessageSquare,
    tech: 'Python, Llama2, Langchain, Chainlit, Sentence Transformers',
    date: 'Nov 2024',
    description: [
      'Developed a medical chatbot using Llama2, Langchain, and Sentence Transformers for accurate healthcare information',
      'Implemented context-aware responses with RAG (Retrieval Augmented Generation) using Chainlit for interactive UI',
      'Optimized for CPU-based systems with 16GB+ RAM, ensuring accessible deployment'
    ],
    url: 'https://github.com/SindhuraSriram/Llama2-medical-chatbot'
  },
    {
    title: 'Dental X-Ray Segmentation',
    icon: Brain,
    tech: 'TensorFlow, Keras, OpenCV, U-Net, VGG16',
     date: 'Jun 2024',
    description: [
      'Developed U-Net model with VGG16 backbone for dental X-ray segmentation',
      'Built custom data loaders for COCO-format annotations',
      'Achieved high segmentation performance with F1-Score and ROC AUC metrics'
    ],
    url: 'https://github.com/SindhuraSriram/Dental-X-Ray-Segmentation'
  },
  {
    title: 'Contextual AI – Personal Assistant',
    icon: Bot,
    tech: 'GPT, Streamlit, spaCy',
    date: 'Feb 2024',
    description: [
      'Integrated Assembly AI and OpenAI\'s GPT for real-time speech-to-text conversion',
      'Ensured robust security with Streamlit Authenticator and spaCy\'s NER',
      'Achieved 92% transcription accuracy and 72% data redaction success'
    ],
    url: 'https://github.com/SindhuraSriram/ContextualAI---A-Personal-Assistant-with-Voice-Recognition-and-Contextual-Understanding'
  },
  {
    title: 'Arctic RTS: Ice Depletion Pattern Recognition',
    icon: Cloud,
    tech: 'Python, GIS, Mask R-CNN, Satellite Imagery, QGIS',
    date: 'Oct 2023',
    description: [
      'Developed a Python-based Mask R-CNN model to study Arctic ice depletion patterns',
      'Processed and analyzed large environmental datasets for climate research',
      'Provided a scalable tool for monitoring ice melt and climate change impacts'
    ],
    url: 'https://github.com/SindhuraSriram/Volumetric-Quantification-of-Active-Retrogressive-Thaw-Slumps-in-the-Arctic'
  },
  {
    title: 'Online Payments Fraud Detection',
    icon: Shield,
    tech: 'Python, Scikit-Learn, XGBoost, AWS',
    date: 'Sep 2022',
    description: [
      'Developed real-time fraud detection system with 95% precision',
      'Implemented advanced feature engineering using AWS Glue',
      'Integrated AWS Kinesis and CloudWatch for real-time processing'
    ],
    url: 'https://github.com/SindhuraSriram/Credit-fraud-with-imbalanced-datasets'
  },
  {
    title: 'Chronic Kidney Disease Prediction',
    icon: Activity,
    tech: 'Python, SVM, Neural Networks',
    date: 'Oct 2020',
    description: [
      'Employed SVM and Neural Networks achieving 95% accuracy in disease detection',
      'Utilized clinical data for early diagnosis and treatment planning',
      'Enhanced medical diagnostics through AI implementation'
    ],
    url: 'https://github.com/SindhuraSriram/PREDICTION-OF-CHRONIC-KIDNEY-DISEASE-USING-SUPPORT-VECTOR-MACHINE-AND-NEURAL-NETWORK'
  },
  {
    title: 'Optimized Mobile Offloading',
    icon: Cpu,
    tech: 'Machine Learning, Mobile Edge Computing',
    date: 'May 2019',
    description: [
      'Devised ML strategies to enhance computation offloading efficiency',
      'Optimized network traffic management and energy consumption',
      'Published in ICASISIET 2019'
    ],
    url: 'https://github.com/SindhuraSriram/Optimized-Mobile-Offloading-through-Machine-Learning'
  },
  {
    title: 'COVID-19 Face Mask Detection',
    icon: Camera,
    tech: 'Python, CNN, Computer Vision',
    date: 'Feb 2019',
    description: [
      'Implemented CNN-based system for real-time mask detection with 98% accuracy',
      'Enhanced public health safety during COVID-19',
      'Contributed to community safety through technology'
    ]
  }
];

export function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-dark-text-primary">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isOpen = openProject === index;

            return (
              <AnimatedSection key={index}>
                <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden card-shadow h-full">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                          </a>
                        ) : (
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary">
                            {project.title}
                          </h3>
                        )}
                        {project.date && (
                          <p className="text-sm text-gray-500 dark:text-dark-text-secondary mt-1">{project.date}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-dark-text-secondary bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                        {project.tech}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleProject(index)}
                      className="w-full flex items-center justify-between text-gray-500 hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-colors mt-4"
                    >
                      <span className="text-sm font-medium">
                        {isOpen ? 'Hide Details' : 'Show Details'}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <ul className="space-y-3 mb-4">
                        {project.description.map((item, i) => (
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
