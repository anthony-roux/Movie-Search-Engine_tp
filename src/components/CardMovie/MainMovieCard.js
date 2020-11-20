import React from "react";
// import "./CardMovie.scss";
import {Link} from 'react-router-dom';
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
              <img className="mainMovie_img" src={props.imgsrc} alt="" />
                {/* <video className="mainMovie_video" src={props.video}></video> */}
                <div className="mainMovie_body body">
                <Link to="/MovieDetail/:id"><h1 className="body_title">{props.title}</h1></Link>
                  <p className="body_genre">{genresString}</p>
                </div>
            </div>
        </div>
    )
}

    

export default MainMovieCard;