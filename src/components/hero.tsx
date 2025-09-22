import React from 'react';
import { Download, Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (type: 'fullstack' | 'ml' | 'data') => {
    // In a real app, these would be actual file downloads
    alert(`Downloading ${type === 'fullstack' ? 'Full-Stack' : type === 'ml' ? 'ML/AI' : 'Data Science'} Resume...`);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Krishnam Jhalani
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium">
              <span className="text-blue-400">Full-Stack Developer</span> • 
              <span className="text-purple-400 mx-2">AI Engineer</span> • 
              <span className="text-cyan-400">Data Scientist</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              I build production systems, train ML models, and turn data into insights. 
              Second-year CS student at <span className="text-yellow-400 font-semibold">University of Waterloo</span>.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300">
            <a 
              href="mailto:k2jhalani@uwaterloo.ca" 
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <Mail size={18} />
              <span>k2jhalani@uwaterloo.ca</span>
            </a>
            <a 
              href="tel:+14372999437" 
              className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
            >
              <Phone size={18} />
              <span>+1 (437) 299-9437</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="relative group">
              <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2 space-y-1">
                  <button
                    onClick={() => handleDownloadResume('fullstack')}
                    className="w-full px-4 py-2 text-left text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 rounded transition-colors"
                  >
                    Full-Stack Developer
                  </button>
                  <button
                    onClick={() => handleDownloadResume('ml')}
                    className="w-full px-4 py-2 text-left text-slate-300 hover:text-purple-400 hover:bg-slate-700/50 rounded transition-colors"
                  >
                    ML/AI Engineer
                  </button>
                  <button
                    onClick={() => handleDownloadResume('data')}
                    className="w-full px-4 py-2 text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded transition-colors"
                  >
                    Data Scientist
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="#"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg hover:bg-slate-700/50 hover:border-blue-400 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg hover:bg-slate-700/50 hover:border-blue-400 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;