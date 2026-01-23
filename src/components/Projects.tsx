import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Bunny Laravel Scaffolding',
        description: 'Open-source Laravel framework for generating production-ready web applications with pre-built modules.',
        tags: ['Laravel', 'PHP', 'Framework'],
        link: 'https://github.com/socialrabbit/bunny',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'SaaS Vulnerability Scanner',
        description: 'Automated web security scanning platform using OWASP ZAP to detect and report vulnerabilities.',
        tags: ['Python', 'Security', 'SaaS'],
        link: 'https://github.com/kisalnelaka',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Oha Asa Horoscope',
        description: 'A mobile application for Oha Asa daily horoscopes with real-time data scraping.',
        tags: ['Flutter', 'Dart', 'Scraper'],
        link: '#',
        image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4c5?auto=format&fit=crop&w=800&q=80',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding container">
            <h2 className="text-4xl font-bold mb-16 text-center">Featured <span className="text-gradient">Projects</span></h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass-card overflow-hidden rounded-3xl"
                    >
                        <div className="aspect-video overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <div className="flex gap-4">
                                    <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-text-secondary text-sm line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://github.com/kisalnelaka"
                    target="_blank"
                    className="text-text-secondary hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                    View more on GitHub <ExternalLink size={16} />
                </a>
            </div>
        </section>
    );
};

export default Projects;
