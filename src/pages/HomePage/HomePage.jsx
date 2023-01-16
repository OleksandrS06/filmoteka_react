import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      setError('');
      try {
        const filmsData = await getTrendingFilms();
        setFilms(filmsData.results);
        console.log(filmsData.results);
      } catch (error) {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <section className={css.section}>
      <div>
        <h1 className={css.heading}>TRENDING MOVIES TODAY</h1>
        {films.length > 0 && <MoviesList films={films} />}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default HomePage;
