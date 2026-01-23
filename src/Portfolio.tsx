import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
    <footer className="py-12 border-t border-white/5 mt-20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-text-muted">
                &copy; {new Date().getFullYear()} Kisal Nelaka. Built with Three.js & React.
            </p>
            <div className="flex gap-8 text-text-muted text-sm">
                <a href="https://github.com/kisalnelaka" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/kisalnelaka" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="mailto:kisalnelaka6@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
        </div>
    </footer>
);

const Education: React.FC = () => (
    <section className="section-padding container">
        <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
            {[
                {
                    school: 'Kingston University',
                    degree: 'BS in Cybersecurity and Digital Forensics',
                    location: 'London, UK',
                },
                {
                    school: 'Sri Lanka Institute of Information Technology',
                    degree: 'HND in Information Technology',
                    location: 'Colombo, LK',
                }
            ].map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-8 glass-pane items-center"
                >
                    <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center shrink-0">
                        <GraduationCap className="text-indigo-400" size={30} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{edu.school}</h3>
                        <p className="text-indigo-400 text-sm font-medium">{edu.degree}</p>
                        <p className="text-text-muted text-xs mt-1">{edu.location}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

const Portfolio: React.FC = () => {
    return (
        <>
            <ThreeBackground />
            <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Footer />
            </main>
        </>
    );
};

export default Portfolio;
