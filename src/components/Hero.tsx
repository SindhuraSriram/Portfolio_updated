import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="min-h-screen hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="inline-block animate-[float_3s_ease-in-out_infinite]">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-gradient">Sindhura Sriram</span>
            </h1>
          </div>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Software Engineer | ML Enthusiast | MS in Computer Science @ UF
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://www.linkedin.com/in/sindhura-sriram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#FF385C] transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sindhura.sriram@ufl.edu"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#FF385C] transition-colors"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/SindhuraSriram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#FF385C] transition-colors"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://read.cv/sindhurasriram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#FF385C] transition-colors"
            >
              <FileText size={24} />
              <span>Resume</span>
            </a>
          </div>
          <div className="bg-white rounded-2xl card-shadow p-8 max-w-3xl mx-auto hover-scale">
            <p className="text-lg text-gray-700 leading-relaxed">
              Software engineer with 3+ years of expertise in data modeling, machine learning, cloud platforms, and full-stack development. 
              Proficient in building scalable solutions, optimizing data workflows, and delivering impactful results using Python, Java, and cloud platforms. 
              Seeking to leverage technical expertise to drive success in innovative, data-driven projects.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <ChevronDown size={32} className="text-[#FF385C] animate-bounce" />
        </div>
      </div>
    </section>
  );
}