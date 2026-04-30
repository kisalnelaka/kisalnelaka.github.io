import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Shield, Server, Code2, Layers, Cpu, Activity } from 'lucide-react';

const projects = [
    {
        title: 'TenancyOS',
        category: 'Enterprise SaaS • Next.js • Tailwind',
        description: 'A comprehensive, modern ecosystem for property management and real estate operations. Engineered to act as a robust customer magnet and core property management engine, bridging the gap between landlords and tenants.',
        icon: <Layers className="text-secondary" size={24} />
    },
    {
        title: 'IntraFlow',
        category: 'Enterprise • Laravel • Filament',
        description: 'A multi-tenant SaaS ecosystem architected for telecom MSPs. I engineered complex inventory synchronization and automated billing workflows with a focus on high availability and absolute data integrity.',
        icon: <Server className="text-secondary" size={24} />
    },
    {
        title: 'SocialRabbit Bunny',
        category: 'Framework Architecture • PHP',
        description: 'A high-performance boilerplate engine designed for rapid deployment of secure Laravel backends. It enforces strict architectural patterns and security standards out of the box, eliminating the margin for human error.',
        icon: <Code2 className="text-secondary" size={24} />
    },
    {
        title: 'BatSignal',
        category: 'Systems • C++ • DBus',
        description: 'A native Linux system integration utilizing DBus to monitor Bluetooth device metrics in real-time. Engineered for low-overhead performance and seamless integration with modern desktop environments.',
        icon: <Cpu className="text-secondary" size={24} />
    },
    {
        title: 'PhishCatcher',
        category: 'Security • ML • JavaScript',
        description: 'An advanced phishing detection system utilizing machine learning to analyze URL patterns. It leverages defensive programming patterns to identify and mitigate digital threats before they manifest.',
        icon: <Shield className="text-secondary" size={24} />
    },
    {
        title: 'Oha Asa Daily',
        category: 'Mobile • Flutter • Dart',
        description: 'A cross-platform mobile application featuring high-performance data scraping and real-time state synchronization. Built to deliver a seamless, uninterrupted user experience across iOS and Android.',
        icon: <Activity className="text-secondary" size={24} />
    }
];

const publications = [
    "Building InfraFlow: A Production-Grade Multi-Tenant MSP Platform with Laravel 11",
    "Bunny: Revolutionizing Web Development with Laravel Architecture",
    "PhishCatcher: Real-Time Phishing Detection with Machine Learning",
    "The Lifecycle of a Phishing Attack: How Cybercriminals Bait, Hook, and Exploit",
    "Demystifying Shellcode Generation: A Guide for Systems Engineers",
    "Building a Blockchain-Powered, Encrypted Chat Application with Python"
];

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-textMain selection:bg-gray-200 selection:text-textMain font-sans leading-relaxed">
            
            {/* Header */}
            <header className="container mx-auto px-6 py-12 flex justify-between items-center border-b border-accent/50">
                <div className="flex flex-col">
                    <span className="text-xl font-medium tracking-tight text-primary">Kisal Nelaka</span>
                    <span className="text-sm text-textMuted mt-1">Software Architect & Security Engineer</span>
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
                        Engineering systems that <br />
                        <span className="text-secondary">refuse to fail.</span>
                    </h1>
                    <div className="text-lg text-textMain space-y-6 max-w-3xl leading-relaxed">
                        <p>
                            I build enterprise software with a focus on absolute stability, security, and deterministic logic. While the industry frequently settles for "good enough," I engineer mission-critical infrastructure designed to operate flawlessly under pressure.
                        </p>
                        <p>
                            With over eight years of experience spanning cloud architecture, multi-tenant SaaS, and systems security, my approach is highly calculated: eliminate inefficiencies, secure the attack surface, and deliver robust software that scales. My background in Cybersecurity dictates that security isn't an afterthought—it is the foundational constraint.
                        </p>
                        <p>
                            I specialize in stepping into complex, high-stakes environments and imposing order. It requires a rigorous standard of excellence—one I naturally hold myself to.
                        </p>
                        <p className="pt-4 text-primary font-medium">
                            If you need infrastructure that performs reliably without the need for constant oversight, you're in the right place.
                        </p>
                    </div>
                </section>

                {/* Core Competencies */}
                <section className="py-20 border-t border-accent/50 max-w-5xl">
                    <h2 className="text-xl font-medium text-primary mb-12 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Core Competencies
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="minimal-card p-8">
                            <Server className="text-secondary mb-6" size={28} />
                            <h3 className="text-lg font-medium text-primary mb-4">Cloud & Architecture</h3>
                            <p className="text-sm text-textMuted leading-relaxed">
                                Expertise in AWS, Docker, and multi-tenant SaaS environments. I design scalable monoliths and microservices using Next.js, Node.js, and Laravel.
                            </p>
                        </div>
                        <div className="minimal-card p-8">
                            <Code2 className="text-secondary mb-6" size={28} />
                            <h3 className="text-lg font-medium text-primary mb-4">Systems Engineering</h3>
                            <p className="text-sm text-textMuted leading-relaxed">
                                Writing highly optimized, low-overhead code across the stack. Proficient in TypeScript, C++, Python, PHP, and Dart.
                            </p>
                        </div>
                        <div className="minimal-card p-8 border-t-4 border-t-secondary/20">
                            <Shield className="text-secondary mb-6" size={28} />
                            <h3 className="text-lg font-medium text-primary mb-4">Security & Forensics</h3>
                            <p className="text-sm text-textMuted leading-relaxed">
                                Identifying vulnerabilities before they are exploited. Experienced in penetration testing, threat mitigation, and secure architecture auditing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Engineering Portfolio */}
                <section className="py-20 border-t border-accent/50">
                    <h2 className="text-xl font-medium text-primary mb-12 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Selected Engineering Works
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

                {/* Technical Publications */}
                <section className="py-20 border-t border-accent/50 max-w-4xl">
                    <h2 className="text-xl font-medium text-primary mb-12 flex items-center gap-4">
                        <span className="w-8 h-px bg-accent"></span>
                        Technical Publications
                    </h2>
                    
                    <div className="space-y-4">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="group flex items-start gap-4 p-4 rounded-md hover:bg-surface border border-transparent hover:border-accent transition-colors">
                                <ExternalLink className="text-secondary mt-1 flex-shrink-0" size={16} />
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
                        Looking for engineering leadership that delivers uncompromising results?
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
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Portfolio;
