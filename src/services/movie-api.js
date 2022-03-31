import imageDefault from '../images/default-image.jpg';
import avatarDefault from '../images/default-avatar.jpg';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '107e3d3f3084d30403596119046d7662';
const axios = require('axios');

async function getFilmByQuery(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );

    const filmsArray = response.data.results.map(film => {
      const image = film.poster_path
        ? `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        : imageDefault;
      return {
        id: film.id,
        original_title: film.title,
        overview: film.overview,
        image: image,
      };
    });

    return filmsArray;
  } catch (error) {
    return error;
  }
}

async function getInfoOfFilmById(filmId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}`
    );
    const { poster_path, title, overview } = response.data;
    const image = poster_path
      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
      : imageDefault;

    return { image, title, overview };
  } catch (error) {
    return error;
  }
}

async function getTrendingOfWeek() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    const filmsArray = response.data.results.map(film => {
      return {
        id: film.id,
        original_title: film.original_title,
        overview: film.overview,
        image: `https://image.tmdb.org/t/p/w300/${film.poster_path}`,
      };
    });
    return filmsArray;
  } catch (error) {
    return error;
  }
}

async function getCreditsOfFilmById(filmId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${filmId}/credits?api_key=${API_KEY}`
    );
    const castArray = response.data.cast.map(actor => {
      const image = actor.profile_path
        ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
        : avatarDefault;
      return {
        id: actor.id,
        name: actor.name,
        photo: image,
      };
    });
    return castArray;
  } catch (error) {
    return error;
  }
}

async function getReviewsOfFilmById(filmId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${filmId}/reviews?api_key=${API_KEY}`
    );
    const reviewArray = response.data.results.map(review => {
      return {
        id: review.id,
        name: review.author,
        text: review.content,
      };
    });
    return reviewArray;
  } catch (error) {
    return error;
  }
}

export {
  getFilmByQuery,
  getTrendingOfWeek,
  getInfoOfFilmById,
  getCreditsOfFilmById,
  getReviewsOfFilmById,
};
