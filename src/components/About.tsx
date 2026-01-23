import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'Laravel', level: '95%' },
    { name: 'PHP', level: '98%' },
    { name: 'React', level: '90%' },
    { name: 'Vue.js', level: '85%' },
    { name: 'Python', level: '80%' },
    { name: 'Node.js', level: '82%' },
    { name: 'Docker', level: '88%' },
    { name: 'AWS', level: '75%' },
    { name: 'PostgreSQL', level: '92%' },
    { name: 'Security', level: '85%' },
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 italic tracking-tighter">Engineering <span className="text-gradient">Philosophy</span></h2>
                    <div className="space-y-6 text-text-dim text-lg md:text-xl leading-relaxed font-light text-justify">
                        <p>
                            With over 8 years in the field, I don't just write code; I architect solutions.
                            My background in <span className="text-white font-medium">Cybersecurity & Digital Forensics</span>
                            means every architecture is built with a security-first mindset.
                        </p>
                        <p>
                            I specialize in taking complex, legacy backends and transforming them into
                            <span className="text-white font-medium"> high-performance, scalable ecosystems</span>.
                            Whether it's Laravel, React, or Python-driven automation, my focus is always on
                            maintainability and pixel-perfect execution.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-12">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter italic">8+</h4>
                            <p className="text-text-muted text-xs uppercase tracking-[0.2em]">Years Exp</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter italic">50+</h4>
                            <p className="text-text-muted text-xs uppercase tracking-[0.2em]">Projects</p>
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
