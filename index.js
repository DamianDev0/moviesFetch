const ApiKey = "a3c97fc58c271f7b5b5cc1c31b8ef888";
const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;
const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`;
const $container = document.getElementById("container");


async function getPopularMovies() {
  try {
    const response = await fetch(popularMoviesUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Popular Movies:", data.results);


    data.results.forEach((movie) => {
      const moviesContainer = document.createElement("DIV");

      moviesContainer.innerHTML += /*html*/ `
         <div class="w-auto h-auto" id="movie-${movie.id}">
          <div class="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <h3 class="text-lg font-semibold mb-2">${movie.title}</h3>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster" class="rounded-lg" />
            <p class="text-sm">${movie.overview}</p>
          </div>
        </div>
        `;
      $container.appendChild(moviesContainer);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

getPopularMovies();



async function getUpCommingMovies(){
  try{
    const response = await fetch(upcomingMoviesUrl)
  
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json()
    

    data.results.forEach((movie) =>{
      const UpcomingMovies = document.createElement('DIV')
      UpcomingMovies.innerHTML += /*html*/`
       <div class="w-auto h-auto" id="movie-${movie.id}">
          <div class="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <h3 class="text-lg font-semibold mb-2">${movie.title}</h3>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster" class="rounded-lg" />
            <p class="text-sm">${movie.overview}</p>
          </div>
        </div>
      `
      $container.appendChild(UpcomingMovies)
      
    })
  }
  catch (error){
    console.error('Error', error)
  }
}

getUpCommingMovies()