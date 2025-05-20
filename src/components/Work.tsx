import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const Work: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Gaming Store App',
      description: 'A desktop application built with Java Swing and MySQL for managing a gaming store inventory and sales.',
      technologies: ['Java', 'Swing', 'MySQL'],
      image: 'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Home Services Mobile App',
      description: 'A Flutter-based mobile application for connecting users with home service providers.',
      technologies: ['Dart', 'Flutter', 'Firebase'],
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Company Management App',
      description: 'A comprehensive Java application for managing company resources and operations.',
      technologies: ['Java', 'MySQL', 'JavaFX'],
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'E-commerce Website',
      description: 'A responsive e-commerce website with modern design and functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Store Stock Management',
      description: 'An application for managing store inventory and stock levels.',
      technologies: ['Java', 'MySQL', 'Swing'],
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading>My Work</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <AnimatedText key={project.id} delay={0.2 * (index % 2)}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;