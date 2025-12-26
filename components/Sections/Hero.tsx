import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 pt-20 overflow-hidden border-b border-sys-border">
      
      {/* Decorative Grid Background Elements */}
      <div className="absolute right-10 top-1/4 w-[1px] h-96 bg-sys-border hidden md:block"></div>
      <div className="absolute right-20 top-1/3 w-[1px] h-64 bg-sys-border hidden md:block"></div>
      
      {/* Main Content */}
      <div className="max-w-screen-2xl w-full mx-auto relative z-10">
        
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
        >
            <span className="bg-sys-accent text-sys-black font-mono px-2 py-1 text-xs font-bold uppercase tracking-widest">
                Système En Ligne
            </span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter text-sys-text mix-blend-difference"
        >
            ANDY<br/>
            <span className="text-outline">SAGBO</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12 gap-8">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-mono text-sm md:text-base text-sys-dim max-w-lg space-y-4"
            >
                <p className="border-l border-sys-accent pl-4">
                    {PERSONAL_INFO.title}<br/>
                    <span className="text-sys-text">{PERSONAL_INFO.subtitle}</span>
                </p>
                <div className="flex gap-4 text-xs tracking-widest">
                    <span>STACK: C++ / C / React / Django / ...</span>
                    <span>LOC: BÉNIN</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
            >
                <a href="#projects" className="group flex items-center gap-4 font-mono text-sys-text uppercase tracking-widest text-sm hover:text-sys-accent transition-colors">
                    <span>INITIALISER_VUE_PROJET</span>
                    <div className="w-12 h-12 border border-sys-border group-hover:border-sys-accent flex items-center justify-center rounded-none transition-colors">
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </div>
                </a>
            </motion.div>
        </div>

      </div>

      {/* Running text at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-2 bg-sys-panel border-t border-sys-border">
        <div className="whitespace-nowrap animate-[scan_20s_linear_infinite] font-mono text-xs text-sys-dim">
            EPITECH /// EXPERTISE C++ /// IA/// SYSTÈMES ROBOTIQUES /// ARCHITECTURE WEB /// DÉVELOPPEMENT FULL STACK /// 
            EPITECH /// EXPERTISE C++ /// IA/// SYSTÈMES ROBOTIQUES /// ARCHITECTURE WEB /// DÉVELOPPEMENT FULL STACK ///
        </div>
      </div>
    </section>
  );
};

export default Hero;