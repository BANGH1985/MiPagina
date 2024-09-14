import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Repositorios.css';

const Repositorios = () => (
  <section>
    <h2>Mis Repositorios de GitHub</h2>
    <p>
      Tienes varios repositorios disponibles.{' '}
      <Link to="/repositorios">Ver más detalles</Link>
    </p>
  </section>
);

export default Repositorios;
