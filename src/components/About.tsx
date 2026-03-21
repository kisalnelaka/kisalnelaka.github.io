import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    const textToType = "A digital forensics and cloud security specialist driven by absolute, deterministic logic. I don't build standard web apps—I engineer robust, battle-tested ecosystems designed to withstand failure. My architecture runs deep, prioritizing data integrity, high availability, and brutal efficiency over fleeting design trends.";
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const pRef = useRef(null);
    const isInView = useInView(pRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(textToType.slice(0, i));
            i++;
            if (i > textToType.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 15);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section id="about" className="section-padding bg-brutal-black text-white relative border-b-8 border-brutal-black">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase text-white">engineering <br/><span className="bg-primary text-brutal-black px-2">philosophy</span><br/> & core expertise</h2>
                    <div className="space-y-6 text-white text-lg md:text-xl font-mono text-justify border-l-8 border-white pl-6">
                        <p className="font-bold">
                            I build systems that stay online when everything else fails. My work is defined by deterministic logic and a refusal to accept "good enough" infrastructure. I don't just write code: I engineer environments where failure isn't an option.
                        </p>
                        <p className="font-bold">
                            With a deep foundation in <span className="bg-accent px-1 text-brutal-black">Cybersecurity & Digital Forensics</span>, I treat security as the primary architectural constraint. Every bit is engineered with integrity, performance, and long-term maintainability as the baseline.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-8">
                        <div className="border-4 border-white p-4 bg-accent shadow-[4px_4px_0px_#FFF]">
                            <h4 className="text-4xl font-black text-brutal-black mb-1">8+</h4>
                            <p className="text-brutal-black text-xs font-bold uppercase tracking-[0.2em]">Years Experience</p>
                        </div>
                        <div className="border-4 border-white p-4 bg-primary text-brutal-black shadow-[4px_4px_0px_#FFF]">
                            <h4 className="text-4xl font-black mb-1">35+</h4>
                            <p className="text-brutal-black text-xs font-bold uppercase tracking-[0.2em]">Deployments</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 w-full brutal-card-light p-10 md:p-14 bg-brutal-black border-4 border-white"
                >
                    <div className="inline-block bg-primary text-brutal-black font-black px-4 py-2 mb-8 uppercase border-4 border-white shadow-[4px_4px_0px_#FFFFFF]">
                        [ SYS.INIT : User Profile ]
                    </div>
                    <p ref={pRef} className="text-base md:text-lg font-mono text-white mb-10 leading-relaxed text-justify">
                        {typedText}
                        <span className={`${isTyping ? 'bg-primary' : 'bg-transparent animate-pulse'} inline-block w-3 h-5 ml-1 align-middle`}></span>
                    </p>

                    <h3 className="text-3xl font-black mb-10 flex items-center gap-4 uppercase text-white">
                        <span className="w-8 h-2 bg-white"></span>
                        Capability Matrix
                    </h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="group">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-black text-white uppercase tracking-wider">{skill.name}</span>
                                    <span className="text-xs font-mono font-bold text-primary">{skill.level}</span>
                                </div>
                                <div className="h-4 w-full border-2 border-brutal-black bg-gray-200 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, ease: "linear", delay: index * 0.05 }}
                                        className="h-full bg-primary border-r-2 border-brutal-black"
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
