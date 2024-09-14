import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExperienciaDetalle.css';

const ExperienciaDetalle = () => (
  <div>
    <h2>Detalle de Experiencia Laboral</h2>
    <ul>
      <li>
        <strong>Empresa: Indosur S.R.L. </strong> Cargo: Logistica (desde:01/2005 hasta:01/2007)
        <p>
        Encargado de carga y descarga de mercaderia pesada, manejo de puente grua,
        distribucion y orden de mercaderia segun planos y obras de construccion... carga
        en base de datos, manejo base de datos.
        </p>
      </li>
      <li>
        <strong>Empresa: Valvulas Balboa S.R.L. </strong> Cargo: Administrativo (desde:01/2007 hasta:01/2011)
        <p>
        Control de calidad, almacenamiento, distribucion, reposicion, manejo de
        proveedores y clientes.
        </p>
      </li>
      <li>
        <strong>Empresa: Enkai Sushi </strong> Cargo: Sushiman (desde:01/2012 hasta:01/2014)
        <p>
        Encargado de produciion, atencion al cliente y proveedores.
        </p>
      </li>
      <li>
        <strong>Empresa: Club Nautico Quilmes </strong> Cargo: Encargado Cocina y Salon (desde:01/2015 hasta:01/2016)
        <p>
        Encargado de produciion, atencion al cliente y proveedores.
        </p>
      </li>
      <li>
        <strong>Empresa: Rey Castro </strong> Cargo: Jefe de Cocina (desde:01/2017 hasta:01/2022)
        <p>
        Confeccion de platos, producccion y manejo de personal de cocina, produccion para eventos.
        </p>
      </li>
      <li>
        <strong>Empresa: Freelancer </strong> Cargo: Produccion de contenido y manejo de redes (desde:01/2022 hasta:Presente)
        <p>
        Edicion y produccion de contenido para distintas redes sociales, manejo de eventos y edicion de videos e imagenes.
        </p>
      </li>
    </ul>
    <Link to="/">
      <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Volver a la página principal
      </button>
    </Link>
  </div>
);

export default ExperienciaDetalle;
