
import React from 'react';
import './cardTEST.css';
//import img from '../../img/dead.png';
import {useState,useEffect} from 'react';
import { getfilms } from '../../service/films/films.js'
import {Link} from 'react-router-dom';
import imgdefault from '../MovieDetail/faultDetection-2-300x300.png'

function CardMovie(props) {
    const {surch}=props;
    const linkimg = "https://image.tmdb.org/t/p/w500"
    const [detailsFilm, setdetailsFilm] = useState({
        id:'',
        title:'',
        overview:'',
        backdrop_path:'',
        genre:'',
        vote_average:'',
    });
    useEffect(()=>{
      if (surch) {
        getfilms(surch).then(data=>setdetailsFilm(data));
      }
    },[surch])
    const filmresults = detailsFilm.results;
    console.log(filmresults);
return (
<div>
    <div className="card">
        
            <div className="card_body">
                <h1>{detailsFilm.page}</h1> {/*props.title*/}
                <p className="card_gern">Action/Comédie</p>{/*props.gern*/}
                <div>
                    <p>result</p>
                    <div>{filmresults && filmresults.map(filmresultsss => 
                        <div key={filmresultsss.id}>
                            <p>{filmresultsss.title}</p>
                            <Link to={`/MovieDetail/${filmresultsss.id}`}><img src={linkimg+filmresultsss.backdrop_path === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+filmresultsss.backdrop_path} className="card_img" alt=""/></Link>
                        </div>
                    )}</div>
                    
            </div>
        </div>
{/*
import React from "react";
import "./CardMovie.scss";

function CardMovie(props) {
    let genresString = props.genres.map((genre) => {
        if (typeof genre === "undefined") {
            return "";
        }
        return genre.name
    }).join("/");
    // let genresString = "toto";
return (
<div>
    <div className="card">
        <img src={props.imgsrc} className="card_img" alt=""/>
            <div className="card_body">
                <h1 className="card_title">{props.title}</h1>
                <p className="card_gern">{genresString}</p>
            </div

    </div>
</div>   
*/}
  </div>
</div>  
);
  }
export default CardMovie;