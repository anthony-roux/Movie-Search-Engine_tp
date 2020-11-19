import { useEffect,useState } from 'react'
import { getChristmasMovies } from '../../service/christmasMovie/christmasMovie.js'
function useChristmasMovie() {
    const [christmasMovies ,setChristmasMovies]=useState([]);
    useEffect (()=> {
      getChristmasMovies()
            .then(data => setChristmasMovies(data.results));
    },[setChristmasMovies]);
    return christmasMovies;
}
export default useChristmasMovie;