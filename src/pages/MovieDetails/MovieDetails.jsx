import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'services/api';
import { poster_pathUrl } from 'services/api';
import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  console.log(location);

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
    //eslint-disable-next-line
  }, []);

  const { original_title, vote_average, overview, poster_path, genres } = film;

  const getMovieGenres = genres => {
    if (!genres) return;
    return genres
      .map(genre => {
        return genre.name + ',';
      })
      .join(' ');
  };

  return (
    <>
      <section className={css.moviesSection}>
        {isLoading && <Loader />}
        <Link to={backLink} className={css.backBtn}>
          Go back
        </Link>
        <div className={css.container}>
          <img
            src={poster_pathUrl(poster_path)}
            className={css.image}
            alt="poster"
          />
          <div className={css.filmData}>
            <h2 className={css.text}>{original_title}</h2>
            <p className={css.text}>
              User score: {Math.round(vote_average * 10)}%
            </p>
            <h3 className={css.text}>Overwiew</h3>
            <p className={css.text}>{overview}</p>
            <h3 className={css.text}>Genres</h3>
            <p className={css.text}>{getMovieGenres(genres)}</p>
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
