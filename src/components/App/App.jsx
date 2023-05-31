import Cast from 'components/Cast/Cast';
import Home from 'components/Home/Home';
import Layout from 'components/Layout/Layout';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Movies from 'components/Movies/Movies';
import Reviews from 'components/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
