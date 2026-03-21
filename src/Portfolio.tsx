import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import Terminal from './components/Terminal';
import { GraduationCap, Mail, Phone, MapPin, Code2 } from 'lucide-react';

const GitHubStats: React.FC = () => (
    <section className="section-padding container border-b-8 border-brutal-black bg-accent">
        <h2 className="text-5xl font-black mb-12 text-center uppercase leading-none text-brutal-black">TECHNICAL <span className="bg-white px-2 border-4 border-brutal-black">FOOTPRINT</span></h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="brutal-card-light bg-white p-4 flex items-center justify-center overflow-hidden"
            >
                <img
                    src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=kisalnelaka&theme=nord"
                    alt="GitHub Stats"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="brutal-card-light bg-white p-4 flex items-center justify-center overflow-hidden"
            >
                <img
                    src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=kisalnelaka&theme=nord"
                    alt="Top Languages"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all"
                />
            </motion.div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="py-20 border-t-8 border-brutal-black bg-brutal-black text-white">
        <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="text-4xl font-black mb-6 uppercase">KISAL <span className="bg-primary text-white px-2">NELAKA</span></h2>
                    <p className="font-mono text-sm max-w-sm leading-relaxed text-justify border-l-4 border-primary pl-4">
                        I design and deploy systems that stay online when everything else fails. My work is defined by deterministic logic and a refusal to accept "good enough" infrastructure: specializing in mission-critical architecture and security.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-black mb-6 text-xl uppercase bg-accent text-brutal-black inline-block px-2 border-2 border-brutal-black">Digital Presence</h4>
                    <div className="space-y-4 font-bold text-sm uppercase">
                        <a href="https://github.com/kisalnelaka" className="block hover:text-primary transition-colors">&gt; GitHub</a>
                        <a href="https://linkedin.com/in/kisalnelaka" className="block hover:text-primary transition-colors">&gt; LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-black mb-6 text-xl uppercase bg-primary inline-block px-2 border-2 border-white">Direct Contact</h4>
                    <div className="space-y-4 font-mono text-sm">
                        <a href="mailto:kisalnelaka6@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={16} /> kisalnelaka6@gmail.com
                        </a>
                        <div className="flex items-center gap-2">
                            <Phone size={16} /> +974 7753 3967
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t-4 border-white font-black text-sm uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} KISAL NELAKA • ALL RIGHTS RESERVED</p>
                <p className="bg-white text-brutal-black px-2 py-1">ENGINEERED FOR SCALE</p>
            </div>
        </div>
    </footer>
);

const Education: React.FC = () => (
    <section className="section-padding container border-b-8 border-brutal-black bg-white">
        <h2 className="text-5xl font-black mb-16 text-center uppercase text-brutal-black">ACADEMIC <span className="bg-accent px-2 border-4 border-brutal-black text-black">BACKGROUND</span></h2>
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
                    className="flex flex-col p-10 brutal-card-light bg-white border-4 border-brutal-black hover:-translate-y-2 hover:-translate-x-2 transition-transform shadow-[8px_8px_0px_#FF3366]"
                >
                    <div className="w-16 h-16 bg-brutal-black border-4 border-primary flex items-center justify-center mb-8 shadow-[4px_4px_0px_#000]">
                        <GraduationCap className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase text-brutal-black leading-tight border-b-4 border-brutal-black pb-4">{edu.school}</h3>
                    <p className="text-brutal-black font-bold font-mono text-sm mb-4 bg-accent p-2 inline-block border-2 border-brutal-black">{edu.degree}</p>
                    <p className="text-brutal-black font-bold text-xs mt-auto flex items-center gap-2 uppercase tracking-widest pt-4">
                        <MapPin size={16} /> {edu.location}
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

    const [isRawMode, setIsRawMode] = useState(false);

    if (isRawMode) {
        return (
            <div className="min-h-screen bg-brutal-black text-green-500 font-mono p-8 text-sm">
                <button 
                    onClick={() => setIsRawMode(false)}
                    className="mb-8 border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
                >
                    [ DEFUSE RAW MODE ]
                </button>
                <h1 className="text-2xl font-bold mb-4">/* RAW_DATA_DUMP.JSON */</h1>
                <pre className="whitespace-pre-wrap opacity-80">
                    {JSON.stringify({
                        status: "SECURE",
                        identity: "Kisal Nelaka",
                        role: "Full-Stack Architect & Security Engineer",
                        skills: ["Cloud Architecture", "Security Auditing", "Deterministic Logic", "React", "Node", "PostgreSQL"],
                        contact: "kisalnelaka6@gmail.com",
                        location: "Doha, Qatar",
                        projects: ["Neo_Protocol", "KnockKnock_Cloud", "Defiant_Systems"],
                    }, null, 2)}
                </pre>
            </div>
        );
    }

    return (
        <div className="bg-bg-dark min-h-screen text-text-main selection:bg-accent selection:text-black relative">
            <CustomCursor />
            <Marquee />
            <Terminal />
            
            {/* Raw Mode Toggle */}
            <button
                onClick={() => setIsRawMode(true)}
                className="fixed top-20 right-6 z-50 bg-brutal-black text-white p-2 border-2 border-white hover:bg-white hover:text-black transition-colors tooltip tooltip-left font-mono text-xs uppercase"
                data-tip="Toggle Raw Mode"
            >
                <Code2 size={20} />
            </button>

            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />
            <main className="relative z-10 w-full overflow-hidden border-8 border-brutal-black mx-auto max-w-[1920px] bg-white text-black shadow-2xl">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <GitHubStats />
                <Education />
                <Footer />
            </main>
        </div>
    );
};

export default Portfolio;
