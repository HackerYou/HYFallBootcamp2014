var movieApp = {
  api_key: 'b41645dc385d41c36981d6f18cc717ff',
  configuration: {},
  init: function(){
    //save config object
    $.ajax({
      url: 'http://api.themoviedb.org/3/configuration',
      type: 'GET',
      data: {api_key: movieApp.api_key},
      dataType: 'jsonp',
      success: movieApp.movieConfig
    });
  },
  movieConfig: function(response){
    movieApp.configuration = response;
    movieApp.getTopRatedMovies();
  },
  getTopRatedMovies: function(){
    $.ajax({
      url: 'http://api.themoviedb.org/3/movie/top_rated',
      type: 'GET',
      data: {api_key: movieApp.api_key},
      dataType: 'jsonp',
      success: movieApp.processMovies
    });
  },
  processMovies: function(response){
    $.each(response.results, function(index, movie){
      var movieTitle = $('<h1>').text(movie.title);
      var movieImage = $('<img>').attr('src', movieApp.configuration.images.base_url + movieApp.configuration.images.poster_sizes[2] + movie.poster_path);
      var movieDate = $('<h2>').text(movie.release_date);
      var movieVotes = $('<h3>').text(movie.vote_average);
      var movieDiv = $('<div>');
      movieDiv.append(movieTitle, movieImage, movieDate, movieVotes);
      $('#movie_list').append(movieDiv);
    });
  }
};

$(document).ready(function(){
  movieApp.init();
});