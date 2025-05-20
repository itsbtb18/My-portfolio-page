import React from 'react';
import SectionHeading from './SectionHeading';
import { Download } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor in Software Engineering',
      institution: 'USTHB',
      period: '2023-Now',
      description: 'Currently pursuing a degree with a focus on software development and data science.'
    },
    
    {
      degree: 'Bachelor in IT ',
      institution: 'ESI-SBA',
      period: '2021 - 2023',
      description: 'Completed 2 years of studies about it and programming bases.'
    }
  ];

  const experience = [
    {
      position: 'Freelance Developer',
      company: 'Self-employed',
      period: '2023 - Present',
      description: 'Working on various web development projects using modern technologies.'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading>My Resume</SectionHeading>
        
        <div className="flex justify-center mt-8 mb-16">
          <AnimatedText>
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium transition-all hover:bg-blue-100"
            >
              Download Resume <Download size={18} />
            </a>
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-blue-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </span>
                Education
              </h3>
            </AnimatedText>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <AnimatedText key={index} delay={0.3 * (index + 1)}>
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-blue-500">
                    <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></span>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                        {item.period}
                      </span>
                      <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                      <p className="text-blue-400 mb-4">{item.institution}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
          
          <div>
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-blue-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </span>
                Experience
              </h3>
            </AnimatedText>
            
            <div className="space-y-12">
              {experience.map((item, index) => (
                <AnimatedText key={index} delay={0.3 * (index + 1)}>
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-blue-500">
                    <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2"></span>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                        {item.period}
                      </span>
                      <h4 className="text-xl font-bold mb-2">{item.position}</h4>
                      <p className="text-blue-400 mb-4">{item.company}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;