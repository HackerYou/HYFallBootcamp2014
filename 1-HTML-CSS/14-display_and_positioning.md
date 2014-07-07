---
layout: notes
title: Display and Positioning
topic: html
---

# Display and Positioning

## CSS Display

The **`display`** property specifies the type of box used when rendering an element on the page. Let's first discuss `inline` and `block` elements.

To explain this, let's take a look at some basic markup.

	<span>I'm a span</span>
	<span>I'm a span</span>
	<span>I'm a span</span>
	<div>I'm a div</div>
	<div>I'm a div</div>
	<div>I'm a div</div>

How will the above be displayed in the browser? Let's open <a href="exercises/display.html" class="exercise">**display.html**</a> in the browser.

![](http://wes.io/K21R/Screen%20Shot%202012-10-09%20at%2011.25.42%20AM.png)
<small>Note: I added a pink background and some margin to tell the elements apart</small>

**Why do the spans line up beside each other and the divs start on a new line when their contents are almost identical?**

This is the difference between `display:inline` and `display:block`. By default, **spans are inline** and **divs are block**.

### display:inline
**inline** elements can be nested inside of block elements. They can be inserted inside of other elements and not break into a new line.

Some examples of **inline** elements are `a`, `em`, `strong` and `span`.

Write the following HTML inside of **display.html**:

	<p>My favourite foods are <span class="food">pizza</span> and <span class="food">hamburgers</span>. Read more about me on my <a href="http://mywebsite.com">website</a>!</p>

Notice how we wrapped different words in a link or a span and everything stays in the line rather than breaking onto a new line? That's because by default, these elements are **inline**.

1. Set a width of 400px on the food spans, what happens?
1. Try changing the spans to divs. See what happens.

You may have figured this out already, but inline elements do not accept a width because their default behaviour is to only take up as much space as they need to and continue on with the content within that element.

### display:block

Block elements, on the other hand, are elements that generally encompass inline elements. Block elements break onto a new line and aren't used for doing things within a line of text (as we saw when changing the spans to divs).

Block elements accept a width, which is why we use them to lay out our page.

Some examples of block elements are `div`, `h1-h6`, `p`, `ul/ol`, `li`, and `blockquote`.

### Converting them
Sometimes you may want a link or span to have a set width. We can use CSS to change the default style by using the `display` property. Let's take this markup for example:

	<p>Here is my link to <a href="http://google.com" class="myLink">Google</a>.</p>

and some CSS

    a.myLink {
        width:300px;
        background:red;
        display:block;
    }

Notice how when we switch from the default `display:inline` to `display:block`, the element takes the 300px width and breaks to a new line?

### inline-block

Inline block is the best of both worlds - you can set a width/height on the element, like block elements, but it will still display side-by-side in the line, just like inline elements. 

**Note:** `inline-block` isn't supported in IE7. [http://caniuse.com/#search=inline-block](http://caniuse.com/#search=inline-block)

Images are the only element that are by default set to inline-block. Let's see how it works with some markup:

	<p>Here is a picture of a star: <img class="myStar" src="images/star.jpg">. Isn't it nice?</p>

If we wanted to set a width and height on the image, we totally could and it doesn't break to a new line.

Let's try it with our last link:

    a.myLink {
        width:300px;
        height:50px;
        background:red;
        display:inline-block;
    }

Notice how it now sets the width and remains inline? We will do a bunch of exercises involving `display` soon.

### display:none;

`display` can also have the value of `none`. It does exactly what you might think it does: hides the element entirely.

## CSS Position: Static, Relative, Absolute and Fixed

So far, we've been working with `float` or `display` to make elements fit snugly beside each other. This works great most of the time.

But, what happens when we want a little more control over how to position elements on the screen? What if we want to:

1. Bump something up and over a few pixels?
1. Overlap two elements or have something burst outside of its wrapper.
1. Place an element in the top right corner, regardless of how wide or tall the div is? (Like an X to exit a modal box)
1. Overlap text on top of an image.

So far, every time we add more content to our page, the page gets longer.

### Default of position:static

All elements in HTML are by default `position:static;` which means that they aren't positioned at all, they just **take up the space they need** and other elements start after them.

This is what we have worked with so far. You'll won't need to set `position:static;` on an element unless you are overriding something you have set earlier.

### Enter position:relative

`position: relative;` acts just like what we are used to (static). The element still takes up the space it needs to but there is one small difference.

When we position something as **relative**, we unlock the ability to use four more properties: `top`,`right`,`bottom`,`left`. These can be used to nudge the element around.

Open <a href="exercises/position-relative.html" class="exercise">**position-relative.html**</a> in your editor and do the following:

1. Position the `.box` div to relative.
1. Try using a `top` and `left` value of 100px each.
1. Try a negative left value (-100px).
1. Replace your `top` with `margin-top`. What is the difference?
1. Let's try it with 120% width.

Where exactly is top, left, right and bottom referring to?

### position:absolute

`position: absolute` is another way of positioning elements on a page. When you absolute position an element, it no longer takes up the space it used to and is now essentially 'floating' on your screen, above the surrounding elements.

You can now position an absolute value exactly where you want it to go. Open <a href="exercises/position-absolute.html" class="exercise">**position-absolute.html**</a> in your browser and editor. Here we have four 100px square divs, all `position:static` (the default).

Go ahead and set .box2 to position absolute:

    .box2 {
        background: green;
        position: absolute;
    }

What just happened? Where is the blue .box3? The green box was set to **position: absolute** and no longer takes up any space, so naturally the blue box just bumps itself right up and under green box.

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

Now, where do you think top, left, right and bottom referring to?

### Mixing Relative and Absolute

The last example was good for understanding absolute positioning, but chances are you won't just have elements loose like that in your layout, you will have a wrapper, a sidebar, content or some kind of container.

This is where we need to mix `relative` and `absolute` positioning. Open up <a href="exercises/position.html" class="exercise">**position.html**</a> in your browser and editor.

Let's write some code so the green box is positioned like this:

![](http://f.cl.ly/items/1m2D0S3k2L2c1B0m212C/Screen%20Shot%202012-10-10%20at%2011.18.49%20AM.png)

Our first thought may be to do something like this:

    .box2 {
        background:green;
        position: absolute;
        top:-20px;
        right:20px;
    }

And that is right, but why is it positioned way outside of the wrapper div? Try resizing your browser too.

That's annoying. We want it to be absolute to the top right of the wrapper, not the body!

And this is the secret sauce of mixing `relative` and `absolute`:

**When you set the position of an element to absolute and use top, right, bottom, left, it is absolutely positioned relative to its next relative parent.**

So, because we do not have any parent elements set to `relative`, its positioning is relative to the `<body>` or the browser window.

Easy fix for this is to position our `.wrapper` as relative:

    .wrapper {
        width: 400px;
        margin:50px auto;
        border:2px solid #BADA55;
        
        /* This relative position will contain the absolute positioned child elements within this box. They will still be absolutely positioned, but now relative to this box, rather than the body. */
        position: relative; 
    }


#### Another Example

Let's take another shot at this. Open up <a href="exercises/position2.html" class="exercise">**position2.html**</a> in your browser and editor.

Here we have two divs nested inside of each other: `.wrapper` and `.innerWrapper`

We want to end up with something that looks like this:

![](http://f.cl.ly/items/1f2C3y2727453I0a2s0d/Screen%20Shot%202012-10-10%20at%2011.33.33%20AM.png)

Our first step would be to position all boxes `absolute` and position them in the 4 corners:

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

That is because both wrapper divs are at their **default position of `static`** and not `relative`.

Try adding `position:relative;` to the `.wrapper`. What happens?

Not exactly what we want, so delete that last line and change  `.innerWrapper` to `position:relative;`.


### position:fixed;

The final type of position is similar to `position:absolute` but it **stays in place when you scroll**.

Lets open up <a href="exercises/position-fixed.html" class="exercise">**position-fixed.html**</a> in your browser and editor.

We have a black header at the top. Let's try and use CSS to make it fixed:

    .fixedHeader {
        position: fixed;
        left:0;
        top:0;
        width:100%;
    }

Now try and scroll down. See how the header sticks in place?

## Z-index
In one of our earlier exercises we saw how elements overlap each other. What if we want them to overlap another way? How do we specify which element goes on top and which one goes under?

We are used to working with X and Y coordinates in web design but now we need to think of elements in a third, z-dimension.

For starters, when applying a z-index, **it is only effective when an element is positioned absolute or relative**.

The value we use for the z-index can be any whole number. You'll often see people assign the value of 9999 which is a huge number that they hope to defeat everything else on the page.

Open up <a href="exercises/z-index.html" class="exercise">**z-index.html**</a> and you'll see we have our four blocks back.

They are all positioned absolutely and are overlapping each other. By default, the order in which they appear in the HTML determines how they overlap. The first element in the HTML has the lowest z-index and the last element has the highest.  We manipulate that order by using the `z-index` property and manipulating the number value.

![](http://f.cl.ly/items/212g1Z030y0E0b3c1I2Z/Screen%20Shot%202012-10-10%20at%2012.34.13%20PM.png)

Let's use z-index to bring the blue block on top of everything else:

    .box3 {
        background:blue;
        top:60px;
        left:60px;
        z-index: 1;
    }

See how the blue box is now above everything else? 

Try changing the red box to `z-index:2;`.

![](http://wes.io/K3ZZ/Screen%20Shot%202012-10-10%20at%2012.37.40%20PM.png)

## border-radius
Border radius is one of the fun CSS attributes that has only recently been introduced to web browsers. It adds a rounded corner to any element.

Open up <a href="exercises/border-radius.html" class="exercise">**border-radius.html**</a> in the browser and editor and we can take a look at how it works.

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

Luckily for us, we don't have to do that any more, but we will sometimes find features that are prefixed or only available in some browsers. Take blur as an example:

    .myDiv {
        -webkit-filter:blur(4px); /* Only available in Chrome at the moment, vendor prefixed */
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

You will find them in <a href="exercises/positioning-and-floats.zip">**positioning-and-floats.zip**</a>. There are 7 exercises, labelled from `ex1` to `ex7`.

## Review
1. Positioning
	1. By default, what position are all elements?
	1. What is the difference between absolute and relative in terms of space left behind? (Who takes who's seat?)
	1. A div inside the body with `postition:static` (default) and `top:100px, left:100px` will go where?
	1. A div inside the body with `postition:absolute` and `top:100px, left:100px` will go where?
	1. A div inside the body with `postition:relative` and `top:100px, left:100px` will go where?
	1. How does an absolute positioned item figure out where what to base its `top`,`right`, `bottom`, `left` values off of?
	1. Why would we _just_ `position:relative;` an item?
	1. What is `position:fixed;` and when would we use it?
1. Display
	1. What are the differences between `display:inline` and `display:block`?
	1. When would you use each one?
	1. What are some elements that are by default `inline`?
	1. What are some elements that are by default `block`?
	1. What is inline-block?
	1. What is the only element that is default inline-block?