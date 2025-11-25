import React from 'react';
import SectionHeading from '../UI/SectionHeading';
import { PERSONAL_INFO } from '../../constants';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-sys-black border-t-2 border-sys-accent">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <h2 className="font-display text-6xl md:text-8xl text-sys-text mb-8">
                            INITIER<br />
                            <span className="text-sys-accent">PROTOCOLE</span>
                        </h2>
                        <div className="font-mono text-sys-dim space-y-4">
                            <p>Prêt à déployer des solutions haute performance ?</p>
                            <div className="border border-sys-border p-6 bg-sys-panel inline-block min-w-[300px]">
                                <div className="text-xs text-sys-dim mb-2 uppercase">Canal Direct</div>
                                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sys-text hover:text-sys-accent transition-colors text-lg block">
                                    {PERSONAL_INFO.email}
                                </a>
                                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sys-text hover:text-sys-accent transition-colors text-lg block mt-2">
                                    {PERSONAL_INFO.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sys-dark border border-sys-border p-1">
                        <div className="bg-sys-black p-6 h-full font-mono text-sm">
                            <div className="text-sys-dim mb-4 border-b border-sys-border pb-2">
                                root@andy-server:~/message-composer$
                            </div>

                            <form className="space-y-4">
                                <div className="flex flex-col">
                                    <label className="text-sys-accent mb-1">&gt; ENTRER_IDENTITÉ</label>
                                    <input type="text" className="bg-transparent border-b border-sys-border focus:border-sys-accent text-sys-text outline-none py-2 rounded-none" placeholder="_" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sys-accent mb-1">&gt; ENTRER_COORD_CONTACT</label>
                                    <input type="email" className="bg-transparent border-b border-sys-border focus:border-sys-accent text-sys-text outline-none py-2 rounded-none" placeholder="_" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sys-accent mb-1">&gt; CHARGE_UTILE</label>
                                    <textarea rows={4} className="bg-transparent border-b border-sys-border focus:border-sys-accent text-sys-text outline-none py-2 rounded-none resize-none" placeholder="_"></textarea>
                                </div>

                                <button type="submit" className="mt-4 bg-sys-text text-sys-black px-8 py-3 font-bold hover:bg-sys-accent hover:text-white transition-colors uppercase w-full sm:w-auto">
                                    [ EXÉCUTER_ENVOI ]
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;