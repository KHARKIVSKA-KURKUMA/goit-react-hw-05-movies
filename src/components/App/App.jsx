import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
/* -------------------------------------------------------------------------- */
const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('components/Home/Home'));
const Movies = lazy(() => import('components/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};
export default App;
