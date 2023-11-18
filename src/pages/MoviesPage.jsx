import { Loader } from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';
import SearchBar from 'components/Search/Search';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { fetchSearchMovies, onFetchError, paramsForNotify } from 'service/api';
import { SectionStyle } from './Pages.styled';
import { useSearchParams } from 'react-router-dom';

const endPoint = '/search/movie';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    if (films.length > 0) {
      return;
    }

    setLoading(true);
    fetchSearchMovies(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films, searchQuery]);

  const onSubmitSearchBar = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');

    if (searchValue === '') {
      Notify.info('Enter your request, please!', paramsForNotify);
      setSearchParams({});
      setFilms([]);
      return;
    }

    if (searchValue === searchQuery) {
      Notify.info('Enter new request, please!', paramsForNotify);
      return;
    }

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <div>
      <SearchBar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      <SectionStyle>
        {loading && <Loader />}
        <Movies films={films} />
      </SectionStyle>
    </div>
  );
};
export default MoviesPage;
