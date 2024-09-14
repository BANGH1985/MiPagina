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
