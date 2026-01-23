import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                        Available for New Opportunities
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                        KISAL <span className="text-gradient">NELAKA</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 font-light">
                        Senior Full Stack Developer specializing in <span className="text-white font-medium">Laravel</span>,
                        <span className="text-white font-medium"> React</span>, and <span className="text-white font-medium">Scalable Web Systems</span>.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            href="mailto:kisalnelaka6@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                            <Mail size={20} />
                            Let's Talk
                        </motion.a>
                        <motion.a
                            href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass-pane text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-colors border-white/20"
                        >
                            <Download size={20} />
                            Resume
                        </motion.a>
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-6 text-text-muted">
                        <a href="https://github.com/kisalnelaka" target="_blank" className="hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/kisalnelaka" target="_blank" className="hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
