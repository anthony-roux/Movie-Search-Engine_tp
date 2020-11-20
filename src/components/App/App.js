import "./App.css";
import "../../scss/style.scss";

//import useFilms from '../../hooks/useFilms/useFilms.js'
//import useFilms2 from '../../hooks/useFilms2/useFilms2.js'
import useGenre from '../../hooks/useGenre/useGenre.js'
//import useFilmsId from '../../hooks/useFilmsId/useFilmsId.js'
import usePopularMovie from '../../hooks/usePopularFilm/usePopularFilm.js'
import useChristmasMovie from '../../hooks/useChristmasMovie/useChristmasMovie.js'
import HomePage from '../HomePage/HomePage.js'
import MovieDetail from '../MovieDetail/MovieDetail.js'
//import CardMovies from '../CardMovie/CardMovies.js'
//import CardPopularMovies from '../CardMovie/CardPopularMovies.js'
//import ListChristmasMovies from '../CardMovie/ListChristmasMovie.js'
import UserSurch from '../../hooks/useSurch/useSurch.js'
import UseMainFilm from '../../hooks/useMainFilm/useMainFilm'
import {  BrowserRouter, Route } from 'react-router-dom'


function App() {
  const genre =useGenre();
  const usePopularFilm = usePopularMovie();
  const useChristmasFilm = useChristmasMovie();
  const useSurch = UserSurch();
  const useMainFilm = UseMainFilm();

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => <HomePage mainMovie={useMainFilm} surch={useSurch} genres={genre} moviesChristmas={useChristmasFilm} movies={usePopularFilm}/>}></Route>
        <Route exact path="/MovieDetail/:id" render={(props) => <MovieDetail {...props} surch={useSurch} />}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;