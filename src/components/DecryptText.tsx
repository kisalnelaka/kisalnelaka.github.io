import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?-=[]\\;\',./';

interface DecryptTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

const DecryptText: React.FC<DecryptTextProps> = ({ text, speed = 30, delay = 0, className = '' }) => {
    // Initialize with completely scrambled text of the same length
    const [display, setDisplay] = useState(text.replace(/[^\s]/g, () => chars[Math.floor(Math.random() * chars.length)]));
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        
        const delayTimeout = setTimeout(() => {
            let iter = 0;
            const interval = setInterval(() => {
                setDisplay(text.split('').map((letter, index) => {
                    // Ignore spaces for the scrambling effect
                    if (letter === ' ') return ' ';
                    if (index < iter) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(''));

                if (iter >= text.length) clearInterval(interval);
                iter += 1 / 3; // Controls how many random ticks before locking a character
            }, speed);
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [isInView, text, speed, delay]);

    return <span ref={ref} className={className}>{display}</span>;
};

export default DecryptText;
