import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Experiencia from './components/Experiencia';
import Repositorios from './components/Repositorios';
import Contacto from './components/Contacto';
import ExperienciaDetalle from './components/ExperienciaDetalle';
import RepositoriosDetalle from './components/RepositoriosDetalle';
import ConocimientosHabilidades from './components/ConocimientosHabilidades';
import EstudiosCertificados from './components/EstudiosCertificados';
import CartaPresentacion from './components/CartaPresentacion';

function App() {
  return (
    <Router basename='/MiPagina'>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <CartaPresentacion />
              <Experiencia />
              <div style={{ margin: '20px 0' }}>
                <a href="/CV_Dante_Soriano.pdf" download>
                  <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#61dafb', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Descargar CV
                  </button>
                </a>
              </div>
              <Repositorios />
              <ConocimientosHabilidades />
              <EstudiosCertificados />
              <Contacto />
            </>
          } />
          <Route path="/experiencia" element={<ExperienciaDetalle />} />
          <Route path="/repositorios" element={<RepositoriosDetalle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
