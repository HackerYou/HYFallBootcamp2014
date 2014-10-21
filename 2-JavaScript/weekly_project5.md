---
layout: project
title: Week 4 Project - jQuery Gallery
---

# Weekly Project: jQuery Gallery

This week you are going to write some JavaScript using the jQuery library in order to build an interactive gallery. [Here is a demo](weekly_project5_files/gallery-demo/index.html) of what the gallery should look like. We've given you the HTML, CSS and assets to start:  [`gallery-start.zip`](weekly_project5_files/gallery-start.zip). The zip file has three collections of images that you can work with that will help to keep your project unique. Choose one collection to display in the gallery and remove the others that you aren't using.

## Gallery requirements

- There are five thumbnail images to the left. These images are inside a div with class `previews`.
- There is one div with class `full` to the right.
- Clicking on a thumbnail will show a larger version of the image inside the div with class `full`.
- The image that is being displayed in "full" has a border around its thumbnail image.
- This border also displays when you hover over the thumbnails.
- Clicking on a full image opens a `fancybox` with a version of the image that scales with the window size.


## Hints and reminders:

* Don't forget to execute JavaScript only once the document is ready to be manipulated.
* You will need one event listener on the `.previews a` anchor tags.
* It's possible to create elements with: `$('<tag>')`.
	* Create a span with $('<span>')
* It's possible to set any element attribute with the `attr(attributeName, content)` method.
	* 	Example: `$('img').attr('src','images/dog.jpg');`
* Note that all of the thumbnail images have a data attribute. This data points you to the image's larger version. You can access this data with `data(nameOfData)`.
	* $('a').data('full') will return the url of the image
* The nice "blinking" effect that you see when a full image is loaded can be achieved by hiding and then fading in the image.
* The full images will be added after the DOM has been completely loaded so you'll need delegated events for the fancy box.
* Fancybox is already loaded for you. You just need to open it up with `$.fancybox.open(sourceOfImage)`.

## Peer Review

During the first time-block on Friday you should pair up with another student and do peer-reviews. Go through each other's code and try to give them as much feedback as you can. The following criteria should be considered when looking at the code of your peers.

- proper indentation
- use of naming conventions
- code efficiency: e.g. avoid querying the DOM more than you need to. If an element is queried more than once then save it in a variable to reduce lookups.
- readability: do you understand the code or do you need to ask for clarifications often?
- use of comments: not over-done but at the same time enough information to be informative

## Extension exercise suggestions

- When you mouse over the large/full image a zoomed version of the image should appear allowing you to see a more detailed view of that portion of the image.

**Example**: http://epic-image-zoom.webfactoryltd.com/

Note that the example is from a paid jQuery plugin. Don't buy it. Be resourceful and find a free solution.

- All images in the gallery are in grayscale until they are hovered over.

**Example**: http://www.kfsoft.info/MyFadeOverImage/demo.php

- Change the styling to something that meets your own aesthetic.