import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Resume />
      <Contact />
      <footer className="bg-gray-900 py-8 text-center text-gray-500 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p>© 2025 <span className="text-blue-500">btb</span>. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;