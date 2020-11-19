import { useEffect,useState } from 'react'
import { getfilms } from '../../service/films/films.js'
function useFilms2() {
    const [films,setFilms]=useState([]);
    useEffect (()=> {
        getfilms()
            .then(data => setFilms(data.results));
    },[setFilms]);
    return films;
}
export default useFilms2;