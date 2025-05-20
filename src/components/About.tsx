import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedText from './AnimatedText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedText>
            <div className="relative lg:pr-8 -mt-8">
              <div className="absolute w-full h-full bg-blue-600/10 rounded-2xl -rotate-3 transform scale-101"></div>
              <img 
                src="/images/casbah.png" 
                alt="Casbah of Algiers" 
                className="relative w-full h-auto rounded-2xl shadow-xl z-10"
              />
            </div>
          </AnimatedText>

          <div className="flex flex-col justify-center h-full">
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-4">
                Passionate Computer Science Student
              </h3>
            </AnimatedText>
            
            <AnimatedText delay={0.2}>
              <p className="text-gray-300 mb-4">
                I'm a 21-year-old second-year computer science student at USTHB University, specializing in Information Systems & Software Engineering. My passion for technology and problem-solving drives me to continuously expand my knowledge in various areas of computer science.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <p className="text-gray-300 mb-4">
                With expertise in programming languages, mobile development, web development, and ethical hacking, I'm always eager to take on new challenges. Beyond coding, I'm an avid chess player and enjoy football and working out, maintaining a balanced lifestyle.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.6}>
              <p className="text-gray-300 mb-4">
                I'm actively seeking work opportunities to apply my skills in real-world projects. My motivation to join a team stems from my belief in collaborative innovation and the desire to contribute to meaningful projects while learning from experienced professionals.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.8}>
              <a 
                href="/resume.pdf" 
                download 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium"
              >
                Download CV
              </a>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;