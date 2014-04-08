---
layout: notes
topic: js
title: jQuery Best Pracitces
---

# jQuery Best Practices

As you start to write more and more jQuery code, it's a good idea to use some best practices to help your code be more efficient and organized. Developers <3 efficiency! Here are a few of our favourite techniques.

##Cache Your Selectors

Whenever we use jQuery's `$` selector, jQuery goes and searches through your page for all possible matches.  If you've got a large site, a simple selector like `$('.box')` might take a long time and slow down your site, especially if you do it more than once. If you need to work with DOM elements more than once, you can hold onto them the first time they're found by storing them in a variable. In jQuery lingo, we call this *caching your selectors*

**Inefficent (booo!)**

```
$('.box').addClass('square');
$('.box').css('color', 'green');
$('.box').html('<p>This is a box.</p>');
```

**Efficient (huzzah!)**

```
//find all elements with a class of box and cache them
var $boxes = $('.box');

$boxes.addClass('square');
$boxes.css('color', 'green');
$boxes.html('<p>This is a box.</p>');
```

Note that it's common practice to name your variables starting with a '$' if they are holding jQuery objects.  It serves as a helpful reminder that you can use all the amazing jQuery methods on this variable.

```
var $listItems = $('li');
var favouriteColour = "salmon";
```

##IDs are faster to find than classes (yes, you get to use IDs now)

Remember IDs, which we told you to never use for CSS? They're actually really helpful for JavaScript and jQuery.  Since IDs are unique, jQuery will stop looking as soon as it finds a single match! This is much faster than a class or element selector, which keeps looking through the whole document to find all possible matches. 

```
$('.widget'); //slow
$('#widget'); //fast
```

###But I need to find multiple things!

Sometimes you actually need to find more than one element, like all links in the nav. You can still take advantage of ID magic by combining it with the `.find()` method. Select a parent element with an ID to narrow the area we're searching in, then use `.find()` to search for matching children. 

```
$('.nav a'); //super slow
$('#nav a'); //still pretty slow
$('#nav').find('a'); //fast!
```

## Chain your methods

A lot of jQuery methods will return the original object that you were working with. 

`$('#widget').addClass('active'); //returns $('#widget')`

Huh? Think of it this way. You hand off your widget div to jQuery, tell jQuery to add a class to it, and then jQuery says "here you go!" and gives it back to you with a newly added class. Since you have the widget again, you could potentially hand it back to jQuery and ask it to do something else, like change the text inside it. This can go on as many times as you like, as long as you're using methods that hand the original thing back to you.

When we keep asking jQuery to do more things in the same transaction, it's called *chaining*.

```
$(#widget).addClass('active').text('It was a dark and stormy night').css('background', 'grey');

//is shorthand for
$(#widget).addClass('active');
$(#widget).text('It was a dark and stormy night');
$(#widget).css('background', 'grey');
```

This can improve readability of your code and is also another technique to cache a selector.

###Exercise: Group Code Review & Refactor

Let's take a look at the jQuery gallery we made last week and see if we can improved our code with the best practices above.

This is also an opportunity to review any other questions from the exercise.