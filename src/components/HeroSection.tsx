
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Abstract Background Elements - REMOVED for solid background */}


            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                            Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-zinc-500 to-zinc-500 dark:to-accent">Ameya Chopade</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
                    >
                        A passionate Full Stack Developer crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <Link
                            to="/projects"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border"
                        >
                            About Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-6 text-muted-foreground"
                    >
                        <a href="https://github.com/AmeyC171" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/ameya-chopade11" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:ameyaccod171@gmail.com" className="hover:text-primary transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll" />
                </div>
            </motion.div>

        </section>
    );
};

export default HeroSection;
