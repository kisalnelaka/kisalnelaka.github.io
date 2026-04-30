import React from 'react';
import { Mail, Github, Linkedin, BookOpen, MonitorPlay, Shield, Database, LayoutTemplate } from 'lucide-react';

const projects = [
    {
        title: 'TheNet',
        category: 'Decentralized Mesh Architecture',
        description: 'A high-performance, decentralized mesh network dashboard. Engineered for premium local Wi-Fi file management, media streaming, and cross-platform synchronization. A flawless, invisible web of connectivity operating in perfect silence.',
        icon: <MonitorPlay className="text-secondary" size={24} />
    },
    {
        title: 'Imladris',
        category: 'Spatial Mind Palace & Neural Graph',
        description: 'An ethereal, offline-first Android sanctuary for knowledge. Designed with a neural knowledge graph and glassmorphic gateways. Because one’s intellect should be curated with the utmost architectural rigor.',
        icon: <Database className="text-secondary" size={24} />
    },
    {
        title: 'TenancyOS',
        category: 'Enterprise Property Management SaaS',
        description: 'A production-ready, multi-tenant monolith built with Laravel 11 and React. Features automated organization scoping, strict RBAC, and absolute audit logging. It governs properties seamlessly, so one does not have to endure the tedium of manual oversight.',
        icon: <LayoutTemplate className="text-secondary" size={24} />
    },
    {
        title: 'NOOR Elite',
        category: 'AI Concierge Architecture',
        description: 'An elite, cross-platform AI concierge system forged in Dart and backed by a robust architecture. Designed to anticipate, calculate, and execute without hesitation.',
        icon: <MonitorPlay className="text-secondary" size={24} />
    },
    {
        title: 'Vendetta 84',
        category: 'Commercial-Grade Noir Interactive Experience',
        description: 'A Unity architecture blending FPS/TPS mechanics with a meticulously crafted VHS noir aesthetic. The environment is perfectly scripted, the AI ruthlessly deterministic. A flawless simulation of consequence.',
        icon: <MonitorPlay className="text-secondary" size={24} />
    },
    {
        title: 'Agentic Architect (Claude Code)',
        category: 'Autonomous Terminal Intelligence',
        description: 'An agentic tool that lives within the terminal to execute routine tasks autonomously. After all, why should I sully my hands with mundane tasks when I can engineer an entity to serve me?',
        icon: <Database className="text-secondary" size={24} />
    },
    {
        title: 'Audio Acquisition Engine',
        category: 'Bulk Downloader',
        description: 'A JavaScript-based bulk downloader and sorting engine for the YouTube audio library. Precision automation for digital asset acquisition.',
        icon: <MonitorPlay className="text-secondary" size={24} />
    }
];

const publications = [
    "Building InfraFlow: A Production-Grade Multi-Tenant MSP Platform with Laravel 11 and Filament v3",
    "Bunny: Revolutionizing Web Development with Laravel",
    "Bunny: The Laravel Scaffolding Package That Makes Web Development a Hop",
    "JavaScript for Clueless Newbies:Part 1 — Variables, Data Types, & Operators",
    "Part 3: Lure Creation — The Art of Deception in Phishing Attacks",
    "Part 2: The Reconnaissance Phase — Uncovering the Secrets of Phishing Preparation",
    "The Lifecycle of a Phishing Attack: How Cybercriminals Bait, Hook, and Exploit",
    "PhishCatcher: Real-Time Phishing Detection with Chrome Extensions and Machine Learning",
    "Building a Blockchain-Powered, Encrypted Chat Application with Python",
    "Demystifying Shellcode Generation: A Guide for Beginners"
];

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-textMain selection:bg-gray-200 selection:text-textMain font-sans leading-relaxed">
            
            {/* Header */}
            <header className="container mx-auto px-6 py-12 flex justify-between items-center border-b border-accent/50">
                <div className="flex flex-col">
                    <span className="text-xl font-medium tracking-tight text-primary">Kisal Nelaka</span>
                    <span className="text-sm text-textMuted mt-1">Doha, Qatar</span>
                </div>
                <nav className="flex items-center gap-6 text-sm text-secondary">
                    <a href="https://github.com/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Github size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Linkedin size={18} />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href="mailto:kisalnelaka6@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Mail size={18} />
                        <span className="hidden sm:inline">Contact</span>
                    </a>
                </nav>
            </header>

            <main className="container mx-auto px-6">
                
                {/* Hero Section */}
                <section className="py-24 md:py-32 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight">
                        Architect of Digital Entropy <br />
                        <span className="text-secondary">Engineer of the Inevitable</span>
                    </h1>
                    <div className="text-lg md:text-xl text-textMain space-y-6 max-w-3xl leading-relaxed">
                        <p>
                            Allow me to be perfectly candid. The architecture of modern software is tragically flawed, riddled with inefficiencies, security gaps, and profound human error. I find such chaos... distasteful. I do not merely write code; I engineer systems that are precise, calculated, and absolute.
                        </p>
                        <p>
                            For over eight years, I have orchestrated enterprise infrastructure, neural knowledge graphs, and decentralized networks. I hold a degree in Cybersecurity, affording me a rather intimate understanding of exactly how systems shatter—and how to forge them so they do not. The design must be immaculate. The execution, flawless.
                        </p>
                        <p>
                            I occasionally observe the frantic struggles of developers wrestling with poorly optimized codebases. It is genuinely fascinating how the industry accepts such mediocrity. Humans are so interesting in their willingness to settle. But when the stakes are absolute, I am the one called upon to impose order. The work requires a certain intellectual endurance—a quiet room, a steady supply of perfectly brewed Earl Grey, and perhaps an apple.
                        </p>
                        <p className="pt-4 text-primary font-medium">
                            I am building the architecture of a new world. Care to see what I've written?
                        </p>
                    </div>
                </section>

                {/* The Arsenal of Absolute Control */}
                <section className="py-20 border-t border-accent/50 max-w-5xl">
                    <h2 className="text-2xl font-medium text-primary mb-12 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        The Arsenal of Absolute Control
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="minimal-card p-8">
                            <MonitorPlay className="text-secondary mb-6" size={28} />
                            <h3 className="text-lg font-medium text-primary mb-4">Instruments of Logic</h3>
                            <p className="text-sm text-textMuted leading-relaxed">
                                TypeScript, Kotlin, Dart, C#, Python, C++, PHP.
                            </p>
                        </div>
                        <div className="minimal-card p-8">
                            <LayoutTemplate className="text-secondary mb-6" size={28} />
                            <h3 className="text-lg font-medium text-primary mb-4">Architectural Foundations</h3>
                            <p className="text-sm text-textMuted leading-relaxed">
                                Laravel 11, Unity, Node.js, Multi-Tenant System Design. <br/><br/>
                                The Aesthetic Facade: React, Vue.js, Glassmorphic UI, Spatial Interface Design.
                            </p>
                        </div>
                        <div className="minimal-card p-8 border-t-4 border-t-secondary/20">
                            <Shield className="text-secondary mb-6" size={28} />
                            <h3 className="text-lg font-medium text-primary mb-4">The Dark Arts</h3>
                            <p className="text-sm text-textMuted leading-relaxed">
                                Security & Operations: Docker, Linux, Penetration Testing. I secure networks merely because vulnerabilities offend my sensibilities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Masterpieces of Engineering */}
                <section className="py-20 border-t border-accent/50">
                    <h2 className="text-2xl font-medium text-primary mb-12 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Masterpieces of Engineering
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="minimal-card p-8 flex flex-col h-full bg-white">
                                <div className="mb-6">{project.icon}</div>
                                <h3 className="text-xl font-medium text-primary mb-2">{project.title}</h3>
                                <p className="text-xs font-medium text-secondary mb-6 tracking-wide uppercase">{project.category}</p>
                                <p className="text-sm text-textMuted leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Meticulous Observations (Publications) */}
                <section className="py-20 border-t border-accent/50 max-w-4xl">
                    <h2 className="text-2xl font-medium text-primary mb-12 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Meticulous Observations
                    </h2>
                    
                    <div className="space-y-4">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="group flex items-start gap-4 p-4 rounded-md hover:bg-surface border border-transparent hover:border-accent transition-colors">
                                <BookOpen className="text-secondary mt-1 flex-shrink-0" size={18} />
                                <span className="text-textMain text-sm leading-relaxed group-hover:text-primary transition-colors">
                                    {pub}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-surface border-t border-accent mt-20 py-16">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <p className="text-lg font-medium text-primary mb-8">
                        If you are going to contact me, make it worth my time.<br/>
                        <span className="text-secondary">I have a new world to architect.</span>
                    </p>
                    <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary">
                        Initiate Contact
                    </a>
                    <div className="mt-16 flex items-center justify-center gap-6 text-sm text-textMuted">
                        <span>&copy; {new Date().getFullYear()} Kisal Nelaka</span>
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        <a href="https://linkedin.com/in/kisalnelaka" className="hover:text-primary transition-colors">LinkedIn</a>
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        <a href="https://github.com/kisalnelaka" className="hover:text-primary transition-colors">GitHub</a>
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        <a href="https://medium.com" className="hover:text-primary transition-colors">Medium</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Portfolio;
