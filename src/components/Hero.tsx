import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const titles = [
        "KISAL NELAKA",
        "FULL-STACK ARCHITECT",
        "SECURITY ENGINEER",
        "SCALABLE ECOSYSTEMS"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Logic-Driven Engineering & Security
                        </span>
                    </motion.div>

                    <div className="h-[200px] md:h-[280px] flex flex-col justify-center items-center overflow-hidden mb-8">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                                className="text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter uppercase whitespace-pre-wrap"
                            >
                                {titles[index].split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {i === 1 ? <br /> : ''}
                                        <span className={i === 1 ? "text-gradient" : ""}>{word}</span>
                                        {i === 0 ? ' ' : ''}
                                    </React.Fragment>
                                ))}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-text-dim max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        I design systems that don't just work: they survive. From mission-critical
                        cloud architecture to high-performance security auditing, I engineer
                        solutions that prioritize deterministic logic and long-term integrity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary group selection:bg-black">
                            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                            Direct Inquiry
                        </a>
                        <a href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf" target="_blank" className="btn-secondary group">
                            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            Curriculum Vitae (PDF)
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="mt-20 flex items-center justify-center gap-8 text-text-muted"
                    >
                        <a href="https://github.com/kisalnelaka" target="_blank" className="hover:text-white transition-all transform hover:scale-125">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/kisalnelaka" target="_blank" className="hover:text-white transition-all transform hover:scale-125">
                            <Linkedin size={28} />
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted cursor-pointer hover:text-white transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
