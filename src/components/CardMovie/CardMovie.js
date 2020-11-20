import React from "react";
import "./CardMovie.scss";

function CardMovie(props) {
    let genresString = props.genres.map((genre) => {
        if (typeof genre === "undefined") {
            return "";
        }
        return genre.name
    }).join("/");

    return (
        <div>
            <div className="card_all">
                <div>
                <img src={props.imgsrc} className="card_img" alt="" />
                </div>
                <div className="card_content">
                    <h1 className="card_titre">{props.title}</h1>
                    <p className="card_gern">{genresString}</p>
                </div>
            </div>
        </div>
    )
}

    

export default CardMovie;
