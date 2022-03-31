import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInfoOfFilmById } from 'services/movie-api';
import {
  MovieContainer,
  MovieInfo,
  MovieLinks,
  MovieOverview,
  MoviePoster,
  MovieTitle,
  OptionLink,
  GoBackButton,
  Arrow,
} from './MovieDetailsPage.styled';

function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState({});

  useEffect(() => {
    getInfoOfFilmById(id)
      .then(film => {
        setFilm(film);
      })
      .catch(error => error.message);
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  const { image, title, overview } = film;

  return (
    <>
      <GoBackButton onClick={goBack}>
        <Arrow>⇐</Arrow> Go back
      </GoBackButton>

      {film && (
        <>
          <MovieContainer>
            <MoviePoster src={image} alt={title} />

            <MovieInfo>
              <MovieTitle>{title}</MovieTitle>
              <MovieOverview>{overview}</MovieOverview>
            </MovieInfo>
          </MovieContainer>
          <MovieLinks>
            <OptionLink to={`cast`} name="credits" replace>
              Credits
            </OptionLink>

            <OptionLink to={`reviews`} name="reviews" replace>
              Reviews
            </OptionLink>
          </MovieLinks>
        </>
      )}

      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
