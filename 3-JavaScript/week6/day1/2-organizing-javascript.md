---
layout: notes
topic: js
title: How to Organize Your JavaScript
---

#How to Organize Your JavaScript

##Problem 1: 'Spaghetti Code'

As you add more lines and functionality to your JS code, it can start to get a little unruly. You might have trouble tracking down which lines do what, or end up having a hard time changing or adding new features. If you ever find yourself in an unorganized tangle, you've probably stumbled upon (or written!) what we call spaghetti code. Don't panic! A little code organization can help you steer clear of these issues.

##Problem 2: Conflicting Code

Another reason to organize your code is to avoid conflicts with other plugins or libraries that you're running on your website. Say you create a variable to hold your tiwtter handle for your contact page, but you're also embedding a twitter widget on your website. You might end up with something like this:

```
var twitter = 'http://twitter.com'; //created by the widget
/* ... lots of other code ... */
var twitter = '@thisishackeryou'; //created by you
```

Since variables can be re-assigned in JavaScript, we've gone ahead on over-written the widget's variable and most likely broken it!  Again, we can fix this through better organization.


# Scope
In our sample conflict above, we're running into what's called a scope issue. 

Variables declared outside of a function are part of the **global** scope. This means they can be accessed (and over-written!) from *anywehre* in your code.

On the other hand, variables declared inside a function have **local** scope. This means they're only avaialble to other code *inside the function*

###Examples

The global variable `planet` is accessible within the function.

```
var planet = "Earth";

function whereAmI(){
  console.log(planet);
}

whereAmI(); //logs "Earth"
```

The locally scoped `planet` variable over-writes the global one.

```
var planet = "Earth";

function whereAmI(){
  var planet = "Mars";
  console.log(planet);
}

whereAmI(); //logs "Mars"
```

The `destination` variable is locally scoped to the `chooseDestination` function and unavailable in the `launchRocket` function's scope.

```
function chooseDestination(){
  var destination = "The Moon"
}

function launchRocket(){
  console.log(destination);
}

chooseDestination();
launchRocket(); // gives us an error
```

# Organizing Your Code With an Object

To avoid scope issues and help break your code down into more modular components, we can organize our code using an object. 

We start with an empty object that will hold all our our application code.

```
var myApp = {};
```

This creates what's called a **namespace** for our code. All your varaibles and functions will start with the `myApp` namespace, protecting them from conflicts with other code.

We can now add our twitter variable as a property on the app object.

```
myApp.twitter = 'thisishackeryou';
```

We can store entire functions in our app object the same way.

```
myApp.getTweets = function(){
  //code to retrieve tweets
};
```

We can call this function elswehere in the app with:

```
myApp.getTweets();
```

You can add as many variables and functions as you need to keep your code organized into small pieces!

```
var myApp = {};

myApp.twitterHandle = 'thisishackeryou';
myApp.numberOfTweets = 3;
myApp.includeRetweets = false;

myApp.getTweets = function(){
  //retrieves tweets
}

myApp.displayTweets = function(){
  //prints tweets onto the page
}
```

####Terminology Reminder
Variables are often refferred to as **properties** when stored inside an object.
Functions are often reffered to as **methods** when stored inside an object.


##The Init Function

Most apps will have a special function called `init` that kicks things off. Anything that needs to happen on page load, and most event handlers go in here. It's also a good place to cache jQuery selectors.

```
var widgetApp = {};

widgetApp.init = function(){
  myApp.widgetContainer = $('#widget');
  myApp.widgetContainer.addClass('active');
  
  $('a.close').on('click', function(){
    myApp.widgetContainer.hide();
  });
}
```

We then call the init function inside a jQuery DOM ready so that it executes on page load.

```
$(function(){
  widgetApp.init();
});
```

###Exercise

Create a tic-tac-toe app in jQuery, organized using an app object. 

Use <a href="exercises/tic-tac-toe.html" downlaod>`tic-tac-toe.html`</a> to get you started. The solution is<a href="exercises/tic-tac-toe-answer.html" downlaod> here.</a>

<!-- # Closure - too complex, removing for now

It is possible to nest functions in JavaScript. The inner function gets access to the parameters and variables of the outer/containing function (`this` being the exception).

```
function outerFunction(x){
	return function(){
		return x;
	};
}
innerFunction = outerFunction(6);
innerFuntion(); // 6
```

**Closures** are functions that refer to variables from a different context. In the example above, `innerFunction()` is a closure because it refers to `x` which is in `outerFunction()`'s context.

## Closures can be used to achieve privacy.

Below you will see a function that is wrapping all of the code. This function is surrounded by parentheses and an additional `()` at the end are used to immediately invoke/call the function. This is called an **immediately invoked function**. The result of invoking this function is stored in the variable `getCircumference`.

There is a function which calculates circumference. There is also a variable `PI`. The variable and function are private because they cannot be seen or used outside of the enclosing function. We keep our behaviour(function) and state(data) private but expose one **closure** by making it the return value of the whole function. This function/closure can see the private data but it can't change them.

```
var getCircumference = (function(){
	var calculateCircumference, PI;
	//private function
	calculateCircumference = function(diameter){
		return diameter * PI;
	};
	//private variable
	PI = 3.14159265359;
	//public function using a private function
	return function(diameter){
		return calculateCircumference(diameter)
	}
})()
```

The above is sometimes referred to as the "**Module Pattern**". A module is a function or object that is used to keep code cleanly separated and organized. -->
