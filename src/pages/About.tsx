import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GraduationCap, Brain, Rocket, Code, BookOpen, Terminal, Cpu, Network, Database, Globe, Star, ArrowRight, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30, restDelta: 0.001
    });

    useTransform(scrollYProgress, (value: number) => {
        if (value > 0.02 && isHeaderVisible) setIsHeaderVisible(false);
        if (value <= 0.02 && !isHeaderVisible) setIsHeaderVisible(true);
        return value;
    });

    // Total sections = 8
    const TOTAL_SECTIONS = 8;

    return (
        <div className="bg-background text-foreground min-h-screen">
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: isHeaderVisible ? 0 : -100, opacity: isHeaderVisible ? 1 : 0 }}
            >
                <div className="pointer-events-auto">
                    <Navbar />
                </div>
            </motion.div>

            <main ref={containerRef} className="relative h-[800vh]">
                <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden perspective-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.03),transparent_70%)] pointer-events-none" />

                    <div className="container px-4 md:px-8 max-w-7xl mx-auto h-full relative">
                        <IntroSection progress={smoothProgress} index={0} total={TOTAL_SECTIONS} />
                        <FoundationSection progress={smoothProgress} index={1} total={TOTAL_SECTIONS} />
                        <SparkSection progress={smoothProgress} index={2} total={TOTAL_SECTIONS} />
                        <BuildSection progress={smoothProgress} index={3} total={TOTAL_SECTIONS} />
                        <FocusSection progress={smoothProgress} index={4} total={TOTAL_SECTIONS} />
                        <EducationTitleSection progress={smoothProgress} index={5} total={TOTAL_SECTIONS} />
                        <TimelineSection progress={smoothProgress} index={6} total={TOTAL_SECTIONS} />
                        <OutroSection progress={smoothProgress} index={7} total={TOTAL_SECTIONS} />
                    </div>
                </div>
            </main>
        </div>
    );
};

// --- HELPER HOOKS ---
const useSectionTransform = (progress: any, index: number, total: number) => {
    const step = 1 / total;
    const start = index * step;
    const end = start + step;
    const opacity = useTransform(progress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
    const pointerEvents = useTransform(progress, (v: number) => (v >= start && v < end ? 'auto' : 'none'));
    return { opacity, pointerEvents, start, end };
};

// --- 0. INTRO SECTION ---
const IntroSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents } = useSectionTransform(progress, index, total);
    const scale = useTransform(progress, [0, 0.1], [1, 1.2]);
    const y = useTransform(progress, [0, 0.1], [0, 100]);

    return (
        <motion.div
            style={{ opacity, pointerEvents, scale, y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
        >
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <div className="text-xl md:text-2xl font-mono text-primary mb-4 tracking-widest uppercase">The Narrative</div>
                <h1 className="text-5xl md:text-9xl font-bold font-heading tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                    AMEYA
                </h1>
                <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-4">
                    Developing Intelligence. <br />
                    Exploring the <span className="text-primary font-medium">Cosmos</span>. <br />
                    Building the Future.
                </p>
                <div className="flex justify-center mt-8">
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 100, opacity: 1 }}
                        transition={{ delay: 0, duration: 1.5 }}
                        className="w-[2px] bg-gradient-to-b from-zinc-400 to-transparent"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- 1. FOUNDATION SECTION ---
const FoundationSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents, start } = useSectionTransform(progress, index, total);
    const xLeft = useTransform(progress, [start, start + 0.05], [-50, 0]);
    const xRight = useTransform(progress, [start, start + 0.05], [50, 0]);

    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-6xl px-6 md:px-0">
                <motion.div style={{ x: xLeft }} className="text-left md:text-right space-y-2">
                    <h2 className="text-6xl md:text-8xl font-bold font-heading text-primary leading-none">
                        9.90
                    </h2>
                    <p className="text-xl md:text-2xl font-mono uppercase tracking-widest text-muted-foreground">SGPA</p>
                </motion.div>

                <motion.div style={{ x: xRight }} className="relative pl-6 md:pl-8 border-l-2 border-primary/50">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">The Foundation</h3>
                    <p className="text-lg md:text-xl text-foreground font-medium mb-4">B.Tech in CSE (AI & ML)</p>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                        PCET’s Pimpri Chinchwad University <br />
                        <span className="text-sm opacity-70">2023 – Present</span>
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

// --- 2. SPARK SECTION ---
const SparkSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents } = useSectionTransform(progress, index, total);

    // Neural Constellation visual - non-circular/organic
    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="absolute inset-0 flex flex-col items-center justify-center"
        >
            {/* Background Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-foreground/20 dark:bg-white rounded-full"
                        style={{
                            width: Math.random() * 2 + 1,
                            height: Math.random() * 2 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Asymmetric Neural Web Mesh */}
                <div className="relative mb-16 w-full max-w-lg h-64 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full text-primary/20" viewBox="0 0 400 200">
                        {/* Connecting Lines */}
                        <motion.path
                            d="M 200,100 L 120,60 L 100,140 L 200,100 L 280,60 L 300,140 L 200,100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M 120,60 L 150,20 M 100,140 L 60,160 M 280,60 L 340,40 M 300,140 L 260,180"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                    </svg>

                    {/* Nodes */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-primary/50 p-4 rounded-xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] z-10">
                            <Brain className="w-12 h-12 text-primary" />
                        </div>
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] left-[25%] p-2 bg-background/80 border border-border rounded-lg"
                        >
                            <Network className="w-5 h-5 text-purple-500" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] left-[20%] p-2 bg-background/80 border border-border rounded-lg"
                        >
                            <Database className="w-5 h-5 text-blue-500" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[20%] right-[25%] p-2 bg-background/80 border border-border rounded-lg"
                        >
                            <Zap className="w-5 h-5 text-yellow-500" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [6, -6, 6] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-[20%] right-[20%] p-2 bg-background/80 border border-border rounded-lg"
                        >
                            <Globe className="w-5 h-5 text-green-500" />
                        </motion.div>
                    </div>
                </div>

                <div className="text-center max-w-2xl px-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        The Spark
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Discovering the cosmic parallels in code. <br />
                        Where deep learning architectures mimic the vast networks of the universe.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// --- 3. BUILD SECTION ---
const BuildSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents, start, end } = useSectionTransform(progress, index, total);
    const rotateX = useTransform(progress, [start, end], [20, 0]);
    const scale = useTransform(progress, [start, start + 0.1], [0.8, 1]);

    return (
        <motion.div
            style={{ opacity, pointerEvents, perspective: 1000 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-6xl w-full px-4">
                <div className="order-2 md:order-1 flex-1 space-y-6 text-center md:text-left">
                    <Badge variant="outline" className="border-orange-500/50 text-orange-500">First Production Build</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">DataNestTX</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        My first end-to-end platform integrating complex backend logic with smooth frontend experiences.
                    </p>
                </div>

                <motion.div
                    style={{ rotateX, scale }}
                    className="order-1 md:order-2 flex-1 w-full"
                >
                    <Card className="bg-card dark:bg-[#0f0f0f] border-border dark:border-zinc-800 shadow-2xl overflow-hidden font-mono text-sm">
                        <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <span className="text-xs text-zinc-500 ml-2">server.ts</span>
                        </div>
                        <div className="p-6 space-y-2 text-zinc-400">
                            <div className="flex gap-2">
                                <span className="text-purple-400">const</span>
                                <span className="text-blue-400">init</span>
                                <span className="text-zinc-600">=</span>
                                <span className="text-yellow-400">async</span>
                                <span className="text-zinc-600">()</span>
                                <span className="text-purple-400">=&gt;</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-purple-400">await</span> <span className="text-blue-400">System</span>.<span className="text-yellow-300">launch</span>(<span className="text-green-400">"DataNestTX"</span>);
                            </div>
                            <div className="pl-4 text-zinc-600">
                                // Secure Authentication flow active
                            </div>
                            <div className="pt-2 text-green-500">
                                &gt; Build Success_
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
};

// --- 4. FOCUS SECTION: WHAT I DO ---
const FocusSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents } = useSectionTransform(progress, index, total);

    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="absolute inset-0 flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-5xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">What I Do</h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Building intelligent systems & scalable architectures.
                    </p>
                </div>

                {/* Grid Layout - Compact on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 w-full">
                    {/* Card 1 */}
                    <Card className="bg-card/50 dark:bg-zinc-900/50 border-border/50 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 group overflow-hidden relative">
                        {/* Gradient Blob Effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                        <CardContent className="p-5 md:p-8 relative z-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0 h-full">
                            <div className="shrink-0 p-3 md:p-4 bg-blue-500/10 w-fit rounded-xl md:rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/25 group-hover:scale-110 mb-0 md:mb-6">
                                <Cpu className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="text-left w-full">
                                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3 tracking-tight group-hover:text-blue-500 transition-colors">AI Engineering</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed md:line-clamp-none line-clamp-2">
                                    Designing agentic workflows and RAG systems (CorpusAI) that reason and act autonomously.
                                </p>
                            </div>
                            <div className="hidden md:flex mt-auto pt-6 items-center text-sm font-medium text-blue-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="bg-card/50 dark:bg-zinc-900/50 border-border/50 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 group overflow-hidden relative">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-green-500/20" />

                        <CardContent className="p-5 md:p-8 relative z-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0 h-full">
                            <div className="shrink-0 p-3 md:p-4 bg-green-500/10 w-fit rounded-xl md:rounded-2xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-green-500/25 group-hover:scale-110 mb-0 md:mb-6">
                                <Terminal className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="text-left w-full">
                                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3 tracking-tight group-hover:text-green-500 transition-colors">Full Stack</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed md:line-clamp-none line-clamp-2">
                                    Building end-to-end applications with Python and specialized Cloud architecture.
                                </p>
                            </div>
                            <div className="hidden md:flex mt-auto pt-6 items-center text-sm font-medium text-green-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                View projects <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="bg-card/50 dark:bg-zinc-900/50 border-border/50 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 group overflow-hidden relative">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                        <CardContent className="p-5 md:p-8 relative z-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0 h-full">
                            <div className="shrink-0 p-3 md:p-4 bg-purple-500/10 w-fit rounded-xl md:rounded-2xl text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-purple-500/25 group-hover:scale-110 mb-0 md:mb-6">
                                <Rocket className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="text-left w-full">
                                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3 tracking-tight group-hover:text-purple-500 transition-colors">Innovation</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed md:line-clamp-none line-clamp-2">
                                    Exploring AI, Neural Networks, and the Universe.
                                </p>
                            </div>
                            <div className="hidden md:flex mt-auto pt-6 items-center text-sm font-medium text-purple-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Explore <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
};

// --- 5. EDUCATION TITLE SECTION ---
const EducationTitleSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents, start, end } = useSectionTransform(progress, index, total);
    const scale = useTransform(progress, [start, end], [1.2, 0.9]);

    return (
        <motion.div
            style={{ opacity, pointerEvents, scale }}
            className="absolute inset-0 flex items-center justify-center text-center z-10"
        >
            <div>
                <BookOpen className="w-16 h-16 mx-auto mb-6 text-green-500" />
                <h1 className="text-4xl md:text-8xl font-bold font-heading tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                    EDUCATION
                </h1>
                <p className="mt-4 text-xl text-muted-foreground font-light tracking-widest uppercase">
                    The Academic Journey
                </p>
            </div>
        </motion.div>
    );
};

// --- 6. TIMELINE SECTION ---
const TimelineSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents, start, end } = useSectionTransform(progress, index, total);

    // Animation Progress: 0 to 1 over the duration of the section
    const animProgress = useTransform(progress, [start, end - 0.05], [0, 1]);

    // Line height grows from 0% to 100%
    const lineHeight = useTransform(animProgress, [0, 0.7], ["0%", "100%"]);

    const timelineData = [
        { year: '2023-27', title: 'B.Tech in CSE (AI & ML)', sub: 'Pimpri Chinchwad University', grade: '9.90 SGPA' },
        { year: '2021-23', title: 'Higher Secondary', sub: 'Novel Junior College', grade: '82.67%' },
        { year: '2010-21', title: 'Secondary School', sub: 'Kamalnayan Bajaj School', grade: '75%' },
    ];

    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="max-w-2xl w-full px-4">
                {/* Timeline with explicit Silver Vertical Line */}
                <div className="relative pl-6 md:pl-8 ml-2 md:ml-4 space-y-8 md:space-y-12">
                    {/* Animated Vertical Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-primary origin-top"
                        />
                    </div>

                    {timelineData.map((item, i) => {
                        // Staggered Item Animation
                        const itemStart = i * 0.2;
                        const itemEnd = itemStart + 0.3;
                        const itemOpacity = useTransform(animProgress, [itemStart, itemEnd], [0, 1]);
                        const itemY = useTransform(animProgress, [itemStart, itemEnd], [20, 0]);

                        return (
                            <motion.div
                                key={i}
                                style={{ opacity: itemOpacity, y: itemY }}
                                className="relative"
                            >
                                {/* Dot aligned with the border line */}
                                <span className="absolute -left-[33px] md:-left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]">
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        style={{ scale: itemOpacity }}
                                        className="h-1.5 w-1.5 rounded-full bg-primary"
                                    />
                                </span>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                                    <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
                                </div>
                                <p className="text-lg text-muted-foreground">{item.sub}</p>
                                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-semibold">
                                    {item.grade}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

// --- 7. OUTRO SECTION ---
const OutroSection = ({ progress, index, total }: any) => {
    const { opacity, pointerEvents } = useSectionTransform(progress, index, total);

    return (
        <motion.div
            style={{ opacity, pointerEvents }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">What's Next?</h2>

            <div className="flex flex-col md:flex-row gap-6">
                <Link to="/projects">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full group">
                        Explore Projects
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default About;
