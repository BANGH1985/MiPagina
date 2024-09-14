import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Experiencia.css';

const Experiencia = () => (
  <section>
    <h2>Experiencia Laboral</h2>
    <p>
      Tienes experiencia en varias empresas.{' '}
      <Link to="/experiencia">Ver más detalles</Link>
    </p>
  </section>
);

export default Experiencia;
