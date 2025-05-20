import React from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-2xl">
          BTB<span className="text-blue-500">.</span>
        </div>
        
        <div className="flex gap-6 items-center">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="work">Work</NavLink>
          <NavLink to="contact">Contact</NavLink>
          
          <a 
            href="/resume.pdf" 
            download 
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-medium transition-all hover:bg-blue-100"
          >
            Resume <Download size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300 font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;