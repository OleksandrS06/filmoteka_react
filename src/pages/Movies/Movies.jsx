import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const request = query.get('query') ?? '';
    console.log(request);

    if (!request) return;

    async function fetchMovie() {
      try {
        const filmDetails = await getMovieByQuery(request);
        console.log(filmDetails);
        setFilms(filmDetails.results);
      } catch (error) {
        setError('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [query]);
  const submitHandler = e => {
    e.preventDefault();
    setQuery({ query: e.target.query.value });
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
