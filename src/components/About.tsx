import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const skills = [
        { name: 'Laravel', category: 'Backend' },
        { name: 'PHP', category: 'Backend' },
        { name: 'Python', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'React', category: 'Frontend' },
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'MySQL', category: 'Database' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'CI/CD', category: 'DevOps' },
        { name: 'AWS', category: 'DevOps' },
    ];

    return (
        <section id="about" className="section-padding container">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-8">About <span className="text-gradient">Me</span></h2>
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <p>
                            With over 8 years of experience, I am a seasoned Full Stack Developer passionate about
                            building high-performance, secure, and user-centric web applications. My journey spans
                            from crafting complex Laravel backends to architecting seamless React frontends.
                        </p>
                        <p>
                            I thrive in challenging environments where I can leverage my deep understanding of
                            PHP and JavaScript to solve critical production issues and optimize system scalability.
                            My background in Cybersecurity and Digital Forensics adds a layer of security-first
                            thinking to every line of code I write.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-pane p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors text-sm font-medium"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
