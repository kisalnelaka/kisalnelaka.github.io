import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'ASMORPHIC',
        role: 'Senior Full Stack Developer',
        period: '2025',
        description: 'Lead architect for telecom backend systems. Orchestrated complex DID workflows and Odoo ERP integrations using Python & Laravel Filament.',
    },
    {
        company: 'AMPLIFYD',
        role: 'Full-stack Web Developer',
        period: '2024',
        description: 'Stabilized and refactored high-traffic production PHP codebases. Implemented critical security auditing and performance optimization layers.',
    },
    {
        company: 'CORE IT SOLUTIONS',
        role: 'Full-stack Web Developer',
        period: '2023 – 2024',
        description: 'Engineered RESTful ecosystems and automated deployment pipelines. Focused on scalable dashboard architectures and real-time monitoring.',
    },
    {
        company: 'MEDFUTURE',
        role: 'Development Manager',
        period: '2022',
        description: 'Headed legacy migration project from CakePHP to modern Laravel, resulting in a 40% improvement in query performance.',
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container">
                <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-5xl font-bold mb-4">The <span className="text-gradient">Trajectory</span></h2>
                    <p className="text-text-dim max-w-lg">A chronicle of professional evolution and technical leadership.</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-12 mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary border-4 border-bg-dark -translate-x-1/2 z-10 hidden md:block shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                            <div className="md:w-1/2">
                                <div className={`glass-card p-8 md:p-10 hover:border-primary/30 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Calendar size={14} className="text-primary" />
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.period}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 text-white">{exp.company}</h3>
                                    <p className="text-text-muted font-medium mb-6 text-sm">{exp.role}</p>
                                    <p className="text-text-dim leading-relaxed font-light">{exp.description}</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex items-center justify-center opacity-10 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-50 pointer-events-none">
                                <Briefcase size={120} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
