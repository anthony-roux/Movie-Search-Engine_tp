export function getRecomandations(id) {
    return fetch('https://api.themoviedb.org/3/movie/'+id+'/recommendations?api_key=402fb26d39f4da70880cbc8db2dcc9b7&language=fr-FR')
    .then(reponse => reponse.json())
}
