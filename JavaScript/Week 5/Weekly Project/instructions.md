# Weekly Project: jQuery Gallery

This week you are going to write some JavaScript using the jQuery library in order to build an interactive gallery. There is a demo of what the gallery should look like.

## Gallery requirements

- There are five thumbnail images to the left. These images are inside a div with class `previews`.
- There is one div with class `full` to the right.
- Clicking on a thumbnail will show a larger version of the image inside the div with class `full`.
- The image that is being displayed in "full" has a border around its thumbnail image.
- This border also displays when you hover over the thumbnails.
- Clicking on a full image opens a `fancybox` with a version of the image that scales with the window size.

## Hints and reminders:

* Don't forget to only work once the document is ready to be manipulated.
* You will need one event listener on the `.previews` anchor tags.
* The `.full` div should be **emptied** when someone clicks the previews. 
* It's possible to create elements with: `$('<tag>')`.
* It's possible to set any element attribute with the `attr(attributeName, content)` method.
* Note that all of the thumbnail images have a data attribute. This data points you to the image's larger version. You can access this data with `data(nameOfData)`.
* The nice "blinking" effect that you see when a full image is loaded can be achieved by hiding and then fading in the image.
* The full images will be added after the DOM has been completely loaded so you'll need delegated events for the fancy box.
* Fancybox is already loaded for you. You just need to open it up with `$.fancybox.open(sourceOfImage)`.

## Peer Review

The following criteria should be considered when looking at the code of your peers.

- proper indentation
- use of naming conventions
- code efficiency: e.g. avoid querying the DOM more than you need to. If an element is queried more than once then save it in a variable to reduce lookups.
- readability: do you understand the code or do you need to ask for clarifications often?
- use of comments: not over-done but at the same time enough information to be informative