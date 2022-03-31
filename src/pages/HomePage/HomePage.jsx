import { useState, useEffect } from 'react';
import { getTrendingOfWeek } from 'services/movie-api';

import { Title } from './HomePage.styled';

import { MovieList } from 'components/MovieList/MovieList';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingOfWeek().then(movies => {
      setMovies(movies);
    });
  }, []);
  return (
    <>
      <Title>Trending films</Title>
      <MovieList movies={movies} />
    </>
  );
};

export default Homepage;
