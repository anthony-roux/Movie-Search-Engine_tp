//import logo from './logo.svg';
import './App.css';
import useFilms from '../../hooks/useFilms/useFilms.js'
import useGenre from '../../hooks/useGenre/useGenre.js'
import useFilmsId from '../../hooks/useFilmsId/useFilmsId.js'
import HomePage from '../HomePage/HomePage.js'
import MovieDetail from '../MovieDetail/MovieDetail.js'
import Carousel from 'react-elastic-carousel';
import Slider from '../Slider/Slider.js'
import {  BrowserRouter, Route } from 'react-router-dom'

function App() {
  const film =useFilms();
  const genre =useGenre();
  const filmid =useFilmsId();
  const breakPoint = [
    {width: 320, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 1000, itemsToShow: 3 },
    {width: 1500, itemsToShow: 1},
  ]
  console.log(genre);
  console.log(film);
  console.log(filmid);
  return (

    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/MovieDetail" component={MovieDetail}></Route>
        <Carousel breakPoints={breakPoint}>
          <Slider number="1"/>
          <Slider number="2"/>
          <Slider number="3"/>
          <Slider number="4"/>
        </Carousel>
        {/* <Route component={()=> '404'}></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
