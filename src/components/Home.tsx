import React from 'react';
import AnimatedText from './AnimatedText';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-between items-center pt-16 relative">
      <div className="container mx-auto px-6 relative z-10 flex-1 flex items-center">
        <div className="flex flex-col justify-center">
          <AnimatedText>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello there, I'm <span className="text-blue-500">BTB</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Developer and Information Systems & Software Engineer
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={0.8}>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/itsbtb18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
              >
                <Github className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bettayeb-mohamed-aimen0704/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </a>
              <a 
                href="mailto:ma.bettayeb@esi-sba.dz"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors group"
              >
                <Mail className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </a>
            </div>
          </AnimatedText>
        </div>
      </div>
      
      <img 
        src="/images/background.png" 
        alt="Profile"
        className="absolute bottom-0 right-0 h-[90%] object-contain z-0"
      />
    </section>
  );
};

export default Home;