import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Movies from 'components/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
