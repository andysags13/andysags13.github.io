import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR'));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString('fr-FR')), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: 'À PROPOS', id: 'about' },
    { label: 'COMPÉTENCES', id: 'skills' },
    { label: 'PROJETS', id: 'projects' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="fixed top-0 w-full z-50 border-b border-sys-border bg-sys-black/80 backdrop-blur-md"
    >
      <div className="flex justify-between items-center h-14 px-4 md:px-8 font-mono text-xs md:text-sm tracking-widest text-sys-dim">
        
        {/* Left: System ID */}
        <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-sys-success animate-pulse rounded-full"></div>
            <span className="text-sys-text font-bold">SYS.SAGBO_ANDY.1</span>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
                <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="hover:text-sys-accent transition-colors relative group"
                >
                    {item.label}
                    <span className="absolute -bottom-5 left-0 w-full h-[2px] bg-sys-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
            ))}
        </div>

        {/* Right: Telemetry */}
        <div className="flex items-center gap-4 border-l border-sys-border pl-4">
            <span className="hidden sm:inline">COTONOU [BJ]</span>
            <span className="text-sys-accent">{time}</span>
        </div>

      </div>
      
      {/* Decorative scanline under nav */}
      <div className="h-[1px] w-full bg-sys-border overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-20 bg-sys-accent blur-[2px] animate-[slide-up_2s_linear_infinite_reverse]" style={{ animationDirection: 'normal', animationName: 'slide' }}></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;