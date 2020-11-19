
import CardMovie from '../CardMovie/CardMovie.js'
function HomePage(props) {
    const {surch}=props;
    return(
        <div>
            <CardMovie surch={surch}></CardMovie>
        </div>
    );
}
export default HomePage;