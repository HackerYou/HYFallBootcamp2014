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
    movieApp.getSessionId();
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
      var inputStar = ["<input type='radio' id='star", i, movieID, "' name='rating", movieID, "' value='", i, "' /><label for='star", i, movieID, "'>", i, "stars</label>"];
      fieldset.append(inputStar.join(""));
    };

    return fieldset;
  },

  ratingHandler: function(e){
    var label = $(this);
    var idRegex = /(\d)(\d+)/;
    var labelFor = label.attr('for');
    var movieId = idRegex.exec(labelFor)[2];
    var rating = /\d/.exec(label.text())[0];
    movieApp.rateMovie(movieId, rating);
  },

  sessionId: '',
  getSessionId: function(){
    $.ajax({
      url: 'http://api.themoviedb.org/3//authentication/guest_session/new',
      type: 'GET',
      data: {api_key: movieApp.api_key},
       dataType: 'jsonp',
       success: function(response){
          movieApp.sessionId = response.guest_session_id;
       }
    });
  },
  rateMovie: function(movieId, rating){
    $.ajax({
      url: 'http://api.themoviedb.org/3/movie/' + movieId + '/rating',
      type: 'POST',
      data: {api_key: movieApp.api_key, guest_session_id: movieApp.sessionId, value: rating*2},
      success: function(){
        console.log("Voted!");
      }
    });
  }
};

$(document).ready(function(){
  movieApp.init();
});