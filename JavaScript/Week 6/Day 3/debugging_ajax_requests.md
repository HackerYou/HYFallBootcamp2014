# Seeing AJAX Requests

1. Open up chrome dev tools
2. Click on Network tab
3. At the bottom there are filters (documents, stylesheets, images, scripts, XHR, etc.). Click on XHR to see only AJAX requests.
4. Clicking on a request will take you to a panel where you can see the response header, response/body, etc.

Using the information here will help tremendously in debugging AJAX requests. If you don't see your request then maybe there was a syntax error. If the request was made but the result wasn't as expected then have a look at the headers and body of the response.