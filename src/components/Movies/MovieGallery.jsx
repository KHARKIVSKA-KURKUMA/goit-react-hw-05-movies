import React from 'react';
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
import LoadMore from 'components/LoadMoreButton/LoadMore';

const MovieGallery = ({ array, onClickHandleMore, page, totalPage }) => {
  const location = useLocation();
  return (
    <>
      <MovieList>
        {array.map(({ title, name, id, overview, poster_path }) => (
          <MovieItem key={id}>
            <LinkToMovie to={`/movies/${id}`} state={{ from: location }}>
              {poster_path !== null ? (
                <MovieImage
                  src={`https://themoviedb.org/t/p/w500${poster_path}`}
                  alt={overview}
                />
              ) : (
                <MovieImage src={noPoster} alt={title} />
              )}
              <MovieTitle>{truncateTitle(title ?? name, 28)}</MovieTitle>
            </LinkToMovie>
          </MovieItem>
        ))}
      </MovieList>
      {page !== totalPage && page !== 0 && (
        <LoadMore onClick={onClickHandleMore} />
      )}
    </>
  );
};

export default MovieGallery;
