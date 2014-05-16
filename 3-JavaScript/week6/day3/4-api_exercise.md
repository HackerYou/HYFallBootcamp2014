---
layout: notes
topic: js
title: Museum API Exercise
---

#API Exercise

Today we're going to build a small JavaScript app that uses the Rijksmuseum API to search for artwork. Open up `app.js` in Sublime Text and `index.html` in Chrome.

#Phase 1: Art with Monkeys

To get started, let's build some functionality to retrieve artwork with monkeys in it. It'll look like <a href="art-app-phase1-answer/index.html" target="_blank">this</a> when it's done.

##Setup your app structure

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

Inside of the `getPieces` function we'll make our AJAX request and log the results.

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

##Make our request find only images with monkeys

The Rijksmusuem API allows us to submit a search query along with our request. Let's go ahead and add the `q` parameter with a value of `monkey` to the data object in the request.

```
data: {
  key: artApp.apikey,
  format: 'jsonp',
  q: 'monkey'
},
```

<!-- fill in details here -->

##Output the results on the page

We're getting data, great! Now let's try and get it to show up on the page.

Create a new `displayPieces` method:

```
artApp.displayPieces = function(results){
    //put art stuff on the page
};
```

<!-- fill in details here -->


#Phase 2: Art with [choose your animal!]

Let's make this app more useful and allow user input to change the API results!

##Add a UI control for the user
To get started, let's give the user a way to pick an animal. Add this select element markup to your HTML file on line 12:

```
<label for="animal">Choose your animal:</label>
<select name="animal" id="animal">
    <option value="monkey">Monkeys</option>
    <option value="eagle">Eagles</option>
    <option value="dragon">Dragons</option>
    <option value="elephant">Elephants</option>
    <option value="centaur">Centaur</option>
</select>
```

##Make our request more versatile

We also need a way to change the search query in our request. Let's update our `getPieces` method to accept a single parameter, a search query. Add the parameter `query` to the function definition, and change the hard-coded `'monkey'` to use the new `query` argument.

```
artApp.getPieces = function(query){
    $.ajax({
        /* ... ajax options... */
        data: {
          key: artApp.apikey,
          format: 'jsonp',
          q: query
        },
        /* ...more ajax options... */
    )};
};
```

We'll also have to update anywhere this function is being called, so in our `init` function, `artApp.getPieces()` becomes:

```
artApp.getPieces('monkey');
```

Verify that your app still shows artwork with monkeys in it.

##Hook up the user input to the query

We need to take whatever animal the user picks and use the selection to make a new query. 

Select elements will fire a `change` event when a new selection is made. The `init` function is a good place to put event handlers, so let's add one there:

```
$("#animal-select").on("change", function(){
    console.log("new animal selected");
});
```

Test that your change handler is working.

Next, let's get the selected animal with jQuery's `.val()` method. Replace your log message with this:

```
var animal = $(this).val();
console.log(animal);
```

Test that your code logs the selected animal.

Finally, let's make a new request to the API based on the new animal choice.

```
var animal = $(this).val();
artApp.getPieces(animal);
```

We expect our app to:
1. load the page with art with monkeys
2. make a new request to the API when the user selects an animal
3. display the new results

Let's see if that worked.

**Where are my new animals??**

It looks like our code isn't doing what we expected but there are no errors.  Let's check the network tab to see if our new request is being made.

It is! So what's happening? If you scroll down the page, you'll find that the new animals are in fact there, but they're after the old ones.  We can fix this bug by clearing out the `#artwork` div before adding new art pieces.

Right before we run `displayPieces`, let's clear `#artwork` with jQuery's `.empty()`

```
$('#artwork').empty():
artApp.displayPieces(result);
```

Check to see if your new animals show up where you expect them to.

##Enhance the UI by updating the title

Now that we've got new animals loading in, "Art with Monkeys" is no longer an appropriate title. Let's use jQuery to update that too.

Let's create a new method that updates the title. We should be able to pass in a new subject that will replace "Monkeys".

```
artApp.updateTitle = function(subject){
    //change title to include 'subject' here
};
```

We need an HTML hook to target the word "Monkeys" specifically, so let's wrap in in a span.

```
<h1 id="page-title">Art with <span>Monkeys</span></h1> 
```

Fill in the details of our `updateTitle` method so that it finds the span and replaces "Monkeys" with the new animal name.

```
artApp.updateTitle = function(subject){
  $("#page-title").find("span").text(subject);
};
```











