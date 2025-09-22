import React, { useState } from 'react';
import { Code, Brain, Database, Cloud, Monitor, Wrench } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Monitor size={24} />,
      color: 'blue',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: <Code size={24} />,
      color: 'green',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Go', level: 80 },
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      icon: <Brain size={24} />,
      color: 'purple',
      skills: [
        { name: 'PyTorch', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Transformers', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'scikit-learn', level: 90 }
      ]
    },
    {
      id: 'data',
      name: 'Data Engineering',
      icon: <Database size={24} />,
      color: 'cyan',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'SQL', level: 90 },
        { name: 'Apache Spark', level: 75 },
        { name: 'ETL Pipelines', level: 85 }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      color: 'orange',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Others',
      icon: <Wrench size={24} />,
      color: 'pink',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VSCode', level: 95 },
        { name: 'Jupyter', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 border-blue-400 bg-blue-400/10 hover:bg-blue-400/20',
      green: 'text-green-400 border-green-400 bg-green-400/10 hover:bg-green-400/20',
      purple: 'text-purple-400 border-purple-400 bg-purple-400/10 hover:bg-purple-400/20',
      cyan: 'text-cyan-400 border-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20',
      orange: 'text-orange-400 border-orange-400 bg-orange-400/10 hover:bg-orange-400/20',
      pink: 'text-pink-400 border-pink-400 bg-pink-400/10 hover:bg-pink-400/20'
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      cyan: 'bg-cyan-500',
      orange: 'bg-orange-500',
      pink: 'bg-pink-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills Matrix
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technical expertise across the full stack of modern development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedCategory === category.id || selectedCategory === null ? 'opacity-100' : 'opacity-50'
              }`}
              onMouseEnter={() => setSelectedCategory(category.id)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <div className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 ${getColorClasses(category.color)}`}>
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: selectedCategory === category.id || selectedCategory === null ? `${skill.level}%` : '0%' 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domain Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-blue-400 mb-2">Full-Stack Development</div>
            <p className="text-slate-300">React, Next.js, TypeScript, Python, Go</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-purple-400 mb-2">Machine Learning</div>
            <p className="text-slate-300">PyTorch, TensorFlow, Transformers, LangChain</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Data Engineering</div>
            <p className="text-slate-300">Pandas, SQL, ETL pipelines, AWS, Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;