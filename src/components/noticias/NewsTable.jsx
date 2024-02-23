import React from 'react';

function NewsTable({ news }) {
  // Asignar un valor por defecto si news es null
  const newsArray = news || [];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const sortedNews = Array.isArray(newsArray)
    ? newsArray
        .filter((item) => typeof item === 'object' && item !== null)
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    : [];

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Noticias</h1>
      {sortedNews.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontWeight: 'bold', marginRight: '10px' }}>{`${item?.prioridad === 1 ? '⭐ ' : ''}${item?.title || ''}`}</h2>
            <p style={{ marginRight: '10px' }}>{formatDate(item?.fecha)}</p>

            {/* Ajuste en la presentación de "Archivo" o "Actualidad" */}
            <span style={{ color: new Date(item?.fecha) > new Date('2024-02-01') ? 'green' : 'red' }}>
              {new Date(item?.fecha) > new Date('2024-02-01') ? 'Actualidad' : 'Archivo'}
            </span>
          </div>
          <p>{item?.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsTable;


