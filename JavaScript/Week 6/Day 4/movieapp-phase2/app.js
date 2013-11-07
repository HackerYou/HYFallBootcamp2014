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

    $('#movie_list').on('click', 'label', movieApp.ratingHandler);
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
      var ratingFields = movieApp.createRatingFields(movie.id);
      var movieDiv = $('<div>');
      movieDiv.append(movieTitle, movieImage, movieDate, ratingFields);
      $('#movie_list').append(movieDiv);
    });
  },
  createRatingFields: function(movieID){
    var fieldset = $('<fieldset>').addClass('rating');
    fieldset.append("<legend>Please rate:</legend>");

    for (var i = 1; i <= 5; i++) {
      var inputStar = "<input type='radio' id='star" + i + movieID + "' name='rating" + movieID + "' value='" + i + "' /><label for='star" + i + movieID + "'>" + i + "stars</label>";
      fieldset.append(inputStar);
    };

    return fieldset;
  },

  ratingHandler: function(e){
    console.log("You voted!")
  }
};

$(document).ready(function(){
  movieApp.init();
});