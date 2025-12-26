import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 900 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Horizontal Crosshair Line */}
      <motion.div 
        className="fixed pointer-events-none z-[9999] bg-sys-accent/30 h-[1px] w-full left-0 top-0 origin-left"
        style={{ y: cursorYSpring }}
      />
      
      {/* Vertical Crosshair Line */}
      <motion.div 
        className="fixed pointer-events-none z-[9999] bg-sys-accent/30 w-[1px] h-full left-0 top-0 origin-top"
        style={{ x: cursorXSpring }}
      />

      {/* Main Cursor Box */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 border border-sys-accent pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          rotate: isHovered ? 45 : 0,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#FF4D00' : 'transparent',
        }}
      />
      
      {/* Data Tag next to cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] ml-4 mt-4"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="text-[10px] font-mono text-sys-accent opacity-60">
            X: {coords.x} <br /> Y: {coords.y}
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;