import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, Sparkles, Server, Brain, Cloud, Database, Code2, Zap } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            title: "DataForgeAI",
            role: "Builder / Engineer — Data Processing (AI)",
            company: "DataForgeAI",
            period: "2025 – Present",
            location: "Remote",
            description: "Developing an AI-powered dataset creation system that enables users to generate, refine, and export custom structured datasets through an interactive workflow, optimized for rapid dataset building and reuse.",
            highlight: true,
            icon: <Database className="w-5 h-5 text-primary" />,
            subheading: "Built Under DataNestTX",
            status: "In Development",
            statusType: "dev"
        },
        {
            title: "CorpusAI",
            role: "Builder / Engineer — AI Systems",
            company: "CorpusAI",
            period: "2025 – Present",
            location: "Remote",
            description: "Developed an AI-powered corpus intelligence system that enables users to ingest documents, explore content semantically, and retrieve context-aware insights from their knowledge base.",
            highlight: true,
            icon: <Brain className="w-5 h-5 text-primary" />,
            subheading: "Built Under DataNestTX",
            status: "Beta Stage"
        },
        {
            title: "DataNestTX",
            role: "Platform Builder — AI Data Platform",
            company: "DataNestTX",
            period: "2025 – Present",
            location: "Remote",
            description: "Built the core AI data platform powering ingestion, processing, APIs, and cloud infrastructure. Designed end-to-end architecture for scalability, reliability, and production readiness.",
            highlight: true,
            icon: <Server className="w-5 h-5 text-primary" />,
            status: "Core Platform",
            statusType: "success"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col relative">
            <Navbar />
            <main className="flex-grow pt-24 md:pt-32 pb-20">
                <div className="container px-4 mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col items-center mb-20 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-4">
                            <Sparkles className="w-4 h-4 text-foreground animate-pulse" />
                            <span className="text-foreground font-medium">Professional Journey</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-center">Experience</h1>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-foreground to-transparent rounded-full"></div>
                    </div>

                    {/* Timeline Container */}
                    <div ref={containerRef} className="max-w-5xl mx-auto relative px-4">

                        {/* Vertical Timeline Track (Background) */}
                        <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 rounded-full opacity-30"></div>

                        {/* Vertical Scroll Progress Bar (Foreground) */}
                        {/* Vertical Scroll Progress Bar (Foreground) */}
                        <motion.div
                            className="absolute left-9 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-cyan-400 -translate-x-1/2 rounded-full origin-top z-0"
                            style={{ height: "100%", scaleY }}
                        />

                        <div className="space-y-32 relative z-10">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col md:flex-row items-center md:justify-between md:odd:flex-row-reverse group"
                                >

                                    {/* Timeline Dot/Icon - Simple Style (No Pulse) */}
                                    <div className="absolute top-1/2 left-5 md:left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-background bg-card shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center border border-primary/30">
                                            {React.cloneElement(exp.icon as React.ReactElement, { className: "w-4 h-4 md:w-5 md:h-5 text-primary" })}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className="ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] relative"
                                    >
                                        <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">

                                            {/* Header */}
                                            <div className="flex flex-col mb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-bold text-2xl text-foreground">{exp.title}</h3>
                                                </div>
                                                <div className="text-lg font-medium text-primary mb-1">{exp.role}</div>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {exp.period}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-border"></span>
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                                                {exp.description}
                                            </p>

                                            {/* Subheading & Status Footer */}
                                            {(exp.subheading || exp.status) && (
                                                <div className="pt-4 border-t border-border/30 flex items-center justify-between gap-4 flex-wrap">
                                                    {exp.subheading ? (
                                                        <div className="flex items-center gap-2 text-primary group/tool">
                                                            <Zap className="w-3.5 h-3.5 fill-primary/20 animate-pulse shrink-0" />
                                                            <span className="text-sm font-bold tracking-tight leading-tight">
                                                                {exp.subheading}
                                                            </span>
                                                        </div>
                                                    ) : <div />}

                                                    {exp.status && (
                                                        <div className="shrink-0 whitespace-nowrap">
                                                            <span className={`text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 ${exp.statusType === 'success' ? "text-emerald-500" :
                                                                exp.statusType === 'dev' ? "text-rose-500" : "text-orange-500"
                                                                }`}>
                                                                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${exp.statusType === 'success' ? "bg-emerald-500" :
                                                                    exp.statusType === 'dev' ? "bg-rose-500" : "bg-orange-500"
                                                                    }`} />
                                                                {exp.status}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Tech Stack */}

                                        </div>
                                    </motion.div>



                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Experience;
