<style>.white {color:white; border-bottom:1px solid black;} .white:hover {color:black;}</style>

# Week 1, Day 2 Best Practices

## Review

1. We Write ____ to create our website
	* <div class="white">HTML</div>
1. We use **HTML** purely for __________ our content
	* <div class="white">describing</div>
1. We can mark up our content by surrounding it in <span class="white">**tags**</span> that make up <span class="white">**html elements**</span>
1. We use `<h1>` to `<h6>` tags for headings, `<p></p>` for paragraphs as well as many others which you will now tell me what they do: 
	1. `<strong></strong>`
	1. `<em></em>`
	1. `<img src="" alt="">`
	1. What are the two types of image paths? <span class="white">absolute and relative</span>
1. We use  the `<span></span>` tags to wrap elements and target them with CSS.
1. We use `<div></div>` tags to group and organize elements on a page as well as target with styling later on
1. What is the difference between spans and divs?
	* <span class="white">divs are block, spans are inline. We generally use divs to group elements together, and spans to target single words</span>
1. We use attributes such as **alt, src and title** to provide additional data to the HTML tag. What do these do?
1. We use the **class** and **id** attribute to name our elements and to make them selectable with CSS
	1. What is the difference between a class and an id?
		* <span class="white">ids can only be used once</span>
	1. Can an element have multiple classes and ids?
		* <span class="white">Yes multiple classes, no only a single id</span>
	1. What can I name my classes and ids?
		* <span class="white">Anything!</span>		
	1. What is camelcasing?
		* <span class="white">itsWhenYouWriteLikeThis. First letter of every word is capitalized except the very first word.</span>
1. We use **CSS** to style the look and feel of our website
1. We select elements from **html document** with CSS Selectors and then write **CSS Rules** to apply styles to them.
1. CSS rules have a definition made up of 1 or many property and values
	1. A selector can target all elements but just typing the element name:
		> h {color:red; }
		1. ![](http://wes.io/J3WP/diagrams.png)
	1. We use **dots** to select elements with class names
		h2.bigTitles { font-size: 100px; }
	1. We use **hashes** to select elements with id names
	1. Why do we recommend not using ids? 
		* <span class="white">They can only be used once!</span>
	1. How would I select a span with the class or warning?


## Firefox 3D View
Let's look at css-fun.html in 3D view. This should help you get a better idea as to how and why we nest elements.

## Code Organization
As your website projects get bigger, they can become more difficult to navigate. Because of this, we its helpful to put code organization best practices into place.

We have covered this briefly before, but lets dive in and get some notes on it:


### Separate Files & Folder Structure
In last weeks example, we put the CSS inside `<style>` tags. This is okay for a single file, but the best practice is to separate it out into its own `style.css` file. Down the road you may even have 3 or 4 css files that you are working with - print and mobile stylesheets for example.

When the number of files in your project becomes large, its helpful to group similar assets into folders. A nice clean web project that has HTML, CSS, JavaScript, and Images would look like this:

	index.html
	about.html

	/javascripts/
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


The second one is longer, but you are able to get an idea for the page structure almost right away. If you are messy with indentation, changes are you end up with extra(or not enough) closing div elements.

Indenting code is easy, just press the tab button in front of your line. Most good text editors (sublime text included) will automatically indent your code as you write it as well as provide shortcuts for indenting large blocks of code.

#### Sublime Text Indentation
Sometimes you will paste a block of code into a file and the indentation will be all goofed up. Sublime text has something called **paste and indent**


Instead of pressing `cmd/ctrl` + `v` to paste (cmd + v for mac), press `cmd/ctrl` + `shift` + `v` to paste and indent properly.

Sometimes you will also have to indent several lines at a time. To do this, select all the lines you want and press `cmd/ctrl` + `{` to indent all of them at once.

**cmd⌘ on mac, ctrl on windows**


## Indenting CSS Selectors 
It is best practice to have each rule on a single line as well as the selector and closing brace.

**best:**

	h2 {
		color:red;
		font-size:50px;
	}

**Also works when tight on space**

	h2 {color:red; font-size:50px; }
	
## Cross Browser Testing
Testing your code across multiple browsers can be a pain, but its crucial do do if you want to maintain a good experience for all users.

There are five main browsers:

1. Chrome
1. Firefox
1. Safari
1. Internet Explorer
1. Opera


Chrome has a rapid release schedule and it automatically updates, so you usually only have to support the latest version.

Firefox recently switched to a similar schedule, however some users are still on 3.6. For this class, the latest firefox is okay.

Safari is pretty aggressive about updating as well, most support the latest two versions.

Opera isn't a huge market share so the latest version is fine.

Internet Explorer is the pain in every developer's ass. There are currently versions 6,7,8,9 and 10 in use. Most IE users are stuck on IE at a corporate job or are too out of touch to understand what a browser is. For these people we often have to support old and buggy versions.


IE tester for Internet Explorer: [http://www.my-debugbar.com/wiki/IETester/HomePage](http://www.my-debugbar.com/wiki/IETester/HomePage) - lets you open IE in every version. If you are on a mac, you need to either have another PC or Virtual Box and install windows to that. I recommend supporting IE 8,9 and 10 at the moment.

MultiFirefox - good tool here: [http://davemartorana.com/multifirefox/](http://davemartorana.com/multifirefox/) but I use my own method on OSX

[http://wesbos.com/run-two-versions-of-firefox-on-mac-osx/](http://wesbos.com/run-two-versions-of-firefox-on-mac-osx/)

For Google Chrome you don't need to worry about old versions - it auto updates.

For Safari you generally don't need to worry either, but in some edge cases I use this: [http://michelf.ca/projects/multi-safari/](http://michelf.ca/projects/multi-safari/)

For Opera you don't need to support older versions, most users are savvy enough to update. 


Here are a few tools you can use to help test:

[http://www.smashingmagazine.com/2011/08/07/a-dozen-cross-browser-testing-tools/](http://www.smashingmagazine.com/2011/08/07/a-dozen-cross-browser-testing-tools/)