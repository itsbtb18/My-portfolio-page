import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedText from './AnimatedText';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    window.location.href = `mailto:ma.bettayeb@esi-sba.dz?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <SectionHeading>Get In Touch</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          <div className="lg:col-span-2">
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            </AnimatedText>
            
            <AnimatedText delay={0.2}>
              <p className="text-gray-300 mb-8">
                I'm interested in freelance opportunities and collaborations. However, if you have other requests or questions, don't hesitate to contact me.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.4}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:ma.bettayeb@esi-sba.dz" className="text-blue-400 hover:text-blue-300">
                    ma.bettayeb@esi-sba.dz
                  </a>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.6}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+213773613301</p>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={0.8}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Algiers, Algeria</p>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText delay={1}>
              <div className="mt-8 flex gap-4">
                <a 
                  href="https://github.com/itsbtb18"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/bettayeb-mohamed-aimen0704/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </AnimatedText>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatedText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    />
                  </div>
                </div>
              </AnimatedText>
              
              <AnimatedText delay={0.3}>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    required
                  />
                </div>
              </AnimatedText>
              
              <AnimatedText delay={0.6}>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    required
                  ></textarea>
                </div>
              </AnimatedText>
              
              <AnimatedText delay={0.9}>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </AnimatedText>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;