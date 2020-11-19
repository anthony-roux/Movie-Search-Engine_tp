import React, { useEffect, useState} from 'react';
import { getfilms } from '../../service/films/films.js'
import CardMovie from './CardMovie.js';

const baseUrl = "http://image.tmdb.org/t/p/w185/";

// const API = 
  function CardPopularMovies(props) {

    let genresList = props.genres.genres
 
    let listOfCardPopularMovie = props.movies.map(movie => { 
      console.log(`lil ${genresList}`)
      let genres = []
      if (typeof genresList !== "undefined") {
        genres = movie.genre_ids.map(genreId => {
          return genresList.find(genre => genre.id === genreId)
        })
      }

      console.log(`lil ${genres}`)

      return (
        <CardMovie imgsrc={baseUrl + movie.poster_path} title={movie.title} genres={genres} />
      )
    })

    console.log(listOfCardPopularMovie)
    return (
      <div>
        {listOfCardPopularMovie}
      </div>
    )
  }


  export default CardPopularMovies;