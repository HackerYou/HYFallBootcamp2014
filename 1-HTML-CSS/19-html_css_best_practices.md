---
layout: notes
title: Best Practices
topic: html
---

#Best Practices

## Code Organization
As your website projects get bigger, they can become more difficult to navigate. Because of this, we its helpful to put code organization best practices into place.

We have covered this briefly before, but lets dive in and get some notes on it:

## Separate Files & Folder Structure
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

## Code Indentation
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

#### Sublime Text Indentation
Sometimes you will paste a block of code into a file and the indentation will be all goofed up. Sublime Text has something called **paste and indent**

Instead of pressing `cmd/ctrl` + `v` to paste (cmd + v for mac), press `cmd/ctrl` + `shift` + `v` to paste and indent properly.

Sometimes you will also have to indent several lines at a time. To do this, select all the lines you want and press `cmd/ctrl` + `}` to indent all of them at once, forward and `cmd/ctrl` + `{` to indent back.

**cmd⌘ on mac, ctrl on windows**

## Including CSS

* What are the three ways of including CSS to style HTML elements?
* What are the pros and cons of each approach?

### Organizing CSS

CSS can become a tangled mess if isn't managed properly. You might have multiple selectors styling the same element. You change the font-size but it doesn't do anything because the style is being re-defined somewhere else.

Add CSS comments and order your CSS by type to help you stay organized. See the following page for an example:

<http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/>

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

### Indenting CSS Selectors
It is best practice to have each rule on a single line as well as the selector and closing brace.

**best:**

	h2 {
		color:red;
		font-size:50px;
	}

**Also works when tight on space**

	h2 { color:red; font-size:50px; }


## Compression

To make our websites faster we can compress the CSS and images. The CSS minifying will git rid of unnecessary whitespace and characters to reduce the size of the file. Image compression will "losslessly" optimize images by removing unnecessary bytes without affecting image quality. 

* minify CSS: [http://www.csscompressor.com/](http://www.csscompressor.com/)
* compress images: [http://www.smushit.com/](http://www.smushit.com/)
* OSX impage compression tool: <http://imageoptim.com/>

Even with compression tools, it's still a good idea to crop your images to an appropriate dimension before using them on the web.  Users shouldn't have to download a 2000px hi-res photo if it's only going to be 200px wide on their screen. 