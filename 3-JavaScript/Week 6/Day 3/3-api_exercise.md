# API Exercise

## Part One

Let's build an app that retrieves the top rated movies from the movie database and displays them on an HTML page. Open up `app.js` in Sublime Text and `movieapp.html` in Chrome.

The first step is to create an object for our app:

```
var movieApp = {};
```

We can initialize the app and get things started inside of a document-ready.

```
$(document).ready(function(){
  movieApp.init();
});
```

## Part Two

At first we just want to make the API requests and print out the JSON data. We need to be sure that the requests are being made correctly.

* Using jQuery make a request to get the top rated movies.
* Using jQuery make a request to get the configuration object
* Print the two response data objects to the console.

The API calls will require an API key, instead of repeating this every request we'll create a property to hold the key. We'll also need a method called `init` that starts/initializes our app.

```
var movieApp = {
	api_key: '###',
	init: function(){
		// start here
	}
};
```

Contents of the init function:

```
$.ajax({
  url: 'http://api.themoviedb.org/3/movie/top_rated',
  type: 'GET',
  data: {api_key: movieApp.api_key},
  dataType: 'jsonp',
  success: function(response) {
    console.log(response);
  }
});
$.ajax({
  url: 'http://api.themoviedb.org/3/configuration',
  type: 'GET',
  data: {api_key: movieApp.api_key},
  dataType: 'jsonp',
  success: function(response) {
    console.log(response);
  }
});
```

Open up the response objects in the JavaScript console and have a look at the structure of the data.

The response object has a lot of data, we just need one property and that is the "results" array. The results array contains 20 objects, one for each movie:

```
results = [{movie1}, {movie2}, {movie3}, ...]
```

Each movie object looks like this:

```
{
adult: false,
backdrop_path: "/9aoWzwOwy9NLuSk9LkBwwrBdPYM.jpg",
id: 49047,
original_title: "Gravity",
popularity: 40.7154411542769,
poster_path: "/2gPjLWIyrWlAn2DgKMOKTBnZYyO.jpg",
release_date: "2013-10-04",
title: "Gravity",
vote_average: 8.4,
vote_count: 259
}
```

##Part Three

Now that we know:
a) that the requests are being made correctly
b) what the retrieved data looks like

We can start to parse the data and create html elements.


1. Iterate over the results array and for each object in the array create a `div` element which includes the relevant information for each movie. We will need the following properties for each movie object: title, release_date, poster_path, vote_average.

```
$.each(response.results, function(index, value){
	// 'value' is the movie object
});
```

The resulting HTML should look like this:
```
<div>
  <h1>TITLE_HERE</h1>
  <img src="POSTER_IMAGE_PATH" alt="">
  <h2>RELEASE_DATE</h2>
  <h3>VOTE_AVERAGE</h3>
</div>
```

The JavaScript to construct the HTML looks like this:
```
var movieTitle = $('<h1>').text(movie.title);
var movieImage = $('<img>').attr('src', movie.poster_path);
var movieDate = $('<h2>').text(movie.release_date);
var movieVotes = $('<h3>').text(movie.vote_average);
var movieDiv = $('<div>');
movieDiv.append(movieTitle, movieImage, movieDate, movieVotes);
```

Note that the `$('<h1>')` syntax is how one creates an H1 element with jQuery. Then we use the `text` method to put content inside the element. The alternative would be creating a string with the html: `"<h1>" + movie.title + "</h1>"`.

2. Add each `div` to the parent element `#movie_list`. After the code has executed there should be twenty `div`s inside of the parent element with the id "movie_list".

```
$('#movie_list').append(movieDiv);
```

### Images
The images will not appear because the poster_path is just the name of the image and not the full path to where it is hosted.

The configuration object will provide us with the required information. If we save the configuration object in a property  called `configuration` then we can construct the poster image path like so:

```
movieApp.configuration.images.base_url + movieApp.configuration.images.poster_sizes[2] + movie.poster_path
```

### The end result
The callback function that gets run when we successfully make a request to themoviedb API should look like this:

```
$.each(response.results, function(index, movie){
	var movieTitle = $('<h1>').text(movie.title);
	var movieImage = $('<img>').attr('src', movieApp.configuration.images.base_url + movieApp.configuration.images.poster_sizes[2] + movie.poster_path);
	var movieDate = $('<h2>').text(movie.release_date);
	var movieVotes = $('<h3>').text(movie.vote_average);
	var movieDiv = $('<div>');
	movieDiv.append(movieTitle, movieImage, movieDate, movieVotes);
	$('#movie_list').append(movieDiv);
});
```

## Warning...

In the code above, the two ajax requests happen around the same time. So sometimes you'll get an error that base_url is not defined. This happens because we're still fetching the configuration object but it doesn't come to us before we start the top-rated-movies request. We need to do one request and then once that's done make the next request.

So the second ajax request can be put into a method called `getTopRatedMovies` and then only called once the configuration object has been retrieved and saved.