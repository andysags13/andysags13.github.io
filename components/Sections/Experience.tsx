import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { EXPERIENCES } from '../../constants';

const typeTranslations: Record<string, string> = {
  "Professional": "PROFESSIONNEL",
  "Education": "ÉDUCATION",
  "Association": "ASSOCIATIF"
};

const Experience: React.FC = () => {
  return (
    <section id="logs" className="py-24 bg-sys-dark">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeading title="LOGS SYSTÈME" number="04" subtitle="Historique d'Exécution" />

        <div className="font-mono text-sm space-y-0">
          
          <div className="flex border-b border-sys-border pb-2 mb-4 text-sys-dim uppercase tracking-wider text-xs">
            <div className="w-32 flex-shrink-0">Horodatage</div>
            <div className="w-32 flex-shrink-0 hidden sm:block">Type</div>
            <div className="flex-grow">Description de l'événement</div>
          </div>

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="group flex flex-col sm:flex-row border-b border-sys-border/30 py-6 hover:bg-sys-panel px-4 -mx-4 transition-colors">
                <div className="w-32 flex-shrink-0 text-sys-accent mb-2 sm:mb-0">
                    [{exp.period}]
                </div>
                <div className="w-32 flex-shrink-0 text-sys-dim hidden sm:block">
                    {typeTranslations[exp.type] || exp.type.toUpperCase()}
                </div>
                <div className="flex-grow">
                    <h4 className="text-sys-text font-bold text-base mb-1">
                        {exp.role} @ {exp.company}
                    </h4>
                    <ul className="text-sys-dim space-y-1 list-disc list-inside">
                        {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;