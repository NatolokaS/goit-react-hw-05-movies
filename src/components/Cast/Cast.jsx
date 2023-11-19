import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieCast, onFetchError } from 'service/api';
import { Loader } from 'components/Loader/Loader';
import { HeaderStyled, NavStyled } from './Cast.styled';

const endPoint = '/movie';
const defaultImage = 'https://texty.org.ua/media/images/357130486_651443390347614_3599390347963367785.width-1000.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3 className={HeaderStyled}>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <ul className={NavStyled}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : defaultImage
                }
                alt={name}
                width="100"
                height="150"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
};
export default Cast;