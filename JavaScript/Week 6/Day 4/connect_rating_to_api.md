# Connect rating to API

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

## Click event

Next we'll need to add an event listener that will fire when someone clicks a radio input.

Let's add our event listener in the init function and have it call a method called `ratingHandler`. We'll need to use event delegation and bind the event listener on #movie_list.

```
$('#movie_list').on('click', 'input', movieApp.ratingHandler)
```

The callback handler will just print something to the console:

```
ratingHandler: function(e){
    console.log("You voted!")
  }
```