import { useState } from 'react';
import { FormContainer, SearchButton, SearchInput } from './Movies.styled';
import { getFilmByKeyWord } from 'API/fetchMovie';
import MovieGallery from './MovieGallery';
import { toast } from 'react-toastify';

const Movies = () => {
  /* ---------------------------------- STATE --------------------------------- */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchArr, setSearchArr] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(null);

  /* --------------------------------- SUBMIT --------------------------------- */
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter correct query');
    }
    getFilmByKeyWord(searchQuery, 1).then(data => {
      if (!data.results || data.results.length === 0) {
        toast.error('Oops. Did not match any movies.');
      }
      setPage(1);
      setSearchArr(data.results);
      setTotalPage(data.total_pages);
    });
    setSearchQuery('');
  };
  /* --------------------------------- CHANGE --------------------------------- */
  const handleChange = ({ currentTarget: { value } }) => {
    const searchValue = value.toLowerCase();
    setSearchQuery(searchValue);
    setSearchValue(searchValue);
  };
  /* ---------------------------------- CLICK --------------------------------- */
  const handleLoadMore = () => {
    getFilmByKeyWord(searchValue, page + 1)
      .then(data => {
        setPage(prev => prev + 1);
        setSearchArr(prev => [...prev, ...data.results]);
        console.log('data :>> ', data);
      })
      .catch(error => {
        toast.error('Oops, an error occurred');
      });
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
            autoComplete="off"
            placeholder="Search..."
          />
          <SearchButton type="submit">Search</SearchButton>
        </FormContainer>
      </form>
      <MovieGallery
        array={searchArr}
        onClickHandleMore={handleLoadMore}
        page={page}
        totalPage={totalPage}
      />
    </>
  );
};

export default Movies;
