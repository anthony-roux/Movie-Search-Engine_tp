import { useEffect,useState } from 'react'
import { getRecomandations } from '../../service/recomandations/recomandations.js'
function useRecomendations() {
    const [recomandations,setRecomandations]=useState([]);
    useEffect (()=> {
        getRecomandations()
            .then(data => setRecomandations(data));
    },[setRecomandations]);
    return recomandations;
}
export default useRecomendations;