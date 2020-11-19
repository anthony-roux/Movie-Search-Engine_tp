import DetailCardMovie from '../CardMovie/DetailCardMovie/DetailCardMovie.js'
import ListChristmasMovie from '../CardMovie/ListChristmasMovie.js'
import CardPopularMovies from '../CardMovie/CardPopularMovies.js'
import Header from '../../components/Header/Header';

function HomePage({ surch, genres, movies }) {
    
    return(
        <div>
            <Header/>
            <DetailCardMovie surch={surch}></DetailCardMovie>
            <ListChristmasMovie genres={genres} movies={movies} />
            <CardPopularMovies genres={genres} movies={movies} />
        </div>
    );
}
export default HomePage;