import React from 'react';
import {useState,useEffect} from 'react';
import { getfilms } from '../../../service/films/films'
import {Link} from 'react-router-dom';
import './SearchResultMovies.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import imgdefault from '../../MovieDetail/eigamovie.png';



function SearchResultMovies(props) {
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
    //console.log(filmresults);
    const [isclick , setisclick ] = useState(false);
    function clickimg() {
        setisclick(true);
    }
return (
<div>
    <div className={`${isclick ? "active1" : "" }`}>
        <div className="Flexcard">{filmresults && filmresults.map(filmresultsss => 
          <div className="Card" key={filmresultsss.id}>
              <Link to={`/MovieDetail/${filmresultsss.id}`} onClick={clickimg} ><img className="image_card" src={linkimg+filmresultsss.backdrop_path === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+filmresultsss.backdrop_path} alt=""/>
              </Link>
              <p className="title_card">{filmresultsss.title}</p>
          </div>
                )}
            </div>  
    </div>
  
</div>
);
  }
export default SearchResultMovies;