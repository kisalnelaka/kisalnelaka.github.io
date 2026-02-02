import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const GitHubStats: React.FC = () => (
    <section className="section-padding container">
        <h2 className="text-5xl font-bold mb-20 text-center tracking-tighter italic uppercase leading-none">TECHNICAL <span className="text-gradient">FOOTPRINT</span></h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-4 flex items-center justify-center overflow-hidden"
            >
                <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=kisalnelaka&theme=dark&hide_border=true"
                    alt="GitHub Streak"
                    className="w-full h-auto"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-4 flex items-center justify-center overflow-hidden"
            >
                <img
                    src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=kisalnelaka&theme=dark"
                    alt="Top Languages"
                    className="w-full h-auto"
                />
            </motion.div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="py-20 border-t border-white/5 mt-20">
        <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6 italic">KISAL <span className="text-gradient">NELAKA</span></h2>
                    <p className="text-text-muted font-light max-w-sm leading-relaxed text-justify">
                        I design and deploy systems that stay online when everything else fails. My work is defined by deterministic logic and a refusal to accept "good enough" infrastructure: specializing in mission-critical architecture and security.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest italic">Digital Presence</h4>
                    <div className="space-y-4 text-text-muted text-sm">
                        <a href="https://github.com/kisalnelaka" className="block hover:text-white transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/kisalnelaka" className="block hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest italic">Direct Contact</h4>
                    <div className="space-y-4 text-text-muted text-sm">
                        <a href="mailto:kisalnelaka6@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={14} /> kisalnelaka6@gmail.com
                        </a>
                        <div className="flex items-center gap-2">
                            <Phone size={14} /> +974 7753 3967
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs text-text-muted uppercase tracking-[0.2em]">
                <p>&copy; {new Date().getFullYear()} KISAL NELAKA • ALL RIGHTS RESERVED</p>
                <p>ENGINEERED FOR SCALE</p>
            </div>
        </div>
    </footer>
);

const Education: React.FC = () => (
    <section className="section-padding container">
        <h2 className="text-5xl font-bold mb-20 text-center tracking-tighter uppercase leading-none">ACADEMIC <span className="text-gradient">BACKGROUND</span></h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
                {
                    school: 'Kingston University',
                    degree: 'BS in Cybersecurity and Digital Forensics',
                    location: 'London, UK',
                },
                {
                    school: 'SLIIT',
                    degree: 'HND in Information Technology',
                    location: 'Colombo, LK',
                }
            ].map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col p-10 glass-card"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                        <GraduationCap className="text-primary" size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{edu.degree}</p>
                    <p className="text-text-muted text-xs mt-auto flex items-center gap-2">
                        <MapPin size={12} /> {edu.location}
                    </p>
                </motion.div>
            ))}
        </div>
    </section>
);

const Portfolio: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <CustomCursor />
            <ThreeBackground />
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />
            <main className="relative z-10 w-full overflow-hidden">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <GitHubStats />
                <Education />
                <Footer />
            </main>
        </>
    );
};

export default Portfolio;
