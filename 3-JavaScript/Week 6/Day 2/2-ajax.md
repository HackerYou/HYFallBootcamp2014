# AJAX

Instead of typing our request in the browser and pressing enter we want to programatically make the request. Asynchronous JavaScript and XML (AJAX) can be used to do this. What's interesting is that the requests will be done "asynchronously", i.e. without having to refresh the page. This means with JavaScript we can "talk" to another server, get some data, and update the current page without a browser refresh. This makes for a great user experience. 

Note that even though XML is in the name, we will be using the JSON data format.

Making AJAX requests can be rather complicated, especially when you factor in browser differences so again jQuery comes to the rescue.

## $.ajax method

jQuery has a method called `ajax` which can be used to make these kinds of requests. The method takes two arguments, one is the **url** and the other is an optional **object** with the settings.

```
$.ajax('path', {
	type: 'GET', // default is 'GET'
	dataType: 'json', // default is a guess
	success: function(){} // callback function if call is successful
});
```

Let's try this with our wunderground API. We need jQuery loaded so we can either create an HTML page and load jQuery or use the chrome JavaScript console while on the jQuery website (since they have it loaded already!).

```
$.ajax('http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/CA/San_Francisco.json', {
	type: 'GET',
	dataType: 'json',
	success: function(){console.log("Hi!")}
});
```

The result should be an error:

`Origin http://jquery.com is not allowed by Access-Control-Allow-Origin.`

If you search "Access-Control-Allow-Origin" in Google you'll see that the first result points to an MDN page talking about **Cross-site HTTP requests**. When making an HTTP request to a domain name that is different from the domain name that we are currently using, we are creating cross-site http requests.

Unfortunately AJAX is restricted by the "same origin policy", meaning that these types of requests can only happen from the same domain/subdomain. This is a security feature of all browsers.

## JSONP

One way of getting around the "same origin policy" is to use JSONP. **JSON with padding** is a popular technique which requires the server you're requesting data from to cooperate with you and send you JavaScript instead of JSON data. Requesting JavaScript from another domain is permitted and we do it all of the time (think loading jQuery from google's CDN). 

What jQuery can do is inject a script tag into your website temporarily when a request is made. The script "src" will point to a bit of JavaScript on the server you requested data from. What the server needs to do is wrap the JSON data in a JavaScript function (thus "padding"). This function becomes available to us, it gets executed, we get our data, and the script tag is removed.

Let's modify our previous request and just change `json` to `jsonp`.

```
$.ajax('http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/CA/San_Francisco.json', {
	type: 'GET',
	dataType: 'jsonp',
	success: function(){console.log("Hi!")}
});
```

It should work, you'll see "Hi!" in the console. But where's the data? It's available, we just need to learn to use it. Reading the jQuery API will tell us what we need.

[http://api.jquery.com/jQuery.ajax/](http://api.jquery.com/jQuery.ajax/)

For the "success" callback function it says:

> A function to be called if the request succeeds. The function gets **passed three arguments**: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object.

The important part here is the fact that the success function gets passed three arguments. The JSON data is the first argument and that's all we need right now. Modifying our code we see the data:

```
$.ajax('http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/CA/San_Francisco.json', {
	type: 'GET',
	dataType: 'jsonp',
	success: function(ourData){console.log(ourData)}
});
```

What you should see in the console is two objects. The first one is the jQuery AJAX object which can generally be ignored. The second object is our data. 

## JSON Parsing

Clicking on the little arrow on the side will open up the object for inspection. Note that the object doesn't use strings for the property names. This is because what we're seeing is not JSON, it's a JavaScript object.

What jQuery did was "parse" (read and convert) the JSON into a JavaScript object so that we can work with it.

## CORS

Another technique to get around the "same origin policy" is called CORS, it stands for **Cross-Origin Resource Sharing**. This is a new protocol which is simply an "opt out" of the "same origin policy". The server that has the data would need to tell the browser that it's opting out. Unfortunately the wunderground API doesn't use CORS.
