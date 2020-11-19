//import useFilmsId from '../../hooks/useFilmsId/useFilmsId.js'
//import useRecomendations from '../../hooks/useRecomendations/useRecomendations.js'
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getFilmid } from '../../service/filmid/filmid.js'
import { getRecomandations } from '../../service/recomandations/recomandations.js'
import imgdefault from './faultDetection-2-300x300.png'
//import useGenre from '../../hooks/useGenre/useGenre.js'
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
            <p>{Film.id}</p>
            <p>{Film.title}</p>
            <p>{Film.overview}</p>
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
    );
}
export default MovieDetail;