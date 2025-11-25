import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, number }) => {
  return (
    <div className="mb-20 pt-10 border-t border-sys-border relative">
      <div className="absolute top-0 left-0 w-4 h-[1px] bg-sys-accent"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
            <span className="font-mono text-sys-accent text-sm tracking-widest mb-2 block">
                //{number}
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-semibold uppercase text-sys-text tracking-tighter">
                {title}
            </h2>
        </div>
        
        {subtitle && (
            <p className="font-mono text-sys-dim text-sm max-w-md text-right uppercase tracking-wider">
                [{subtitle}]
            </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeading;