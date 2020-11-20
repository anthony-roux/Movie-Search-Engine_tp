import React from "react";
import {Link} from 'react-router-dom';
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
                <Link to={`/MovieDetail/${props.id}`}><img src={props.imgsrc} className="card_img" alt="" /></Link>
                </div>
                <div className="card_content">
                    <h1 className="card_titre">{props.title === undefined ? "EIGA CREW" : props.title}</h1>
                    <p className="card_gern">{genresString}</p>
                </div>
            </div>
        </div>
    )
}

    

export default CardMovie;
