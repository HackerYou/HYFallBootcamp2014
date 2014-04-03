# Week 2, Day 2 Normalize, In-page Links, Display and Positioning

## CSS Normalize

One other tool that web designers and developers have in their toolbelt is something called a CSS Normalize or a CSS Reset.

We need a CSS Normalize because not all browsers start on the same playing field. All browsers come with 'css defaults', such as making all h1-h6 elements escalating sizes as well as adding padding and margins to elements such as the body. This is great, however they aren't consistent across all the browsers, and that will lead to problems down the road because we want our websites to look fairly consistent in all the browsers!

CSS Normalize fixes this. Its a chunk of CSS code that we can insert into the top of our CSS Document that does exactly what it says - **normalize the default styling of all elements across all browsers**.

You can download normalize at [http://necolas.github.com/normalize.css/](http://necolas.github.com/normalize.css/). We won't be using it for out examples, but any public facing sites (including our final project) should use it.

## Linking within a page (or when its okay to use ids!)
Ever wonder how link to a certain point within a page?

So far our links have been linking to an entirely different page, something like this:

	<a href="about.html">About</a>

However we are able to use a page hash to link to where a certain element starts. Ever see a link that looks like this:

	http://mysite.com/about.html#foods

When you visit it, it automagically links to the header called food! How does it know?

This is where we finally get to use ids! Since you should only ever use an ID once, it makes sense that we would use them to define a specific spot in our page.

Lets say we have a h2 element like this in a document called `about.html`:

	<h2 id="food">Foods I like</h2>

If we are currently inside of `about.html`, we can link to that part of the document simply by doing this:

	<a href="#food">See Foods I like</a>

If we are on another page and want to link to that specific spot:

	<a href="about.html#food">See Foods I like on another page</a>

You can link to any element with an ID, such as a div, span or blockquote but you will generally use heading tags.

Open up `link-within.html` and create a navigation based on the available markup. It can be a single level navigation - no dropdowns required.

## CSS Display

Today we are going to learn about a new CSS property called **display**

The **display** property specifies the type of box used when rendering an element on the page and there are two main types of display: inline and block.

To explain this, lets take a look at some very basic markup.

		<span>I'm a span</span>
		<span>I'm a span</span>
		<span>I'm a span</span>
		<div>I'm a div</div>
		<div>I'm a div</div>
		<div>I'm a div</div>

How will the above be displayed in the browser? Lets open `display.html` in the browser and see.

![](http://wes.io/K21R/Screen%20Shot%202012-10-09%20at%2011.25.42%20AM.png)
<small>Note: I added a pink background and some margin to tell the elements apart</small>

**Why do the spans go up against each other and the divs start a new line when their contents are almost identical?**

This is the real difference between `display:inline` and `display:block`. By default, **spans are inline** and **divs are block**

### display:inline
**inline** elements are elements that should go inside of block elements, they can inserted inside of other elements and not break to a new line.

Some examples of **inline by default** elements are `a`,'strong', `em`, `strong`, and `span`;

Write the following HTML inside of `display.html`:

	<p>Hello there, I'm <a href="http://wesbos.com">Wes Bos</a> and my favorite foods are <span class="food">pizza</span> and <span class="food">hamburgers</span></p>

Notice how we can wrap my name in a link and the foods in spans? We can do all of that in the line, or **inline**.

1. Set a width of 400px on the food spans, what happens?
1. Humour yourself and change the spans to divs. See what happens.

You may have figured this out already, but inline elements do not accept a width because they only take up as much space as they need to and continue on with the content within that element.

### display:block

Block elements, on the other hand, are elements that generally encompass inline elements. Block elements break to a new line and aren't used for doing thing within a line of text (as we saw when changing the spans to divs).

Block elements accept a width, which is why we use them to lay out our page.

Some examples of block elements are `div`, `h1-h6`, `p`, `ul/ol`, `blockquote`.

### Converting them
Sometimes you may want a link or span to have a set width, and thats no problem, we simply just use the CSS display to change it as so. Let's take this markup for example:

<p>Here is my link to <a href="http://google.com" class="myLink">Google</a></p>

and some CSS

	a.myLink {
		width:300px;
		background:red;
		display:block;
	}

Notice how when we switch from `display:inline` to `display:block`, the element takes the 300px width and breaks to a new line?

### inline-block

There is one more kind of display that we will be looking at today, `inline-block` which isn't supported in IE7. [http://caniuse.com/#search=inline-block](http://caniuse.com/#search=inline-block)

Inline block is the best of both worlds - you can set a width/height on the element but still have is display inline. Images are the only element that are default set to inline-block. Lets see how it works with some markup:

	<p>Here is a picture of a star:<img class="myStar" src="images/star.jpg">. Isn't it nice?</p>

If we wanted to set a width and height on the image, we totally could and it doesn't break to a new line.

Let's try it with our last link:

	a.myLink {
		width:300px;
		height:50px;
		background:red;
		display:inline-block;
	}

Notice how it now sets the width and remains inline? Next class we will do a bunch of exercises involving `display`

### display:none;

Display also has something called `display:none;` which does exactly what you might think it does: hides the element entirely.

## CSS Position: Static, Relative, Absolute and Fixed

So far in CSS we have working with elements that fit up snugly beside each other, and this works great for most use cases.

But, what happens when we want a little more control over how we position elements on our screen? What if we want to:

1. Bump something up and over a few pixels?
1. Overlap two elements or have something burst outside of its wrapper
1. Place an element in the top right corner, regardless of how wide or tall the div is? (Like an X to exit a modal box)
1. Overlap text on top of an image

So far, every time we add more content to our page, the page gets longer.

### Default of position:static

All elements in HTML are by default `position:static;` which means that they they aren't positioned at all, they just **take up the space they need** and let other elements start after them.

This is what we have worked with so far in HackerYou. You'll never need to set `position:static;` on an element unless you are overriding something you have set earlier.

### Enter position: relative

The first type of positioning you will use is `position: relative;` and it acts just like what we are used to (static). The div still takes up the space it needs to but there is one small difference:

We are now able to use the 4 css properties: `top`,`right`,`bottom`,`left` to nudge the element around.

Open `position-relative.html` in your editor and we will do the following:

1. Position the `.box` div relative
1. Try using a `top` and `left` value of 100px each
1. Try a negative left value (-100px)
1. Replace your `top` with `margin-top`. What is the difference?
1. Let's try it with 120% width

So, when we position something as **relative**, we unlock the ability to use `top`,`right`,`bottom`,`left`

### position:absolute;

Position absolute is a new way of positioning elements on a page. When you absolute position an element, it no longer takes up the space it used to and is now essentially 'floating' on your screen.

You can now position an absolute value exactly where you want it to go. Open `position-absolute.html` in your browser and editor. Here we have 4 100px square divs, all `position:static` (the default)

Go ahead an make box 2 position absolute:

	.box2 {
		background:green;
		position: absolute;
	}

What just happened? Where is the blue .box3? The green box was **positioned absolutely** and no longer takes up any space, so naturally the blue box just bumps itself right up and under green box.

Lets play with positioning the green box:

	.box2 {
		background:green;
		position: absolute;
		top:500px;
		left:120px;
	}

Or use bottom and right values:

	.box2 {
		background:green;
		position: absolute;
		bottom:20px;
		right:20px;
	}

You can also use percentages:

	.box2 {
		background:green;
		position: absolute;
		width:5%;
		height:5%;
		top:45%;
		left:45%;
	}

You'll notice that the box can be positioned at any point on the screen and it doesn't care if there is content where it wants to go or not, it just overlaps everything.

### Mixing Relative and Absolute

The last example was good for understanding absolute positioning, but chances are you wont just have elements loose like that in your layout, you will have a wrapper, a sidebar, content, etc...

There is where we need to mix relative and absolute positioning. Go ahead and open up `position.html` in your browser and editor.

Lets write some code so the green box is positioned like this:

![](http://f.cl.ly/items/1m2D0S3k2L2c1B0m212C/Screen%20Shot%202012-10-10%20at%2011.18.49%20AM.png)

Our first thought may be to do something like this:

	.box2 {
		background:green;
		position: absolute;
		top:-20px;
		right:20px;
	}

And that is right, but why is is positioned way outside of the wrapper div? Try resize your browser too.

Thats annoying, we want it to be absolute to the top right of the wrapper, not the body!

And this is the secret sauce of mixing relative and absolute:

**When you position an element absolute and use top,right,bottom,left it is absolutely positioned relative to its next relative parent**

So, because we do not have any relative parent elements, its positioning it relative to the `<body>` or the browser window.

Easy fix for this is to position our `.wrapper` as relative:

	.wrapper {
		width: 400px;
		margin:50px auto;
		border:2px solid #BADA55;
		position: realtive; /* Position it relative so the absolute elements use it as a relative parent */
	}


#### Another Example

Let's take another shot at this. Open up `position2.html` in your browser and editor.

Here we have two divs nested inside of each other: `.wrapper` and `.innerWrapper`

We want to end up with something that looks like this:

![](http://f.cl.ly/items/1f2C3y2727453I0a2s0d/Screen%20Shot%202012-10-10%20at%2011.33.33%20AM.png)

Our first step would be to position all boxes absolutely and position them in the 4 corners:

	.box {
		width:100px;
		height:100px;
		margin:5px;
		position: absolute;
	}
	.box1 {
		background:red;
		top:0;
		left:0;
	}
	.box2 {
		background:green;
		top:0;
		right:0;
	}
	.box3 {
		background:blue;
		bottom:0;
		right:0;
	}
	.box4 {
		background:orange;
		bottom:0;
		left:0;
	}

So why are the boxes in the corners of the browser even though they are nested inside of two wrapper divs?

![](http://f.cl.ly/items/0m0y1a3Z1j1R473A2j3w/Screen%20Shot%202012-10-10%20at%2011.36.50%20AM.png)

That is because both wrapper divs are at their **default position of static** and no relative.

Try changing the `.wrapper` to `position:relative;` What happens?

Not exactly what we want, so delete that last line and change  `.innerWrapper` to `position:relative;`


### position:fixed;

The final type of position is similar to `position:absolute` but it **stays in place when you scroll**

Lets open up `position-fixed.html` in your browser and editor.

We have a black header at the top, lets try and use CSS to make it fixed positioning:

	.fixedHeader {
		position: fixed;
		left:0;
		top:0;
		width:100%;
	}

Now try and scroll down, see how the header sticks in place?

## Z-index
In one of our earlier exercises we saw how elements overlap each other. What if we want them to overlap another way? How do we specify which element goes on top and which one goes under?

We are used to working with X and Y coordinates in webdesign but now we need to think of elements in a third, z-dimension.

For starters, when applying a z-index, **it is only effective when an element is positioned absolute or relative**

The value we pass z-index can be any whole number. You'll often see people assign the value of 9999 which is a huge number that they hope to defeat everything else on the page.

Open up `z-index.html` and you'll see we have our four blocks back.

They are all positioned absolutely and are overlapping each other.

![](http://f.cl.ly/items/212g1Z030y0E0b3c1I2Z/Screen%20Shot%202012-10-10%20at%2012.34.13%20PM.png)

Lets use z-index to bring the blue block on top of everything else:

	.box3 {
		background:blue;
		top:60px;
		left:60px;
		z-index: 1;
	}

See how the blue box is now above everything else? Try change the red one to `z-index:2;`

![](http://wes.io/K3ZZ/Screen%20Shot%202012-10-10%20at%2012.37.40%20PM.png)

## border-radius
Border radius is one of the fun CSS attributes that has only recently come to web browsers. It adds a rounded corner to any element.

Open up `border-radius.html` in the browser and editor and we can take a look at how it works.

Basic usage is to supply one value for all corners:

	.box1 {
		background:red;
		border-radius:5px;
	}

But we can also use short hand to specify TRBL (top, right, bottom, left):

	.box3 {
		background:blue;
		border-radius:5px 10px 100px 1px;
	}

A 50% border radius makes a perfect circle. Go ahead and try some out.

You can even do it on an image:

	img.dog {
		border-radius: 50%;
	}

## Vendor Prefixes

Sometimes features in web browsers are released half baked on purpose. They are in a good enough spot where the public can start using them, but not 100% completed yet. So, sometimes you will see CSS **vendor prefixed** which means that you must write the CSS once for every browser until it is ready for prime time.

For example, 2 years ago, border radius had to be written like this:

	.pic {
		-webkit-border-radius:10px; /* Chrome and Safari */
		-moz-border-radius:10px; /* Fireofox */
		-ms-border-radius:10px; /* IE */
		-o-border-radius: 10px; /* Opera */
		border-radius:10px; /* For when everyone gets along and moves to unprefixed */
	}

Whew.

Luckily for us, we don't have to do that any more, but we will sometimes find features that are prefixed or only available in some browser. Take blur as an example:

	.myDiv {
		-webkit-filter:blur(4px); /* Only available in chrome at the moment, vendor prefixed */
	}


## text decoration: underline

A quick tip on some typography that we didn't learn in week 3 is how to underline, or take an underline off.

This CSS property is called `text-decoration` and is commonly used to underline text. The reason we don't use it much is because its a best practice to only underline links.

However if you must:

	span.food {
		text-decoration:underline;
	}

<p style="font-size:20px; text-decoration:underline;">Underline</p>
<p style="font-size:20px; text-decoration:overline;">Overline</p>
<p style="font-size:20px; text-decoration:line-through;">line-through</p>

We also use it quite a bit to take the underline off links

	a {
		text-decoration:none;
	}



## Exercises

Today we are going to be doing a bunch of small exercises to get comfortable with everything we have done so far.

- floats
- positioning, relative, absolute
- widths and heights
- CSS3 border radius
- Using box-sizing:border-box;
- z-index
- rgba colours
- inline, block and inline-block

You will find them in today's folder along with the answers. There are 7 exercises, labelled from `ex1` to `ex7`.

## Review
1. Positioning
	1. By default, what position are all elements?
	1. What is the difference between absolute and relative in terms of space left behind? (Who takes whos seat?)
	1. A div inside the body with `postition:static` (default) and `top:100px, left:100px` will go where?
	1. A div inside the body with `postition:absolute` and `top:100px, left:100px` will go where?
	1. A div inside the body with `postition:relative` and `top:100px, left:100px` will go where?
	1. How does an absolute positioned item figure out where what to base its `top`,`right`, `bottom`, `left` values off of?
	1. Why would we _just_ `position:relative;` an item?
	1. what is `position:fixed;` and when would we use it?
1. Display
	1. What are the differences between `display:inline` and `display:block`
	1. When would you use each one?
	1. What are some elements that are by default `inline`
	1. What are some elements that are by default `block`
	1. What is inline-block?
	1. What is the only element that is default inline-block?