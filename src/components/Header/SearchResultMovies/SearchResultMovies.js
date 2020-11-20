import React from 'react';
import {useState,useEffect} from 'react';
import { getfilms } from '../../../service/films/films'
import {Link} from 'react-router-dom';
import './SearchResultMovies.css';
import 'bootstrap/scss/bootstrap.scss';
import 'react-bootstrap-grid-component/dist/sizingbreakpoints.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import imgdefault from '../../MovieDetail/faultDetection-2-300x300.png';



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
<Container>
  <Row>
    <Column >
      <div className={`${isclick ? "active1" : "" }`}>
          <div>{filmresults && filmresults.map(filmresultsss => 
            <div key={filmresultsss.id}>
              <p>{filmresultsss.title}</p>
                <Link to={`/MovieDetail/${filmresultsss.id}`} onClick={clickimg} ><img src={linkimg+filmresultsss.backdrop_path === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+filmresultsss.backdrop_path} className="card_img" alt=""/></Link>
                  </div>
                  )}
              </div>  
        </div>
    </Column>
    <Column >
      <div className={`${isclick ? "active1" : "" }`}>
          <div>{filmresults && filmresults.map(filmresultsss => 
            <div key={filmresultsss.id}>
              <p>{filmresultsss.title}</p>
                <Link to={`/MovieDetail/${filmresultsss.id}`} onClick={clickimg} ><img src={linkimg+filmresultsss.backdrop_path === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+filmresultsss.backdrop_path} className="card_img" alt=""/></Link>
                  </div>
                  )}
              </div>  
        </div>
    </Column>
    </Row>
</Container>
</div>
);
  }
export default SearchResultMovies;