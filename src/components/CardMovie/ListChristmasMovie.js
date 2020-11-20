import React from 'react';
import CardMovie from './CardMovie.js';

import Carousel from 'react-elastic-carousel';
import './Caroussel.scss';
import Slider from '../Slider/Slider.js'
const baseUrl = "http://image.tmdb.org/t/p/w300/";

  function ListChristmasMovie(props) {

    let genresList = props.genres.genres

    const breakPoint = [
      {width: 320, itemsToShow: 1},
      {width: 500, itemsToShow: 2},
      {width: 700, itemsToShow: 3 },
      {width: 1000, itemsToShow: 4},
      {width: 1200, itemsToShow: 5},
    ]

    let listOfCardChristmasMovie= props.movies.map(movie => { 
      
      let genres = []
      if (typeof genresList !== "undefined") {
        genres = movie.genre_ids.map(genreId => {
          return genresList.find(genre => genre.id === genreId)
        })
      }

      console.log(`lil ${genres}`)

      return (
        <Slider key={`${movie.original_title}-${Math.random()}`} cardMovie={<CardMovie imgsrc={baseUrl + movie.poster_path} title={movie.title} genres={genres} id={movie.id}/>}/>
      )
    })

    return (
      <div>
        <h1>Recommended for you</h1>
        <Carousel className="caroussel" breakPoints={breakPoint}>
          {listOfCardChristmasMovie}
        </Carousel>
      </div>
    )
  }


  export default ListChristmasMovie;