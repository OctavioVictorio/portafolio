import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

interface ContactItemProps {
    icon: string;
    label: string;
    value: string;
    }

    interface SocialButtonProps {
    href: string;
    icon: React.ElementType;
}

const Datos: React.FC = () => {
    return (
        <div
        className="card text-white border-0 rounded-4 shadow-lg sticky-top"
        style={{
            top: "20px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        >
        <div className="card-body p-4 text-center">
            {/* Foto */}
            <img
            // En tu código React (o CSS si es el caso)
            src="/perfil.png" 
            alt="Mi foto de perfil"
            className="rounded-circle mb-3 border border-secondary border-3 shadow"
            style={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
            }}
            />

            <h1 className="h4 fw-bold mb-1" style={{ color: "#44c9acff" }}>
            Octavio Victorio
            </h1>
            <p className="text-white mb-3">Desarrollador de Software FullStack</p>

            <hr className="border-success" />

            {/* Datos de contacto */}
            <ul className="list-unstyled text-start mt-3 small">
            <ContactItem
                icon="📧"
                label="EMAIL"
                value="octavionvictorio@gmail.com"
            />
            <ContactItem icon="📞" label="TELÉFONO" value="+54 (266) 4037578" />
            <ContactItem
                icon="📍"
                label="UBICACIÓN"
                value="Río Cuarto, Córdoba, Argentina"
            />
            </ul>

            {/* Redes */}
            <div className="d-flex justify-content-center gap-3 mt-4">
            <SocialButton href="https://github.com/OctavioVictorio" icon={Github} />
            <SocialButton href="https://www.linkedin.com/in/octavio-victorio/" icon={Linkedin} />
            <SocialButton href="https://www.instagram.com/octavio.v_/" icon={Instagram} />
            </div>
        </div>
        </div>
    );
};

// Subcomponentes tipados
const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value }) => (
    <li className="d-flex align-items-center mb-2">
        <span className="me-3" style={{ color: "#44c9acff" }}>
        {icon}
        </span>
        <div>
        <div className="text-secondary" style={{ fontSize: "0.8rem" }}>
            {label}
        </div>
        <div>{value}</div>
        </div>
    </li>
);

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn rounded-circle border-0 d-flex align-items-center justify-content-center"
        style={{
        width: "40px",
        height: "40px",
        background: "rgba(0, 255, 198, 0.1)",
        color: "#44c9acff",
        transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
        e.currentTarget.style.background = "#44c9acff";
        e.currentTarget.style.color = "#0F2027";
        }}
        onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0, 255, 198, 0.1)";
        e.currentTarget.style.color = "#44c9acff";
        }}
    >
        <Icon size={18} />
    </a>
);

export default Datos;
