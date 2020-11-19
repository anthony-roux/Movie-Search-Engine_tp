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
import Carousel from 'react-elastic-carousel';
import Slider from '../Slider/Slider.js'
import {  BrowserRouter, Route } from 'react-router-dom'
//import CardMovie from '../CardMovie/CardMovie';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const film = useFilms();
  const film2 =useFilms2();
  const genre =useGenre();
  const filmid = useFilmsId();
  const usePopularFilm = usePopularMovie();
  const breakPoint = [
    {width: 320, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 700, itemsToShow: 3 },
    {width: 1000, itemsToShow: 4},
    {width: 1200, itemsToShow: 5},
    {width: 1400, itemsToShow: 6},
    {width: 1400, itemsToShow: 7},
    {width: 1400, itemsToShow: 8},
    {width: 1400, itemsToShow: 9},
    {width: 1400, itemsToShow: 10},
  ]
  console.log(genre);
  console.log(film);
  console.log(filmid);
  return (

    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/MovieDetail" component={MovieDetail}></Route>
        <Route exact path="/CardMovies" component={() => <CardMovies genres={genre} movies={film2} />}></Route>
        <Route exact path="/CardPopularMovies" component={() => <CardPopularMovies genres={genre} movies={usePopularFilm}/>}></Route>
        <Carousel breakPoints={breakPoint}>
          <Slider number="1"/>
          <Slider number="2"/>
          <Slider number="3"/>
          <Slider number="4"/>
          <Slider number="5"/>
          <Slider number="6"/>
          <Slider number="7"/>
          <Slider number="8"/>
          <Slider number="9"/>
          <Slider number="10"/>
        </Carousel>
        <Route exact path="/MovieDetail/:id" component={MovieDetail}></Route>
        <Route component={()=> '404'}></Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
