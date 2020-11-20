import { useEffect,useState } from 'react'
import { getmainfilms } from '../../service/mainMovieCard/mainMovieCard.js'
function useMainFilm() {
    const [mainFilms, setMainFilms]=useState({});
    useEffect (()=> {
      getmainfilms()
            .then(data => setMainFilms(data.results[0]));
    },[setMainFilms]);
    return mainFilms;
}
export default useMainFilm;