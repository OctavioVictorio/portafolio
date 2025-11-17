import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_roj4tji'; 
const TEMPLATE_ID = 'template_xws4yxo'; 
const PUBLIC_KEY = 'zFtmrFk7ZxAjWthNw';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (form.current) {
            setStatus('sending');
            
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setStatus('success');
                    form.current?.reset(); 
                }, (error) => {
                    console.log(error.text);
                    setStatus('error');
                });
        }
    };

    const getStatusMessage = () => {
        switch (status) {
            case 'sending': return <div className="alert alert-info small mt-3">Enviando mensaje...</div>;
            case 'success': return <div className="alert alert-success small mt-3">¡Mensaje enviado con éxito! Te contactaré pronto.</div>;
            case 'error': return <div className="alert alert-danger small mt-3">Ocurrió un error. Por favor, inténtalo de nuevo o contáctame por LinkedIn.</div>;
            default: return null;
        }
    }

    return (
        <div className="row g-3">
            <h2 className="h4 fw-bold text-white mb-4 border-bottom border-success pb-2">Hablemos</h2>
            <p className="text-light mb-4">
                ¿Tienes un proyecto en mente, una propuesta de colaboración o una oferta de trabajo?. Envíame un mensaje directo:
            </p>

            <form ref={form} onSubmit={sendEmail}>
                {/* Campo Nombre */}
                <div className="mb-3">
                    <label htmlFor="user_name" className="form-label text-success small">Nombre</label>
                    <input type="text" className="form-control bg-dark text-light border-success" id="user_name" name="user_name" required />
                </div>
                
                {/* Campo Email */}
                <div className="mb-3">
                    <label htmlFor="user_email" className="form-label text-success small">Tu Correo Electrónico</label>
                    <input type="email" className="form-control bg-dark text-light border-success" id="user_email" name="user_email" required />
                </div>
                
                {/* Campo Mensaje */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label text-success small">Mensaje</label>
                    <textarea className="form-control bg-dark text-light border-success" id="message" name="message" rows={5} required></textarea>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-success fw-bold mt-3" 
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                
                {getStatusMessage()}
            </form>
        </div>
    );
};

export default Contact;