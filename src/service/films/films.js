export function getfilms(name) {
    return fetch('https://api.themoviedb.org/3/search/movie?api_key=402fb26d39f4da70880cbc8db2dcc9b7&language=fr-FR&query='+name)
    .then(reponse => reponse.json())
}