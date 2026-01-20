
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ExternalLink, Star, Calendar, Users, TrendingUp, Filter, ChevronLeft, ChevronRight, X, LayoutList, Github } from 'lucide-react';

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [activeScreenshot, setActiveScreenshot] = useState<{ [key: number]: number }>({});
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    // Monochrome/Neutral tag styles
    const tagStyles = "bg-secondary text-secondary-foreground border-border/50";

    const projects = [
        {
            title: 'DataNesTX',
            description: 'Unified AI Data Orchestration & Intelligence Platform. An AI-driven data orchestration platform designed to unify, manage, and optimize data flows across modern AI systems. Acts as a central intelligence layer connecting raw data sources, vector databases, LLMs, and downstream applications into a single, scalable pipeline.',
            screenshots: [
                '/DataNesTX_Logo_Dark_Frontend.png',
                '/DataNesTX_Logo_Light_Frontend.png'
            ],
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
            description: 'Intelligent Context & Knowledge Management for LLMs. A context-intelligence platform built to solve managing large, dynamic, and reusable knowledge across LLM interactions. Features structured storage, retrieval, and lifecycle management of prompts, documents, embeddings, and conversational context with smart caching.',
            screenshots: [
                '/CorpusAI_1.png',
                '/DataNesTX_Logo_Dark_Frontend.png',
                '/DataNesTX_Logo_Light_Frontend.png'
            ],
            tags: ['Python', 'FastAPI', 'PostgreSQL', 'VectorDB', 'LLM', 'RAG'],
            demoLink: 'https://corpusai.datanestx.tech',
            codeLink: '#',
            category: 'AI/ML',
            status: 'Completed',
            featured: true,
            stats: { stars: 65, contributors: 1, lastUpdate: '2026-01' },
            highlights: ['Context Caching', 'Token Efficient', 'Multi-Agent Systems', 'RAG']
        },
        {
            title: 'DataForgeAI',
            description: 'AI-First Data Processing & Transformation Engine. An AI-centric data processing engine that transforms raw, unstructured, or semi-structured data into AI-ready formats. Automates data cleaning, normalization, enrichment, and embedding generation, enabling faster deployment of machine learning and LLM-powered applications.',
            screenshots: [
                '/DataNesTX_Logo_Dark_Frontend.png',
                '/DataNesTX_Logo_Light_Frontend.png'
            ],
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
            title: 'LiteNet: Custom CNN Model',
            description: 'A comprehensive deep learning project featuring a custom Convolutional Neural Network architecture for advanced image classification. Includes comprehensive data preprocessing pipelines, model training optimization, thorough evaluation metrics, and production-ready deployment solutions.',
            screenshots: [
                '/Litenet_1.png',
                '/Litenet_2.png',
                '/Litenet_3.png',
                '/Litenet_4.png'
            ],
            tags: ['Pytorch', 'Python', 'CNN'],
            demoLink: 'https://litenet.vercel.app',
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
            screenshots: [
                '/P_1.png'
            ],
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

    const nextScreenshot = (projectIndex: number, totalScreenshots: number) => {
        setActiveScreenshot(prev => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalScreenshots
        }));
    };

    const prevScreenshot = (projectIndex: number, totalScreenshots: number) => {
        setActiveScreenshot(prev => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalScreenshots) % totalScreenshots
        }));
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 md:pt-32 pb-24 container px-4 md:px-8 mx-auto max-w-6xl">
                {/* Minimal Header */}
                <div className="flex flex-col items-center mb-16 md:mb-24 text-center space-y-4 md:space-y-6 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs md:text-sm font-medium">
                        <LayoutList className="w-3.5 md:w-4 h-3.5 md:h-4" />
                        <span>Portfolio</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        Featured Projects
                    </h1>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12 md:mb-16 px-4">
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 md:p-1 bg-secondary/30 rounded-2xl md:rounded-lg border border-border/30">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setSelectedFilter(filter.id)}
                                className={cn(
                                    "px-3 md:px-4 py-2 rounded-xl md:rounded-md text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 md:gap-2",
                                    selectedFilter === filter.id
                                        ? "bg-foreground text-background shadow-md scale-105"
                                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                )}
                            >
                                <span className="truncate">{filter.name}</span>
                                <span className={cn(
                                    "text-[10px] md:text-xs px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center",
                                    selectedFilter === filter.id ? "bg-background text-foreground" : "bg-secondary text-muted-foreground"
                                )}>
                                    {filter.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Zig-Zag List View */}
                <div className="space-y-24 md:space-y-32">
                    {filteredProjects.map((project, index) => {
                        const currentScreenshot = activeScreenshot[index] || 0;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group flex flex-col items-center gap-6 md:gap-8 lg:gap-16 pb-12 md:pb-16 lg:pb-20 border-b border-border last:border-0 fade-in",
                                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* IMAGE COLUMN (5 cols equivalent -> ~45%) */}
                                <div className="w-full lg:w-[45%] relative rounded-3xl overflow-hidden bg-secondary/10 border border-border shadow-sm group-hover:shadow-md transition-all duration-500 aspect-[4/3] md:aspect-video lg:aspect-[4/3] max-h-[350px] md:max-h-none">
                                    <div
                                        className="flex h-full transition-transform duration-500 ease-in-out"
                                        style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
                                    >
                                        {project.screenshots.map((src, i) => (
                                            <div key={i} className="min-w-full h-full relative">
                                                <img
                                                    src={src}
                                                    alt={`${project.title} - view ${i + 1}`}
                                                    className="w-full h-full object-contain cursor-pointer hover:opacity-95 transition-opacity bg-black/50"
                                                    onClick={() => setLightboxImage(src)}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation */}
                                    {project.screenshots.length > 1 && (
                                        <>
                                            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); prevScreenshot(index, project.screenshots.length); }}
                                                    className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background shadow-sm backdrop-blur-sm transition-colors pointer-events-auto"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); nextScreenshot(index, project.screenshots.length); }}
                                                    className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background shadow-sm backdrop-blur-sm transition-colors pointer-events-auto"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {/* Dots */}
                                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                                                {project.screenshots.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={cn(
                                                            "w-1.5 h-1.5 rounded-full shadow-sm transition-all",
                                                            currentScreenshot === i ? "bg-white w-4" : "bg-white/50"
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* CONTENT COLUMN (7 cols equivalent -> ~55%) */}
                                <div className="w-full lg:w-[55%] flex flex-col space-y-6">
                                    {/* Header */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded">
                                                {project.category}
                                            </span>
                                            {project.featured && (
                                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground bg-primary/10 px-3 py-1.5 rounded">
                                                    <Star className="w-3 h-3 fill-current" /> Featured
                                                </span>
                                            )}
                                            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5 rounded">
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.highlights.map((highlight, i) => (
                                            <Badge key={i} variant="outline" className="border-border text-xs font-medium text-muted-foreground py-1.5 px-3">
                                                {highlight}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={cn(
                                                    "px-3 py-1.5 rounded text-xs md:text-sm font-medium transition-colors",
                                                    tagStyles
                                                )}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-6 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                        <Button asChild className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-foreground text-background hover:bg-foreground/90 font-medium transition-transform active:scale-95 shadow-lg">
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                                                Live Demo
                                            </a>
                                        </Button>
                                        <Button asChild variant="outline" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base border-border hover:bg-secondary/50 transition-transform active:scale-95">
                                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                                                View Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center border-t border-border pt-16">
                    <div className="inline-flex flex-col items-center gap-4 max-w-2xl mx-auto">
                        <TrendingUp className="w-8 h-8 text-foreground mb-1" />
                        <h3 className="text-2xl font-bold">Have a project in mind?</h3>
                        <p className="text-muted-foreground">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <Button asChild size="lg" className="rounded-full px-8 mt-4 bg-foreground text-background hover:bg-foreground/90">
                            <Link to="/contact">Let's Connect</Link>
                        </Button>
                    </div>
                </div>
            </main>

            {/* Lightbox Modal Window */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[60] bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in-95 duration-300"
                    onClick={() => setLightboxImage(null)}
                >
                    {/* Modal Window Container */}
                    <div
                        className="relative bg-zinc-900 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-zinc-800 max-w-5xl w-full flex flex-col overflow-hidden max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Bar */}
                        <div className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-zinc-900/50 flex-shrink-0">
                            <div className="flex flex-col gap-0.5">
                                <h3 className="text-lg font-bold text-zinc-100 tracking-tight">Project Preview</h3>
                                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest px-1">Visual Intelligence</p>
                            </div>
                            <button
                                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600 shadow-sm group"
                                onClick={() => setLightboxImage(null)}
                                aria-label="Close preview"
                            >
                                <X className="w-5 h-5 group-hover:scale-110 group-active:scale-95 transition-transform" />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-black/20 overflow-auto min-h-0">
                            <img
                                src={lightboxImage}
                                alt="Project Full View"
                                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl ring-1 ring-white/5"
                            />
                        </div>

                        {/* Footer / Status Bar (Subtle detail) */}
                        <div className="px-8 py-3 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-600 font-mono tracking-tighter uppercase">
                            <span>Image Optimized</span>
                            <span>Scale: Fit</span>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Projects;
