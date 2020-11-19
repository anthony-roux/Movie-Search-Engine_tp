
import DetailCardMovie from '../CardMovie/DetailCardMovie/DetailCardMovie.js'


function HomePage(props) {
    const {surch}=props;
    return(
        <div>
            <DetailCardMovie surch={surch}></DetailCardMovie>
        </div>
    );
}
export default HomePage;