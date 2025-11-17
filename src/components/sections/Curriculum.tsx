import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define la ruta de tu archivo PDF. 
// Si está en la carpeta 'public', puedes usar la ruta relativa directa.
const CV_PATH = '/Curriculum-VictorioOctavio.pdf'; 

const Curriculum: React.FC = () => {
    return (
        <div className="curriculum-container">
            <h2 className="text-center mb-4">Mi Currículum Vitae</h2>
            
            {/* Botón de Descarga */}
            <div className="d-flex justify-content-center mb-4">
                <Button
                    as="a"
                    href={CV_PATH}
                    download="Curriculum-VictorioOctavio.pdf"
                    variant="success" // Puedes cambiar el color
                    size="lg"
                    className="fw-bold"
                >
                    ⬇️ Descargar Currículum (PDF)
                </Button>
            </div>

            <Card className="shadow-lg border-0">
                <Card.Body className="p-0">
                    {/* Visualizador del PDF */}
                    <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
                        <iframe 
                            src={CV_PATH}
                            title="Visualización del Currículum"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            // Agregamos una clase para posibles estilos CSS
                            className="cv-iframe"
                        >
                            {/* Mensaje de fallback para navegadores que no soportan iframes o PDFs */}
                            Tu navegador no soporta la visualización de PDFs. Por favor, usa el botón de descarga.
                        </iframe>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Curriculum;