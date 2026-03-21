import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useAppConfig } from './AppConfigContext';

const chars = '!<>-_\\/[]{}—=+*^?#________';

interface DecryptTextProps {
    text: string;
    delay?: number;
    className?: string;
}

const DecryptText: React.FC<DecryptTextProps> = ({ text, delay = 0, className = '' }) => {
    const { vanillaMode } = useAppConfig();
    const [displayText, setDisplayText] = useState('');
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (vanillaMode) {
            setDisplayText(text);
            return;
        }

        if (!isInView) return;
        
        setDisplayText(text.replace(/[^\s]/g, () => chars[Math.floor(Math.random() * chars.length)]));

        const speed = 30;

        const delayTimeout = setTimeout(() => {
            let iter = 0;
            const interval = setInterval(() => {
                setDisplayText(text.split('').map((letter, index) => {
                    if (letter === ' ') return ' ';
                    if (index < iter) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(''));

                if (iter >= text.length) {
                    clearInterval(interval);
                }
                iter += 1 / 3; 
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, [text, delay, isInView, vanillaMode]);

    return (
        <span ref={ref} className={`font-mono inline-block ${className}`}>
            {displayText}
        </span>
    );
};

export default DecryptText;
