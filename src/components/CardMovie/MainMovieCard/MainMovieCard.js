import React from "react";
import {Link} from 'react-router-dom';
import './MainMovieCard.scss';

function MainMovieCard(props) {

  let genresString = props.genres.map((genre) => {
    if (typeof genre === "undefined") {
        return "";
    }
    return genre.name
  }).join("/");
  
  
    console.log("coucou" +  genresString)
    return (
        <div>
            <div className="mainMovie">
              <img className="mainMovie_img" src={props.imgsrc} alt="" />
                <div className="mainMovie_body body">
                  <Link to={`/MovieDetail/${props.id}`}><h1 className="body_title">{props.title}</h1></Link>
                  <p className="body_genre">{genresString}</p>
                </div>
            </div>
        </div>
    )
}

    

export default MainMovieCard;