---
layout: notes
title: Best Practices
topic: html
---

# Code Organization & Formatting 

<!-- ## Review

1. We write ____ to create our website content structure.
	* <span class="hide">HTML</span>
1. We use **HTML** purely for __________ our content.
	* <span class="hide">describing</span>
1. We can mark up our content by surrounding it in <span class="hide">**tags**</span> that make up <span class="hide">**html elements**</span>
1. We use `<h1>` to `<h6>` tags for headings, `<p></p>` for paragraphs as well as many others which you will now tell me what they do: 
	1. `<strong></strong>`
	1. `<em></em>`
	1. `<img src="" alt="">`
	1. What are the two types of image paths? <span class="hide">absolute and relative</span>
1. We use  the `<span></span>` tags to wrap inline elements and target them with CSS.
1. We use `<div></div>` tags to group and organize elements on a page as well as target with styling later on
1. What is the difference between spans and divs?
	* <span class="hide">divs are block, spans are inline. We generally use divs to group elements together, and spans to target single words</span>
1. We use attributes such as **alt, src and title** to provide additional data to the HTML tag. What do these do?
1. We use the **class** and **id** attribute to name our elements and to make them selectable with CSS
	1. What is the difference between a class and an id?
		* <span class="hide">ids can only be used once</span>
	1. Can an element have multiple classes and ids?
		* <span class="hide">Yes multiple classes, no only a single id</span>
	1. What can I name my classes and ids?
		* <span class="hide">Anything!</span>		
	1. What is camelcasing?
		* <span class="hide">itsWhenYouWriteLikeThis. First letter of every word is capitalized except the very first word.</span>
1. We use **CSS** to style the look and feel of our website
1. We select elements from **html document** with CSS Selectors and then write **CSS Rules** to apply styles to them.
1. CSS rules have a definition made up of 1 or many property and values
	1. A selector can target all elements but just typing the element name:  
		![](http://wes.io/J3WP/diagrams.png)
	1. We use **dots** to select elements with class names  
		`.bigTitles { font-size: 100px; }`
	1. We use **hashes** to select elements with id names  
		`#nav { width: 100% }`
	1. Why do we recommend not using ids? 
		* <span class="hide">They can only be used once!</span>
	1. How would I select a span with the class or warning? -->


#Why should I keep my code clean and organized

Writing clean, organized and efficient code will not only make your pages run faster but it will be easier to maintain and can potentially reduce browser bugs. It's tempting to say "I'll fix it later" but later doesn't always come. It's important to refactor your code as you go along.

Here are some tips for writing purty code.

## Firefox 3D View
Let's look at css-fun.html in 3D view. This should help you get a better idea as to how and why we nest elements.

## Code Organization
As your website projects get bigger, they can become more difficult to navigate. Because of this, we its helpful to put code organization best practices into place.

We have covered this briefly before, but lets dive in and get some notes on it:

### Separate Files & Folder Structure
In last weeks example, we put the CSS inside `<style>` tags. This is okay for a single file, but the best practice is to separate it out into its own `style.css` file. Down the road you may even have 3 or 4 css files that you are working with - print and mobile stylesheets for example.

When the number of files in your project becomes large, its helpful to group similar assets into folders. A nice clean web project that has HTML, CSS, JavaScript, and images would look like this:

	index.html
	about.html

	/javascript/
	  -- scripts.js
	  -- jquery.js

	/style/
	  style.css
	  print.css
	  mobile.css

	/images/
	  dog.jpg
	  logo.png



### Code Indentation
The last tip of code organization is probably the most important one: code indentation.

As your code grows, it gets more confusing. We already learned that commenting can help this, but keeping the levels of your elements properly indented is just as important and it should soon become second nature.

Which piece of code is easier to read?

	<!DOCTYPE HTML>
	<html lang="en-US">
	<head>
	<title>CSS Exercise</title>
	</head>
	<body><div class="wrapper"><div class="header">
	<h1>My Website</h1>
	</div><div class="nav"></div>
	<div class="content"></div>
	<div class="footer">Copyright Hacker You 2012
	</div></div>
	</body>
	</html>


OR

	<!DOCTYPE HTML>
	<html lang="en-US">
		<head>
			<title>CSS Exercise</title>
		</head>
		<body>
			<div class="wrapper">
				<div class="header">
					<h1>My Website</h1>
					<div class="nav">
					</div>
				</div>
				<div class="content">
					<!-- Page content goes here -->
				</div>
				<div class="footer">
					Copyright Hacker You 2012
				</div>
			</div><!-- /.wrapper -->
		</body>
	</html>


The second one is longer, but you are able to get an idea for the page structure almost right away. If you are messy with indentation, chances are you end up with extra (or not enough) closing div elements.

Indenting code is easy, just press the tab button in front of your line. Most good text editors (Sublime Text included) will automatically indent your code as you write it as well as provide shortcuts for indenting large blocks of code.

### Sublime Text Indentation
Sometimes you will paste a block of code into a file and the indentation will be all goofed up. Sublime Text has something called **paste and indent**

Instead of pressing `cmd/ctrl` + `v` to paste (cmd + v for mac), press `cmd/ctrl` + `shift` + `v` to paste and indent properly.

Sometimes you will also have to indent several lines at a time. To do this, select all the lines you want and press `cmd/ctrl` + `}` to indent all of them at once, forward and `cmd/ctrl` + `{` to indent back.

**cmd⌘ on mac, ctrl on windows**

###Lists or divs?
Remember, HTML is used to describe the meaning of the content to the browser.  A `<div>` has no meaning and is used purely to put a box around an element to style it.  Often, divs are used to style multiple elements that share the same styles when a list can be used instead.  It 	can give the content more semantic meaning as well as provide an alternate way to add CSS.

## Organizing CSS

CSS can become a tangled mess if isn't managed properly. You might have multiple selectors styling the same element. You change the font-size but it doesn't do anything because the style is being re-defined somewhere else.

Add CSS comments and order your CSS by type to help you stay organized. See the following page for an example:

<http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/>

### Indenting CSS Selectors
It is best practice to have each rule on a single line as well as the selector and closing brace.

**best:**

	h2 {
		color:red;
		font-size:50px;
	}

**Also works when tight on space**

	h2 { color:red; font-size:50px; }

### Don't repeat yourself

If you have two boxes that are for the most part the same then avoid writing the same CSS rules twice. Write one rule that applies to both boxes and then add individual rules later. For example:

	```
	.box1, .box2 {
		width: 300px;
		height: 50px;
		padding: 10px;
	}
	.box1 {
		color: #fff;
	}
	.box2 {
		color: #444;
	}
	```

Or an even better way is to create a class that you can reuse for both boxes:

	```
	.box {
		width: 300px;
		height: 50px;
		padding: 10px;
	}
	.box1 {
		color: #fff;
	}
	.box2 {
		color: #444;
	}
	```

### Selectors efficiency

CSS selectors are read from right to left by the browsers. So for the selector `body #container ul li`, the browser will have to evaluate `li`, `ul li`, `div#container ul li` and the full selector. If you have just one unordered list then `li` is sufficient to apply the right style.

* Avoid being too specific when you don't have to.
* IDs are by definition unique so instead of `div#container` just write `#container`.
* Use classes to replace long/specific selectors.

Resource: [https://developers.google.com/speed/docs/best-practices/rendering?csw=1](https://developers.google.com/speed/docs/best-practices/rendering?csw=1)

###Going Beyond Basic Selectors

Read this: [The 30 CSS Selectors you Must Memorize](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048). Bookmark it. Now.

Using many of the more advanced selectors will reduce the need to add additional classes to your markup.

###Creating page layouts

How do you know when to use float, position, margin or padding?

####Float vs Position

If both float and position can be used to align elements, when should one be used over the other?

Recommended usage for floats:

* Content that needs to be flexible, variable content that may get bigger or smaller (ex. blog posts, sidebar content)
* block level elements related to the structure of the page.

Recommended usage for positioning:

* Content that doesn't interact with the structure of the page. (ex. positioning elements within a specific block of the page)
* Elements that exist outside the document flow. Positioning an element does not rely on it's surrounding elements. (ex. fixed nav)

Note: When using absolute or fixed positioning, floats are no longer effective.

####Margin & Padding

Padding adds space *inside* an element. It does not accept negative values.

Margin can be used to add space *outside* of the element. It also accepts negative values to which means it can have the appearance of removing space and making elements overlap.

However, use padding and margin to style spacing around the element, not for page layout styling or positioning large structural blocks.


## Compression

To make our websites faster we can compress the CSS and images. The CSS minifying will git rid of unnecessary whitespace and characters to reduce the size of the file. Image compression will "losslessly" optimize images by removing unnecessary bytes without affecting image quality.

* minify CSS: [http://www.csscompressor.com/](http://www.csscompressor.com/)
* compress images: [http://www.smushit.com/](http://www.smushit.com/)
* OSX impage compression tool: <http://imageoptim.com/>

Even with compression tools, it's still a good idea to crop your images to an appropriate dimension before using them on the web.  Users shouldn't have to download a 2000px hi-res photo if it's only going to be 200px wide on their screen.

##Use a CSS preprocessor
Use a CSS preprocessor like [Sass](http://sass-lang.com/) to be organized and more efficient by using variables, nesting, mixins and many more features.  Download a sample for setting up your <a href="examples/refactoring/sass-example.zip" class="exercise">Sass files (zip)</a>.

## Automating your Optimizations

You can automate a lot of these best practices with task runner tools like **Grunt** and **Gulp**. Here's a great tutorial from Chris Coyier on getting started with Grunt. <http://24ways.org/2013/grunt-is-not-weird-and-hard/>.
	
<!-- ## Review

1. CSS Typography
	1. What do we use the change the spacing between lines?
		* <span class="white">line-height</span>
	1. What do we use to change the spacing between elements? Inside? Outside?
		* <span class="white">padding inside, margin outside</span>
	1. what do we use to change the spacing between letters?
		* <span class="white">letter-spacing</span>
	1. ... to change everything to CAPITALS? lowercase? Capitalize?
		* <span class="white">text-transform: uppercase OR lowercase OR capitalize</span>
	1 ... to change the font size?
		* <span class="white">font-size</span>
	1. ... to change the font?
		* <span class="white">font-family</span>
	1. What do we use to ensure a proper fall-back of fonts?
		* <span class="white">We use a font stack</span>
	1. What fonts can we use on a website? (without webfonts)
		* <span class="white">only fonts that the current user has installed on their computer</span>
	1. What are webfonts? How and why do we use them?
		* <span class="white">fonts we can install to our webpage so anyone can use that font</span>
	1. How many text shadows can we have?
		* <span class="white">unlimited!</span>
1. What is the box model? What are the two kinds
	* <span class="white">the regular box model adds padding and border to the size of the element. So a 100px box with a 10px border and 10px padding would really be a 140px box. box-sizing:border-box; removes this and takes away from the total width/height. Remember: in any case, you must always account for margin.</span>
1. Why do we float things?
	* <span class="white">to line elements side by side</span>	
1. What are 4 ways we can set a background color?
	* <span class="white">black, #000, #000000, rgb(0,0,0), rgba(0,0,0,0.5)</span>
1. What is the difference between `background` and `background-image`?
	* <span class="white">background is a catch-all, we can set anything on it.</span>
1. What kind of elements can a background image be set on?
	* <span class="white">anything!</span> -->