export function getGenre() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=402fb26d39f4da70880cbc8db2dcc9b7&language=en-fr')
    .then(reponse => reponse.json())
}
