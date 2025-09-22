import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 'lawder',
      title: 'LawDer',
      subtitle: 'AI Legal Clinic Platform',
      category: 'ml',
      description: 'AI-powered legal clinic platform processing 10K+ legal documents with 88% accuracy using semantic search and RAG pipeline. Serves 500+ users via Next.js frontend.',
      metrics: ['10K+ Documents', '88% Accuracy', '500+ Users'],
      tech: ['Next.js', 'OpenAI API', 'RAG', 'ChromaDB', 'AWS'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'dealpulse',
      title: 'DealPulse',
      subtitle: 'ML-Powered Financial Analysis',
      category: 'data',
      description: 'Fine-tuned LLMs achieving 95% prediction accuracy for financial analysis. Automated analysis reducing manual work by 90% with real-time model serving.',
      metrics: ['95% Accuracy', '90% Time Saved', 'Real-time Serving'],
      tech: ['PyTorch', 'LangChain', 'PostgreSQL', 'Next.js', 'FastAPI'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'jobility',
      title: 'Jobility',
      subtitle: 'AI-Powered Job Matching Platform',
      category: 'fullstack',
      description: 'Full-stack job matching platform using AI to connect candidates with opportunities. Built with React frontend, Node.js backend, and ML recommendation engine.',
      metrics: ['Smart Matching', 'Real-time Updates', 'User Analytics'],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Python', 'ML APIs'],
      gradient: 'from-green-500 to-teal-500',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ml', label: 'ML/AI', count: projects.filter(p => p.category === 'ml').length },
    { id: 'data', label: 'Data Science', count: projects.filter(p => p.category === 'data').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Production systems, ML pipelines, and data infrastructure that deliver measurable impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-1">
            <Filter className="text-slate-400 ml-2" size={16} />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {filter.label}
                <span className="ml-1 text-xs opacity-75">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs font-semibold bg-slate-700/50 text-slate-300 rounded-full border border-slate-600"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;