import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  let request = searchParams.get('searchParams') ?? '';

  useEffect(() => {
    if (!request) return;

    async function fetchMovie() {
      try {
        setIsLoading(true);
        const filmDetails = await getMovieByQuery(request);
        setFilms(filmDetails);
      } catch (error) {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [request]);
  const submitHandler = e => {
    e.preventDefault();
    const searchParams = e.target.query.value.trim().toLowerCase();
    if (!searchParams) return;
    setSearchParams({ searchParams });
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <form onSubmit={submitHandler}>
          <label>
            <input type={'text'} name="query" />
            <button type="submit">SEARCH</button>
          </label>
        </form>
      </div>
      {films.length > 0 && <MoviesList films={films} />}
      {error && <p>{error}</p>}
    </>
  );
};

export default Movies;
