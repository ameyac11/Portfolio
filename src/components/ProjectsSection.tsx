import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Play, Star, Calendar, Users, TrendingUp, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Define tag colors
  const tagColors: Record<string, string> = {
    'Pytorch': 'bg-orange-600 hover:bg-orange-700',
    'Python': 'bg-blue-600 hover:bg-blue-700',
    'MongoDB': 'bg-green-600 hover:bg-green-700',
    'Stripe': 'bg-purple-600 hover:bg-purple-700',
    'StableDiffusion': 'bg-indigo-600 hover:bg-indigo-700',
    'Firebase': 'bg-amber-600 hover:bg-amber-700',
    'HTML': 'bg-red-600 hover:bg-red-700',
    'CSS': 'bg-blue-500 hover:bg-blue-600',
    'JavaScript': 'bg-yellow-500 hover:bg-yellow-600',
    'React': 'bg-cyan-600 hover:bg-cyan-700',
    'TypeScript': 'bg-blue-700 hover:bg-blue-800',
    'TailwindCSS': 'bg-teal-600 hover:bg-teal-700',
    'NextJS': 'bg-black hover:bg-gray-800',
    'CNN': 'bg-purple-700 hover:bg-purple-800',
    'Vite': 'bg-yellow-600 hover:bg-yellow-700',
    'FastAPI': 'bg-teal-700 hover:bg-teal-800',
    'PostgreSQL': 'bg-blue-800 hover:bg-blue-900',
    'Redis': 'bg-red-700 hover:bg-red-800',
    'Docker': 'bg-blue-600 hover:bg-blue-700',
    'VectorDB': 'bg-indigo-700 hover:bg-indigo-800',
    'RAG': 'bg-purple-600 hover:bg-purple-700',
    'LLM': 'bg-violet-600 hover:bg-violet-700',
    'AI': 'bg-pink-600 hover:bg-pink-700',
  };

  const projects = [
    {
      title: 'DataNesTX',
      description: 'Unified AI Data Orchestration & Intelligence Platform. An AI-driven data orchestration platform designed to unify, manage, and optimize data flows across modern AI systems. Acts as a central intelligence layer connecting raw data sources, vector databases, LLMs, and downstream applications into a single, scalable pipeline with efficient data ingestion, transformation, caching, and retrieval.',
      image: '/DataNesTX_Logo_Dark_Frontend.png',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'VectorDB', 'LLM'],
      demoLink: 'https://datanestx.tech',
      codeLink: '#',
      category: 'AI/ML',
      status: 'In Progress',
      featured: true,
      stats: { stars: 72, contributors: 2, lastUpdate: '2026-01' },
      highlights: ['Centralized Data Layer', 'RAG Pipeline', 'Model-Agnostic']
    },
    {
      title: 'CorpusAI',
      description: 'Intelligent Context & Knowledge Management for LLMs. A context-intelligence platform built to solve managing large, dynamic, and reusable knowledge across LLM interactions. Features structured storage, retrieval, and lifecycle management of prompts, documents, embeddings, and conversational context with smart caching and TTL-based memory.',
      image: '/CorpusAI_1.png',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'VectorDB', 'LLM', 'RAG'],
      demoLink: 'https://corpusai.datanestx.tech',
      codeLink: '#',
      category: 'AI/ML',
      status: 'In Progress',
      featured: true,
      stats: { stars: 65, contributors: 1, lastUpdate: '2026-01' },
      highlights: ['Context Caching', 'Token Efficient', 'Multi-Agent Systems', 'RAG']
    },
    {
      title: 'DataForgeAI',
      description: 'AI-First Data Processing & Transformation Engine. An AI-centric data processing engine that transforms raw, unstructured, or semi-structured data into AI-ready formats. Automates data cleaning, normalization, enrichment, and embedding generation, enabling faster deployment of machine learning and LLM-powered applications.',
      image: '/DataNesTX_Logo_Dark_Frontend.png',
      tags: ['Python', 'Pytorch', 'FastAPI', 'MongoDB', 'VectorDB', 'AI'],
      demoLink: 'https://datanestx.tech',
      codeLink: '#',
      category: 'AI/ML',
      status: 'In Progress',
      featured: true,
      stats: { stars: 58, contributors: 1, lastUpdate: '2026-01' },
      highlights: ['Automated Processing', 'Scalable', 'ML Integration']
    },
    {
      title: 'Custom CNN Model',
      description: 'A comprehensive deep learning project featuring a custom Convolutional Neural Network architecture for advanced image classification. Includes comprehensive data preprocessing pipelines, model training optimization, thorough evaluation metrics, and production-ready deployment solutions for real-world image recognition applications.',
      image: '/cnn.png',
      tags: ['Pytorch', 'Python', 'CNN'],
      demoLink: '#',
      codeLink: '#',
      category: 'AI/ML',
      status: 'Completed',
      featured: false,
      stats: { stars: 45, contributors: 3, lastUpdate: '2024-08' },
      highlights: ['Custom Architecture', 'High Accuracy', 'Scalable Solution']
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing professional skills, comprehensive project portfolio, and seamless contact integration. Built with cutting-edge technologies and featuring elegant animations, optimized performance, and exceptional user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'TailwindCSS'],
      demoLink: '#',
      codeLink: '#',
      category: 'Web Development',
      status: 'Completed',
      featured: false,
      stats: { stars: 28, contributors: 1, lastUpdate: '2024-08' },
      highlights: ['Modern Design', 'Responsive', 'Fast Performance']
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'AI/ML', name: 'AI & ML', count: projects.filter(p => p.category === 'AI/ML').length },
    { id: 'Web Development', name: 'Web Dev', count: projects.filter(p => p.category === 'Web Development').length },
    { id: 'featured', name: 'Featured', count: projects.filter(p => p.featured).length }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : selectedFilter === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-primary rounded-full pulse-animation"></div>
            <span className="text-primary font-medium">My work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mt-4">
            Explore my latest projects showcasing expertise in AI, Machine Learning, and Web Development
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center mb-12 fade-in stagger-2 px-4">
          <div className="flex flex-wrap justify-center gap-2 p-2 lg:p-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg max-w-full">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 text-xs lg:text-base ${selectedFilter === filter.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'
                  }`}
              >
                <Filter className="w-3 lg:w-4 h-3 lg:h-4 flex-shrink-0" />
                <span className="truncate max-w-[80px] lg:max-w-none">{filter.name}</span>
                <Badge variant="secondary" className="ml-0 lg:ml-1 px-1 lg:px-1.5 py-0 text-xs min-w-[18px] lg:min-w-[20px] text-center">
                  {filter.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 project-card overflow-hidden bg-white dark:bg-gray-800 fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={`${project.status === 'Completed'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-blue-500 hover:bg-blue-600'
                      } text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>

              </div>

              <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  {/* Stars removed as per request */}
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <Badge
                      key={highlightIndex}
                      variant="outline"
                      className="text-xs px-2 py-1 border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      className={cn(
                        "text-white font-medium hover:scale-105 transition-all text-xs",
                        tagColors[tag] || "bg-gray-600 hover:bg-gray-700"
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.stats.contributors}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.stats.lastUpdate}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0 relative z-20">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in stagger-6">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
            <TrendingUp className="w-6 h-6 text-primary" />
            <div>
              <p className="font-semibold">Interested in collaborating?</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Let's build something amazing together</p>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
