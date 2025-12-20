
import React, { useState, useEffect } from 'react';

const MouseFollower: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('a, button'));
            setIsDarkBg(!!target.closest('footer, .bg-black'));
        };
        
        const handleMouseLeave = () => {
            setIsVisible(false);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    const followerClasses = `
        custom-cursor fixed rounded-full pointer-events-none z-[9999]
        transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${isHovering ? 'w-8 h-8 bg-black/40' : 'w-3 h-3'}
        ${isDarkBg ? 'bg-gray-400' : 'bg-black'}
        ${isHovering && isDarkBg ? 'bg-white/50' : ''}
    `;

    return (
        <div 
            className={followerClasses.replace(/\s+/g, ' ').trim()}
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
                transitionProperty: 'transform, width, height, background-color, opacity'
            }}
        />
    );
};

export default MouseFollower;