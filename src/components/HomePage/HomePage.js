import DetailCardMovie from '../CardMovie/DetailCardMovie/DetailCardMovie.js'
import ListChristmasMovie from '../CardMovie/ListChristmasMovie.js'
import CardPopularMovies from '../CardMovie/CardPopularMovies.js'
import MainMovieCard from '../CardMovie/MainMovieCard/MainMovieCard.js'
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';

function HomePage({ surch, genres, movies, moviesChristmas, image, title, mainMovie, id }) {

    const baseUrl = "http://image.tmdb.org/t/p/w185/";

    let mainMovieComponent = null;
    if (typeof genres.genres !== "undefined" && typeof mainMovie.genre_ids !== "undefined" && genres.genres.length > 0) {
        
        let genresList = genres.genres
        let mainMovieImage = mainMovie.poster_path
        let mainMovieTitle = mainMovie.title
        let mainMovieId = mainMovie.id
        let genreInfos = []
        genreInfos = mainMovie.genre_ids.map(genreId => {
            return genresList.find(genre => genre.id === genreId)
        })
        mainMovieComponent = <MainMovieCard imgsrc={baseUrl + mainMovieImage} title={mainMovieTitle} id={mainMovieId} genres={genreInfos} />
    }





    return(
        <div>
            <Header surch={surch} />
            {surch[0].surch !== "" ? <DetailCardMovie surch={surch}></DetailCardMovie> : null}
            {mainMovieComponent}
            <ListChristmasMovie genres={genres} movies={moviesChristmas} />
            <CardPopularMovies genres={genres} movies={movies} />
            <Footer/>
        </div>
    );
}
export default HomePage;