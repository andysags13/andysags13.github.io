import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { SKILLS } from '../../constants';
import { motion } from 'framer-motion';

const categoryTranslation: Record<string, string> = {
  "Languages": "LANGAGES",
  "Frameworks": "FRAMEWORKS",
  "Tools": "OUTILS",
  "Core": "CŒUR"
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-sys-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="MODULES" number="02" subtitle="Matrice de Compétence Technique" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {SKILLS.map((skill, index) => (
                <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-sys-panel border border-sys-border p-6 hover:border-sys-accent/50 transition-colors group relative overflow-hidden"
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-xs text-sys-dim uppercase border border-sys-border px-1">
                            {categoryTranslation[skill.category] || skill.category}
                        </span>
                        <div className="flex gap-1">
                            {/* Decorative dots */}
                            <div className="w-1 h-1 bg-sys-dim rounded-full"></div>
                            <div className="w-1 h-1 bg-sys-dim rounded-full"></div>
                        </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-sys-text mb-4 group-hover:translate-x-2 transition-transform">
                        {skill.name}
                    </h3>

                    <div className="relative pt-4 border-t border-sys-border/50">
                        <div className="flex justify-between font-mono text-xs mb-1">
                            <span className="text-sys-dim">MAÎTRISE</span>
                            <span className="text-sys-accent">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full h-1 bg-sys-black overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-sys-text group-hover:bg-sys-accent transition-colors"
                            />
                        </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-sys-border border-r-transparent group-hover:border-b-sys-accent transition-colors"></div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;