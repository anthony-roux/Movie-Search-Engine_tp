import React from "react";
// import "./CardMovie.scss";
import './MainMovieCard.scss';

function MainMovieCard(props) {
 // console.log(props.genres)

  let genresString = props.genres.map((genre) => {
    if (typeof genre === "undefined") {
        return "";
    }
    return genre.name
  }).join("/");
  
  // let genresString = ""
    console.log("coucou" +  genresString)
    return (
        <div>
            <div className="mainMovie">
                <img src={props.imgsrc} className="card_img" alt="" />
                <div className="mainMovie_body">
                    <h1 className="card_title">{props.title}</h1>
                    <p className="card_gern">{genresString}</p>
                </div>
            </div>
        </div>
    )
}

    

export default MainMovieCard;