import { truncateTitle } from 'additional/truncateTitle';
import { MovieImage, MovieItem, MovieList, MovieTitle } from './Movies.styled';
import noPoster from 'img/noposter.jpg';

const MovieGallery = ({ array }) => {
  return (
    <MovieList>
      {array &&
        array.map(({ title, name, id, overview, poster_path }) => (
          <MovieItem key={id}>
            {poster_path !== null ? (
              <MovieImage
                src={`https://themoviedb.org/t/p/w500${poster_path}`}
                alt={overview}
              />
            ) : (
              <MovieImage src={noPoster} alt={title}></MovieImage>
            )}
            <MovieTitle>{truncateTitle(title ?? name, 18)}</MovieTitle>
          </MovieItem>
        ))}
    </MovieList>
  );
};

export default MovieGallery;
