import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmByQuery } from 'services/movie-api';

import {
  Title,
  InfoTitle,
  SearchForm,
  QueryInput,
  SearchInput,
} from './MoviesPage.styled';

import { MovieList } from 'components/MovieList/MovieList';

const Moviespage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const searchQuery = searchParams.get('query') || '';

  useEffect(() => {
    setError(null);
    setStatus('idle');
    if (searchQuery === '') return;
    setStatus('pending');
    getFilmByQuery(searchQuery)
      .then(movies => {
        if (movies.length !== 0) {
          setMovies(movies);
          setStatus('resolved');
        }
        if (movies.length === 0) {
          return Promise.reject(
            new Error(`Movie by request: "${searchQuery.trim()}" - not found.`)
          );
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchQuery]);

  useEffect(() => {
    setMovies([]);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ query: query });
  };

  const IDLE = status === 'idle' && searchQuery.trim() === '';
  const PENDING = status === 'pending';
  const REJECTED = status === 'rejected';
  const RESOLVED = status === 'resolved';

  return (
    <>
      <Title>Movies search</Title>
      <SearchForm autoComplete="off" onSubmit={handleSubmit}>
        <QueryInput type="search" name="search"></QueryInput>
        <SearchInput type="submit" value="Search"></SearchInput>
      </SearchForm>
      {IDLE && searchQuery.trim() === '' && (
        <InfoTitle>
          Your request is empty. Enter what you want to find...
        </InfoTitle>
      )}
      {PENDING && <InfoTitle>Loading...</InfoTitle>}
      {REJECTED && <InfoTitle>{error.message}</InfoTitle>}
      {RESOLVED && <MovieList movies={movies} />}
    </>
  );
};

export default Moviespage;
