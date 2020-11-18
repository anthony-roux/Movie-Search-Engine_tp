import { useEffect,useState } from 'react'
import { getGenre } from '../../service/genre/genre.js'
function useGenre() {
    const [genre,setGenre]=useState([]);
    useEffect (()=> {
        getGenre()
            .then(data => setGenre(data));
    },[setGenre]);
    return genre;
}
export default useGenre;