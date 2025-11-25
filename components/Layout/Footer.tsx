import React from 'react';
import { SOCIALS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sys-black py-8 border-t border-sys-border font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex gap-8">
            {SOCIALS.map(social => (
                <a 
                    key={social.platform} 
                    href={social.url} 
                    className="text-sys-dim hover:text-sys-accent uppercase tracking-wider"
                >
                    {social.platform}
                </a>
            ))}
        </div>

        <div className="text-sys-dim">
            STATUT SYSTÈME : <span className="text-sys-success">OPÉRATIONNEL</span>
        </div>

        <div className="text-sys-dim">
            © {new Date().getFullYear()} ANDY SAGBO
        </div>

      </div>
    </footer>
  );
};

export default Footer;