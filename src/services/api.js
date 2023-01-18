import axios from 'axios';
import noImage from '../assets/images/noImage.jpeg';

const API_KEY = '13b039c8ea964a53c22455b956eb62e0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

export async function getTrendingFilms() {
  const { data } = await axios.get('/trending/movie/week');
  return data.results.map(el => {
    return {
      original_title: el.original_title,
      id: el.id,
      poster_path: poster_pathUrl(el.poster_path),
      vote_average: voteAveragePercent(el.vote_average),
    };
  });
}
export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  const { original_title, vote_average, overview, poster_path, genres } = data;
  return {
    original_title,
    vote_average: voteAveragePercent(vote_average),
    overview,
    poster_path: poster_pathUrl(poster_path),
    genres: getMovieGenres(genres),
  };
}
export async function getCastInfo(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
}
export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
}
export async function getMovieByQuery(query) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data.results.map(el => {
    return {
      original_title: el.original_title,
      id: el.id,
      poster_path: poster_pathUrl(el.poster_path),
      vote_average: voteAveragePercent(el.vote_average),
    };
  });
}

export const poster_pathUrl = url => {
  return url ? `https://image.tmdb.org/t/p/w500${url}` : noImage;
};

export const getMovieGenres = genres => {
  if (!genres) return;
  return genres
    .map(genre => {
      return genre.name + ',';
    })
    .join(' ');
};

const voteAveragePercent = vote_average => {
  return Math.round(vote_average * 10);
};
