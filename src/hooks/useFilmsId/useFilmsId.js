import { useEffect,useState } from 'react'
import { getFilmid } from '../../service/filmid/filmid.js'
function useFilmsId() {
    const [filmsid,setFilmsid]=useState([]);
    useEffect (()=> {
        getFilmid()
            .then(data => setFilmsid(data));
    },[setFilmsid]);
    return filmsid;
}
export default useFilmsId;