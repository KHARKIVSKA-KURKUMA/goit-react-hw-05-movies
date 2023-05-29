import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  Desc,
  Genres,
  LinksItem,
  LinksMenu,
  Overview,
  Score,
  Title,
  PosterImg,
  InfoWrap,
  StyledLink,
} from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import { getFilmDetails } from 'API/fetchMovie';
import noPoster from 'img/noposter.jpg';
import { genresDetail } from 'additional/fenresEditor';
import BackBtn from 'components/BackBtn/BackBtn';

const MovieDetails = () => {
  const location = useLocation();
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getFilmDetails(movieId).then(data => setMovieData(data));
  }, [movieId]);

  return (
    <>
      {movieData ? (
        <>
          <BackBtn />
          <Container>
            {movieData.poster_path !== null ? (
              <PosterImg
                src={`https://themoviedb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.overview}
              />
            ) : (
              <PosterImg src={noPoster} alt={movieData.title}></PosterImg>
            )}
            <InfoWrap>
              <Title>{movieData.title}</Title>
              <Score>User Score:</Score>
              <Desc>{movieData.vote_average}</Desc>
              <Overview>Overview:</Overview>
              <Desc>{movieData.overview}</Desc>
              <Genres>Genres:</Genres>
              <Desc>{genresDetail(movieData.genres)}</Desc>
            </InfoWrap>
          </Container>
        </>
      ) : (
        <h2>No data</h2>
      )}
      <LinksMenu>
        <LinksItem>
          <StyledLink to={`/movies/${movieId}/cast`} state={{ from: location }}>
            Cast
          </StyledLink>
        </LinksItem>
        <LinksItem>
          <StyledLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: location }}
          >
            Reviews
          </StyledLink>
        </LinksItem>
      </LinksMenu>
      <Outlet />
    </>
  );
};

export default MovieDetails;
