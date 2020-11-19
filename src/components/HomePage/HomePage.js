import DetailCardMovie from '../CardMovie/DetailCardMovie/DetailCardMovie.js'
import ListChristmasMovie from '../CardMovie/ListChristmasMovie.js'
import CardPopularMovies from '../CardMovie/CardPopularMovies.js'
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
function HomePage({ surch, genres, movies, moviesChristmas }) {
    return(
        <div>
            <Header surch={surch} />
            {surch[0].surch != "" ? <DetailCardMovie surch={surch}></DetailCardMovie> : null}
            <ListChristmasMovie genres={genres} movies={moviesChristmas} />
            <CardPopularMovies genres={genres} movies={movies} />
            <Footer/>
        </div>
    );
}
export default HomePage;