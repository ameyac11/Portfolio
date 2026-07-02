
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ExternalLink, Star, Calendar, Users, TrendingUp, Filter, ChevronLeft, ChevronRight, X, LayoutList, Github, Play } from 'lucide-react';

const projects = [
    {
        title: 'Gitlytics',
        description: 'GitHub traffic analytics ecosystem for public and private repositories, combining a Python CLI/API, FastAPI backend, and React dashboard to track views, clones, referrers, stars, and long-term repository growth.',
        screenshots: [
            '/Gitlytics_1.png',
            '/Gitlytics_2.png',
            '/Gitlytics_3.png',
            '/Gitlytics_4.png',
            '/Gitlytics_5.png'
        ],
        tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Recharts', 'GitHub API', 'PyPI'],
        liveLink: 'https://dashboard.gitlytics.dev',
        videoLink: '#',
        codeLink: 'https://github.com/ameyac11/gitlytics',
        category: 'Developer Tools',
        status: 'Completed',
        featured: true,
        stats: { stars: 80, contributors: 1, lastUpdate: '2026-06' },
        highlights: ['Traffic Analytics', 'CLI & Python API', 'React Dashboard', 'Private Repo Support']
    },
    {
        title: 'Gitlytics Traffic Automation',
        description: 'Reusable GitHub Action companion for Gitlytics that automatically backs up repository traffic every 13 days, preserving historical views, clones, stars, forks, referrers, and popular paths beyond GitHub\'s short retention window.',
        screenshots: [
            '/GitlyticsTraffic_1.png',
            '/GitlyticsTraffic_3.png'
        ],
        tags: ['GitHub Actions', 'Python', 'Automation', 'CSV', 'GitHub API', 'CI/CD'],
        liveLink: 'https://github.com/ameyac11/gitlytics-github-traffic-automation',
        videoLink: '#',
        codeLink: 'https://github.com/ameyac11/gitlytics-github-traffic-automation',
        category: 'Developer Tools',
        status: 'Completed',
        featured: true,
        stats: { stars: 52, contributors: 1, lastUpdate: '2026-06' },
        highlights: ['13-Day Sync', 'Historical Backup', 'Reusable Action', 'Traffic Vault']
    },
    {
        title: 'CorpusAI',
        description: 'AI-powered Corpus Intelligence & Retrieval-Augmented Generation (RAG) platform. CorpusAI enables users to ingest documents, manage reusable context, and perform semantic retrieval to generate accurate, context-aware responses across LLM interactions.',
        screenshots: [
            '/CorpusAI_1.png',
            '/CorpusAI_2.png',
            '/CorpusAI_3.png',
            '/CorpusAI_4.png',
            '/CorpusAI_5.png',
            '/CorpusAI_6.png',
            '/CorpusAI_7.png'
        ],
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'VectorDB', 'LLM', 'RAG', 'Redis', 'React', 'Docker'],
        liveLink: '#',
        videoLink: 'https://youtu.be/XfuICVTkITg',
        codeLink: '#',
        category: 'AI/ML',
        status: 'Completed',
        featured: true,
        stats: { stars: 65, contributors: 1, lastUpdate: '2026-01' },
        highlights: ['Context Caching', 'Token Efficient', 'Multi-Agent Systems', 'RAG']
    },
    {
        title: 'DataForgeAI',
        description: 'AI-powered Dataset Engineering & Generation platform. DataForgeAI enables users to create structured datasets through conversational AI workflows with model selection and internet-assisted generation, as well as custom schema-based builders for manual and AI-assisted dataset creation and export.',
        screenshots: [
            '/DataForgeAI_1.png',
            '/DataForgeAI_2.png',
            '/DataForgeAI_3.png',
            '/DataForgeAI_4.png',
            '/DataForgeAI_5.png',
            '/DataForgeAI_6.png',
            '/DataForgeAI_7.png',
            '/DataForgeAI_8.png'
        ],
        tags: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'LLM', 'Docker'],
        liveLink: '#',
        videoLink: 'https://youtu.be/XfuICVTkITg',
        codeLink: '#',
        category: 'AI/ML',
        status: 'Completed',
        featured: true,
        stats: { stars: 58, contributors: 1, lastUpdate: '2026-01' },
        highlights: ['Conversational Dataset Generation', 'Model Selection', 'Internet-assisted Generation', 'Custom Dataset Builder']
    },
    {
        title: 'LiteNeTX',
        description: 'Designed and implemented a custom Convolutional Neural Network (CNN) for image classification, featuring end-to-end data preprocessing, optimized training workflows, and rigorous evaluation pipelines.',
        screenshots: [
            '/L_1.png',
            '/L_2.png',
            '/L_3.png',
            '/L_4.png',
            '/L_5.png'
        ],
        tags: ['Python', 'PyTorch', 'CNN', 'React'],
        liveLink: 'https://www.litenetx.in',
        videoLink: 'https://youtu.be/wyhVdyEy1v0',
        codeLink: '#',
        category: 'AI/ML',
        status: 'Completed',
        featured: false,
        stats: { stars: 45, contributors: 3, lastUpdate: '2024-08' },
        highlights: ['Custom CNN Architecture', 'Optimized Training', 'Model Evaluation']
    },
    {
        title: 'Lung Cancer Detection from CT Scans',
        description: 'Deep learning research application that fine-tunes ResNet-18 and ResNet-34 CNN models for binary lung CT scan classification, with a Gradio interface for real-time scan uploads, model selection, and confidence scores.',
        screenshots: [
            '/LungCancer_1.png',
            '/LungCancer_2.png'
        ],
        tags: ['Python', 'PyTorch', 'TorchVision', 'ResNet', 'CNN', 'Gradio', 'Safetensors'],
        liveLink: 'https://huggingface.co/spaces/ameyac11/Lung-Cancer-Detection-from-CT-Scans-Using-CNN',
        videoLink: '#',
        codeLink: 'https://github.com/ameyac11/Lung-Cancer-Detection-from-CT-Scans-Using-CNN',
        category: 'AI/ML',
        status: 'Completed',
        featured: false,
        stats: { stars: 50, contributors: 1, lastUpdate: '2026-06' },
        highlights: ['Transfer Learning', 'ResNet-18/34', 'Real-time Inference', 'Medical Imaging']
    },
    {
        title: 'DataNestX',
        description: 'A modular data and AI platform designed to unify intelligent systems for dataset engineering, corpus intelligence, and scalable AI workflows.',
        screenshots: [
            '/DataNesTX_Logo_Dark_Frontend.png',
            '/DataNesTX_Logo_Light_Frontend.png'
        ],
        tags: ['TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
        liveLink: 'https://datanestx.tech',
        videoLink: '#',
        codeLink: '#',
        category: 'AI/ML',
        status: 'In Progress',
        featured: true,
        stats: { stars: 72, contributors: 2, lastUpdate: '2026-01' },
        highlights: ['Modular Platform', 'Scalable Architecture', 'Unified AI Systems']
    },
    {
        title: 'Portfolio',
        description: 'Designed and developed a personal portfolio showcasing AI systems, full-stack projects, and interactive visual experiences with a focus on clean, premium design.',
        screenshots: [
            '/P_1.png',
            '/P_2.png'
        ],
        tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        liveLink: '#',
        videoLink: '#',
        codeLink: '#',
        category: 'Web Development',
        status: 'Completed',
        featured: false,
        stats: { stars: 28, contributors: 1, lastUpdate: '2024-08' },
        highlights: ['Responsive Design', 'Interactive UI', 'Performance Optimized']
    }
];

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [activeScreenshot, setActiveScreenshot] = useState<{ [key: number]: number }>({});
    const [lightboxInfo, setLightboxInfo] = useState<{ projectIndex: number; imageIndex: number } | null>(null);

    // Neutral tag styles.
    const tagStyles = "bg-secondary text-secondary-foreground border-border/50";

    const filters = [
        { id: 'all', name: 'All Projects', count: projects.length },
        { id: 'Developer Tools', name: 'Dev Tools', count: projects.filter(p => p.category === 'Developer Tools').length },
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

    const nextLightboxImage = () => {
        if (!lightboxInfo) return;
        const project = filteredProjects[lightboxInfo.projectIndex];
        const nextIndex = (lightboxInfo.imageIndex + 1) % project.screenshots.length;
        setLightboxInfo({ ...lightboxInfo, imageIndex: nextIndex });
    };

    const prevLightboxImage = () => {
        if (!lightboxInfo) return;
        const project = filteredProjects[lightboxInfo.projectIndex];
        const prevIndex = (lightboxInfo.imageIndex - 1 + project.screenshots.length) % project.screenshots.length;
        setLightboxInfo({ ...lightboxInfo, imageIndex: prevIndex });
    };

    // Lightbox keyboard navigation.
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!lightboxInfo) return;
            if (e.key === 'ArrowLeft') prevLightboxImage();
            if (e.key === 'ArrowRight') nextLightboxImage();
            if (e.key === 'Escape') setLightboxInfo(null);
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [lightboxInfo]);

    // Auto-transition images.
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScreenshot(prev => {
                const newState = { ...prev };
                projects.forEach((project, index) => {
                    newState[index] = ((newState[index] || 0) + 1) % project.screenshots.length;
                });
                return newState;
            });
        }, 1750);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 md:pt-32 pb-24 container px-4 md:px-8 mx-auto max-w-6xl">
                {/* Minimal header. */}
                <div className="flex flex-col items-center mb-16 md:mb-24 text-center space-y-4 md:space-y-6 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs md:text-sm font-medium">
                        <LayoutList className="w-3.5 md:w-4 h-3.5 md:h-4" />
                        <span>Portfolio</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        Featured Projects
                    </h1>
                </div>

                {/* Filters. */}
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

                {/* Zig-zag list view. */}
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
                                {/* Image column section. */}
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
                                                    onClick={() => setLightboxInfo({ projectIndex: index, imageIndex: i })}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation. */}
                                    {project.screenshots.length > 1 && (
                                        <>
                                            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); prevScreenshot(index, project.screenshots.length); }}
                                                    className="p-2 rounded-full bg-white/90 text-black hover:bg-white shadow-sm backdrop-blur-sm transition-colors pointer-events-auto"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); nextScreenshot(index, project.screenshots.length); }}
                                                    className="p-2 rounded-full bg-white/90 text-black hover:bg-white shadow-sm backdrop-blur-sm transition-colors pointer-events-auto"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {/* Dots. */}
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

                                {/* Content column section. */}
                                <div className="w-full lg:w-[55%] flex flex-col space-y-6">
                                    {/* Header. */}
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

                                    {/* Description. */}
                                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                                        {project.description}
                                    </p>

                                    {/* Highlights. */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.highlights.map((highlight, i) => (
                                            <Badge key={i} variant="outline" className="border-border text-xs font-medium text-muted-foreground py-1.5 px-3">
                                                {highlight}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Tech stack. */}
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

                                    {/* Actions. */}
                                    <div className="pt-6 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                        <Button asChild className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-foreground text-background hover:bg-foreground/90 font-medium transition-transform active:scale-95 shadow-lg">
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                                                Live Demo
                                            </a>
                                        </Button>
                                        <Button asChild variant="outline" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base border-border hover:bg-secondary font-medium transition-transform active:scale-95 shadow-sm">
                                            <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                                <Play className="w-4 sm:w-5 h-4 sm:h-5" />
                                                Video Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom call to action. */}
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

            {/* Lightbox modal. */}
            {lightboxInfo && (() => {
                const project = filteredProjects[lightboxInfo.projectIndex];
                const currentImage = project.screenshots[lightboxInfo.imageIndex];
                const hasMultipleImages = project.screenshots.length > 1;

                return (
                    <div
                        className="fixed inset-0 z-[10000] bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300"
                        onClick={() => setLightboxInfo(null)}
                    >
                        {/* Image container. */}
                        <div
                            className="relative max-w-[85vw] md:max-w-[75vw] max-h-[85vh] inline-flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Mobile navigation arrows. */}
                            {hasMultipleImages && (
                                <div className="md:hidden w-full flex justify-center items-center gap-6 mb-4 z-[10002]">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
                                        className="p-3 rounded-full bg-white text-black hover:bg-white/90 border border-transparent shadow-xl transition-all duration-300 active:scale-95"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
                                        className="p-3 rounded-full bg-white text-black hover:bg-white/90 border border-transparent shadow-xl transition-all duration-300 active:scale-95"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            )}

                            <img
                                src={currentImage}
                                alt={`${project.title} - view ${lightboxInfo.imageIndex + 1}`}
                                className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                            />

                            {/* Desktop navigation arrows. */}
                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
                                        className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-black hover:bg-white/90 border border-transparent shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-[10002]"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
                                        className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-black hover:bg-white/90 border border-transparent shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-[10002]"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}

                            {/* Close button. */}
                            <button
                                className="absolute -top-4 -right-4 p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-900 text-white hover:text-white border border-white/20 hover:border-white/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 z-[10002]"
                                onClick={() => setLightboxInfo(null)}
                                aria-label="Close preview"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image counter. */}
                            {hasMultipleImages && (
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-sm font-medium text-zinc-300 shadow-lg backdrop-blur-md">
                                    {lightboxInfo.imageIndex + 1} / {project.screenshots.length}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })()}

            <Footer />
        </div>
    );
};

export default Projects;
