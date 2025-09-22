import React, { useState } from 'react';
import { Code, Brain, Database, Zap } from 'lucide-react';

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const techCategories = [
    {
      id: 'fullstack',
      name: 'Full-Stack Development',
      icon: <Code size={24} />,
      color: 'blue',
      techs: ['React', 'Next.js', 'TypeScript', 'Python', 'Go', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      icon: <Brain size={24} />,
      color: 'purple',
      techs: ['PyTorch', 'TensorFlow', 'Transformers', 'LangChain', 'OpenAI API', 'Hugging Face', 'scikit-learn']
    },
    {
      id: 'data',
      name: 'Data Engineering',
      icon: <Database size={24} />,
      color: 'cyan',
      techs: ['Pandas', 'NumPy', 'SQL', 'ETL Pipelines', 'AWS', 'ChromaDB', 'Apache Spark']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 border-blue-400 bg-blue-400/10 hover:bg-blue-400/20',
      purple: 'text-purple-400 border-purple-400 bg-purple-400/10 hover:bg-purple-400/20',
      cyan: 'text-cyan-400 border-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-300 leading-relaxed">
              I work across the full stack of modern technology - from React frontends to ML pipelines to data infrastructure. 
              Whether shipping user-facing products or training neural networks, I focus on 
              <span className="text-blue-400 font-semibold"> measurable impact</span> and 
              <span className="text-purple-400 font-semibold"> production-ready solutions</span>.
            </p>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                selectedCategory === category.id || selectedCategory === null ? 'opacity-100' : 'opacity-50'
              }`}
              onMouseEnter={() => setSelectedCategory(category.id)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <div className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 ${getColorClasses(category.color)}`}>
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600 hover:border-current transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="flex items-center justify-center mb-2">
              <Zap className="text-yellow-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15K+</div>
            <div className="text-slate-400">Daily API Requests</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="flex items-center justify-center mb-2">
              <Brain className="text-purple-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-slate-400">ML Model Accuracy</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="flex items-center justify-center mb-2">
              <Database className="text-cyan-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-slate-400">Datasets Processed</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="flex items-center justify-center mb-2">
              <Code className="text-blue-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-slate-400">Users Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;