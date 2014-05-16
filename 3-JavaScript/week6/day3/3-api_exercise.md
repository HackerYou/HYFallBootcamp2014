<!-- OMIT: old version -->

# API Exercise

## Start with some structure

Let's build an app that retrieves 10 art pieces with monkeys from the museum collection. Open up `app.js` in Sublime Text and `index.html` in Chrome.

The first step is to create an object for our app:

```
var artApp = {};
```

Next, add an empty init method that eventually hold our code to get the app started.

````
artApp.init = function(){
  //code to kick off app goes here
};
````

We initialize the app inside a document ready by calling the init function.

```
$(function(){
  artApp.init();
});
```

## Test the requests

The first thing we'll want to get working is making the API request and ensuring we're getting the expected data back.

1. Make a jQuery ajax request to get 10 top pieces
2. Print response data objects to the console.

The API calls will require an API key, instead of repeating this every request let's create a property to hold the key. 

````
artApp.key = "#####";
````

Create a new app method to do the single task of making the AJAX request for the top pieces.

artApp.getPieces = function(){
  
};

Inside of the `getPieces` function we'll make our AJAX request:

```
artApp.getPieces = function(){
  $.ajax({
    url: 'https://www.rijksmuseum.nl/api/en/collection',
    type: 'GET',
    data: {
      key: artApp.apikey,
      format: 'jsonp'
    },
    dataType: 'jsonp',
    success: function(result){
      console.log(result);
    }
  });
}
```

Note that we've added a new parameter, `q: monkey`, to make sure we get only artwork with monkeys.

Open up the response objects in the JavaScript console and have a look at the structure of the data. The response object has a lot of data, we just need one property and that is the "results" array. The results array contains 20 objects, one for each movie:

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

## Parse the data

Now that we know:

1. that the requests are being made correctly
2. what the retrieved data looks like

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

* undocumented part of API to get a smaller image size, take a look at demos, 
* we can do a str-replace on s=0 http://rijksmuseum.github.io/demos/

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