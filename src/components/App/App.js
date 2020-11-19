//import logo from './logo.svg';
import './App.css';
import '../../scss/style.scss';

import useFilms from '../../hooks/useFilms/useFilms.js'
import useFilms2 from '../../hooks/useFilms2/useFilms2.js'
import useGenre from '../../hooks/useGenre/useGenre.js'
import useFilmsId from '../../hooks/useFilmsId/useFilmsId.js'
import usePopularMovie from '../../hooks/usePopularFilm/usePopularFilm.js'
import HomePage from '../HomePage/HomePage.js'
import MovieDetail from '../MovieDetail/MovieDetail.js'
import CardMovies from '../CardMovie/CardMovies.js'
import CardPopularMovies from '../CardMovie/CardPopularMovies.js'
import {  BrowserRouter, Route } from 'react-router-dom'
//import CardMovie from '../CardMovie/CardMovie';
import Header from '../Header/Header';

function App() {
  const film = useFilms();
  const film2 =useFilms2();
  const genre =useGenre();
  const filmid = useFilmsId();
  const usePopularFilm = usePopularMovie();
  console.log(genre);
  console.log(film);
  console.log(filmid);
  return (

    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/MovieDetail" component={MovieDetail}></Route>
        <Route exact path="/CardMovies" component={() => <CardMovies genres={genre} movies={film2} />}></Route>
        <Route exact path="/CardPopularMovies" component={() => <CardPopularMovies genres={genre} movies={usePopularFilm}/>}></Route>
        <Route exact path="/MovieDetail/:id" component={MovieDetail}></Route>
        <Route component={()=> '404'}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
