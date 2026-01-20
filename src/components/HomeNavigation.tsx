
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Code2, Database, Globe, Cpu, Server, Terminal, Calendar, Brain } from 'lucide-react';
import { Card } from "@/components/ui/card";

const HomeNavigation = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container px-4 mx-auto max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-2">Explore Portfolio</h2>
                    <p className="text-muted-foreground">Discover my work, skills, and professional journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 auto-rows-min">

                    {/* 1. ABOUT CARD - Left Top - (Span 5) */}
                    <Link to="/about" className="md:col-span-5 group h-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="h-full bg-card border border-border/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[320px] md:min-h-0"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">👋</span>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">About Me</h3>
                                <p className="text-muted-foreground mb-6">
                                    Passionate AI & ML Developer creating intelligent solutions.
                                </p>
                            </div>

                            {/* Abstract Visual - Image placeholder style */}
                            <div className="mt-auto h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden">
                                {/* Mock profile visual */}
                                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full mb-3 border-4 border-background flex items-center justify-center">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                    <div className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium shadow-sm inline-block">
                                        @AmeyaChopade
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* 2. SKILLS CARD - Right Top - (Span 7) */}
                    <Link to="/tools" className="md:col-span-7 group h-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="h-full bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[320px] md:min-h-0"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">My Tech Stack</h3>
                                        <p className="text-muted-foreground max-w-md">
                                            A growing list of technologies and tools I work with.
                                        </p>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                {/* Orbit Visual */}
                                <div className="flex-1 min-h-[200px] flex items-center justify-center relative mt-4">
                                    <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-primary/5 to-purple-500/5 blur-3xl rounded-full"></div>

                                    {/* Central Node */}
                                    <div className="w-16 h-16 bg-background rounded-full shadow-lg border border-border flex items-center justify-center z-20 relative">
                                        <Code2 className="w-8 h-8 text-primary" />
                                    </div>

                                    {/* Orbiting Nodes (Static for layout, could be animated) */}
                                    <div className="absolute w-full max-w-sm h-full flex items-center justify-between pointer-events-none">
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-12 h-12 bg-background rounded-2xl shadow-md border border-border flex items-center justify-center"
                                        >
                                            <Database className="w-6 h-6 text-green-500" />
                                        </motion.div>
                                        <motion.div
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="w-12 h-12 bg-background rounded-2xl shadow-md border border-border flex items-center justify-center mt-20"
                                        >
                                            <Globe className="w-6 h-6 text-blue-500" />
                                        </motion.div>
                                    </div>
                                    <div className="absolute w-full max-w-xs h-full flex flex-col items-center justify-between py-6 pointer-events-none">
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-10 h-10 bg-background rounded-full shadow-md border border-border flex items-center justify-center"
                                        >
                                            <Cpu className="w-5 h-5 text-orange-500" />
                                        </motion.div>
                                        <motion.div
                                            animate={{ x: [0, -5, 0] }}
                                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                            className="w-10 h-10 bg-background rounded-full shadow-md border border-border flex items-center justify-center"
                                        >
                                            <Server className="w-5 h-5 text-purple-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* 3. EXPERIENCE - Left Bottom - (Span 5) */}
                    <Link to="/experience" className="md:col-span-5 group h-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="min-h-[250px] h-full bg-card border border-border/50 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold">Experience</h3>
                                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <div className="space-y-6 relative">
                                {/* Timeline Line */}
                                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border"></div>

                                {/* Item 1 */}
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-background mt-1 shadow-sm shrink-0"></div>
                                    <div>
                                        <p className="font-bold text-sm">Lead Software Engineer</p>
                                        <p className="text-xs font-medium text-primary">CorpusAI</p>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">2025 – Present</p>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="flex gap-4 relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-background mt-1 shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-sm text-foreground/80">Lead Architect</p>
                                        <p className="text-xs font-medium text-muted-foreground">DataNestTX</p>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">2024 – 2025</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* 4. PROJECTS - Right Bottom - (Span 7) */}
                    <Link to="/projects" className="md:col-span-7 group h-full">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="min-h-[250px] h-full bg-card border border-border/50 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold">Featured Projects</h3>
                                    <p className="text-sm text-muted-foreground">Check out what I've built.</p>
                                </div>
                                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <div className="flex-1 bg-secondary/50 rounded-2xl p-4 flex gap-4 overflow-hidden relative">
                                {/* Project 1 - DataNesTX */}
                                <div className="w-1/2 bg-background rounded-xl p-4 shadow-sm border border-border/50 flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="h-20 bg-blue-500/10 rounded-lg w-full mb-2 flex items-center justify-center">
                                        <Database className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-sm truncate">DataNesTX</h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1">AI Data Orchestration</p>
                                    </div>
                                    <div className="mt-auto flex gap-1 flex-wrap">
                                        <div className="h-1.5 w-8 bg-blue-500/20 rounded-full"></div>
                                        <div className="h-1.5 w-6 bg-purple-500/20 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Project 2 - CorpusAI */}
                                <div className="w-1/2 bg-background rounded-xl p-4 shadow-sm border border-border/50 flex flex-col gap-2 transform group-hover:-translate-y-4 transition-transform duration-500 delay-75">
                                    <div className="h-20 bg-emerald-500/10 rounded-lg w-full mb-2 flex items-center justify-center">
                                        <Brain className="w-8 h-8 text-emerald-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-sm truncate">CorpusAI</h4>
                                        <p className="text-xs text-muted-foreground line-clamp-1">Intelligent Context</p>
                                    </div>
                                    <div className="mt-auto flex gap-1 flex-wrap">
                                        <div className="h-1.5 w-8 bg-emerald-500/20 rounded-full"></div>
                                        <div className="h-1.5 w-6 bg-orange-500/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default HomeNavigation;
