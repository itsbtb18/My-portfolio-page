import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  image 
}) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-xl hover:-translate-y-2">
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex gap-4">
          <a 
            href="#" 
            className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
          <a 
            href="#" 
            className="px-4 py-2 rounded-full bg-gray-700 text-white text-sm hover:bg-gray-600 transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;