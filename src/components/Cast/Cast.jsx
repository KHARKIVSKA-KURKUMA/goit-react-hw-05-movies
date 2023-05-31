import { getFilmCast } from 'API/fetchMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from 'img/photoNotAvailable.jpg';
import {
  StyledUL,
  StyledLI,
  StyledImg,
  StyledChapter,
  StyledAuthor,
  StyledSpan,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castArray, setCastArray] = useState([]);

  useEffect(() => {
    getFilmCast(movieId).then(({ cast }) => setCastArray(cast));
  }, [movieId]);

  return (
    <StyledUL>
      {castArray &&
        castArray.map(({ original_name, character, profile_path, id }) => (
          <StyledLI key={id}>
            {profile_path !== null ? (
              <StyledImg
                src={`https://themoviedb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
            ) : (
              <StyledImg src={noPhoto} alt="Without photo" />
            )}
            <div>
              <StyledChapter>
                Chapter: <StyledSpan>{character}</StyledSpan>
              </StyledChapter>
              <StyledAuthor>
                Author: <StyledSpan>{original_name}</StyledSpan>
              </StyledAuthor>
            </div>
          </StyledLI>
        ))}
    </StyledUL>
  );
};

export default Cast;
