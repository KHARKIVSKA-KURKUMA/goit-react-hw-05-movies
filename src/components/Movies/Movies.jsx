import { useState } from 'react';
import { FormContainer, SearchButton, SearchInput } from './Movies.styled';
import { getFilmByKeyWord } from 'API/fetchMovie';
import MovieGallery from './MovieGallery';
import { toast } from 'react-toastify';

const Movies = () => {
  /* ---------------------------------- STATE --------------------------------- */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchArr, setSearchArr] = useState([]);
  /* --------------------------------- SUBMIT --------------------------------- */
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter correct query');
    }
    getFilmByKeyWord(searchQuery).then(({ results }) => {
      if (!results || results.length === 0) {
        toast.error('Oops. Did not match any movies.');
      }
      setSearchArr(results);
    });
    setSearchQuery('');
  };
  /* --------------------------------- CHANGE --------------------------------- */
  const handleChange = ({ currentTarget: { value } }) => {
    const searchValue = value.toLowerCase();
    setSearchQuery(searchValue);
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
