import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="row g-3">
            <h3 className='fw-bold mb-1 text-whithe' >Educación</h3>
            <div className="col-12">
                <div className="border-start border-success border-4 ps-4 py-2"> 
                    <h5 className=" fw-bold text-success mb-1">Nivel Secundario</h5>
                    <p className="text-white mb-1">Escuela Técnica Nro 28 Gral. Juan Martín de Pueyrredón 🢂 Técnico en Informática Profesional y Personal</p>
                </div>
            </div>
            <div className="col-12">
                <div className="border-start border-success border-4 ps-4 py-2"> 
                    <h5 className=" fw-bold text-success mb-1">Nivel Terciario</h5>
                    <p className="text-white  mb-1">iTec Río Cuarto (Instituto Tecnológico de Río Cuarto) 🢂 Desarrollador de Software</p>
                </div>
            </div>

            <h3 className='fw-bold text- mb-1 text-whithe'>Experiencia</h3>
            <div className="col-12">
                <div className="border-start border-success border-4 ps-4 py-2"> 
                    <h5 className=" fw-bold text-success mb-1">Desarrollador FullStack</h5>
                    <p className="text-light ">🢂 Desarrollo de aplicaciones web con Flask y React.js, diseño de bases de datos en MySQL y SQLite, implementación de control de versiones con Git y GitHub.</p>
                </div>
            </div>
            <div className="col-12">
                <div className="border-start border-success border-4 ps-4 py-2"> 
                    <h5 className=" fw-bold text-success mb-1">Diseñador de Bases de Datos</h5>
                    <p className="text-light ">🢂 Creación y configuración de bases de datos usando SQLyog, diseño de relaciones y normalización de datos. </p>
                </div>
            </div>
            <div className="col-12">
                <div className="border-start border-success border-4 ps-4 py-2"> 
                    <h5 className=" fw-bold text-success mb-1">Desarrollador Frontend</h5>
                    <p className="text-light ">🢂 Desarrollo de páginas web con HTML, CSS y JavaScript.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;