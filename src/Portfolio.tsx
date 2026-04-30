import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Server, Layers, Shield, Terminal as TerminalIcon, Cpu, Smartphone, LayoutTemplate, Database } from 'lucide-react';

const projects = [
    {
        title: 'TenancyOS',
        category: 'Enterprise Property Management SaaS',
        problem: 'B2B property management systems suffer from data-leakage risks and complex tenant onboarding.',
        solution: 'Engineered a production-ready, multi-tenant monolith featuring automated organization scoping, strict RBAC, and comprehensive audit logging.',
        tech: 'Laravel 11, React, PostgreSQL',
        icon: <Layers className="text-accent" size={28} />
    },
    {
        title: 'TheNet',
        category: 'Decentralized Mesh Architecture',
        problem: 'Cross-platform local file sharing and media streaming is often fragmented and relies on external servers.',
        solution: 'Built a high-performance, decentralized mesh network dashboard for seamless, secure local Wi-Fi file management and multi-device synchronization.',
        tech: 'Node.js, WebSockets, React, Glassmorphic UI',
        icon: <Server className="text-accent" size={28} />
    },
    {
        title: 'NOOR Elite',
        category: 'AI Concierge Architecture',
        problem: 'Integrating AI assistants seamlessly into daily, cross-platform workflows with high reliability.',
        solution: 'Developed a robust, cross-platform AI concierge system with complex state management, capable of asynchronous task execution and API integration.',
        tech: 'Dart, Flutter, SQLite/PostgreSQL, Custom LLM integrations',
        icon: <Cpu className="text-accent" size={28} />
    },
    {
        title: 'Imladris',
        category: 'Spatial Mind Palace & Neural Graph',
        problem: 'Standard note-taking apps lack semantic connection between offline, personal knowledge bases.',
        solution: 'Architected an offline-first Android application utilizing a custom neural knowledge graph to interlink notes spatially, wrapped in a highly optimized UI.',
        tech: 'Kotlin, Android SDK, Local Graph Database',
        icon: <Database className="text-accent" size={28} />
    },
    {
        title: 'Agentic Architect (Claude Code)',
        category: 'Autonomous Terminal Intelligence',
        problem: 'Developer workflows are bogged down by repetitive scaffolding and maintenance tasks.',
        solution: 'Configured an agentic CLI tool capable of autonomously executing routine repository tasks, refactoring, and codebase analysis.',
        tech: 'Python/Node, LLM Tool Calling, Bash scripting',
        icon: <TerminalIcon className="text-accent" size={28} />
    },
    {
        title: 'Vendetta 84',
        category: 'Commercial-Grade Noir Interactive Experience',
        problem: 'Balancing high-fidelity visuals (VHS noir aesthetic) with performant game mechanics on mobile/PC.',
        solution: 'Architected a Unity-based hybrid FPS/TPS system, utilizing optimized state machines for AI and precise event scripting for environmental interaction.',
        tech: 'Unity, C#, SDL2 Input System',
        icon: <LayoutTemplate className="text-accent" size={28} />
    }
];

const capabilities = [
    {
        title: 'Core Languages',
        description: 'TypeScript, Kotlin, Dart, C#, Python, C++, PHP.',
        icon: <Code2 className="text-accent mb-4" size={32} />
    },
    {
        title: 'Backend & Architecture',
        description: 'Laravel 11, Node.js, Multi-Tenant System Design, RESTful & GraphQL APIs.',
        icon: <Server className="text-accent mb-4" size={32} />
    },
    {
        title: 'Frontend & Design Systems',
        description: 'React, Vue.js, Glassmorphic UI, Spatial Interface Design, TailwindCSS.',
        icon: <Smartphone className="text-accent mb-4" size={32} />
    },
    {
        title: 'DevOps & Security',
        description: 'Docker, Linux, Penetration Testing, CI/CD pipelines, Secure System Architecture.',
        icon: <Shield className="text-accent mb-4" size={32} />
    }
];

const publications = [
    "Building InfraFlow: A Production-Grade Multi-Tenant MSP Platform with Laravel 11 and Filament v3",
    "Bunny: Revolutionizing Web Development with Laravel",
    "Bunny: The Laravel Scaffolding Package That Makes Web Development a Hop",
    "JavaScript for Clueless Newbies: Part 1 — Variables, Data Types, & Operators",
    "Part 3: Lure Creation — The Art of Deception in Phishing Attacks",
    "Part 2: The Reconnaissance Phase — Uncovering the Secrets of Phishing Preparation",
    "The Lifecycle of a Phishing Attack: How Cybercriminals Bait, Hook, and Exploit",
    "PhishCatcher: Real-Time Phishing Detection with Chrome Extensions and Machine Learning",
    "Building a Blockchain-Powered, Encrypted Chat Application with Python",
    "Demystifying Shellcode Generation: A Guide for Beginners"
];

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white font-sans leading-relaxed relative overflow-hidden">
            
            {/* Spatial Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] animate-blob pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[150px] animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-500/5 blur-[100px] animate-blob pointer-events-none" style={{ animationDelay: '4s' }}></div>

            {/* Header */}
            <header className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10 animate-fade-in">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tight text-white">Kisal Nelaka</span>
                    <span className="text-sm text-secondary mt-1 font-medium tracking-wide">Full-Stack Software Engineer & Systems Architect</span>
                </div>
                <nav className="flex items-center gap-6 text-sm text-secondary font-medium">
                    <a href="https://github.com/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <Github size={20} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <Linkedin size={20} />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href="mailto:kisalnelaka6@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                        <Mail size={20} />
                        <span className="hidden sm:inline">Contact</span>
                    </a>
                </nav>
            </header>

            <main className="container mx-auto px-6 relative z-10">
                
                {/* Hero Section */}
                <section className="py-24 md:py-36 max-w-4xl animate-slide-up">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Architecting resilient, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">high-performance systems.</span>
                    </h1>
                    <div className="text-lg md:text-xl text-secondary space-y-6 max-w-3xl leading-relaxed">
                        <p className="text-white font-medium">
                            I specialize in turning complex business challenges into precise, optimized, and scalable technical solutions.
                        </p>
                        <p>
                            With over eight years of experience spanning enterprise infrastructure, machine learning integrations, and decentralized networks, I bring a rigorous, security-first mindset to software engineering. My background in Cybersecurity allows me to anticipate system bottlenecks and build robust, secure architectures from the ground up.
                        </p>
                        <p>
                            I thrive in environments that require deep technical problem-solving. Whether it's optimizing a legacy codebase, designing a multi-tenant B2B SaaS, or implementing AI-driven workflows, my goal is always to deliver software that is both elegant and exceptionally reliable.
                        </p>
                        <p className="pt-6">
                            <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary">
                                I am currently open to new engineering opportunities.
                            </a>
                        </p>
                    </div>
                </section>

                {/* Technical Capabilities */}
                <section className="py-20 max-w-6xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                        Technical Capabilities & Stack
                        <div className="h-px bg-borderLine flex-grow ml-4"></div>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((cap, idx) => (
                            <div key={idx} className="glass-card p-8 group">
                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                    {cap.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Engineering Showcase */}
                <section className="py-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                        Engineering Showcase
                        <div className="h-px bg-borderLine flex-grow ml-4"></div>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="glass-card p-8 flex flex-col h-full group">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="p-3 bg-surfaceHover rounded-xl group-hover:bg-accent/20 transition-colors">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">{project.category}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4 flex-grow text-sm">
                                    <div>
                                        <strong className="text-white block mb-1">The Problem:</strong>
                                        <p className="text-secondary leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <strong className="text-white block mb-1">The Solution:</strong>
                                        <p className="text-secondary leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-borderLine">
                                    <span className="text-xs font-mono text-secondary bg-surfaceHover px-3 py-1.5 rounded-lg border border-borderLine/50 block w-fit">
                                        {project.tech}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Writing & Publications */}
                <section className="py-20 max-w-5xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                        Technical Writing & Publications
                        <div className="h-px bg-borderLine flex-grow ml-4"></div>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        {publications.map((pub, idx) => (
                            <a href="#" key={idx} className="glass-card p-5 flex items-start gap-4 hover:border-accent/50 group">
                                <ExternalLink className="text-accent/50 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" size={18} />
                                <span className="text-secondary text-sm leading-relaxed group-hover:text-white transition-colors">
                                    {pub}
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-borderLine mt-10 py-16 bg-surface">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <p className="text-xl font-bold text-white mb-8">
                        I am always open to discussing complex technical challenges or new engineering roles. Let's connect.
                    </p>
                    <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary text-lg px-8 py-4">
                        Initiate Contact
                    </a>
                    <div className="mt-16 flex items-center justify-center gap-8 text-sm text-secondary font-medium">
                        <a href="https://linkedin.com/in/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">LinkedIn</a>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        <a href="https://github.com/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">GitHub</a>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        <a href="https://medium.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">Medium</a>
                    </div>
                    <div className="mt-8 text-xs text-secondary/50">
                        &copy; {new Date().getFullYear()} Kisal Nelaka
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Portfolio;
