import { useEffect,useState } from 'react'
import { getPopularFilm } from '../../service/popularFilm/popularFilm.js'
function usePopularFilm() {
    const [popularFilms,setPopularFilms]=useState([]);
    useEffect (()=> {
      getPopularFilm()
            .then(data => setPopularFilms(data.results));
    },[setPopularFilms]);
    return popularFilms;
}
export default usePopularFilm;