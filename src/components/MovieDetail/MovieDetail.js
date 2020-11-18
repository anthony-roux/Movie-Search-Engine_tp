import useFilmsId from '../../hooks/useFilmsId/useFilmsId.js'
import useRecomendations from '../../hooks/useRecomendations/useRecomendations.js'
//import useGenre from '../../hooks/useGenre/useGenre.js'
function MovieDetail(props){

    const filmid = useFilmsId();
    const recomandations = useRecomendations();
    //const genres = useGenre();

   
    const imgapi = filmid.backdrop_path;
    const linkimg = "https://image.tmdb.org/t/p/w500"
    const genre = filmid.genres;
    const companies = filmid.production_companies;
    const recomandationss = recomandations.results;
    //const genreids = genres.find(gen => gen.id === recomandationsss.genre_ids)
    //<p>{recomandationsss.genre_ids}</p>

    return (
        <div>
            <p>{filmid.id}</p>
            <p>{filmid.title}</p>
            <p>{filmid.overview}</p>
            <a href={filmid.homepage}>lien site film</a><br></br>
            <img src={linkimg+imgapi} alt={linkimg+imgapi}></img>
            <div>
                <p>genre</p>
                <p>{genre && genre.map(genress => <p key={genress.id}>{genress.name}</p>)}</p>
            </div>
            <div>
                <p>producteurs</p>
                <p>{companies && companies.map(companiess => <p key={companiess.id}>{companiess.name}</p>)}</p>
            </div>
            <p>{filmid.release_date}</p>
            <p>{filmid.vote_average}/10</p>
            <div>
                <h1>voir plus</h1>

                <div>{recomandationss && recomandationss.map(recomandationsss => 
                    <div key={recomandationsss.id}>
                        <img src={linkimg+recomandationsss.backdrop_path} alt={linkimg+recomandationsss.backdrop_path}></img>
                        <p>{recomandationsss.title}</p>
                        <p>{recomandationsss.vote_average}/10</p> 
                        
                    </div>)}
                </div>
            </div>

        </div>
    );
}
export default MovieDetail;