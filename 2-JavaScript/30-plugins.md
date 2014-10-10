---
layout: notes
topic: js
title: Building your own plugins
---

#Building your own plugins

By now, you've written your own effects and styles for your pages in Javascript. As well, you've used plugins from third-party sources that can help add a little something extra to your site.

What if we told you that you could have the best of both worlds. Package your own effects as plugins and release them into the wild.

![http://media.giphy.com/media/12KTmsCbWqS1Y4/giphy.gif](http://media.giphy.com/media/12KTmsCbWqS1Y4/giphy.gif)

Not only do plugins help keep the collaborative environment of this industry going, but they can also be used to keep your code organized and modular.

Plugins will exist in a new file and be loaded in via a script tag. Note, the plugin must be loaded after jQuery in order for it to utilize the methods needed.


## A basic example

We will create an example that allows us to change any text we want to be a certain user style.

[Download the starter file](exercises/colourMe-starter.zip)

Let's quickly review what we have in our files. Our index.html has a style sheet that we can modify to our hearts content, and jQuery being loaded in through a CDN. As well, we have a app.js file where we will be calling our plugin.

Create a new file in the scripts folder called **colourMe.js**
Inside the file, we create the basic framework for our plugin.

````
$.fn.pluginName = function() {

}
````

Much like working with objects, we will be building a method that will piggyback on jQuery. We will define how our plugin works inside of the curly braces of the function call.

Rename the plugin like so

````
$.fn.colourMe = function() {

}
````
The name that you choose cannot match any existing jQuery methods or you will overwrite their functionality, as well, the name you choose will be the method that will be called in your app.js file, so choose carefully.

Our plugin will change the text styles of any item selected, so we need to tell the plugin exactly what to do. We must use **this**  and **return** to select that object

````
$.fn.colourMe = function() {

  return this

}
````

To define what we want to do to the object, we can utilize an existing jQuery method to allow us to apply styling. For this example, we will use the CSS method and pass in styling that way.

````
$.fn.colourMe = function() {

  return this.css();

}
````

Armed with our jQuery experience and knowledge, we know that the CSS method takes some options for CSS styles and applies them to the selected object. For now, let's apply fontSize and color.

````
$.fn.colourMe = function() {
  return this.css({fontSize: "32px", color: "red"});
}
````

Now, to test our work! Use a script tag to link to the colourMe.js file in your index.html file.

````
// Index.html
<script src="scripts/colourMe.js"></script>
````

Go to your main.js file, and inside of the docready function, use jQuery to select the H1 tag on the index.html file. Apply the new colourMe method by passing in the name of the method we just created.

````
// main.js
$(function() {

  $('h1').colourMe();

});
````

You should now see red text at 64px!

## Adding options

With all plugins, you want to provide a user with the ability to pass options into the method that will affect the result.

We need to change our plugin to be able to accept options. In the parantheses of the opening function call, put a placeholder.

````
$.fn.colourMe = function(options) {
  return this.css({fontSize: "32px", color: "red"});
}
````

We now need to provide default settings if the user chooses to not change what we have set. Above our return call, create a new variable called **settings**. e will be using the jQuery extend method to provide default settings. Set the newly created settings variable equal to $.extend();

````
$.fn.colourMe = function(options) {

  var settings = $.extend();

  return this.css({fontSize: "32px", color: "red"});
}
````

Inside of the parantheses, we will set our defaults.

````
$.fn.colourMe = function(options) {

  var settings = $.extend({
    fontSize: "32px"
    color: "red",
  });

  return this.css({fontSize: "32px", color: "red"});
}
````

To pass our defaults into our plugin, we need to set our values into our return portion. Using the name/value structure. We can set access and set them accordingly.

````
$.fn.colourMe = function(options) {

  var settings = $.extend({
    fontSize: "32px",
    color: "red"
  });

  return this.css({fontSize: settings.fontSize, color: settings.color});
}
````

If you check your page, the h1 tags should still be red and 32px. If we modify the method call in our main.js file and pass it options, we should see the change.

````
// main.js
$(function() {

  $('h1').colourMe({ fontsize: "64px", color: "green" });

});
````
Wait, what?! Why isn't it changing? We allowed our plugin to accept user input, but we never told the options where to go. Using the options placeholder that we created in the initial function call, we can pass that placeholder to overwrite the defaults in our settings variable.

````
$.fn.colourMe = function(options) {

  var settings = $.extend({
    fontSize: "32px",
    color: "red"
  }, options);

  return this.css({fontSize: settings.fontSize, color: settings.color});
}
````

Congrats! You made a plugin!

## Converting a script to a plugin

To convert an existing script to a plugin, simply move the body of the script to a new file and encapsulate it within a new function and give it a name.

Start with the [lightbox app file](exercises/lightbox-starter.zip) which creates a simple lightbox, open **main.js** and cut all the javascript within the doc ready function.

Create a new file called **lightbox.js** and create a new plugin function called lightbox.

````
$.fn.lightbox = function() {

}
````

Inside of that function, paste in the cut script from main.js

````
$.fn.lightbox = function() {

  $(".lightbox_trigger").click(function(e) {

    // Prevent Default Behaviour of clicking to new link page
    e.preventDefault();

    // Get the HREF of the target
    var image_href = $(this).attr('href');
    var text = $(this).attr('data-title');

    ...snipped for brevity


}
````

Now, we have a plugin, but unfortunately we haven't made it very extensible. We need to provide the ability to put the lightbox on whatever element we want instead of just elements with a class of 'lightbox_trigger'. In order to provide the ability to effect any element we want, we need to change the selector, to simply **this**

````
$.fn.lightbox = function() {

  $(this).click(function(e) {

    // Prevent Default Behaviour of clicking to new link page
    e.preventDefault();

    // Get the HREF of the target
    var image_href = $(this).attr('href');
    var text = $(this).attr('data-title');

    ...snipped for brevity


}
````

Hooray! Now whenever we want to call it on an object, we simply open up main.js, select our element (in this case, a tags, because they have attributes needed) and call the **lightbox** method on it!

````
// main.js
$(function() {

  $('a').lightbox();

});
````

Win!

![http://media.giphy.com/media/vScXvHAcruJY4/giphy.gif](http://media.giphy.com/media/vScXvHAcruJY4/giphy.gif)

## Reminders

When creating a plugin, be sure to include documentation on exactly how to use it, along with a basic example.

