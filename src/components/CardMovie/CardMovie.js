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
            </div>
    </div>
</div>
    );
  }
  
export default CardMovie;