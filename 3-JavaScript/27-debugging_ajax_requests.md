---
layout: notes
topic: js
title: Debuggin AJAX Requests
---

# Seeing AJAX Requests

It's often useful to see what the browser is doing behind the scenes when we're making AJAX requests. Luckily, dev tools can help us here.

1. Open up chrome dev tools
2. Click on Network tab
3. Click the filter icon (third from the left) to filter what type of requests show up in this panel. You'll notice sytleheets, scripts and images also show up here. Choose XHR to limit the view to AJAX requests only.
3. Refresh the page to start capturing requests in the Network panel.
4. Clicking on a request will take you to a panel where you can see the response header, response/body, etc.

Using the information here will help tremendously in debugging AJAX requests. If you don't see your request at all, check for things like syntax errors. If the request was made but the result wasn't as expected then have a look at the headers and body of the response.