import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getFilmid } from '../../service/filmid/filmid.js'
import { getRecomandations } from '../../service/recomandations/recomandations.js'
import imgdefault from './eigamovie.png'
import './MovieDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Footer/Footer';
import Carousel from 'react-elastic-carousel';
import '../CardMovie/CardPopularMovies';
import Slider from '../Slider/Slider.js'
function MovieDetail(props) {
    
    const breakPoint = [
        {width: 320, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 700, itemsToShow: 3 },
        {width: 1000, itemsToShow: 4},
        {width: 1200, itemsToShow: 5},
      ]

    const id = props.match.params.id;
    const [Film, setFilm] = useState({
        id:'',
        title:'',
        overview:'',
        homepage:'',
        backdrop_path:'',
        genre:'',
        companies:'',
        release_date:'',
        vote_average:'',
    });
    useEffect(()=>{
        if (id) {
            getFilmid(id).then(data=>setFilm(data));
        }
    },[id])

    const [Recomandation, setRecomandation] = useState({
        id:'',
        title:'',
    });
    useEffect(()=>{
        if (id) {
            getRecomandations(id).then(data=>setRecomandation(data));
        }
    },[id])
     const imgapi = Film.backdrop_path;
     const linkimg = "https://image.tmdb.org/t/p/w500"
     const genre = Film.genres;
     const recomandationss = Recomandation.results;

    return (
        <div>
        <a href="../"><img className="bouton_retour" src="https://knoxmuseum.org/wp-content/uploads/2016/06/chevron-left-white.png" alt=""></img></a>
        <a href={Film.homepage}><img className="bouton_site" src="https://icon-library.com/images/globe-icon-white/globe-icon-white-8.jpg"  alt=""></img></a>
        <img className="header_detail" src={linkimg+imgapi === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+imgapi  } alt={linkimg+imgapi}></img>
            <div className="container-fluid">
                <div className="row">
                    <div className="col colonne-1">
                        <h1>{Film.title === "" ? "pas de titre" : Film.title}</h1>
                        <p><span className="detail_note">{Film.vote_average}</span>/10</p>
                    </div>
                    <div className="col colonne-2">
                        <p><span className="detail_genre">{genre && genre.map(genress => <p key={genress.id}>{genress.name}</p>)}</span> </p>
                        <div className="alignments">
                            <p><span className="detail_annee">{Film.release_date}</span></p>
                            <p><span className="detail_duree">{Film.runtime} mins</span></p>
                        </div>
                    </div>
                    <div className="colonne-3">
                        <p>
                        {Film.overview === "" ? "rien" : Film.overview}
                        </p>
                    </div>
                </div>
            </div>

            <Carousel className="caroussel" breakPoints={breakPoint}>
                {recomandationss && recomandationss.map(recomandationsss => {
                    return (
                        <Slider className="slides" cardMovie={<div key={Recomandation.id}>
                            <div className="card_all">
                            <div>
                            <Link to={`/MovieDetail/${recomandationsss.id}`}><img className="card_img" src={linkimg+recomandationsss.backdrop_path === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+recomandationsss.backdrop_path} alt={linkimg+recomandationsss.backdrop_path}></img></Link>
                            </div>
                            <div className="card_content">
                            <p className="card_titre">{recomandationsss.title}</p>
                            <p className="card_gern">{recomandationsss.vote_average}/10</p>  
                            </div>
                            </div>
                            </div>
                            }
                        />
                    )
                })}
            </Carousel>
            
            <Footer></Footer>
        </div>
      );
}
export default MovieDetail;