import React from 'react';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <AnimatedText>
      <h2 className="text-3xl md:text-4xl font-bold text-center relative">
        <span className="relative z-10">{children}</span>
        <span className="block h-1.5 w-24 bg-blue-600 mx-auto mt-4"></span>
      </h2>
    </AnimatedText>
  );
};

export default SectionHeading;