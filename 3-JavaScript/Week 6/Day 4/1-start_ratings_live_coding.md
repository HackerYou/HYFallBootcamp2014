# Start Ratings

Inspired by:
[http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/)

## The markup

* 5 radio buttons, each with a value from 1 to 5
* we'll use a fieldset to group the radio buttons

```
<fieldset class="rating">
    <legend>Please rate:</legend>
    <input type="radio" id="star5" name="rating" value="5" /><label for="star5">5 stars</label>
    <input type="radio" id="star4" name="rating" value="4" /><label for="star4">4 stars</label>
    <input type="radio" id="star3" name="rating" value="3" /><label for="star3">3 stars</label>
    <input type="radio" id="star2" name="rating" value="2" /><label for="star2">2 stars</label>
    <input type="radio" id="star1" name="rating" value="1" /><label for="star1">1 star</label>
</fieldset>
```

## The CSS

Our goal is to convert the radio buttons into stars. 

### We start by hiding the input fields. 

```
.rating:not(:checked) > input {
      display: none;
}
```

Note that we're using the `:not(:checked)` pseudo selector because we only want this CSS to apply when the browser is fully compatible with the `:not(:checked)` and `:checked` pseudo selectors. If the browser is old then we want to show a regular radio input field.

### Add the star

After hiding the input we'll add a star to our label.

```
.rating:not(:checked) > label:before {
	content: '\2605     ';
}
```

### Hide label text

Next we'll hide the rest of the label text since we only want that to appear with older browsers.

```
.rating:not(:checked) > label {
	float:right;
	width:1em;
	padding:0 .1em;
	overflow:hidden;
	white-space:nowrap;
}
```

### Style the star

We'll add some colour and text shadow to the stars to make them stand out a bit more.

```
.rating:not(:checked) > label {
	cursor:pointer;
	font-size:2em;
	line-height:1.2;
	color:#ddd;
	text-shadow:1px 1px #bbb, 2px 2px #666, .1em .1em .2em rgba(0,0,0,.5);
}
```

### Clicking on stars

When a user clicks on a star then we would like to add colour to that star and all previous stars. This gives a great user experience because the user will know what rating (1 to 5) they chose. If star5 is selected then we style all labels, if star4 then style labels for star1 to star4, etc.

```
.rating > input:checked ~ label {
	color: #f70;
	text-shadow:1px 1px #c60, 2px 2px #940, .1em .1em .2em rgba(0,0,0,.5);
}
```

The `~` is called a General sibling combinator.
http://css-tricks.com/child-and-sibling-selectors/

### Hovering stars

And last we'll make the stars change colour when hovered over. 

```
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
	color: gold;
	text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);
}
```
