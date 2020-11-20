import React from 'react';
import CardMovie from './CardMovie.js';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';

const baseUrl = "http://image.tmdb.org/t/p/w185/";



  function CardMovies(props) {

    let genresList = props.genres.genres
 
    let listOfCardMovie = props.movies.map(movie => { 
      console.log(`lil ${genresList}`)
      let genres = []
      if (typeof genresList !== "undefined") {
        genres = movie.genre_ids.map(genreId => {
          return genresList.find(genre => genre.id === genreId)
        })
      }

      console.log(`lil ${genres}`)

      return (
        <CardMovie imgsrc={baseUrl + movie.poster_path} title={movie.title} genres={genres} id={movie.id} />
      )
    })

    console.log(listOfCardMovie)
    return (
      <div>
        <Header surch={props.surch} />
        {listOfCardMovie}
        <Footer/>
      </div>
    )
  }


  export default CardMovies;


