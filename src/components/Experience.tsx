import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'ASMORPHIC',
        role: 'Senior Full Stack Developer',
        period: '2025',
        description: 'Senior architect for enterprise-scale telecom infrastructure. I designed and deployed high-availability DID management systems and complex data processing pipelines using Python and Laravel. My focus was on deterministic state management and eliminating single points of failure in mission-critical environments.',
    },
    {
        company: 'AMPLIFYD',
        role: 'Full-stack Web Developer',
        period: '2024',
        description: 'Lead refactoring efforts for high-traffic production codebases. I implemented deep security auditing layers and optimized core database queries to resolve critical performance bottlenecks: ensuring 99.9% uptime during peak traffic periods.',
    },
    {
        company: 'CORE IT SOLUTIONS',
        role: 'Full-stack Web Developer',
        period: '2023 – 2024',
        description: 'Developed scalable RESTful ecosystems and automated CI/CD pipelines. I architected multi-tenant dashboard systems with real-time analytics for enterprise clients: focusing on modular design and developer-friendly documentation.',
    },
    {
        company: 'MEDFUTURE',
        role: 'Development Manager',
        period: '2022',
        description: 'Orchestrated the migration of a large-scale legacy CakePHP monolith to a modern Laravel architecture. This transition resulted in a 40% performance gain and allowed for the implementation of modern security standards across the entire medical platform.',
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding container border-b-8 border-brutal-black cursor-crosshair">
            <div className="flex flex-col items-center mb-16 text-center bg-brutal-black p-8 text-white border-4 border-brutal-black shadow-[8px_8px_0px_#FF3366]">
                <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase leading-none text-white">PROFESSIONAL <span className="bg-primary px-2 text-brutal-black">TRAJECTORY</span></h2>
                <p className="text-white font-mono text-lg bg-brutal-black p-2 inline-block border-2 border-primary uppercase">A chronicle of professional evolution, technical leadership, and system excellence.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative max-w-5xl mx-auto z-10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.4}
                        whileDrag={{ scale: 1.05, zIndex: 50 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1, delay: index * 0.1 }}
                        className="flex flex-col brutal-card-light cursor-grab active:cursor-grabbing bg-white relative hover:z-20"
                    >
                        {/* Title Bar */}
                        <div className="bg-accent text-black font-mono font-bold text-xs p-2 border-b-4 border-brutal-black flex justify-between items-center select-none shadow-[0px_4px_0px_#000]">
                            <span>SystemLog.txt - {exp.period}</span>
                            <div className="flex gap-2">
                                <span className="bg-white border-2 border-brutal-black w-4 h-4 inline-block hover:bg-gray-200"></span>
                                <span className="bg-white border-2 border-brutal-black w-4 h-4 inline-flex items-center justify-center text-brutal-black font-black hover:bg-red-500 hover:text-white">x</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 select-none flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-4xl font-black mb-2 text-brutal-black uppercase tracking-tight bg-primary text-white inline-block px-4 py-2 shadow-[4px_4px_0px_#000] border-4 border-brutal-black">{exp.company}</h3>
                                <p className="text-brutal-black font-bold mb-8 text-sm uppercase tracking-widest mt-4 opacity-80 flex items-center gap-2">
                                    <Briefcase size={16} /> {exp.role}
                                </p>
                                <p className="text-brutal-black leading-relaxed font-mono text-justify border-l-4 border-accent pl-4 font-bold text-base bg-gray-100 p-4 border-y-4 border-r-4">{exp.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
