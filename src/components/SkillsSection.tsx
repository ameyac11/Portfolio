import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileCode,
  Code2,
  Layers,
  GitBranch,
  FileText,
  Eye,
  Brain,
  Database,
  BarChart,
  Cpu,
  Boxes,
  Braces,
  Server,
  ChartBar,
  LineChart,
  Bot,
  Microscope,
  Binary,
  SmilePlus,
  PieChart,
  Star,
  TrendingUp,
  Sparkles,
  Zap,
  Camera,
  MessageSquare,
  Palette,
  Music,
  Video
} from 'lucide-react';

const SkillsSection = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Check if dark theme is active
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Check on mount
    checkTheme();

    // Listen for theme changes
    const handleThemeChange = () => {
      checkTheme();
    };

    document.addEventListener('themeChanged', handleThemeChange);
    return () => {
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  const skills = [
    {
      category: 'Programming Languages',
      categoryId: 'programming',
      items: [
        { name: 'Python', icon: <Code2 className="text-blue-600" />, level: 95, description: 'Advanced - AI/ML & Data Science' },
        { name: 'C++', icon: <Code2 className="text-purple-500" />, level: 85, description: 'Core - System programming & algorithms' },
        { name: 'SQL', icon: <Database className="text-blue-400" />, level: 80, description: 'Database queries and optimization' },
        { name: 'MongoDB', icon: <Database className="text-green-500" />, level: 70, description: 'NoSQL database' },
        { name: 'JavaScript', icon: <Braces className="text-yellow-500" />, level: 70, description: 'ES6+ and modern frameworks' },
        { name: 'HTML', icon: <FileCode className="text-orange-500" />, level: 75, description: 'Semantic markup and modern HTML5' },
        { name: 'CSS', icon: <FileCode className="text-blue-500" />, level: 70, description: 'Styling and responsive design' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      categoryId: 'ai-ml',
      items: [
        { name: 'PyTorch', icon: <Layers className="text-orange-600" />, level: 92, description: 'Deep learning framework' },
        { name: 'TensorFlow', icon: <Brain className="text-orange-500" />, level: 90, description: 'Machine learning platform' },
        { name: 'Neural Networks', icon: <Brain className="text-indigo-500" />, level: 90, description: 'CNN, RNN, Transformers' },
        { name: 'NumPy', icon: <BarChart className="text-blue-400" />, level: 93, description: 'Numerical computing' },
        { name: 'Pandas', icon: <Database className="text-green-500" />, level: 91, description: 'Data manipulation and analysis' },
        { name: 'OpenCV', icon: <Eye className="text-green-600" />, level: 88, description: 'Computer vision and image processing' },
        { name: 'Scikit-Learn', icon: <LineChart className="text-blue-400" />, level: 90, description: 'Traditional ML algorithms' },
        { name: 'Transformers', icon: <Bot className="text-pink-500" />, level: 85, description: 'NLP and language models' },
        { name: 'Matplotlib', icon: <PieChart className="text-blue-500" />, level: 85, description: 'Data visualization' },
        { name: 'Seaborn', icon: <ChartBar className="text-purple-400" />, level: 83, description: 'Statistical data visualization' }
      ]
    },
    {
      category: 'AI Tools & Platforms',
      categoryId: 'ai-tools',
      items: [
        { name: 'GitHub Copilot', icon: <Code2 className="text-purple-500" />, level: 90, description: 'AI pair programming' },
        { name: 'ChatGPT', icon: <MessageSquare className="text-green-500" />, level: 92, description: 'AI-powered conversations and coding' },
        { name: 'Claude', icon: <Bot className="text-orange-500" />, level: 88, description: 'Advanced AI assistant for complex tasks' },
        { name: 'Cursor IDE', icon: <Zap className="text-blue-500" />, level: 85, description: 'AI-powered code editor' },
        { name: 'Perplexity', icon: <Microscope className="text-green-600" />, level: 85, description: 'AI-powered research and search' },
        { name: 'Stable Diffusion', icon: <Sparkles className="text-indigo-500" />, level: 82, description: 'Open-source image generation' }
      ]
    },
    {
      category: 'Development Tools',
      categoryId: 'tools',
      items: [
        { name: 'VS Code IDE', icon: <Code2 className="text-blue-500" />, level: 95, description: 'Primary development environment' },
        { name: 'Jupyter', icon: <FileText className="text-orange-500" />, level: 90, description: 'Interactive development' },
        { name: 'Git/GitHub', icon: <GitBranch className="text-gray-600" />, level: 85, description: 'Version control and collaboration' },
        { name: 'Colab', icon: <Code2 className="text-yellow-500" />, level: 85, description: 'Cloud-based development' },
        { name: 'Kaggle', icon: <ChartBar className="text-cyan-500" />, level: 80, description: 'Data science competitions' },
        { name: 'Hugging Face', icon: <SmilePlus className="text-pink-400" />, level: 75, description: 'Pre-trained models' },
        { name: 'Docker', icon: <Boxes className="text-blue-600" />, level: 70, description: 'Containerization' }
      ]
    },
    {
      category: 'Specialized Skills',
      categoryId: 'specialized',
      items: [
        { name: 'Deep Learning', icon: <Brain className="text-indigo-500" />, level: 93, description: 'Advanced neural architectures' },
        { name: 'Computer Vision', icon: <Eye className="text-green-600" />, level: 90, description: 'Image and video analysis' },
        { name: 'Data Science', icon: <BarChart className="text-blue-500" />, level: 92, description: 'Data analysis and insights' },
        { name: 'Data Analysis', icon: <ChartBar className="text-teal-500" />, level: 90, description: 'Data processing and insights' },
        { name: 'NLP', icon: <MessageSquare className="text-purple-500" />, level: 88, description: 'Natural language processing' },
        { name: 'DSA', icon: <Binary className="text-purple-500" />, level: 82, description: 'Data structures and algorithms' },
        { name: 'Research', icon: <Microscope className="text-primary" />, level: 87, description: 'Academic research and innovation' },
        { name: 'MLOps', icon: <GitBranch className="text-teal-500" />, level: 75, description: 'ML pipeline deployment' }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Star className="w-4 h-4" /> },
    { id: 'programming', name: 'Programming', icon: <Code2 className="w-4 h-4" /> },
    { id: 'ai-ml', name: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'ai-tools', name: 'AI Tools', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'tools', name: 'Dev Tools', icon: <Boxes className="w-4 h-4" /> },
    { id: 'specialized', name: 'Specialized', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skillGroup => skillGroup.categoryId === selectedCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-64 h-64 ${isDark ? 'bg-primary/5' : 'bg-primary/10'} rounded-full blur-3xl floating-animation`}></div>
        <div className={`absolute bottom-20 right-10 w-80 h-80 ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl floating-animation`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-primary rounded-full pulse-animation"></div>
            <span className="text-primary font-medium">My expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">Skills & Technologies</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 fade-in stagger-2">
          <div className="flex flex-wrap gap-2 p-2 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'
                  }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredSkills.map((skillGroup, index) => (
            <Card
              key={skillGroup.categoryId}
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                } hover:border-primary hover:-translate-y-2 skill-card fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`}>
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary">{skillGroup.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                      onMouseEnter={() => setHoveredSkill(`${skillGroup.categoryId}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`${isDark
                          ? 'bg-gray-700/50 hover:bg-gray-600/70 border-gray-600'
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                        } p-3 lg:p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden`}>

                        {/* Skill Progress Bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl transition-all duration-1000"
                          style={{ width: hoveredSkill === `${skillGroup.categoryId}-${skillIndex}` ? `${skill.level}%` : '0%' }}></div>

                        <div className="flex items-center gap-2 lg:gap-3 mb-2">
                          <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-xs lg:text-sm truncate">{skill.name}</span>
                        </div>

                        {/* Skill Level Badge */}
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className={`text-xs px-2 py-0.5 ${skill.level >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                                skill.level >= 80 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                                  skill.level >= 70 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                                    'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                              }`}
                          >
                            {skill.level >= 90 ? 'Expert' :
                              skill.level >= 80 ? 'Advanced' :
                                skill.level >= 70 ? 'Intermediate' : 'Learning'}
                          </Badge>
                          <span className="text-xs font-bold text-primary">{skill.level}%</span>
                        </div>

                        {/* Tooltip */}
                        {hoveredSkill === `${skillGroup.categoryId}-${skillIndex}` && (
                          <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                            } text-xs rounded-lg shadow-lg border whitespace-nowrap z-10 animate-fade-in`}>
                            {skill.description}
                            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent ${isDark ? 'border-t-gray-900' : 'border-t-white'
                              }`}></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center fade-in stagger-6">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 lg:px-8 py-4 lg:py-6 rounded-2xl max-w-2xl mx-auto ${isDark ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg`}>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">35+</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className={`hidden sm:block w-px h-8 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className={`sm:hidden w-8 h-px ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">5</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Specializations</div>
            </div>
            <div className={`hidden sm:block w-px h-8 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className={`sm:hidden w-8 h-px ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary">1+</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
