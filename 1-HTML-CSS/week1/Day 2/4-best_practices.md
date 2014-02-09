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
	
## Review
<style>.white {color:white;border-bottom:1px solid black;} .white:hover{color:black;}</style>


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
	background is a catch-all, we can set anything on it.
1. What kind of elements can a background image be set on?
		* <span class="white">anything!</span>

## Cross Browser Testing
Testing your code across multiple browsers can be a pain, but its crucial do do if you want to maintain a good experience for all users.

There are five main browsers:

1. Chrome
1. Firefox
1. Safari
1. Internet Explorer
1. Opera


Chrome has a rapid release schedule and it automatically updates, so you usually only have to support the latest version.

Firefox recently switched to a similar schedule, so supporting the latest version is 100% okay.

Safari is pretty aggressive about updating as well, most support the latest two versions of Safari. 

Opera has recently abandoned their browser engine and adopted Chromium / Blink, which is the engine behind Chrome. So, testing for Chrome is essentially testing for Opera.

Internet Explorer is the pain in every developer's ass. There are currently versions 6,7,8,9,10, and 11 in use. Most IE users are stuck on IE at a corporate job and cannot upgrade. While the future of IE looks very good and fast, at the moment we are stuck supporting buggy versions of IE.

Right now, most developers still support IE8, which is considered the last of the buggy browsers to support. 

### Testing Internet Explorer

#### IE Tester
IE tester for Internet Explorer: [http://www.my-debugbar.com/wiki/IETester/HomePage](http://www.my-debugbar.com/wiki/IETester/HomePage) - lets you open IE in every version. I recommend supporting IE 8,9 and 10 at the moment although I encourage you to view alanytics of existing sites to see if IE8 support is nessecary. 

#### Virtual Box + Modern.ie
Regardless of PC/MAC/Linux, you can run a copy of windows right inside of your operating system. Microsoft knows the pain of testing on multiple versions of IE, so they have provided images of windows with different versions of IE loaded onto them. You can download them at [http://www.modern.ie/en-us/virtualization-tools](http://www.modern.ie/en-us/virtualization-tools). These are huge downloads, so plan to do so on a stable internet connection.

To run them, you need a free program called Virtual Box — [https://www.virtualbox.org/](https://www.virtualbox.org/).

You can download a copy of windows specially made for testing IE on <http://modern.ie>

### Testing Firefox, Chrome & Opera
For Google Chrome you don't need to worry about old versions - it auto updates. It is always wise to check your website on both a PC and Mac version of both. 

### Testing Safari
For Safari you generally don't need to worry either, but in some edge cases I use this: [http://michelf.ca/projects/multi-safari/](http://michelf.ca/projects/multi-safari/)

### Other Testing
Here are a few tools you can use to help test:

[http://www.smashingmagazine.com/2011/08/07/a-dozen-cross-browser-testing-tools/](http://www.smashingmagazine.com/2011/08/07/a-dozen-cross-browser-testing-tools/)

* [Browser Stack](http://www.browserstack.com/) Provides live testing across mulitple browsers and mobile devices.
* [Sauce Labs](https://saucelabs.com/) also provides a similar service
* [Browser Shots](http://browsershots.org/) Gives you screenshots in many different types of browsers
* [Litmus](https://litmus.com/) provides testing in every type of email program you can imagine. Testing email is extremely difficult and this tool is invaluable. If you are coding an email for someone, make sure to bake a few months of Litmus into the price ($80/month). 
	* Paid MailChimp accounts also have litmus integration. It is slower (~10 mins for each test VS 2 mins) but cheaper ($20/month). 


### Mobile Testing
All tools aside, I prefer just to test on acutal hardware. I try and keep at least one device with every major version of the mobile operating system on it. If you are on your own, this can get expensive as phones aren't cheap. 

Many cities have Device Labs where you can go and test your website on every single device. 

HackerYou is starting a device lab that will be up and running very soon!

[http://devicelab.fi/](http://devicelab.fi/)