import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { PROJECTS } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-sys-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="SCHÉMAS" number="03" subtitle="Opérations Déployées" />

        <div className="space-y-12">
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group border-t border-sys-border pt-8 pb-8 hover:bg-sys-panel/30 transition-colors"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Index */}
                        <div className="lg:col-span-1 font-mono text-sys-dim text-lg">
                            {(index + 1).toString().padStart(2, '0')}
                        </div>

                        {/* Title & Desc */}
                        <div className="lg:col-span-6">
                            <h3 className="text-3xl md:text-5xl font-display font-medium text-sys-text mb-4 group-hover:text-sys-accent transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="font-mono text-xs border border-sys-dim text-sys-dim px-2 py-1 uppercase">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="font-mono text-sys-dim text-sm max-w-xl">
                                {project.description}
                            </p>
                        </div>

                        {/* Category & Link */}
                        <div className="lg:col-span-5 flex flex-col lg:items-end justify-between h-full gap-8">
                            <span className="font-mono text-xs tracking-widest uppercase bg-sys-border px-3 py-1 text-sys-text">
                                {project.category === 'Robotics' ? 'Robotique' : project.category === 'Software' ? 'Logiciel' : project.category}
                            </span>
                            
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-display text-xl uppercase hover:text-sys-accent transition-colors"
                                >
                                    VOIR SOURCE
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            )}
                        </div>

                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;