import React from 'react';
import { Github} from 'lucide-react';

// --- Datos de Proyectos ---
const projects = [
        {
        title: "Gestión de Aerolíneas",
        description: "Sistema de gestión y dashboard administrativo para aerolíneas con funcionalidades de control de vuelos, reservas y tripulación.",
        image: "/airline-management-system-dashboard-with-flight-sc.jpg", 
        code: "https://github.com/OctavioVictorio/gestios_aerolineas",
        },
        {
        title: "Gestion de Sistema Ambiental",
        description: "Sistema de gestión de proyectos ambientales que permite la planificación, seguimiento de recursos y análisis de impacto ecológico.",
        image: "/environmental-project-management-system-with-data-.jpg",
        code: "https://github.com/OctavioVictorio/Efi-Sistema-Gestion-Proyectos-Ambientales",
        },
        {
        title: "Calculadora Fresnel",
        description: "Herramienta científica con interfaz gráfica para calcular parámetros de difracción Fresnel, útil para física o ingeniería.",
        image: "/fresnel-calculator-scientific-tool-with-graphs-and.jpg",
        code: "https://github.com/OctavioVictorio/calculadora-fresnel",
        },
];

// --- Componente de Tarjeta de Proyecto ---
interface ProjectCardProps { title: string; description: string; image: string; code: string; }
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, code, }) => (
    <div className="card h-100 text-white bg-dark border border-success">
        <img src={image} className="card-img-top" alt={`Captura de ${title}`} style={{ height: '180px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title text-success">{title}</h5>
                <p className="card-text small flex-grow-1">{description}</p>
            <div className="mt-3 d-flex gap-2 ">
                <a href={code} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm d-flex align-items-center gap-1">
                    <Github size={16} /> Código
                </a>
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <div>
        <h2 className="h4 fw-bold text-light mb-4 border-bottom border-success pb-2">Mis Proyectos</h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {projects.map((project, index) => (
            <div className="col" key={index}>
                <ProjectCard {...project} />
            </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;