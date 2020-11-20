import React from 'react';
import CardMovie from './CardMovie.js';
import Carousel from 'react-elastic-carousel';
import './Caroussel.scss';
import Slider from '../Slider/Slider.js'
const baseUrl = "http://image.tmdb.org/t/p/w300/";

  function CardPopularMovies(props) {

    let genresList = props.genres.genres

    const breakPoint = [
      {width: 320, itemsToShow: 1},
      {width: 500, itemsToShow: 2},
      {width: 700, itemsToShow: 3 },
      {width: 1000, itemsToShow: 4},
      {width: 1200, itemsToShow: 5},
    ]
 
    let listOfCardPopularMovie = props.movies.map(movie => { 
      
      let genres = []
      if (typeof genresList !== "undefined") {
        genres = movie.genre_ids.map(genreId => {
          return genresList.find(genre => genre.id === genreId)
        })
      }

      return (
        <Slider cardMovie={<CardMovie imgsrc={baseUrl + movie.poster_path} title={movie.title} genres={genres} id={movie.id} />}/>
      )
    })

    return (
      <div>
        <h1>Popular films</h1>
        <Carousel className="caroussel" breakPoints={breakPoint}>
          {listOfCardPopularMovie}
        </Carousel>
      </div>
    )
  }


  export default CardPopularMovies;