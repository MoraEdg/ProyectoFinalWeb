// Home.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsDashboard from '../noticias/NewsDashboard';

function Home() {
  const location = useLocation();

  const getFiltersForRoute = () => {
    // Implementa lógica para determinar los filtros según la ruta
    switch (location.pathname) {
      case '/antiguas':
        return { type: 'archive' }; // Ejemplo de filtro para noticias antiguas
      case '/actuales':
        return { type: 'current' }; // Ejemplo de filtro para noticias antiguas
      case '/favoritas':
        return { type: 'favorite' }; // Ejemplo de filtro para noticias favoritas
      // Agrega más casos según sea necesario
      default:
        return null; // Sin filtro por defecto
    }
  };

  const filters = getFiltersForRoute();

  return (
    <>
      {/* Otro contenido del componente Home */}
      <div className="mt-4 mb-16">
        {/* Pasa los filtros al componente NewsDashboard */}
        <NewsDashboard filters={filters} />
      </div>
    </>
  );
}

export default Home;