import React from 'react';
import { Award, ExternalLink, TrendingUp } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Certified in designing and deploying scalable systems on AWS',
      color: 'orange',
      icon: '☁️'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: '2023',
      description: 'Comprehensive training in data analysis and visualization',
      color: 'blue',
      icon: '📊'
    },
    {
      title: 'Certified Kubernetes Application Developer (CKAD)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      description: 'Expertise in developing and deploying applications on Kubernetes',
      color: 'cyan',
      icon: '⚙️'
    }
  ];

  const achievements = [
    { metric: 'Production Deployments', value: '15+', description: 'Successfully deployed applications' },
    { metric: 'API Requests Handled', value: '15K+', description: 'Daily requests across systems' },
    { metric: 'Model Accuracy', value: '95%+', description: 'Average ML model performance' },
    { metric: 'Users Served', value: '10K+', description: 'Across multiple platforms' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'text-orange-400 border-orange-400 bg-orange-400/10',
      blue: 'text-blue-400 border-blue-400 bg-blue-400/10',
      cyan: 'text-cyan-400 border-cyan-400 bg-cyan-400/10'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-slate-300">
            Recognized expertise with measurable impact
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(cert.color)}`}>
                  {cert.date}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-slate-400 font-medium mb-3">{cert.issuer}</p>
              <p className="text-slate-300 text-sm mb-4">{cert.description}</p>

              <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <ExternalLink size={16} />
                <span>Verify Certificate</span>
              </button>
            </div>
          ))}
        </div>

        {/* Achievements Stats */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="text-green-400 mr-2" size={24} />
            <h3 className="text-2xl font-bold text-white">Production Impact</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-slate-300 mb-1">{achievement.metric}</div>
                <div className="text-sm text-slate-400">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            <Award className="mr-2" size={20} />
            <span>Multiple production deployments with measurable impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;