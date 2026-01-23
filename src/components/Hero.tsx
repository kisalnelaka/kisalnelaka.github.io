import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
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
                            Available for New Challenges
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-7xl md:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter"
                    >
                        KISAL <br />
                        <span className="text-gradient">NELAKA</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-text-dim max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Architecting <span className="text-white font-medium">high-performance ecosystems</span>.
                        8+ years of engineering scalable Laravel & React applications with a logic-first approach.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary group">
                            <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                            Start a Conversation
                        </a>
                        <a href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf" target="_blank" className="btn-secondary group">
                            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            Download CV
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
