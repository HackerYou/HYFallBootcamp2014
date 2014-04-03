# Week 2 , Day 2
## Styling Lists with CSS

So we have already learned that we have both **ordered lists** and **unordered lists**

	<ol>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ol>

	<ul>
		<li>Milk</li>
		<li>Bread</li>
		<li>Eggs</li>
	</ul>

There are three main CSS properties that we can use to style lists:

### list-style-position

You may have noticed that by default your lists look like this:

![](http://f.cl.ly/items/2c2Q1p1M0E1I0K0R2530/Screen%20Shot%202012-10-14%20at%207.31.41%20PM.png)

Why are the bullets on the outside? By default, lists are `list-style-position: outside;`

Switch it to inside

	ol,ul {
		list-style-position:inside;
	}

You'll see it look like this:

![](http://f.cl.ly/items/2E22290f3W1R0B1t2l0f/Screen%20Shot%202012-10-14%20at%207.34.02%20PM.png)

### list-style-type

Filled in dots, or "disc", are the default for unordered lists and decimal numbers for ordered lists, but we have total control over that:

	ul {
		list-style-type: square;
	}

<ul style="list-style-type:square;">
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
</ul>

	ul {
		list-style-type: circle;
	}

<ul style="list-style-type:circle;">
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
</ul>

	ul {
		list-style-type: asterisks;
	}

<ul style="list-style-type:asterisks;">
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
</ul>

	ul {
		list-style-type: binary;
	}

<ul style="list-style-type:binary;">
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
</ul>

**Same goes for ordered lists**

	ol {
		list-style-type: decimal-leading-zero;
	}

<ol style="list-style-type:decimal-leading-zero;">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ol>

	ol {
		list-style-type: lower-roman;
	}

<ol style="list-style-type:lower-roman;">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ol>

	ol {
		list-style-type: armenian;
	}

<ol style="list-style-type:armenian;">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ol>


### list-style-image
The third and final CSS property is for when you want your own image bullets. It works almost exactly like background-image.

	ul {
		list-style-image:url(http://wes.io/K8oo/yellow-bullet.gif);
	}

<ul style="list-style-image:url(http://wes.io/K8oo/yellow-bullet.gif);">
	<li>Milk</li>
	<li>Bread</li>
	<li>Eggs</li>
</ul>

### list-style shorthand

Just like some other properties, we can use short hand with the CSS property  `list-style`.

	ol {
		list-style: inside upper-roman;
	}

You can also apply any of these styles to list items if you want to get more specific:

	ol li.warning {
		background:red;
		list-style:inside circle;
	}


** Open up `list-style.html` and write some CSS to do the following:**

1. Change the ordered list to lowercase roman numerals
1. Change the unordered list to squares and outside
1. Change the unordered first list item to asterisk and inside
1. Change the unordered third list item to have a custom bullet. Use http://wes.io/K8oo/yellow-bullet.gif

You may either add classes to the list items or use pseudo classes.

## Nested Lists

We haven't done much with nested lists yet, but just like any other elements we can totally nest ordered or unordered lists inside of list items:

	<ul>
		<li>Milk</li>
		<li>Bread
			<ul>
				<li>Rye</li>
				<li>Whole Wheat</li>
				<li>Pumpernickel</li>
			</ul>
		</li>
		<li>Eggs</li>
		<li>Beer</li>
		<li>Sketti
			<ul>
				<li>Margarine</li>
				<li>Ketchup</li>
			</ul>
		</li>
		<li>Sauce</li>
		<li>Hot Dogs</li>
	</ul>

How can we target _just_ this nested list level with simple parent child selectors:

	ul li ul {
		background:red;
	}

Using the nested lists in `nested-lists.html`

1. Make the first nested ordered list list-style-type of binary
1. Adjust the margin and padding of the first nested ordered list so its not indented so far.
1. Color the main unordered list background blue, color white.
1. colors its sub lists background red


## Using lists for Navigation

Now that we have a handle on unordered lists, we can start to use them for creating navigations for our websites.

Almost all navigations on the web are unordered lists filled with list items and links. Lets start with a really simple example. Open up `simple-nav.html` in your browser and editor and we will work through an example.

First off we need to take the margin and padding off that unordered list:

	ul.nav {
		margin:0;
		padding:0;
	}

Now we need them to be displayed beside each other, instead of breaking onto the next line. How would we do that?

Remember `display:inline;` ? By using this on the list items, they will jump up beside each other.

	ul.nav li {
		display: inline;
	}

Note how the bullets disappear. We could also float them left and set the list-style-type to none.

	ul.nav li {
		float:left;
		list-style-type:none;
	}


We can now go ahead and style it as we wish. Lets make it look like this:

![](http://f.cl.ly/items/2Z0E1Y3l403L410l251G/Screen%20Shot%202012-10-14%20at%209.55.39%20PM.png)

Note: its best practice to put your styles on the link themselves rather than the `<li>` because we want the entire link to take up all the space.

### Centering Navigations

Sometimes you'll have a navigation that you want centered on the page. This is easy as pie if you got the last example. Open `centered-nav.html` and we will work through another example.

First we need to change over our list from bulleted to inline:

	ul li {
		display:inline;
	}

Then its as easy as centering the text inside of the nav:

	ul {
		text-align:center;
	}

Super basic, we can take it a step further and style the links for something a little more visually appealing:

	ul li a {
		padding: 5px 10px;
		color:white;
		font-family: sans-serif;
		background:purple;
		text-decoration: none;
	}
		ul li a:hover {
			background:pink;
			color:black;
		}

## Dropdown Navigations

A really useful part of doing navigations with unordered lists is that we can create dropdown navigations with nothing but a few CSS rules, some clever positioning and the `:hover` state.

Lets work through an example. Things can get a little confusing here so stay with me. Open up `dropdown.html` and you'll see a basic navigation unordered list.

Lets style the the list and nested list different colours so we know whats going on:

	ul {
		background:#BADA55;
	}
		ul li ul {
			background:#00E0FF;
		}

Now we need to make the first list items inline:

	ul li {
		display:inline;
	}

Hrm, but that makes both the parent nav and the sub nav inline, we only want the parent nav to be inline, so lets revert the second nav:

	ul li ul li {
		display:list-item; /* Set the sub navs list items back */
	}

The above uses parent &rarr; child selectors to select only those list items nested inside another unordered list.

Okay, looking okay so far. Lets get the hover part working. First thing we need to do is hide the sub menus by default.

	ul li ul {
		background:#00E0FF;
		color:white;
		display:none;
	}

Then, how do we show them only when we hover? What should we trigger the hover on?

Since the sub nav is nested inside of the parents `<li>`, we want to trigger it on there. We use display:block to switch it back from display:hidden;

	ul li:hover ul {
		display:block;
	}

Now you should see the sub nav when you hover over its parent:

![](http://wes.io/KAhq/Screen%20Shot%202012-10-15%20at%2010.43.32%20AM.png)


Problem now is that it pushes everything after the sub navigation down? Why? Because we are using `display:block;` !

If only we could position it that it did not take up any extra space. It should "give up its seat". This is where we start to use `position:relative` and `position:absolute;`

We want the sub menu to be absolute so it doesn't take up any room within its parent and the parent `<li>` to be relative so we can base out positioning off of that.

	ul li {
		display:inline;
		position: relative;
	}
	ul li ul {
		background:#00E0FF;
		color:white;
		display:none;
		position: absolute;
	}

Bam! with just that, we now have a very simple dropdown menu. Its very ugly, but it works! We can use CSS to make cosmetic changes in the future.

![](http://wes.io/KATD/Screen%20Shot%202012-10-15%20at%2010.48.37%20AM.png)

## Exercises

We have a number of exercises today all revolving around menus. Find them in your exercieses folder, labelled `lists-ex1` through `lists-ex6`.

There is a challenge question for you CSS pros - exercise #6.

## Review: Navigations
1. What element do we use to create navigations?
	1. <span class="white">Unordered lists</span>
1. Why do we use it?
	1. <span class="white">Unordered lists allow us to have full control over the look and feel of a navigation verses just inline links</span>
1. How do we style a list's bullets?
	1. <span class="white">list-style-type</span>
1. How do we have no bullets?
	1. <span class="white">list-style-type:none;</span>
1. How do we change the list items from vertical to side by side?
	1. <span class="white">display:inline; OR float: left;</span>
1. What is the difference between the above two?
	1. <span class="white">display inline allows us to center elements while float left or right doesn't</span>
1. How do we solve the 'natural space between list items' issue when we have `display:inline`
	1. <span class="white">Set the parent to font-size:0; and then then reset the font size on the list item or link</span>
1. What HTML sturcture do we use to create dropdown navs?
	1. <span class="white">nested unordered lists</span>
1. Which of the following is correct? Why?

		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
				<ul class="sub-nav">
					<li><a href="#">Things I like</a></li>
					<li><a href="#">Pictures of me</a></li>
				</ul>
			<li><a href="#">Contact</a></li>
		</ul>

		<!-- OR -->

		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a>
				<ul class="sub-nav">
					<li><a href="#">Things I like</a></li>
					<li><a href="#">Pictures of me</a></li>
				</ul>
			</li>
			<li><a href="#">Contact</a></li>
		</ul>

	1. <span class="white">The second one because we must have the ul nested inside of the parent li</span>
1. How would we turn the previous nav into a dropdown? What CSS would we use?
	1. <span class="white">lets do it together!</span>
1. Why do we apply most styles on the link and not the list item?
	1. <span class="white">We want  maxiumum clickable area for our links, list items arent clickable</span>
1. What position do we apply to the sub menu to make it dropdown? What musst we do to the parent?
	1. <span class="white">The dropdown must be absolute, the parent li must be relative</span>