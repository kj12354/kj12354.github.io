import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('sent');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Open to opportunities in Software Engineering, ML/AI, and Data Science. 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just connecting with fellow developers and researchers.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:k2jhalani@uwaterloo.ca"
                className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-400 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-slate-300">k2jhalani@uwaterloo.ca</div>
                </div>
              </a>

              <a
                href="tel:+14372999437"
                className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-purple-400 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-slate-300">+1 (437) 299-9437</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg">
                <div className="p-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-slate-300">Waterloo, ON, Canada</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
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
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="Your name"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                  placeholder="What's this about?"
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
                {formStatus === 'sending' && (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                )}
                {formStatus === 'sent' && (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2025 Krishnam Jhalani. Built with React & TypeScript. 
            <span className="text-blue-400"> Always learning, always building.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;