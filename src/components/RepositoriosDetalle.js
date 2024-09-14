import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RepositoriosDetalle.css';

const RepositoriosDetalle = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/BANGH1985/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los repositorios');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError('No se pudieron cargar los repositorios');
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Detalle de Repositorios de GitHub</h2>
      <ul>
        {repos.length > 0 ? (
          repos.map((repo) => (
            <li key={repo.id}>
              <strong>{repo.name}</strong>
              <p>{repo.description || 'No description provided'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
              {repo.language && (
                <span style={{ marginLeft: '10px', color: '#555', fontSize: '14px' }}>
                  {repo.language}
                </span>
              )}
            </li>
          ))
        ) : (
          <p>No se encontraron repositorios.</p>
        )}
      </ul>
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          Volver a la página principal
        </button>
      </Link>
    </div>
  );
};

export default RepositoriosDetalle;
