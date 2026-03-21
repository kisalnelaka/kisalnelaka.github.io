import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RadarCursor: React.FC = () => {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            
            // Check if cursor is over a clickable element to expand the radar
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a') !== null || target.closest('button') !== null || target.style.cursor === 'pointer';
            setIsHovering(isClickable);
        };
        
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden mix-blend-difference hidden md:block">
            {/* Tactical Crosshairs */}
            <div 
                className="absolute bg-primary opacity-50 w-full h-[1px] transition-opacity duration-300" 
                style={{ top: pos.y, opacity: isHovering ? 0.8 : 0.3 }}
            />
            <div 
                className="absolute bg-primary opacity-50 h-full w-[1px] transition-opacity duration-300" 
                style={{ left: pos.x, opacity: isHovering ? 0.8 : 0.3 }}
            />
            
            {/* Radar Circular Hub */}
            <motion.div 
                className="absolute border-2 border-secondary rounded-full"
                animate={{
                    x: pos.x - (isHovering ? 32 : 16),
                    y: pos.y - (isHovering ? 32 : 16),
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    rotate: isHovering ? 90 : 0
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </div>
    );
};

export default RadarCursor;
