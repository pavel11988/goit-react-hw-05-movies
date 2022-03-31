import { getCreditsOfFilmById } from 'services/movie-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastsList,
  CastsItem,
  ActorPhoto,
  ActorName,
  InfoTitle,
} from './Cast.styled';
export default function Cast() {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getCreditsOfFilmById(id)
      .then(credits => {
        if (credits.length !== 0) {
          setCredits(credits);
        }
        if (credits.length === 0) {
          return Promise.reject(new Error(`There is no data to show.`));
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  return (
    <>
      {!error ? (
        <CastsList>
          {credits.map(actor => {
            return (
              <CastsItem key={actor.id}>
                <ActorPhoto
                  src={actor.photo}
                  alt={`profilephoto-${actor.name}`}
                ></ActorPhoto>
                <ActorName>{actor.name}</ActorName>
              </CastsItem>
            );
          })}
        </CastsList>
      ) : (
        <InfoTitle>There are no casts to show.</InfoTitle>
      )}
    </>
  );
}
