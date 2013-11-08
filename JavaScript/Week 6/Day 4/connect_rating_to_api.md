# Add start rating system to MovieApp

Let's start by moving the CSS for the start rating system over to our movie app from yesterday.

What we need to do is add a fieldset with radio buttons to each movie `div`. Let's add a method called `createRatingFields` to our movieApp object that will be in charge of creating these fieldsets. 

In this method we'll create a fieldset:
`var fieldset = $('<fieldset>').addClass('rating');`

Then we'll add a legend:
fieldset.append("<legend>Please rate:</legend>");

Next we need to add five pairs of radio inputs and labels. To do this efficiently we'll use a `for loop`.

```
for (var i = 1; i <= 5; i++) {
  // create radio inputs here
};
```

In our for loop, `i` will evaluate to 1 and then 2 and so on until we get 5 and break out of the loop. So we can use the value of `i` to name our radio input and labels.

Note that we will have twenty of these fieldsets on our page so we can't use the same "star1" to "star5" as ids for all of them. We also can't use the name "rating" for all of them. We need unique ids and a name for each fieldset. Fortunately the movie objects have a property called `id` which we know will be unique. So we'll add this in to ensure that every fieldset is unique.

```
for (var i = 1; i <= 5; i++) {
	var inputStar = "<input type='radio' id='star" + i + movieID + "' name='rating" + movieID + "' value='" + i + "' /><label for='star" + i + movieID + "'>" + i + "stars</label>";
	fieldset.append(inputStar);
};
```

Outside of our loop we'll `return fieldset`. The complete code looks like this:

```
createRatingFields: function(movieID){
	var fieldset = $('<fieldset>').addClass('rating');
	fieldset.append("<legend>Please rate:</legend>");
	for (var i = 1; i <= 5; i++) {
		var inputStar = "<input type='radio' id='star" + i + movieID + "' name='rating" + movieID + "' value='" + i + "' /><label for='star" + i + movieID + "'>" + i + "stars</label>";
		fieldset.append(inputStar);
	};
	return fieldset;
}
```

## Fixing the style

We'll stop adding the movie rating number and replace that with the fieldset. We'll change the height of the movie `div` up to 550px to give us a bit more room. We'll then set the width of our `.rating` fieldset to 190px and centre it with `margin: 0 auto`.

# Connecting Rating System to the API

## Click event

Next we'll need to add an event listener that will fire when someone clicks a radio input.

Let's add our event listener in the init function and have it call a method called `ratingHandler`. We'll need to use event delegation and bind the event listener on #movie_list.

```
$('#movie_list').on('click', 'input', movieApp.ratingHandler)
```

The callback handler will just print something to the console for now:

```
ratingHandler: function(e){
    console.log("You voted!")
  }
```

## Request requirements
Making a POST request to `/3/movie/{id}/rating` will allow us to rate the movie with that id. This POST request requires a couple of parameters:

1. api_key as usual
2. session_id or guest_session_id

and we'll send a data object containing the value of our rating from 1 to 10.

## Getting a guest session id
Making a GET request to `/3/authentication/guest_session/new` will give us a guest session id which we can store and use later. Let's create two properties, one `sessionId` for storing this id and a method `getSessionId` for getting the id.

```
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
}
```

## Making the POST request
When someone clicks the stars we want to make a POST request to register their vote. Our even listener is on the `label` element so in our event handler, `this` refers to the label of he radio button that was clicked.

### Movie ID

`$(this).attr('for')` will return a string of the format `start{i}{id}` where `i` is the number for the star. We can use a regular expression to extract the id. The result of the regex is an array so we use bracket notation to get the third result (which will be the id).

```
var idRegex = /(\d)(\d+)/; //get only digits
var labelFor = $(this).attr('for');
var movieId = idRegex.exec(labelFor)[2];
```

### Movie Rating

The rating value can be extracted with: `$(this).text()`, this will give us a string in the format `star{i}`. Again we can use a regular expression to extract `i`.

Then we make the request to rate the movie. So the end result in our handler callback function is:

```
var label = $(this);
var idRegex = /(\d)(\d+)/;
var labelFor = label.attr('for');
var movieId = idRegex.exec(labelFor)[2];
var rating = /\d/.exec(label.text())[0];
movieApp.rateMovie(movieId, rating);
```

We'll make a method called `rateMovie` which takes a `movieId` and a `rating`. The method makes a POST request to `/3/movie/{id}/rating`.

Of course we need to make sure that a session ID exists so we call `movieApp.getSessionId()` in the init method:

```
rateMovie: function(movieId, rating){
	$.ajax({
		url: 'http://api.themoviedb.org/3/movie/' + movieId + '/rating',
		type: 'POST',
		data: {api_key: movieApp.api_key, guest_session_id: movieApp.sessionId, value: rating*2},
		success: function(){
			console.log("You voted!");
		}
	});
}
```