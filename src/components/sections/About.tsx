import React from 'react';
import { Code, Database, LayoutGrid, BarChart3 } from 'lucide-react'; 

// --- Datos de Habilidades (Lo Que Hago) ---
const skills = [
    { 
        icon: LayoutGrid, 
        title: "Diseño Web (UX/UI)", 
        description: "Diseño moderno y de alta calidad con enfoque en UX/UI y diseño responsivo, usando herramientas como Figma y Bootstrap." 
    },
    { 
        icon: Code, 
        title: "Desarrollo FullStack", 
        description: "Desarrollo de aplicaciones robustas con React.js, Next.js, Node.js, Flask, Django, Python y gestión de repositorios con Git/GitHub." 
    },
    { 
        icon: Database, 
        title: "Bases de Datos", 
        description: "Diseño, creación y optimización de bases de datos relacionales (MySQL, SQLite)." 
    },
    { 
        icon: BarChart3, 
        title: "Análisis de Datos", 
        description: "Actualmente estudiando Analítica de Datos para complementar el desarrollo y extraer valor de la información." 
    },
];

// --- Componente de Tarjeta de Habilidad ---
interface SkillCardProps { icon: React.ElementType; title: string; description: string; }
const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description }) => (
    <div className="p-3 bg-dark rounded-3 border border-success" style={{ minHeight: '150px' }}>
        <div className="d-flex align-items-center gap-3 mb-2">
        <Icon className="h-6 w-6 text-success" size={24} />
        <h3 className="h6 fw-bold text-white mb-0">{title}</h3>
        </div>
        <p className="mb-0">{description}</p>
    </div>
);

// --- Componente About Principal ---
const About: React.FC = () => {
    return (
        <div>
        <h2 className="h4 fw-bold text-light mb-4 border-bottom border-success pb-2">Sobre Mí</h2>
        
        {/* Tu Resumen Personal */}
        <p className="text-light mb-5">
            Soy un Desarrollador FullStack de la Localidad de La Toma(San Luis), Argentina, 
            recibido de Desarrollador de software en el año 2025 en Rio Cuarto(Cordoba), Argentina. 
            Especializado en desarrollo web y análisis de datos. 
            Me destaco por mi rápida capacidad de adaptación, pensamiento analítico y habilidades de trabajo en equipo. 
            Disfruto transformar problemas complejos en soluciones simples, hermosas e intuitivas. 
            Mi objetivo es construir aplicaciones funcionales, fáciles de usar y visualmente atractivas para cualquier tipo de usuario. 
            Además estoy muy interesado en aprender y desempeñarme en la automatización de maquinarias y procesos mediante el uso de PLCs, y cualquier 
            otro tipo de de desafio que me permita crecer tanto personal como profesionalmente.
        </p>

        <h2 className="h4 fw-bold text-light mb-4 border-bottom border-success pb-2">Lo Que Hago</h2>
        
        {/* Grid de Habilidades */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {skills.map((skill, index) => (
            <div className="col" key={index}>
                <SkillCard {...skill} />
            </div>
            ))}
        </div>
        </div>
    );
};

export default About;