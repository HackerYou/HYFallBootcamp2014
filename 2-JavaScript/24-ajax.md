---
layout: notes
topic: js
title: AJAX
---

# AJAX

So far we've figured out how to get data from an API by visiting URLs in our browser, but what if we want to work with the data inside our own website or app?

This is where AJAX comes in.  AJAX, which stands for **Asynchronous JavaScript and XML**, allows us to send and recieve data "asynchronously", i.e. without having to refresh the page. 

AJAX is used all over the web to help provide continuous user experiences. Infinite scroll, like how twitter loads more tweets when you get to the bottom of the page, is using AJAX. Same with auto-completing search suggestions in Google, or new comments appearing instantaneously on a facebook post.

##AJAX and APIs

We can also use AJAX to asynchronously request data from an API in our own apps. Our JavaScript can "talk" to another server, gets some data, and update the current page without a browser refresh.

Take a look at the [weather app](exercises/weather-app-answer/weather-app.html) we'll be building to see this in action.  Our weather app requests data from the Wundergrond API and displays it on the page in our desired format.

**Unfortunate sidenote:** AJAX got named a long time ago when XML was popular. Don't worry, it still works with JSON! That's what we'll be using.


## $.ajax with jQuery

AJAX has a few cross-browser quirks, so we'll work with jQuerys' **`$.ajax()`** method to handle our requests.

[Looking at the documentation](https://api.jquery.com/jQuery.ajax/), the `$.ajax()` method requires us to specify the url we're requesting from, and an optional settings object. Or you can pass *everything* in the settings object. I prefer this second syntax because it's easier to read and less error prone.

Let's try this with a wunderground API. 

`http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json` becomes:

```
$.ajax({
	url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
	type: 'GET',
	dataType: 'json',
	success: function(){
		console.log("It worked!");
	}
});
```

Open up [`first-ajax-request.html`](exercises/first-ajax-request.html) to give it a try.

The result should be an error:

`Origin http://jquery.com is not allowed by Access-Control-Allow-Origin.`

If you search "Access-Control-Allow-Origin" in Google you'll see that the first result points to an MDN page talking about **Cross-site HTTP requests**. When making an HTTP request to a domain name that is different from the domain name that we are currently using, we are creating cross-site http requests.

Unfortunately AJAX is restricted by the "same origin policy", meaning that these types of requests can only happen from the same domain/subdomain. This is a security feature of all browsers.

### JSONP

One way of getting around the "same origin policy" is to use JSONP. **JSON with padding** is a popular technique which requires the server you're requesting data from to cooperate with you and send you JavaScript instead of JSON data. Requesting JavaScript from another domain is permitted and we do it all of the time (think loading jQuery from google's CDN). 

What jQuery can do is inject a script tag into your website temporarily when a request is made. The script "src" will point to a bit of JavaScript on the server you requested data from. What the server needs to do is wrap the JSON data in a JavaScript function (thus "padding"). This function becomes available to us, it gets executed, we get our data, and the script tag is removed.

#### CORS

Another technique to get around the "same origin policy" is called CORS, it stands for **Cross-Origin Resource Sharing**. This is a new protocol which is simply an "opt out" of the "same origin policy". The server that has the data would need to tell the browser that it's opting out. Unfortunately the wunderground API doesn't use CORS.

Let's modify our previous request and just change `json` to `jsonp`.

```
$.ajax({
	url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
	type: 'GET',
	dataType: 'jsonp',
	success: function(){
		console.log("It worked!");
	}
});
```

Preview the result in [`first-ajax-request-fixed.html`](exercises/first-ajax-request-fixed.html)

It should work, you'll see "It worked!" in the console. But where's the data? It's available, we just need to learn to use it. Reading the jQuery API will tell us what we need.

[http://api.jquery.com/jQuery.ajax/](http://api.jquery.com/jQuery.ajax/)

For the "success" callback function it says:

> A function to be called if the request succeeds. The function gets **passed three arguments**: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object.

The important part here is the fact that the success function gets passed three arguments. The JSON data is the first argument and that's all we need right now. Modifying our code we see the data:

```
$.ajax({
	url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
	type: 'GET',
	dataType: 'jsonp',
	success: function(response){
		console.log(response)
	}
});
```

Check out [`ajax-response.html`](exercises/ajax-response.html) and open your console. You should see the respnose data there as an object.

### Working with JSON

Clicking on the little arrow on the side will open up the object for inspection. jQuery has "parsed" (read and converted) the JSON into a JavaScript object so we can access it using JavaScript.

You can work with the data just like you would with a regular object.

![](http://cl.ly/image/0j1z013G1m3W/Screen%20Shot%202014-04-09%20at%205.49.58%20PM.png)

`response.current_observation` would give you the nested current observation object.

You can keep going, accessing the feels like temperateure with `response.current_observation.feelslike_c`.

And now we can do all the usual JavaScript and jQuery things with the data, like store the values in a variable:

```var forRealsiesTemp = response.current_observation.feelslike_c;```

and update the DOM:

```$('p.real-temp').html(forRealsiesTemp + "C");```


##Exercise

Get some practice debugging and working with `$.ajax()` in <a href="exercises/ajax-practice.html" class="exercise">**ajax-practice.html**</a>.<br> Solution is [here](exercises/ajax-practice.html).
