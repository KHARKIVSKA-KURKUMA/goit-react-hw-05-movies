import { useEffect, useState } from 'react';
import { FormContainer, SearchButton, SearchInput } from './Movies.styled';
import { getFilmByKeyWord } from 'API/fetchMovie';
import MovieGallery from './MovieGallery';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'notiflix';

const Movies = () => {
  /* ---------------------------------- STATE --------------------------------- */
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchArr, setSearchArr] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(null);
  const [queryParam, setQueryParam] = useSearchParams({});
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const query = queryParam.get('query');
    if (query) handleSearch(query);
  }, []);
  /* --------------------------------- SUBMIT --------------------------------- */
  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Enter correct query');
    }
    setQueryParam({ ['query']: searchQuery });
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
  /* -------------------------------------------------------------------------- */
  const handleSearch = query => {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0, 0, 0, 0.603)',
      svgSize: '100px',
      svgColor: '#0e29f6',
    });
    getFilmByKeyWord(query, 1).then(data => {
      if (!data.results || data.results.length === 0) {
        toast.error('Oops. Did not match any movies.');
      }
      setPage(1);
      setSearchArr(data.results);
      setTotalPage(data.total_pages);
    });
    Loading.remove();
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
