const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTA2YjdjMjQ0Mzk3MDRmOTY4Mzg4OTVhZDQzNjgzNyIsInN1YiI6IjY1ODJlMWI4Y2E4MzU0NDE5NGQ2ZTliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkecVQJjHq8kKgwNSRdz5Qoa4Fe1qUoC-24ALDN5AyE'
  }
};
let movies = document.getElementsByClassName("movies")

const addMovie = function (movie) {
  movies[0].innerHTML +=  `
            <div class="film">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
                <div class="cover">
                    <h2>${movie.title}</h2>
                    <p class="info-p">${movie.overview}</p>
                    <p class="rate">Rate: ${movie.vote_average}</p>
                    <p class="date">Date: ${movie.release_date}</p>
                </div>
            </div>
`
}
//------------------------------------------------------------------
//          Now Playing
//------------------------------------------------------------------
const nowPlayingMovies = function() {
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      movies[0].innerHTML = ""
      response.results.forEach((movie) => {
        addMovie(movie);
      })
    })
    .catch(err => console.error(err));
}
document.getElementById("now-playing").addEventListener("click", nowPlayingMovies)

//------------------------------------------------------------------
//          Top Rated
//------------------------------------------------------------------
const topRatedMovies = function() {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      movies[0].innerHTML = ""
      response.results.forEach((movie) => {
        addMovie(movie);
      })

    })
    .catch(err => console.error(err));
}
document.getElementById("top-rated").addEventListener("click", topRatedMovies)

//------------------------------------------------------------------
//          Up Coming
//------------------------------------------------------------------
const upComingMovies = function() {
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      movies[0].innerHTML = ""
      response.results.forEach((movie) => {
        addMovie(movie);
      })
    })
    .catch(err => console.error(err));
}

document.getElementById("up-coming").addEventListener("click", upComingMovies)

//------------------------------------------------------------------
//          Popular
//------------------------------------------------------------------
const popularMovies = function() {
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
      movies[0].innerHTML = ""
      response.results.forEach((movie) => {
        addMovie(movie);
    })
  })
  .catch(err => console.error(err));
}

document.getElementById("popular").addEventListener("click", popularMovies)



//------------------------------------------------------------------
//          Default
//------------------------------------------------------------------
nowPlayingMovies()
