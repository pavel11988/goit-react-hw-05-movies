import { useLocation } from 'react-router-dom';
import { List, Item, LinkItem, Poster, TitleMovie } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, image, original_title }) => (
        <Item key={id}>
          <LinkItem to={`/movies/${id}`} state={location}>
            <Poster src={image} alt={original_title} width="150px" />
            <TitleMovie>{original_title}</TitleMovie>
          </LinkItem>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
