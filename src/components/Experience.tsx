import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: 'ASMORPHIC',
        role: 'Senior Full Stack Developer',
        period: 'Apr 2025 – July 2025',
        description: [
            'Developed Laravel and Filament-based backend systems for telecom operations.',
            'Implemented DID ordering, porting workflows, and inventory management.',
            'Built Python integrations with Odoo ERP for automated data sync.',
        ],
    },
    {
        company: 'AMPLIFYD',
        role: 'Full-stack Web Developer',
        period: 'May 2024 – Dec 2024',
        description: [
            'Maintained production Laravel and WordPress applications.',
            'Refactored legacy PHP codebases to improve performace.',
            'Resolved critical production issues and implemented security fixes.',
        ],
    },
    {
        company: 'CORE IT SOLUTIONS',
        role: 'Full-stack Web Developer',
        period: 'May 2023 – May 2024',
        description: [
            'Designed and implemented REST APIs and admin dashboards.',
            'Implemented automation scripts, monitoring, and deployment workflows.',
        ],
    },
    {
        company: 'MEDFUTURE MEDICAL RECRUITMENT',
        role: 'Manager Website Development',
        period: 'Sept 2022 – Dec 2022',
        description: [
            'Migrated legacy CakePHP applications to Laravel.',
            'Improved database schemas and query performance.',
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding bg-bg-secondary/50">
            <div className="container">
                <h2 className="text-4xl font-bold mb-16 text-center">Work <span className="text-gradient">History</span></h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 md:p-10 rounded-3xl"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-3">
                                        <Briefcase className="text-indigo-500" size={24} />
                                        {exp.company}
                                    </h3>
                                    <p className="text-indigo-400 font-medium">{exp.role}</p>
                                </div>
                                <div className="text-text-muted font-medium bg-white/5 px-4 py-2 rounded-full text-sm">
                                    {exp.period}
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
