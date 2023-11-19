import MoviesList from 'components/Movies/Movies';
import { useEffect, useState } from 'react';
import { fetchMovies, onFetchError } from 'service/api';
import { SectionStyle } from './Pages.styled';
import { Loader } from 'components/Loader/Loader';

const endPoint = '/trending/movie/day';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films]);

  return (
    <SectionStyle>
      <h2>Movies in trend</h2>
      {loading && <Loader />}
      <MoviesList films={films} />
    </SectionStyle>
  );
};

export default HomePage;