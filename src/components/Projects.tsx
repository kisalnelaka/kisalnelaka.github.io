import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Resu_me',
        category: 'Tool • AI • Document Generation',
        description: 'The Invisible Resume Editor. A minimalist, AI-powered tool for ATS-optimized resume and cover letter generation, offering a professional-grade document generation workflow.',
        link: 'https://kisalnelaka.github.io/resu_me',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'TenancyOS',
        category: 'Enterprise SaaS • Next.js • Tailwind',
        description: 'A comprehensive, modern ecosystem for property management and real estate operations. Engineered to act as a robust customer magnet and core property management engine, bridging the gap between landlords and tenants.',
        link: 'https://tenancyos.com',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'IntraFlow',
        category: 'Enterprise • Laravel • Filament',
        description: 'A multi-tenant SaaS ecosystem architected for telecom MSPs. I engineered complex inventory synchronization and automated billing workflows with a focus on high availability and data integrity.',
        link: 'https://github.com/kisalnelaka/intraflow',
        image: '/intraflow.png',
    },
    {
        title: 'SocialRabbit Bunny',
        category: 'Framework • PHP • Architecture',
        description: 'A high-performance boilerplate engine designed for rapid deployment of secure Laravel backends. It enforces strict architectural patterns and security standards out of the box.',
        link: 'https://github.com/socialrabbit/bunny',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'BatSignal',
        category: 'Systems • C++ • DBus',
        description: 'A native Linux system integration utilizing DBus to monitor Bluetooth device metrics in real-time. Engineered for low-overhead performance and seamless integration with modern desktop environments.',
        link: 'https://github.com/kisalnelaka/BatSignal',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'PhishCatcher',
        category: 'Security • ML • JavaScript',
        description: 'An advanced phishing detection system utilizing machine learning to analyze URL patterns. It leverages defensive programming patterns to identify and mitigate digital threats in real-time.',
        link: 'https://github.com/kisalnelaka/phishcatcher',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    },
    {
        title: 'Oha Asa Daily',
        category: 'Mobile • Flutter • Dart',
        description: 'A cross-platform mobile application featuring high-performance data scraping and real-time state synchronization. Built to deliver a seamless user experience across iOS and Android.',
        link: 'https://github.com/kisalnelaka/oha_asa_app',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding container border-b-8 border-brutal-black">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 bg-accent p-8 border-4 border-brutal-black shadow-[8px_8px_0px_#000]">
                <div>
                    <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter text-brutal-black">SELECTED <span className="text-white bg-brutal-black px-2 py-1">ENGINEERING</span> WORKS</h2>
                    <p className="text-brutal-black text-lg font-bold font-mono uppercase bg-white px-2 py-1 inline-block border-2 border-brutal-black">A technical summary of systems design and development.</p>
                </div>
                <a
                    href="https://github.com/kisalnelaka"
                    target="_blank"
                    className="btn-brutal"
                >
                    View Full Archive <ArrowRight size={24} />
                </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 auto-rows-max relative">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.4}
                        whileDrag={{ scale: 1.05, zIndex: 50 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1, delay: index * 0.1 }}
                        className="group flex flex-col overflow-hidden brutal-card-light cursor-grab active:cursor-grabbing bg-white relative z-10"
                    >
                        {/* Windows 95 Title Bar */}
                        <div className="bg-primary text-white font-mono font-bold text-xs p-2 border-b-4 border-brutal-black flex justify-between items-center select-none">
                            <span>ProjectViewer.exe - {project.title}</span>
                            <div className="flex gap-2">
                                <span className="bg-white border-2 border-brutal-black w-4 h-4 inline-block hover:bg-gray-200"></span>
                                <span className="bg-white border-2 border-brutal-black w-4 h-4 inline-flex items-center justify-center text-brutal-black font-black hover:bg-red-500 hover:text-white">x</span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="aspect-video w-full overflow-hidden border-b-4 border-brutal-black relative pointer-events-none">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1 select-none">
                            <span className="text-xs font-black text-white bg-brutal-black px-2 py-1 uppercase tracking-[0.3em] mb-4 inline-block self-start">
                                {project.category}
                            </span>
                            <h3 className="text-3xl font-black mb-4 text-brutal-black uppercase tracking-tighter leading-tight bg-accent border-2 border-brutal-black inline-block p-2 shadow-[4px_4px_0px_#000]">{project.title}</h3>
                            <p className="text-brutal-black text-lg mb-8 font-mono leading-relaxed text-justify border-l-4 border-primary pl-4">
                                {project.description}
                            </p>

                            <div className="flex gap-4 mt-auto">
                                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brutal-black text-white hover:bg-primary hover:text-black hover:border-brutal-black border-2 border-transparent px-4 py-2 font-bold uppercase transition-colors text-sm w-fit mt-4">
                                <ExternalLink size={16} /> {project.link.includes('github.io') ? 'Visit Demo' : project.link.includes('github.com') ? 'Source Code' : 'Visit Site'}
                            </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
