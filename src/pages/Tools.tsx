
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import {
    Code2, Brain, BarChart, Boxes,
    ChartBar, LineChart, Microscope, Binary, PieChart, Star,
    TrendingUp, Sparkles, Zap, MessageSquare, GitBranch, Eye, Rocket, Cloud, Database
} from 'lucide-react';
import {
    SiPython, SiCplusplus, SiPostgresql, SiMongodb, SiJavascript, SiHtml5, SiCss3,
    SiPytorch, SiTensorflow, SiKeras, SiNumpy, SiPandas, SiOpencv, SiScikitlearn, SiHuggingface,
    SiGithubcopilot, SiOpenai, SiAnthropic, SiGoogle,
    SiJupyter, SiGithub, SiGooglecolab, SiKaggle, SiDocker, SiRedis
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Tools = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills = [
        {
            category: 'Programming Languages',
            categoryId: 'programming',
            items: [
                { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 95, description: 'Advanced - AI/ML & Data Science' },
                { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, level: 85, description: 'Core - System programming & algorithms' },
                { name: 'SQL', icon: <SiPostgresql className="text-[#336791]" />, level: 80, description: 'Database queries and optimization' },
                { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 70, description: 'NoSQL database' },
                { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 70, description: 'ES6+ and modern frameworks' },
                { name: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" />, level: 75, description: 'Semantic markup and modern HTML5' },
                { name: 'CSS', icon: <SiCss3 className="text-[#1572B6]" />, level: 70, description: 'Styling and responsive design' }
            ]
        },
        {
            category: 'AI & Machine Learning',
            categoryId: 'ai-ml',
            items: [
                { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" />, level: 92, description: 'Deep learning framework' },
                { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" />, level: 90, description: 'Machine learning platform' },
                { name: 'Neural Networks', icon: <SiKeras className="text-[#D00000]" />, level: 90, description: 'CNN, RNN, Transformers' },
                { name: 'NumPy', icon: <SiNumpy className="text-[#013243]" />, level: 93, description: 'Numerical computing' },
                { name: 'Pandas', icon: <SiPandas className="text-[#150458]" />, level: 91, description: 'Data manipulation and analysis' },
                { name: 'OpenCV', icon: <SiOpencv className="text-[#5C3EE8]" />, level: 88, description: 'Computer vision and image processing' },
                { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-[#F7931E]" />, level: 90, description: 'Traditional ML algorithms' },
                { name: 'Transformers', icon: <SiHuggingface className="text-[#FFD21E]" />, level: 85, description: 'NLP and language models' },
                { name: 'Matplotlib', icon: <PieChart className="text-[#11557c]" />, level: 85, description: 'Data visualization' },
                { name: 'Seaborn', icon: <ChartBar className="text-[#11557c]" />, level: 83, description: 'Statistical data visualization' }
            ]
        },
        {
            category: 'AI Tools & Platforms',
            categoryId: 'ai-tools',
            items: [
                { name: 'Antigravity', icon: <Rocket className="text-orange-500" />, level: 95, description: 'Advanced Agentic AI Coding Assistant' },
                { name: 'GitHub Copilot', icon: <SiGithubcopilot className="text-foreground" />, level: 90, description: 'AI pair programming' },
                { name: 'ChatGPT', icon: <SiOpenai className="text-[#412991]" />, level: 92, description: 'AI-powered conversations and coding' },
                { name: 'Perplexity', icon: <Microscope className="text-[#20B2AA]" />, level: 85, description: 'AI-powered research and search' }
            ]
        },
        {
            category: 'Development Tools',
            categoryId: 'tools',
            items: [
                { name: 'VS Code IDE', icon: <VscVscode className="text-[#007ACC]" />, level: 95, description: 'Primary development environment' },
                { name: 'Jupyter', icon: <SiJupyter className="text-[#F37626]" />, level: 90, description: 'Interactive development' },
                { name: 'Git/GitHub', icon: <SiGithub className="text-foreground" />, level: 85, description: 'Version control and collaboration' },
                { name: 'Colab', icon: <SiGooglecolab className="text-[#F9AB00]" />, level: 85, description: 'Cloud-based development' },
                { name: 'Kaggle', icon: <SiKaggle className="text-[#20BEFF]" />, level: 80, description: 'Data science competitions' },
                { name: 'Hugging Face', icon: <SiHuggingface className="text-[#FFD21E]" />, level: 75, description: 'Pre-trained models' }
            ]
        },
        {
            category: 'Cloud & Deployment',
            categoryId: 'cloud',
            items: [
                { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, level: 85, description: 'Containerization & Orchestration' },
                { name: 'Redis', icon: <SiRedis className="text-[#DC382D]" />, level: 80, description: 'In-memory data structure store' },
                { name: 'Qdrant', icon: <Database className="text-[#D91656]" />, level: 82, description: 'Vector Database for AI' }
            ]
        },
        {
            category: 'Specialized Skills',
            categoryId: 'specialized',
            items: [
                { name: 'Deep Learning', icon: <Brain className="text-blue-600" />, level: 93, description: 'Advanced neural architectures' },
                { name: 'Computer Vision', icon: <Eye className="text-green-600" />, level: 90, description: 'Image and video analysis' },
                { name: 'Data Science', icon: <BarChart className="text-blue-500" />, level: 92, description: 'Data analysis and insights' },
                { name: 'Data Analysis', icon: <ChartBar className="text-teal-500" />, level: 90, description: 'Data processing and insights' },
                { name: 'NLP', icon: <MessageSquare className="text-cyan-500" />, level: 88, description: 'Natural language processing' },
                { name: 'DSA', icon: <Binary className="text-blue-500" />, level: 82, description: 'Data structures and algorithms' },
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
        { id: 'cloud', name: 'Cloud/DevOps', icon: <Cloud className="w-4 h-4" /> },
        { id: 'tools', name: 'Dev Tools', icon: <Boxes className="w-4 h-4" /> },
        { id: 'specialized', name: 'Specialized', icon: <TrendingUp className="w-4 h-4" /> }
    ];

    const filteredSkills = selectedCategory === 'all'
        ? skills
        : skills.filter(skillGroup => skillGroup.categoryId === selectedCategory);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container px-4 mx-auto max-w-7xl">

                    {/* Header Section */}
                    <div className="flex flex-col items-center mb-20 fade-in relative">
                        {/* Ambient Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-secondary/30 rounded-full blur-[100px] -z-10 pointer-events-none opacity-50 dark:opacity-30"></div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-6 shadow-sm hover:border-primary/30 transition-colors cursor-default">
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-sm font-medium text-foreground/80">Toolset</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60">
                            ToolStack
                        </h1>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-foreground to-transparent rounded-full mb-6"></div>

                        <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed">
                            A curated collection of modern technologies and advanced tools I utilize to build exceptional digital experiences.
                        </p>
                    </div>

                    {/* Filter Tabs - Modern Floating Pill Design */}
                    <div className="flex justify-center mb-20 fade-in stagger-1 sticky top-24 z-30">
                        <div className="flex flex-wrap justify-center gap-2 p-2 bg-background/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out whitespace-nowrap overflow-hidden
                                        ${selectedCategory === category.id
                                            ? 'text-background shadow-lg'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10'
                                        }`}
                                >
                                    {selectedCategory === category.id && (
                                        <div className="absolute inset-0 bg-foreground rounded-full -z-10 animate-in fade-in zoom-in duration-300"></div>
                                    )}
                                    <div className="flex items-center gap-2 relative z-10">
                                        {category.icon}
                                        <span>{category.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="space-y-24">
                        {filteredSkills.map((skillGroup, groupIndex) => (
                            <div key={skillGroup.categoryId} className="fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
                                {/* Category Label */}
                                <div className="flex items-center gap-4 mb-10 pl-2 opacity-80 group">
                                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-colors duration-700"></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-500">
                                        {skillGroup.category}
                                    </span>
                                    <div className="h-px flex-grow bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-colors duration-700"></div>
                                </div>

                                {/* Skills Grid - Masonry-ish Feel */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-12">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="group relative flex flex-col items-center"
                                            onMouseEnter={() => setHoveredSkill(`${skillGroup.categoryId}-${skillIndex}`)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            {/* Icon Container with Glow */}
                                            <div className="relative mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-secondary/30 border border-white/5 dark:border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-primary/20 z-10">

                                                <div className="relative z-10 w-12 h-12 flex items-center justify-center transition-transform duration-500">
                                                    {React.cloneElement(skill.icon as React.ReactElement, {
                                                        className: `${(skill.icon as React.ReactElement).props.className || ''} w-full h-full transition-transform duration-500`
                                                    })}
                                                </div>

                                                {/* Percentage Ring (Subtle) */}
                                                <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" strokeDasharray="300" strokeDashoffset={300 - (300 * skill.level / 100)} />
                                                </svg>
                                            </div>

                                            {/* Text Content */}
                                            <div className="text-center space-y-1 relative z-20">
                                                <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {skill.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2">
                                                    {skill.description}
                                                </p>
                                            </div>

                                            {/* Hover Detail Card (Floating) - Optional if mouse interaction is preferred */}
                                            {/* This space intentionally left clean for modern look */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-40 text-center fade-in">
                        <p className="text-muted-foreground mb-6">Want to see these tools in action?</p>
                        <a href="/projects" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors border-b border-primary/20 hover:border-primary pb-0.5">
                            Browse Projects <TrendingUp className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Tools;
