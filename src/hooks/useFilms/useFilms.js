import { useEffect,useState } from 'react'
import { getfilms } from '../../service/films/films.js'
function useFilms() {
    const [films,setFilms]=useState([]);
    useEffect (()=> {
        getfilms()
            .then(data => setFilms(data));
    },[setFilms]);
    return films;
}
export default useFilms;