import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'SocialRabbit Bunny',
        category: 'Framework • PHP',
        description: 'A rapid-development scaffolding framework for Laravel, built to standardize production-ready architectures with pre-configured security layers.',
        link: 'https://github.com/socialrabbit/bunny',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'VulnScan SaaS',
        category: 'Security • Python',
        description: 'Enterprise-grade vulnerability orchestrator utilizing OWASP ZAP core. Automated scanning, reporting, and threat scoring for internal web assets.',
        link: 'https://github.com/kisalnelaka',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Oha Asa Daily',
        category: 'Mobile • Flutter • Node',
        description: 'Cross-platform mobile experience for the Japan-exclusive Oha Asa horoscope. Real-time scraping backend with high-availability cluster.',
        link: '#',
        image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4c5?auto=format&fit=crop&w=1200&q=80',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div>
                    <h2 className="text-5xl font-bold mb-4 italic tracking-tight">The <span className="text-gradient">Portfolio</span></h2>
                    <p className="text-text-dim text-lg">Selective showcase of systems and frameworks.</p>
                </div>
                <a
                    href="https://github.com/kisalnelaka"
                    target="_blank"
                    className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
                >
                    View Full Archive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
            </div>

            <div className="grid md:grid-cols-1 gap-12 overflow-hidden">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group grid lg:grid-cols-5 gap-0 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                    >
                        <div className="lg:col-span-3 aspect-video lg:aspect-auto overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-transparent to-transparent hidden lg:block" />
                        </div>

                        <div className="lg:col-span-2 p-10 md:p-14 bg-[#111] flex flex-col justify-center">
                            <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-6 block">
                                {project.category}
                            </span>
                            <h3 className="text-4xl font-bold mb-6 group-hover:text-primary transition-colors italic leading-tight">{project.title}</h3>
                            <p className="text-text-dim text-lg mb-10 font-light leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a href={project.link} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="#" className="flex-1 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all font-bold">
                                    Review Case Study <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
