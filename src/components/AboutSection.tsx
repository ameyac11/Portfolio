import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Target, Lightbulb, Users, Coffee, Clock, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle tab change with smooth transition
  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return; // Don't animate if same tab

    setIsTransitioning(true);

    // Small delay to allow fade out, then change content and fade in
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150);
  };

  // Animated counters
  useEffect(() => {
    const targets = { experience: 1, projects: 10, technologies: 15 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const timers = Object.keys(targets).map(key => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);

      return timer;
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const achievements = [
    { icon: <Award className="text-yellow-500" />, title: "Excellence", description: "Consistent high-quality deliverables" },
    { icon: <Target className="text-blue-500" />, title: "Goal-Oriented", description: "Focus on measurable outcomes" },
    { icon: <Lightbulb className="text-orange-500" />, title: "Innovation", description: "Creative problem-solving approach" },
    { icon: <Users className="text-green-500" />, title: "Collaboration", description: "Strong team player and communicator" }
  ];

  const personalFacts = [
    { icon: <Coffee className="text-amber-600" />, label: "Coffee consumed", value: "∞ cups" },
    { icon: <Clock className="text-blue-600" />, label: "Coding since", value: "2020" },
    { icon: <MapPin className="text-red-500" />, label: "Location", value: "India" },
    { icon: <Calendar className="text-purple-500" />, label: "Available", value: "For hire" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-primary rounded-full pulse-animation"></div>
            <span className="text-primary font-medium">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 fade-in stagger-2">
          <div className="flex gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            {[
              { id: 'story', label: 'My Story' },
              { id: 'skills', label: 'Values' },
              { id: 'facts', label: 'Fun Facts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Code Screenshot */}
          <div className="relative fade-in stagger-3">
            <div className="relative group">
              {/* Code Editor Screenshot */}
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="w-full h-full relative bg-gray-900 p-6">
                  {/* Code Editor Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 ml-4">ai_model.py</div>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-500"># AI Model Implementation</div>
                    <div><span className="text-purple-400">import</span> <span className="text-blue-400">torch</span></div>
                    <div><span className="text-purple-400">import</span> <span className="text-blue-400">torch.nn</span> <span className="text-purple-400">as</span> <span className="text-blue-400">nn</span></div>
                    <div><span className="text-purple-400">from</span> <span className="text-blue-400">transformers</span> <span className="text-purple-400">import</span> <span className="text-yellow-400">AutoModel</span></div>
                    <div className="mt-2"></div>
                    <div><span className="text-purple-400">class</span> <span className="text-green-400">CustomAIModel</span><span className="text-gray-300">(</span><span className="text-blue-400">nn.Module</span><span className="text-gray-300">):</span></div>
                    <div className="ml-4"><span className="text-purple-400">def</span> <span className="text-yellow-400">__init__</span><span className="text-gray-300">(self):</span></div>
                    <div className="ml-8"><span className="text-blue-400">super</span><span className="text-gray-300">().</span><span className="text-yellow-400">__init__</span><span className="text-gray-300">()</span></div>
                    <div className="ml-8"><span className="text-gray-300">self.model = </span><span className="text-yellow-400">AutoModel</span><span className="text-gray-300">()</span></div>
                    <div className="mt-2 ml-4"><span className="text-purple-400">def</span> <span className="text-yellow-400">forward</span><span className="text-gray-300">(self, x):</span></div>
                    <div className="ml-8"><span className="text-purple-400">return</span> <span className="text-gray-300">self.model(x)</span></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Available for Hire Badge */}
              <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 text-sm font-bold pulse-animation">
                💼 Available for Hire
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 floating-animation">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{counters.experience}+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 floating-animation" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{counters.projects}+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Tab Content with smooth transitions */}
            <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold font-heading">My Journey</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p className="text-lg leading-relaxed">
                      I'm an aspiring AI and Machine Learning developer with a passion for creating intelligent
                      solutions that solve real-world problems. My journey began in 2020 when I first discovered
                      the fascinating world of artificial intelligence.
                    </p>
                    <p className="leading-relaxed">
                      With over a year of hands-on experience, I've worked on diverse projects ranging from
                      neural network models to computer vision applications and natural language processing systems.
                      I specialize in PyTorch and am continuously expanding my knowledge in data engineering and MLOps.
                    </p>
                    <p className="leading-relaxed">
                      What drives me is the endless potential of AI to transform industries and improve lives.
                      I'm always eager to learn new technologies and stay at the forefront of this rapidly
                      evolving field.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Passionate Learner', 'Problem Solver', 'Team Player', 'Innovation-Driven'].map((trait, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1 hover:scale-105 transition-transform">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold font-heading">Core Values</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform">
                            {achievement.icon}
                          </div>
                          <h4 className="font-semibold mb-2">{achievement.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'facts' && (
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold font-heading">Fun Facts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {personalFacts.map((fact, index) => (
                      <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform">
                              {fact.icon}
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{fact.label}</div>
                              <div className="font-semibold">{fact.value}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
