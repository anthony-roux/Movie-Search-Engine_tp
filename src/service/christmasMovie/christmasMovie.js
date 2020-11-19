export function getChristmasMovies() {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=402fb26d39f4da70880cbc8db2dcc9b7&language=en-US&with_genre=christmas&include_adult=false&include_video=false&page=1')
  .then(reponse => reponse.json())
}