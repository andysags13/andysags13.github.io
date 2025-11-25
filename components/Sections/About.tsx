import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { PERSONAL_INFO } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-sys-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading title="DONNÉES_PROFIL" number="01" subtitle="Aperçu Entité Humaine" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-l border-r border-sys-border p-4 md:p-8">
            
            {/* Left: Stats/Data */}
            <div className="md:col-span-4 space-y-8 font-mono">
                <div className="w-full aspect-square bg-sys-panel border border-sys-border relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <img 
                        src="https://picsum.photos/seed/andydev/600/600" 
                        alt="Profil" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-sys-accent text-sys-black px-2 py-1 text-xs font-bold">
                        IMG_REF_045
                    </div>
                    {/* Crosshair overlay */}
                    <div className="absolute inset-0 border-[20px] border-transparent border-t-sys-black/50 border-b-sys-black/50 pointer-events-none"></div>
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-sys-border pb-1">
                        <span className="text-sys-dim">PROMOTION</span>
                        <span className="text-sys-text">EXPERT 3</span>
                    </div>
                    <div className="flex justify-between border-b border-sys-border pb-1">
                        <span className="text-sys-dim">ORIGINE</span>
                        <span className="text-sys-text">EPITECH BÉNIN</span>
                    </div>
                    <div className="flex justify-between border-b border-sys-border pb-1">
                        <span className="text-sys-dim">STATUT</span>
                        <span className="text-sys-success animate-pulse">DISPONIBLE</span>
                    </div>
                </div>
            </div>

            {/* Right: Bio Text */}
            <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                    <h3 className="font-display text-3xl mb-8 text-sys-text">
                        Développeur passionné par la convergence entre <span className="text-sys-accent">l'algorithmique bas niveau</span> et <span className="text-sys-accent">l'intelligence artificielle</span>.
                    </h3>
                    <p className="font-mono text-sys-dim leading-relaxed mb-8 text-sm md:text-base text-justify">
                        {PERSONAL_INFO.bio}
                        <br/><br/>
                        Mon approche est pragmatique : construire des systèmes robustes, optimisés et évolutifs. Que ce soit en C++ pour la performance brute ou en React pour des interfaces fluides, je vise toujours l'excellence technique.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {['ARCHITECTURE', 'ALGORITHMES', 'FULLSTACK', 'SYSTÈMES'].map((tag) => (
                        <div key={tag} className="border border-sys-border p-4 hover:bg-sys-panel transition-colors group cursor-crosshair">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-sys-dim group-hover:text-sys-accent transition-colors">{tag}</span>
                                <div className="w-1 h-1 bg-sys-dim group-hover:bg-sys-accent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;