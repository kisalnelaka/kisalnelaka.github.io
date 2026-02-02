import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'IntraFlow',
        category: 'Enterprise • Laravel • Filament',
        description: 'A multi-tenant SaaS ecosystem architected for telecom MSPs. I engineered complex inventory synchronization and automated billing workflows with a focus on high availability and data integrity.',
        link: 'https://github.com/kisalnelaka/intraflow',
        image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'ASAN (Adaptive Symmetry-Aware Network)',
        category: 'AI • Deep Learning • Python',
        description: 'A deep learning framework for molecular property prediction. I implemented custom symmetry-aware neural layers to achieve high-precision chemical modeling and state-of-the-art accuracy.',
        link: 'https://github.com/kisalnelaka/asan',
        image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'SocialRabbit Bunny',
        category: 'Framework • PHP • Architecture',
        description: 'A high-performance boilerplate engine designed for rapid deployment of secure Laravel backends. It enforces strict architectural patterns and security standards out of the box.',
        link: 'https://github.com/socialrabbit/bunny',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'BatSignal',
        category: 'Systems • C++ • DBus',
        description: 'A native Linux system integration utilizing DBus to monitor Bluetooth device metrics in real-time. Engineered for low-overhead performance and seamless integration with modern desktop environments.',
        link: 'https://github.com/kisalnelaka/BatSignal',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'PhishCatcher',
        category: 'Security • ML • JavaScript',
        description: 'An advanced phishing detection system utilizing machine learning to analyze URL patterns. It leverages defensive programming patterns to identify and mitigate digital threats in real-time.',
        link: 'https://github.com/kisalnelaka/phishcatcher',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Oha Asa Daily',
        category: 'Mobile • Flutter • Dart',
        description: 'A cross-platform mobile application featuring high-performance data scraping and real-time state synchronization. Built to deliver a seamless user experience across iOS and Android.',
        link: 'https://github.com/kisalnelaka/oha_asa_app',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div>
                    <h2 className="text-5xl font-bold mb-4 italic tracking-tighter uppercase leading-none">SELECTED <span className="text-gradient">ENGINEERING</span> WORKS</h2>
                    <p className="text-text-dim text-lg font-light">A technical summary of systems design and development.</p>
                </div>
                <a
                    href="https://github.com/kisalnelaka"
                    target="_blank"
                    className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary hover:text-white transition-colors"
                >
                    View Full Archive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
            </div>

            <div className="grid md:grid-cols-1 gap-12">
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
                            <h3 className="text-4xl font-bold mb-6 group-hover:text-primary transition-colors italic leading-tight tracking-tighter">{project.title}</h3>
                            <p className="text-text-dim text-lg mb-10 font-light leading-relaxed text-justify">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <Github size={24} />
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all font-bold">
                                    View Repository <ExternalLink size={20} />
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
