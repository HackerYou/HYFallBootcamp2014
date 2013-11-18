# jQuery Best Practices

## caching selectors

Every time we invoke the jQuery function (`$()`) we are searching through the DOM, finding an element or list of elements, and creating jQuery objects to represent the element(s). This takes computing power and time, therefore it's a best practice to store jQuery objects in variables and re-use them if possible.

Instead of doing this:

```
$('#myElement').text('Hi!');
$('#myElement').css('colour', 'blue');
```

We should cache the element and re-use it:

```
var myElement = $('#myElement');
myElement.text('Hi!');
myElement.css('colour', 'blue');
```

## Method Chaining

It's important to realize that most jQuery methods will return the jQuery object that you are working with. The only exceptions are the methods that are giving you back a value that you requested, e.g. `$('#myElement).html()` will give you back a string with some html in it.

This means that we can chain methods that return jQuery objects.

Instead of doing this:

```
var myElement = $('#myElement');
myElement.text('Hi!');
myElement.css('colour', 'blue');
```

We can do this: `$('#myElement').text('Hi!').css('colour', 'blue')`. This creates a jQuery object, changes the text of the object, the object is returned, and we chain the css method to change the colour of the object.


## .each & .map utility functions

jQuery provides several powerful utility functions which can be used to do interesting work. The `$.each` function can iterate over any collection and execute some code. For example:

```
var userData = [
{ id: 1, name: "Awesome66", location: "Toronto"},
{ id: 2, name: "Angrycat", location: "Montreal"},
{ id: 3, name: "Worksforgovernment", location: "Ottawa"}
];
$.each(userData, function( index, value ) {
  console.log(value.name + " lives in " + value.location);
});
```

The `$.map` function iterates over an array and produces any array from the result. For example, we want to produce CSS classes with the prefix "label" from an array of label names.

```
var labelNames = ["small", "large", "x_large", "xx_large"];
var labelClasses = $.map(labelNames, function( value, index ) {
  return "label_" + value;
});
```

**Note**: Notice that `map`'s callback function has the parameters `value` and `index` in reverse. 

## Code organization

We can use an object to help organize our jQuery code:

```
var toDoApp = {
	// cached jQuery objects
	myElement: $('#myElement'),
	form: $('form'),
	// put event listeners here
	init: function(){
		this.myElement.on('click', this.callbackFunction1);
		this.form.on('submit', this.callbackFunction2);
	},
	// callback functions go here to improve readability
	callbackFunction1: function(e) {},
	callbackFunction2: function(e) {}
};
// start app
toDoApp.init();
```