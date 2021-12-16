const ageSelector = document.getElementById('age-selector');
const genreSelector = document.getElementById('genre-selector');

const btn = document.getElementById('btn');
const suggestedMovie = document.getElementById('suggested-movie');

const moviesArr = [
  {
    name: 'Die Hard',
    age: '18+',
    genre: 'Action',
  },
  {
    name: 'Love Actually',
    age: '18+',
    genre: 'Romance',
  },
  {
    name: 'The Polar Express',
    age: 'PG',
    genre: 'Action',
  },
  {
    name: 'Shrek',
    age: 'PG',
    genre: 'Romance',
  },
];

ageSelector.addEventListener('change', (e) => {
  rating = e.target.value;
  console.log(rating);
});

genreSelector.addEventListener('change', (e) => {
  genre = e.target.value;
  console.log(genre);
});

const displayMovie = () => {
  const pgMovies = moviesArr.filter((movie) => movie.age === 'PG');
  const adultMovies = moviesArr.filter((movie) => movie.age === '18+');
  let recommendation;
  let movie;
  let rating = '18+';
  let genre = 'Action';

  if (genre === 'Romance' && rating === 'PG') {
    recommendation = pgMovies.filter((movie) => movie.genre === 'Romance');
    movie = recommendation.map((item) => item.name);
    console.log(movie);
    suggestedMovie.innerHTML = movie.join('');
  } else if (genre === 'Action' && rating === 'PG') {
    recommendation = pgMovies.filter((movie) => movie.genre === 'Action');
    movie = recommendation.map((item) => item.name);
    suggestedMovie.innerHTML = movie.join('');
  } else if (genre === 'Romance' && rating === '18+') {
    recommendation = adultMovies.filter((movie) => movie.genre === 'Romance');
    movie = recommendation.map((item) => item.name);
    suggestedMovie.innerHTML = movie.join('');
  } else if (genre === 'Action' && rating === '18+') {
    recommendation = adultMovies.filter((movie) => movie.genre === 'Action');
    movie = recommendation.map((item) => item.name);
    suggestedMovie.innerHTML = movie.join('');
  }

  //   if (genre === 'Romance' && rating === 'PG') {
  //     let ageAppropriateArr = moviesArr.filter((movie) => movie.age === 'PG');
  //     let recommendation = ageAppropriateArr.filter(
  //       (movie) => movie.genre === 'Romance'
  //     );
  //     let movie = recommendation.map((item) => item.name);
  //     suggestedMovie.innerHTML = movie.join('');
  //   } else if (genre === 'Romance' && rating === '18+') {
  //     ageAppropriateArr = moviesArr.filter((movie) => movie.age === '18+');
  //     recommendation = ageAppropriateArr.filter(
  //       (movie) => movie.genre === 'Romance'
  //     );
  //     movie = recommendation.map((item) => item.name);
  //     suggestedMovie.innerHTML = movie.join('');
  //   }
};

btn.addEventListener('click', displayMovie);
// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.
