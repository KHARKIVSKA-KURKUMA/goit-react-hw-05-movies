import { useEffect, useState } from 'react';
import { FormContainer, SearchButton, SearchInput } from './Movies.styled';
import { getFilmByKeyWord } from 'API/fetchMovie';
import MovieGallery from './MovieGallery';

const Movies = () => {
  /* ---------------------------------- STATE --------------------------------- */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchArr, setSearchArr] = useState([]);

  /* --------------------------------- SUBMIT --------------------------------- */
  const handleSubmit = e => {
    e.preventDefault();
    getFilmByKeyWord(searchQuery).then(({ results }) => setSearchArr(results));
    setSearchQuery('');
  };
  /* --------------------------------- CHANGE --------------------------------- */
  const handleChange = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <SearchInput
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search..."
          />
          <SearchButton type="submit">Search</SearchButton>
        </FormContainer>
      </form>
      <MovieGallery array={searchArr} />
    </>
  );
};

export default Movies;
