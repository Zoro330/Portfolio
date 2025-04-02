import React, { useState } from 'react';
import { Github, ExternalLink, Code2, ChevronDown, ArrowRight, Terminal, Coffee, Zap, Globe2, Mail, Facebook } from 'lucide-react';

const App: React.FC = () => {
  const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);

  const copyEmail = async (): Promise<void> => {
    await navigator.clipboard.writeText('dev@techforge.io');
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,rgba(59,130,246,0.2)_30%,rgba(0,0,0,0)_60%)] opacity-30"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        </div>
        <div className="container mx-auto px-4 h-screen flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-3/5 space-y-8 animate-float relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                  <Terminal size={16} />
                  <span>Welcome to my Portfolio</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                    Joseph Ephraim
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                      L. Gulmatico
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-slate-400 max-w-2xl pt-4">
                  Beginner Full Stack Developer passionate about creating web applications. 
                  Eager to learn and grow while building meaningful digital solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-8">
                <a 
                  href="#projects" 
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Get in Touch
                  <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                </a>
              </div>

              <div className="flex gap-8 pt-12">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">1+</div>
                  <div className="text-slate-400">Year of Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">6</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 flex justify-center items-center relative z-10">
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/50 to-violet-500/50 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
                <div className="relative aspect-square w-72 h-72 rounded-full overflow-hidden border-2 border-slate-700/50 transform transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/src/Josh1.jpg"
                    alt="Joseph Ephraim L. Gulmatico"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-6">Skills I'm Developing</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Learning and growing in modern web development technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code2 className="text-blue-400" size={32} />,
                  title: "Frontend Development",
                  description: "Learning to create responsive websites using HTML, CSS, and JavaScript. Exploring modern frameworks like React."
                },
                {
                  icon: <Globe2 className="text-violet-400" size={32} />,
                  title: "Backend Development",
                  description: "Building foundational knowledge in server-side programming and database management using Node.js and SQL."
                },
                {
                  icon: <Zap className="text-yellow-400" size={32} />,
                  title: "UI/UX Design",
                  description: "Developing an eye for clean, user-friendly interfaces while learning design principles and best practices."
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-32 relative overflow-hidden bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src="/src/Likhub.png"
                      alt="Project"
                      className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Likhub</h3>
                    <p className="text-slate-400 mb-6">
                      An MVP (Minimum Viable Product) project developed for Integrative Programming Class. 
                      A web-app platform designed to showcase your inventions.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400">React</span>
                        <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400">Node.js</span>
                        <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400">Express</span>
                        <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-400">MongoDB</span>
                      </div>
                      <a 
                        href="#" 
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 space-y-8">
                {[1, 2].map((project) => (
                  <div 
                    key={project}
                    className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={`${project === 1 ? '/src/Timekeeper.jpg' : '/src/Paro1.png'}?auto=format&fit=crop&w=600&q=80`}
                        alt={`Project ${project}`}
                        className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project === 1 ? 'Timekeeper' : 'Paro'}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">
                        {project === 1 
                          ? 'A time management application prototype for tracking tasks and productivity of the sudents.'
                          : 'A community subdivision application prototype designed to streamline resident management, visitor tracking, and community announcements.'}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {project === 1 ? (
                            <>
                              <span className="px-2 py-1 rounded-full text-xs bg-purple-500/10 text-purple-400">Figma</span>

                            </>
                          ) : (
                            <>
                              <span className="px-2 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400">Figma</span>   
                </>
                          )}
                        </div>
                        <a 
                          href="#" 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
              Have an exciting project in mind? Let's build something amazing together.
              Drop me a message and I'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={copyEmail}
                className="group bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center gap-3"
              >
                <Mail className="text-blue-400" size={20} />
                <span>{isEmailCopied ? 'Email Copied!' : 'josephgulmatico@gmail.com'}</span>
              </button>
              <a 
                href="https://github.com/Zoro330" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center gap-3"
              >
                <Github className="text-blue-400" size={20} />
                <span>View GitHub</span>
              </a>
              <a 
                href="https://www.facebook.com/josh15235788" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center gap-3"
              >
                <Facebook className="text-blue-400" size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;