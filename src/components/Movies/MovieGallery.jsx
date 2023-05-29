import { truncateTitle } from 'additional/truncateTitle';
import {
  MovieImage,
  MovieItem,
  MovieList,
  MovieTitle,
  LinkToMovie,
} from './Movies.styled';
import noPoster from 'img/noposter.jpg';
import { useLocation } from 'react-router-dom';

const MovieGallery = ({ array }) => {
  const location = useLocation();
  return (
    <MovieList>
      {array &&
        array.map(({ title, name, id, overview, poster_path }) => (
          <MovieItem key={id}>
            <LinkToMovie to={`/movies/${id}`} state={{ from: location }}>
              {poster_path !== null ? (
                <MovieImage
                  src={`https://themoviedb.org/t/p/w500${poster_path}`}
                  alt={overview}
                />
              ) : (
                <MovieImage src={noPoster} alt={title}></MovieImage>
              )}
              <MovieTitle>{truncateTitle(title ?? name, 18)}</MovieTitle>
            </LinkToMovie>
          </MovieItem>
        ))}
    </MovieList>
  );
};

export default MovieGallery;
