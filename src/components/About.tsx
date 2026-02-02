import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Laravel (Enterprise)', level: '98%' },
    { name: 'AI & Deep Learning', level: '82%' },
    { name: 'Systems Programming (C++)', level: '78%' },
    { name: 'React (Advanced)', level: '92%' },
    { name: 'Cybersecurity Architecture', level: '88%' },
    { name: 'Infrastructure (Docker/K8s)', level: '85%' },
    { name: 'Digital Forensics', level: '80%' },
    { name: 'Machine Learning', level: '75%' },
    { name: 'Cloud (AWS/GCP)', level: '82%' },
    { name: 'Full-stack Performance', level: '95%' },
];

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding container">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 italic tracking-tighter">engineering <span className="text-gradient">philosophy</span> & core expertise</h2>
                    <div className="space-y-6 text-text-dim text-lg md:text-xl leading-relaxed font-light text-justify">
                        <p>
                            I build systems that stay online when everything else fails. My work is defined by deterministic logic and a refusal to accept "good enough" infrastructure. I don't just write code: I engineer environments where failure isn't an option.
                        </p>
                        <p>
                            With a deep foundation in <span className="text-white font-medium">Cybersecurity & Digital Forensics</span>, I treat security as the primary architectural constraint. Every bit is engineered with integrity, performance, and long-term maintainability as the baseline.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-12">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter italic">10+</h4>
                            <p className="text-text-muted text-xs uppercase tracking-[0.2em]">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter italic">50+</h4>
                            <p className="text-text-muted text-xs uppercase tracking-[0.2em]">Production Deployments</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 w-full glass-card p-10 md:p-14"
                >
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 italic">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        Core Expertise
                    </h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="group">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">{skill.name}</span>
                                    <span className="text-xs text-text-muted">{skill.level}</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                        className="h-full bg-gradient-to-r from-primary to-secondary"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
