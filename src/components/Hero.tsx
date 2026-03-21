import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const titles = [
        "KISAL NELAKA",
        "FULL-STACK OP",
        "SECURITY ENG",
        "SYSTEM ARCHITECT"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 1500); // Faster, snappier interval
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden border-b-8 border-brutal-black bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik0wIDBoNDB2MUgweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')]">
            {/* Grid pattern background */}
            <div className="container relative z-10 px-4 md:px-8">
                <div className="w-full text-center">
                    
                    {/* Status Badge */}
                    <motion.div
                        className="mb-12 inline-block"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-6 bg-accent border-4 border-brutal-black text-black font-black uppercase tracking-widest shadow-[4px_4px_0px_#000]">
                            <span className="w-3 h-3 bg-primary border-2 border-black animate-pulse"></span>
                            PROTOCOL: ACTIVE
                        </span>
                    </motion.div>

                    {/* Massive Typography */}
                    <div className="h-[250px] md:h-[350px] flex flex-col justify-center items-center overflow-hidden mb-8 border-y-8 border-brutal-black bg-white/80 py-8 backdrop-blur-sm -mx-4 md:mx-auto">
                        <AnimatePresence mode="popLayout">
                            <motion.h1
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                                transition={{ duration: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
                                className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase whitespace-pre-wrap text-brutal-black drop-shadow-[8px_8px_0px_#FF3366]"
                            >
                                {titles[index].split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && <br />}
                                        <span>{word}</span>
                                    </React.Fragment>
                                ))}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <p className="text-xl md:text-3xl font-mono text-brutal-black max-w-4xl mx-auto mb-16 font-bold leading-tight bg-white p-4 border-4 border-brutal-black shadow-[8px_8px_0px_#00F0FF] text-left uppercase">
                        &gt; Designing deterministic systems that survive. <br/>
                        &gt; Mission-critical cloud architecture. <br/>
                        &gt; High-performance security auditing. <br/>
                        <span className="animate-pulse opacity-50 block mt-4">_EOF</span>
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                        <a href="mailto:kisalnelaka6@gmail.com" className="btn-brutal group">
                            <Mail size={24} />
                            Direct Interface
                        </a>
                        <a href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf" target="_blank" className="btn-brutal-alt group" rel="noreferrer">
                            <Download size={24} />
                            Extract Data (.PDF)
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-brutal-black">
                        <a href="https://github.com/kisalnelaka" target="_blank" rel="noreferrer" className="p-4 border-4 border-brutal-black bg-white hover:bg-accent hover:-translate-y-2 hover:shadow-[6px_6px_0px_#000] transition-all">
                            <Github size={32} />
                        </a>
                        <a href="https://linkedin.com/in/kisalnelaka" target="_blank" rel="noreferrer" className="p-4 border-4 border-brutal-black bg-white hover:bg-[#0077b5] hover:text-white hover:-translate-y-2 hover:shadow-[6px_6px_0px_#000] transition-all">
                            <Linkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white border-4 border-brutal-black p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
