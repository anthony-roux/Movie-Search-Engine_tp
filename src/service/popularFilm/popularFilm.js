export function getPopularFilm() {
  //const id = 400160;
  return fetch('https://api.themoviedb.org/3/trending/all/day?api_key=402fb26d39f4da70880cbc8db2dcc9b7&language=fr-FR')
  .then(reponse => reponse.json())
}

