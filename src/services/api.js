import axios from 'axios';
import noImage from '../assets/images/noImage.jpeg';

const API_KEY = '13b039c8ea964a53c22455b956eb62e0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

export async function getTrendingFilms() {
  const { data } = await axios.get('/trending/movie/week');
  return data;
}
export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}
export async function getCastInfo(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data;
}
export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
}
export async function getMovieByQuery(query) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
}

export const poster_pathUrl = url => {
  return url ? `https://image.tmdb.org/t/p/w500${url}` : noImage;
};
