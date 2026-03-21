import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
    // Repeated text to create the seamless scrolling effect
    const text = "SYSTEM STATUS: SECURE • LAST DEPLOYMENT: SUCCESS • UPTIME: 99.99% • KISAL NELAKA - FULL-STACK ARCHITECT • ";
    const repeatCount = 5;

    return (
        <div className="w-full bg-accent border-b-4 border-brutal-black overflow-hidden flex whitespace-nowrap py-1 relative z-[100]">
            <motion.div
                className="flex font-mono text-sm font-black tracking-widest uppercase text-brutal-black"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {Array(repeatCount).fill(text).map((item, index) => (
                    <span key={index} className="px-4">{item}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
