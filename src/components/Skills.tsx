import React from 'react';
import SectionHeading from './SectionHeading';
import SkillBar from './SkillBar';
import AnimatedText from './AnimatedText';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Java', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'C++', percentage: 80 },
    { name: 'PHP', percentage: 75 },
    { name: 'Dart', percentage: 85 },
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'Django', percentage: 75 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Flutter', percentage: 85 },
    { name: 'SQL', percentage: 85 },
    { name: 'Firebase', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Communication', percentage: 90 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Project Management', percentage: 80 },
    { name: 'Adaptability', percentage: 85 },
    { name: 'Time Management', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading>My Skills</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-blue-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                Technical Skills
              </h3>
            </AnimatedText>
            
            {technicalSkills.map((skill, index) => (
              <AnimatedText key={skill.name} delay={0.2 * (index + 1)}>
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </AnimatedText>
            ))}
          </div>
          
          <div>
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-blue-500 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </span>
                Soft Skills
              </h3>
            </AnimatedText>
            
            {softSkills.map((skill, index) => (
              <AnimatedText key={skill.name} delay={0.2 * (index + 1)}>
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;