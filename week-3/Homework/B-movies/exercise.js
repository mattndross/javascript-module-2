/*
================
You are given the following list of movies



Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

/*Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"*/


// create showMovies function
//Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
//- iterates through the "movies" array and
const showMovies = function(arrayOfMovies) {
  setTimeout(function() {
    const allMoviesDiv = document.querySelector('#all-movies');
    allMoviesDiv.innerHTML = `<p class="alert alert-info">Number of movies: <span id="movies-number">${arrayOfMovies.length}</span></p>`;
  //- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
    arrayOfMovies.forEach(function(movie, index) {
      const movieTitleAndDirector = document.createElement('p');   
      movieTitleAndDirector.innerText = `${movie.title} - ${movie.director}`
      allMoviesDiv.appendChild(movieTitleAndDirector);
    });    
  }, 1000 );  
}

// create a new movie object for your favorite movie
const setMovie = (titleValue, dirValue, typeValue, haveWatchedValue ) => {
  const newMovieObj = {
    title: titleValue,
    director: dirValue,
    type: typeValue,
    haveWatched: haveWatchedValue
  };
  return newMovieObj;
}

// create addMovies function
// it receives a movie object as an argument 
const addMovies =  (movieObj) => {
  setTimeout(function() {   //it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
    movies.push(movieObj);
    showMovies(movies)
  }, 2000)
}

addMovies(setMovie('Shrek', 'Andrew Adamson', 'comedy', true));
showMovies(movies)
    
  
    

/*
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3*/

console.log(document.querySelector('#add-movies'))
document.querySelector('#add-movies').addEventListener('submit', (e) => {
  e.preventDefault();
  const movieTitle = document.querySelector('#movie-title').value;
  const movieDirector = document.querySelector('#movie-director').value;
  const movieType = document.querySelector('#movie-type').value;
  const haveWatched = document.querySelector('#have-watched').checked;

const newMovie = setMovie(movieTitle, movieDirector, movieType, haveWatched);

console.log(newMovie);
addMovies(newMovie);
})

//showMovies(movies)