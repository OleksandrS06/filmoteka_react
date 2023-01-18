import { Link, useLocation } from 'react-router-dom';

import css from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {films.map(({ original_title, id, poster_path, vote_average }) => {
        return (
          <li key={id} className={css.moviesList__item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={poster_path} alt="poster" />

              <div className={css.card__info}>
                <p className={css.card__text__slide}>{original_title}</p>
                <p className={css.card__text__slide}>Rate: {vote_average}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
