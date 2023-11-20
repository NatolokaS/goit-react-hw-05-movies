import { Link, useLocation } from 'react-router-dom';
import { LiStyle, UlStyle, WrapCardStyle } from './Movies.styled';

const Movies = ({ films }) => {
  const location = useLocation();

  return (
    <UlStyle>
      {films.map(({ id, title, overview, poster_path }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <LiStyle>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'http://pro-biznes.com.ua/media/article-128_2.jpg'
              }
              alt={title}
            />
            <WrapCardStyle>
              <h3>{title}</h3>
              <p>{overview}</p>
            </WrapCardStyle>
          </LiStyle>
        </Link>
      ))}
    </UlStyle>
  );
};
export default Movies;