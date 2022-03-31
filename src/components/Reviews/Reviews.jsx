import { getReviewsOfFilmById } from 'services/movie-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsList,
  ReviewsItem,
  ReviewName,
  ReviewText,
  InfoTitle,
} from './Reviews.styled';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsOfFilmById(id)
      .then(reviews => {
        if (reviews.length !== 0) {
          setReviews(reviews);
        }
        if (reviews.length === 0) {
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
        <ReviewsList>
          {reviews.map(review => {
            return (
              <ReviewsItem key={review.id}>
                <ReviewName>{review.name}:</ReviewName>
                <ReviewText>{review.text}</ReviewText>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <InfoTitle>There are no reviews yet.</InfoTitle>
      )}
    </>
  );
}
