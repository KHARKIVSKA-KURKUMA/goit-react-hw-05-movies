import Cast from 'components/Cast/Cast';
import Home from 'components/Home/Home';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Movies from 'components/Movies/Movies';
import Reviews from 'components/Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Home></Home>
      <Movies></Movies>
      <MovieDetails></MovieDetails>
      <Cast></Cast>
      <Reviews></Reviews>
    </div>
  );
};

export default App;
