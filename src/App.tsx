import React from 'react';
import Datos from './components/Datos';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div 
      className="container-fluid min-vh-100 py-5"
      style={{
        background: 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)',
        color: '#E0E0E0',
      }}
    >
      <div className="row justify-content-center align-items-start g-4">
        {/* Panel lateral */}
        <div className="col-12 col-lg-3">
          <Datos />
        </div>

        {/* Contenido principal */}
        <div className="col-12 col-lg-8">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
