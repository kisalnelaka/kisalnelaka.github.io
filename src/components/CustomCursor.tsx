import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest('a, button, .glass-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="custom-cursor hidden md:block"
                animate={{
                    x: position.x,
                    y: position.y,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? 'rgba(99, 102, 241, 1)' : 'rgba(99, 102, 241, 0.5)',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 250, restDelta: 0.001 }}
            />
            <motion.div
                className="custom-cursor-dot hidden md:block"
                animate={{
                    x: position.x,
                    y: position.y,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 500, restDelta: 0.001 }}
            />
        </>
    );
};

export default CustomCursor;
