import React, { useMemo, useState } from 'react';
import SectionHeading from '../UI/SectionHeading';
import { CONTACT_FORM, PERSONAL_INFO } from '../../constants';
import { send } from '@emailjs/browser';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState<string>('');

    const isValid = useMemo(() => {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();
        const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
        return trimmedName.length > 1 && emailLooksValid && trimmedMessage.length > 5;
    }, [name, email, message]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'sending') return;

        if (!isValid) {
            setStatus('error');
            setStatusMessage('Merci de renseigner un nom, un email valide, et un message.');
            return;
        }

        setStatus('sending');
        setStatusMessage('Envoi en cours…');

        try {
            const { serviceId, templateId, publicKey } = CONTACT_FORM.emailjs;
            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS non configuré');
            }

            await send(
                serviceId,
                templateId,
                {
                    from_name: name.trim(),
                    reply_to: email.trim(),
                    message: message.trim(),
                    to_email: PERSONAL_INFO.email,
                },
                { publicKey }
            );
            setStatus('success');
            setStatusMessage('Message envoyé. Merci !');
            setName('');
            setEmail('');
            setMessage('');
        } catch {
            setStatus('error');
            setStatusMessage("Échec de l’envoi. Vérifie la config EmailJS puis réessaie.");
        }
    };

    return (
        <section id="contact" className="py-24 bg-sys-black border-t-2 border-sys-accent">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    <div>
                        <h2 className="font-display text-6xl md:text-8xl text-sys-text mb-8">
                            <span className="text-sys-accent">CONTACTER</span>
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

                            <form className="space-y-4" onSubmit={onSubmit}>
                                <div className="flex flex-col">
                                    <label className="text-sys-accent mb-1">&gt; ENTRER_IDENTITÉ</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-transparent border-b border-sys-border focus:border-sys-accent text-sys-text outline-none py-2 rounded-none"
                                        placeholder="_"
                                        autoComplete="name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sys-accent mb-1">&gt; ENTRER_COORD_CONTACT</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-transparent border-b border-sys-border focus:border-sys-accent text-sys-text outline-none py-2 rounded-none"
                                        placeholder="_"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sys-accent mb-1">&gt; ENTRER_MESSAGE</label>
                                    <textarea
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="bg-transparent border-b border-sys-border focus:border-sys-accent text-sys-text outline-none py-2 rounded-none resize-none"
                                        placeholder="_"
                                        required
                                    ></textarea>
                                </div>

                                <div className="text-xs text-sys-dim" aria-live="polite">
                                    {statusMessage}
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isValid || status === 'sending'}
                                    className="mt-4 bg-sys-text text-sys-black px-8 py-3 font-bold hover:bg-sys-accent hover:text-white transition-colors uppercase w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? '[ ENVOI… ]' : '[ ENVOYER ]'}
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