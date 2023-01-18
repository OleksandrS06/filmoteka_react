import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'services/api';

const Reviews = () => {
  const [film, setFilm] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      setError('');
      try {
        const filmDetails = await getReviews(moviesId);
        setFilm(filmDetails);
      } catch (error) {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [moviesId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {film.length > 0 ? (
        <ul>
          {film.map(({ author, content, id }) => {
            return (
              <li key={id}>
                Author: <span>{author}</span>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>'Looks like there are no reviews at the moment'</p>
      )}
    </>
  );
};

export default Reviews;
