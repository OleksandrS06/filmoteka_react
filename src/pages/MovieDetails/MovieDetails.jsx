import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'services/api';
import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      setError('');
      try {
        const filmDetails = await getMovieDetails(moviesId);
        setFilm(filmDetails);
      } catch (error) {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [moviesId]);

  if (isLoading) return <Loader />;

  if (!film) return <div>Movie detail not found</div>;

  const { original_title, vote_average, overview, poster_path, genres } = film;

  return (
    <>
      <section className={css.moviesSection}>
        <Link to={backLink} className={css.backBtn}>
          Go back
        </Link>
        <div className={css.container}>
          <img src={poster_path} className={css.image} alt="poster" />
          <div className={css.filmData}>
            <h2 className={css.text}>{original_title}</h2>
            <p className={css.text}>User score: {vote_average}%</p>
            <h3 className={css.text}>Overwiew</h3>
            <p className={css.text}>{overview}</p>
            <h3 className={css.text}>Genres</h3>
            <p className={css.text}>{genres}</p>
          </div>
        </div>
        <div className={css.addInfo}>
          <Link
            to={'cast'}
            state={{ from: backLink }}
            className={css.addInfo__link}
          >
            Cast
          </Link>
          <Link
            to={'reviews'}
            state={{ from: backLink }}
            className={css.addInfo__link}
          >
            Reviews
          </Link>
        </div>
        {error && <p>{error}</p>}
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetails;
