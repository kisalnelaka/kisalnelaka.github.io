import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'ASMORPHIC',
        role: 'Senior Full Stack Developer',
        period: '2025',
        description: 'Lead architect for enterprise telecom backend systems. Orchestrated complex DID workflows and mission-critical data integrations using Python, Laravel, and asynchronous processing.',
    },
    {
        company: 'AMPLIFYD',
        role: 'Full-stack Web Developer',
        period: '2024',
        description: 'Stabilized and refactored high-traffic production codebases. Implemented critical security auditing layers and performance optimization strategies to ensure platform reliability.',
    },
    {
        company: 'CORE IT SOLUTIONS',
        role: 'Full-stack Web Developer',
        period: '2023 – 2024',
        description: 'Engineered RESTful ecosystems and automated deployment pipelines. Designed scalable dashboard architectures and real-time monitoring solutions for enterprise clients.',
    },
    {
        company: 'MEDFUTURE',
        role: 'Development Manager',
        period: '2022',
        description: 'Headed legacy migration project from CakePHP to modern Laravel, resulting in a 40% improvement in system performance and significantly reduced technical debt.',
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding bg-bg-secondary/20">
            <div className="container">
                <div className="flex flex-col items-center mb-24 text-center">
                    <h2 className="text-5xl font-bold mb-6 italic tracking-tighter uppercase leading-none">PROFESSIONAL <span className="text-gradient">TRAJECTORY</span></h2>
                    <p className="text-text-dim max-w-lg font-light text-lg">A chronicle of professional evolution, technical leadership, and system excellence.</p>
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
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-12 mb-32 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-[3px] border-bg-dark -translate-x-1/2 z-10 hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

                            <div className="md:w-1/2">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className={`glass-card p-10 md:p-12 border-white/5 hover:border-primary/40 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <Calendar size={16} className="text-primary" />
                                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{exp.period}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 text-white italic tracking-tight">{exp.company}</h3>
                                    <p className="text-primary/80 font-medium mb-8 text-sm uppercase tracking-widest">{exp.role}</p>
                                    <p className="text-text-dim leading-relaxed font-light text-justify text-lg">{exp.description}</p>
                                </motion.div>
                            </div>
                            <div className="md:w-1/2 flex items-center justify-center opacity-5 grayscale hover:grayscale-0 transition-all duration-700 hover:opacity-20 pointer-events-none">
                                <Briefcase size={160} strokeWidth={0.5} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
