//import useFilmsId from '../../hooks/useFilmsId/useFilmsId.js'
//import useRecomendations from '../../hooks/useRecomendations/useRecomendations.js'
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getFilmid } from '../../service/filmid/filmid.js'
import { getRecomandations } from '../../service/recomandations/recomandations.js'
import imgdefault from './faultDetection-2-300x300.png'
import './MovieDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import useGenre from '../../hooks/useGenre/useGenre.js'
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
function MovieDetail(props){
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
    const companies = Film.production_companies;
    const recomandationss = Recomandation.results;

    return (
        <div>
            <Header surch={props.surch} />
            <div className="header_detail"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col colonne-1">
                        <h1>Joker</h1>
                        <p><span className="detail_note">7.4</span>/10</p>
                    </div>
                    <div className="col colonne-2">
                        <p><span className="detail_genre">Thriller</span> </p>
                        <div className="alignments">
                            <p><span className="detail_annee">2019</span></p>
                            <p><span className="detail_duree">122 minutes</span></p>
                        </div>
                    </div>
                    <div className="colonne-3">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                        </p>
                    </div>
                    <div className="title_slider"> 
                        <h3> Recommandations </h3>
                    </div>
                </div>
            </div>
            <button className="lien_movie"> Visit website</button>
            <Footer/>
        </div>
      );
    /*return (
        <div>
            <p>{Film.id}</p>
            <p>{Film.title === "" ? "pa de titre" : Film.title}</p>
            <p>{Film.overview === "" ? "rien" : Film.overview}</p>
            <a href={Film.homepage}>lien site film</a><br></br>
            <img src={linkimg+imgapi === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+imgapi  } alt={linkimg+imgapi}></img>
            <div>
                <p>genre</p>
                <p>{genre && genre.map(genress => <p key={genress.id}>{genress.name}</p>)}</p>
            </div>
            <div>
                <p>producteurs</p>
                <p>{companies && companies.map(companiess => <p key={companiess.id}>{companiess.name}</p>)}</p>
            </div>
            <p>{Film.release_date}</p>
            <p>{Film.vote_average}/10</p>
            <div>
                <h1>voir plus</h1>
                <div>{recomandationss && recomandationss.map(recomandationsss => 
                    <div key={Recomandation.id}>
                        <Link to={`/MovieDetail/${recomandationsss.id}`}><img src={linkimg+recomandationsss.backdrop_path === "https://image.tmdb.org/t/p/w500null" ? imgdefault : linkimg+recomandationsss.backdrop_path} alt={linkimg+recomandationsss.backdrop_path}></img></Link>
                        <p>{recomandationsss.title}</p>
                        <p>{recomandationsss.vote_average}/10</p>  
                    </div>)}
                </div>
            </div>

        </div>
    );*/
}
export default MovieDetail;