import { useState, useEffect } from 'react';
import { getTrendingOfWeek } from 'services/movie-api';

import {
  Title,
  MovieList,
  Item,
  LinkItem,
  Poster,
  TitleMovie,
} from './HomePage.styled';

const Homepage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingOfWeek().then(films => {
      setFilms(films);
    });
  }, []);
  return (
    <>
      <Title>Trending films</Title>

      <MovieList>
        {films.map(film => (
          <LinkItem key={film.id} to={`/movies/${film.id}`}>
            <Item>
              <Poster
                src={film.image}
                alt={film.original_title}
                width="150px"
              />
              <TitleMovie>{film.original_title}</TitleMovie>
            </Item>
          </LinkItem>
        ))}
      </MovieList>
    </>
  );
};

export default Homepage;
