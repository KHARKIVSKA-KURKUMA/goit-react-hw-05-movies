import { useEffect, useState } from 'react';
import {
  StyledUL,
  StyledLI,
  StyledImg,
  StyledUserPic,
  StyledName,
  StyledUsername,
  StyledContent,
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
            <div>
              {author_details.avatar_path ? (
                <StyledUserPic src={author_details.avatar_path} alt={name} />
              ) : (
                <StyledUserPic src={noPhoto} alt="No photo" />
              )}
              <div>
                <StyledName>{name ?? author}</StyledName>
                <StyledUsername>{author_details.username}</StyledUsername>
                <StyledContent>{content}</StyledContent>
              </div>
            </div>
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
