import { useEffect, useState } from 'react';
import {
  StyledUL,
  StyledLI,
  StyledImg,
  StyledUserPic,
  StyledName,
  StyledUsername,
  StyledContent,
  StyledDiv,
} from './Reviews.styled';
import NoReviews from '../../img/noReview.png';
import { getFilmReview } from 'API/fetchMovie';
import { useParams } from 'react-router-dom';
import noPhoto from 'img/photoNotAvailable.jpg';

const Reviews = () => {
  const [reviewArr, setReviewArr] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getFilmReview(movieId).then(({ results }) => setReviewArr(results));
  }, [movieId]);

  return (
    <StyledUL>
      {reviewArr.length !== 0 ? (
        reviewArr.map(({ author, author_details, name, content, id }) => (
          <StyledLI key={id}>
            <StyledDiv>
              {author_details.avatar_path ? (
                author_details.avatar_path.includes('secure.gravatar.com') ? (
                  <StyledUserPic
                    src={`${author_details.avatar_path.substring(1)}`}
                    alt={name}
                  />
                ) : (
                  <StyledUserPic
                    src={`https://themoviedb.org/t/p/w500${author_details.avatar_path}`}
                    alt={name}
                  />
                )
              ) : (
                <StyledUserPic src={noPhoto} alt="No photo" />
              )}

              <div>
                <StyledName>{name ?? author}</StyledName>
                <StyledUsername>{author_details.username}</StyledUsername>
              </div>
            </StyledDiv>
            <StyledContent>{content}</StyledContent>
          </StyledLI>
        ))
      ) : (
        <StyledImg
          src={NoReviews}
          alt="I apologize for the inconvenience. We would like to notify you that we currently do not have any reviews to display."
        />
      )}
    </StyledUL>
  );
};

export default Reviews;
