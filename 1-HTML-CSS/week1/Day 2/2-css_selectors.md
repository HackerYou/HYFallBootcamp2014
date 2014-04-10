---
layout: notes
title: CSS Selectors
topic: html
---

# CSS Selectors

### Including CSS: 3 ways
There are three ways to write CSS and include it in your HTML document.

**1. External Stylesheet**
This is by far the most common use case. You create a new file in your folder and name it whatever you want. I like to use **style.css**. We then write all of our CSS inside of this file and then use a `<link rel="stylesheet" href="">` tag to embed it into our **HTML Head**. This method is great because we often have multiple pages that need the same styles.

**2. Inside of style tags**
This is the method we are using so far because it allows us to write our CSS and HTML in the same page. When writing CSS inside of HTML, you must put your CSS inside of **Style tags** like so:

	<style type="text/css">
		h2 {
			color:red;
			font-size:50px;
		}
	</style>

This tells the browser that you are no longer writing HTML and everything inside of the tags is CSS.

**3. Inline Styles**
Inline styles are when you pass the CSS styles in as an attribute for the HTML tag. These are rarely useful but situations where you may use them will sometimes crop up.

	<h2 style="color:red; font-size:50px;">Hello, I'm a header with inline styles</h2>

The downside to this is that you can only use those styles on that element and would have to copy/paste if you wanted those styles elsewhere. Not very good code reuse.


## Writing your own CSS Selectors!

Once you get the hang of changing some existing CSS, its time to learn how to write our own CSS Selectors.

**Remember that we use selectors to specify which elements on the page have the style applied to it**

### Basic Elements
The most basic of CSS selectors is to select all of a type of element on a page. This is very helpful when you are setting some default styles for the website. Remember that these styles are applied to **all** matches.


**Select Headings (can be used with h1 to h6)**

	HTML:
	<h2>Welcome to our website</h2>
	CSS:
	h2 {
		font-size:22px;
	}

**Select all paragraphs and tweak the typography**

	HTML:
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

	CSS:
	p {
		line-height:25px;
		font-family:arial;
	}

**Select all unordered lists and indent them**

	HTML:
	<ul>
		<li>Bread</li>
		<li>Eggs</li>
		<li>Milk</li>
	</ul>

	CSS:
	ul {
		margin-left:20px;
	}

**We get it!** The selector for any element, is just that element without the open `<` and close `>`

`<strong>...</strong>` &rarr; `strong { ... }`

`<div>..</div>` &rarr; ` div { ... }`

`<blockquote>Some quote</blockquote>` &rarr;`blockquotew { ... }`

### Getting more specific with CSS Selectors
The above is great, but what if we do not want to apply a style to every h2 element on the page? What if one of them is a different size, font or colour than the rest?

To do this, we need to get a little more specific with our selectors to only pick the elements we do want. Remember **attributes**? We will be using the **class** and **id** attributes here.

Lets say we have three paragraphs, yet only want one of them to have a yellow background. Our normal rule of `p { background:yellow; }` wouldn't work here because it would turn them all yellow.

	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
	<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
	<p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

###Appending a class
What we need to do is append a **class** to the one we want to select like so:

	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
	<p class="special">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
	<p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

And then with our CSS, we can write a new selector. We use the `.` period to denote the **class** attribute

	/* Turns any paragraph with the class of special yellow */
	p.special {
		background:yellow;
	}

*\*\*\*Note: you may also sometimes see elements with an **ID** instead of a class such as `<p id="special">...</p>`. IDs are just like classes, but they can **only be used once** per page. As a best practice, we won't be using IDs in this class, however, if you run into them in the wild, simple substitute the `.` period for the `#` hash like so:*

	/* Turns the only paragraph with the id of special yellow */
	p#special {
		background:yellow;
	}

#### Example & Small Exercise

Open up `css-class-selector.html` in your files to see this live.

1. Can you change all p tags to have `font-size` of `20px` ?
1. Can you add a new class and write a new CSS rule to turn the last one blue?
1. Turn all paragraphs with the class of warning red
1. Can you write a single rule that targets both special and warning and change the font colour?

###Multiple Classes
Sometimes you'll see items with multiple classes and want to select some of the elements based on a mixed. Take this markup for example:

	<ul>
		<li class="food human">Bread</li>
		<li class="liquid human">Milk</li>
		<li class="food pet">Cat Litter</li>
		<li class="food human">Eggs</li>
		<li class="liquid human">Soda Pop</li>
		<li class="food pet">Dog Food</li>
	</ul>

Let's select only the items that are both **liquid** and **human**

We simply just append another `.` period to the end of out selector for the second class:

	li.liquid.human {
		background: lightblue;
	}

Open `css-multi-class-selector.html` to see this in action!

#### Multiple Selector Exercise

1. Write a rule to change the font size for all food for humans
1. Write a rule to change all pet foods red
1. Write a rule to change all liquids for pets to orange background

Once you have had some time to work on them, We will review the questions and answer together.

### CSS Inheritance
You may have noticed in our first CSS exercise `css-fun.html` that I applied a bunch of generic style to the `body` selector. Why is this?

Well, there are certain styles that get passed down from the parent to the children. If we want all text on the page to be `lightgrey`, then we only have to specify it once and it will be applied to all children of it.

*So when we do this, We don't have to go through every other element and set the font size to 14 and color to lightgrey.*

	body {
		font-size:14px;
		color:lightgrey;
	}

Not every style is inherited, only the useful ones and they almost all refer to typography and fonts.

### Parent Child Selectors
Another way to target the elements you want is to use parent child selectors.

It's not always the case, nor does it make sense, for us to go through our code and add a special class to every single element we want to select. Sometimes its just as easy to first select the parent and then narrow in on the children.

Let's say we have two lists on a page:

	<ul class="groceries">
		<li>Milk</li>
		<li>Eggs (on sale at <a href="#">No Frills</a></li>
		<li>Bread</li>
		<li>Red Bull (Please print this <a href="#">Coupon</a></li>
	</ul>

	<ul class="sports">
		<li>Soccer</li>
		<li>Basketball</li>
		<li>Hockey</li>
		<li>Irish Bog Snorkeling (read more <a href="#">here</a></li>
	</ul>

We want to change the colour of the links only in the first list.

**We can't just use `a {  }` because that will select every link on the page!**

So we use a parent child selector:

ul.groceries a {
	color: green;
}

This parent/child selector selects only the `a` elements within `ul` with the class of `groceries`.

These selectors can be as long as you wish, however always try and take the shortest route when creating parent/child selectors. For this same example, we could have written `ul.groceries li a` which adds the step to make sure the `a` has a parent of `li`.

### CSS Specificity

What happens when you write two rules for a single element? Which one gets picked?

The short answer is the most recent or the most specific one. The long answer is that CSS calculates a specificity value based on how we write the selector.

So If I write a selector for all paragraphs :

	p {
		color:blue;
	}

and then another targeting just warnings:

	p.warnings {
		color:red;
	}

Since the second one is more specific, it colours the paragraph red rather than the generic blue.

#### Dual Rules
What about the following:

	p {
		color:red;
	}

	p {
		color:purple;
	}

The second one will overwrite the first one for the color because it comes later in the document.

#### More Specific Selectors
	.wrapper p {
		color:green;
	}

	p {
		color:red;
	}

Now which one wins this battle? Its the first one. Even though the `p` rule comes second, since the first one is more specific, it wins.

There are complicated ways to calculate which element takes precedent over another, but as a rule of thumb you should always code your defaults first, and then get target the more specific elements as you go on in your CSS document.

	/* make all p tags 14px font */
	p {
		font-size:14px;
	}
	/* Now target just the p tags in the sidebar */
	.sidebar p {
		font-size:12px;
	}
	/* Finally, we target just a few sentences inside a twitter widget */
	.sidebar .twitterWidget p {
		font-size:10px;
	}


### Pseudo Selectors
The final type of selector we will be learning today is the Pseudo selector. These selectors are appended right after the main selector with a colon. There are four main pseudo selectors:

1. :hover - used to style an element when the user hovers over it. `a:hover { color: red;} /* Change links red when hovered */ `
1. :visited - used to style an element when the user has already visited that link. `a:hover { color: purple;} /* Change links purple when visited */ `
1. :active - used to style an element when the user . `a:hover { text-decoration: underline;} /* Change links underline when selected */ `
1. :focus - used to style an element when in focus `input.email:focus { border:1px solid red; } /* change border to red when focused */`

With CSS3, we have access to a whole new slew of pseudo elements. These don't work in all older browsers, but you will be using them in the very near future.

Chris Coyier has an excellent article detailing all of the current and upcoming pseudo selectors. [http://css-tricks.com/pseudo-class-selectors/](http://css-tricks.com/pseudo-class-selectors/)

![](http://wes.io/J4aY/relationalpseudos2.png)

## Selector Exercises

In order to get amazing with CSS, you need selector chops! The only way to get good at writing selectors is to practice.

Since we aren't familiar with all of the available styles, I've included them for you, you just need to write the selectors.

Open up `css-selector-exercises.html` in both your browser and editor and replace `____` with your own selectors. You'll need to study the markup for a bit before. If you get stuck feel free to reference the notes, ask a mentor, help eachother and reference sites you find on Google.

There is also an answer key provided, open it in your browser to view what it should look like.

![Final Product](http://wes.io/J6Kh/Screen%20Shot%202012-08-29%20at%203.54.25%20PM.png)

Once you've got a good handle on CSS selectors, open up [`css-challenge.html`](exercises/css-challenge-selectors.html) and see if you can write some complete CSS rules of your own. 

The full answers and a reference of what your version should like like is [here](exercises/css-challenge-selectors-ANSWER.html)

## Selector Review
Review:

1. How to we select elements?
	* <span class="white">simply type the element name</span>
1. How do we select all paragraphs?
	* <span class="white">p {...}</span>
1. How do we select classes?
	* With a dot notation
	* <span class="white">div.wrapper {...}</span>
1. How does `div.wrapper` read?
	* <span class="white">div with the class of wrapper</span>
1. How does `.error` read?
	* <span class="white">anything with the class of error</span>
1. How do we select elements with a single class (human)?
	* <span class="white">p.human {...}</span>
1. How do we select elements with multiple classes (food and human)?
	* <span class="white">p.human.food {...}</span>
1. How do we write multiple selectors, for a single rule?
	* <span class="white">We use a comma</span>
	* <span class="white">p.food, span.error {...}</span>
1. how does `p.food, span.error {...}` read?
	* <span class="white">paragraph with the class of food AND span with the class of error</span>
1. What is a parent child selector?
	* <span class="white">We can narrow down our searching to a parent element and then search within that element</span>
1. When is a parent child selector useful?
	* <span class="white">We often do no want to append a class to every single child element when we can just write a selector for its parent</span>
1. Give me an example of the above:
	* <span class="white">ul.groceries li {...}</span>
1. How do you select all links within a div with the class of sidebar?
	* <span class="white">div.sidebar a {...}</span>
1. What is a pseudo selector?
	* <span class="white">Targeting an element in specific state</span>
	* <span class="white">most common is a:hover {...} to select links only when hovered</span>

## Selector Quick reference:
**Select a specific type of element** = the element name

`p` selects all paragraph tags

**Select a specific type of element with a class**

`p.warning` selects only paragraph tags with the class of error

**Select any type of element with a class**

`.warning` selects any element with the class of warning.

**Select element with multiple classes** = multiple dots:

`div.food.human` must both have a class of food and human

**Select elements with either/or** = comma delimited

`div.food, div.human` gets both div with the class of food *and* div with the class of human.

**select child elements of a child element** = space

`ul.groceries a` selects all links within an unordered list with the class of groceries

They can go multiple levels deep:

`ul.groceries a span` selects all spans *within* a link *within* an unordered list with the class of groceries