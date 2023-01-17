import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/api';
import { useState, useEffect } from 'react';
import { poster_pathUrl } from 'services/api';
import Loader from 'components/Loader/Loader';
import css from '../Cast/Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      setError('');
      try {
        const castInfo = await getCastInfo(moviesId);
        setCast(castInfo.cast);
      } catch (error) {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map(({ character, original_name, profile_path, cast_id }) => {
            return (
              <li key={cast_id} className={css.castList__item}>
                <img
                  src={poster_pathUrl(profile_path)}
                  className={css.castList__image}
                  alt="poster"
                />
                <p>{original_name}</p>
                <p>Character:{character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        'Looks like there are no cast to show'
      )}
    </>
  );
};

export default Cast;
