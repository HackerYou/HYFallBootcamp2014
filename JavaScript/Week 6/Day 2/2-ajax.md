# AJAX

Instead of typing our request in the browser and pressing enter we want to programatically make the request. Asynchronous JavaScript and XML (AJAX) can be used to do this. What's interesting is that the requests will be done "asynchronously", i.e. without having to refresh the page. This means with JavaScript we can "talk" to another server, get some data, and update the current page without a browser refresh. This makes for a great user experience. 

Note that even though XML is in the name, we will be using the JSON data format.

Making AJAX requests can be rather complicated, especially when you factor in browser differences so again jQuery comes to the rescue.

## $.ajax method

