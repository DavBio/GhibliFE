import axios from 'axios';
import React from 'react';
import { Film } from '../types/film';

export const useFilm = (filmId: string | undefined) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [film, setFilm] = React.useState<Film>({
    _id: '',
    title: '',
    original_title: '',
    movie_banner: '',
    description: '',
    director: '',
    producer: '',
    release_date: '',
  });

  React.useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await axios.get(
        `https://ghibli-be.herokuapp.com/film/${filmId}`
      );
      if (response.data.data.film) {
        setFilm(response.data.data.film);
      }
      setLoading(false);
    };

    fetchData();
  }, [filmId]);

  return { loading, film };
};
