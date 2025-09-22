import React from 'react';
import { Building, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Fluxion AI',
      period: 'May 2025 - Present',
      description: 'Built ML pipelines and React dashboards for AI-driven solutions. Developed physics-informed neural networks and optimized data processing workflows.',
      achievements: [
        'Architected ML pipelines serving 15K+ daily requests',
        'Built responsive React dashboards for data visualization',
        'Optimized model inference reducing latency by 40%'
      ],
      color: 'blue'
    },
    {
      title: 'Controls Engineer',
      company: 'Waturbine',
      period: 'Feb 2025 - June 2025',
      description: 'Optimized control systems using C++ and Python for renewable energy applications. Implemented real-time monitoring and automated control algorithms.',
      achievements: [
        'Improved system efficiency by 25% through algorithm optimization',
        'Developed real-time monitoring dashboards',
        'Implemented automated control systems reducing manual intervention'
      ],
      color: 'purple'
    },
    {
      title: 'Computer Science Student',
      company: 'University of Waterloo',
      period: '2024 - 2029',
      description: 'Second-year Computer Science student and President\'s Scholarship of Distinction recipient. Focused on machine learning, software engineering, and data science coursework.',
      achievements: [
        'President\'s Scholarship of Distinction recipient',
        'Second-year student with strong academic performance',
        'Relevant coursework: AI/ML, Data Structures, Software Engineering',
        'Active in tech communities and hackathons'
      ],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 border-blue-400 bg-blue-400/10',
      purple: 'text-purple-400 border-purple-400 bg-purple-400/10',
      cyan: 'text-cyan-400 border-cyan-400 bg-cyan-400/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-300">
            Building impactful solutions across diverse technical domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <div className={`inline-flex items-center px-4 py-2 rounded-lg ${getColorClasses(exp.color)}`}>
                    <Building size={20} className="mr-2" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-slate-400 mt-1 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <Award size={16} className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
