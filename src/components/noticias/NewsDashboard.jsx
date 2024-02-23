import React, { useEffect, useState } from 'react';
import NewsTable from './NewsTable';
import { getAllNews } from '../../services/api';


function NewsDashboard({ filters }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllNews();
        console.log('Response from API:', response);

        if (response !== null) {
          const sortedNews = sortNewsByDate(response);
          const filteredNews = filterNews(sortedNews, filters);
          setNews(filteredNews);
        } else {
          console.log('Received null response from API');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filters]);

  const sortNewsByDate = (news) => {
    return news.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  };

  const filterNews = (news, filters) => {
    if (!filters) {
      // Sin filtro, mostrar todas las noticias
      return news;
    }

    return news.filter((item) => {
      switch (filters.type) {
        case 'archive':
          return new Date(item?.fecha) <= new Date('2024-02-01');
        case 'favorite':
          return item.prioridad === 1;
        case 'current':
          return new Date(item?.fecha) > new Date('2024-02-01');
        default:
          return true;
      }
    });
  };

  return (
    <div>
      <NewsTable news={news} />
    </div>
  );
}

export default NewsDashboard;
