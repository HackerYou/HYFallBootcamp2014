---
layout: notes
title: Intro to HTML
topic: html
---

#Intro to HTML Part

## What the heck is HTML?

* HTML stands for HyperText Markup Language
* HTML is the language we use to present content onto our web page
* Think of it as the skeleton of your web page from which everything else will be built on
* We use it to define the content areas and the structure of your page
* Very simple but very important as it is the underlying foundation of every web page
* As we said, HTML is used for defining content based on its meaning and its important to understand that HTML has __very little to do with the style of your website and the look of the content__ - that is what CSS is for and we will get into that later.

## The nuts and bolts of HTML
* When we write HTML, we create __HTML Elements__ by wrapping our content in __tags__
* These __tags__ describe the content that is inside of them. __not__ what they look like
* We use different kinds of __tags__ to create multiple __elements__ and all together they make up something called our __HTML Document__

## The makeup of markup
Let's take a second to breakdown what the code in a HTML document looks like. You'll likely never type this hand, but its useful to understand the underlying structure.
	
	<!DOCTYPE HTML>
	<html>
	<head>
		<title>My First Website</title>
	</head>
		<body>
			<p>Hello World.</p>	
		</body>
	</html>

You can view this in your browser or code editor by viewing [hello-world.html](exercises/hello-world.html).
	
1. #### The `DOCTYPE`
	Before we even start to markup our document, we need to define what the __doctype__ is. The __doctype__ is a way of telling the browser what version of HTML we are using. In the past these have been long, archaic string of text that corresponded with the version of HTML. Since we are only teaching the latest and greatest, we get to use the new, short HTML5 doctype!

	**Gross XHTML 1.0 Strict**

		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

	**Yay HTML5**

		<!DOCTYPE HTML>
		
	**Note:** The doctype is case-insensitive but HTML tags should be written in lowercase.

2. #### The `html`
	After we have declared the doctype, we start our HTML document by opening and closing our `<html>` tags as so

	**Adding the HTML tags**
	
		<!DOCTYPE HTML>
		<html>
		</html>

3. #### The `head`
	Pretty easy so far, now we are going to take a look at the __two main parts__ of an HTML document: __`<head>`__ and __`<body>`__

	The `<head>` of a document is used entirely for telling the browser information about the current page. We don't actually put any of our page's content into the head. Here are a few things that you may find in the head of a HTML document:

	**Adding in the `<head>` tags. Our document now looks like this:**
	
		<!DOCTYPE HTML>
		<html>
			<head>
				All head info goes in here...
			</head>
		</html>	
	* The **`<title>Title Tag</title>`** which is used to set the text in the browser's current tab:   
	![Title Tag Image](http://wes.io/IGed/Screen%20Shot%202012-07-23%20at%203.46.33%20PM.png)
	* __Links and Scripts__ to separate Stylesheets, web fonts or JavaScript Files
		* We will be going over these all at a later date, just know that we can include other files in the current document in the **`<head>`**.
	* **Page meta** - meta is defined as information about data. So, __page meta__ is information about the current HTML document. We can use __meta tags__ to describe various aspects of the page. A few options are:
		* description, authors and keywords for search engines to read
		* Specifically settings the image, title and description for when we share a post on facebook
		* Setting specific rules as to how a website scales on mobile tables and phones (more on this later!)
		
	__Let's view source on hackeryou.com and see what tags we have in our header!__

4. #### The `body`
	Finally, there is where we get to start adding in and _marking up_ our content.
	* While the `<head>` of the document is used for describing the page, importing stylesheets and and scripts, and generally setting everything up, the `<body>` is where the content lives.
	* Anything you see on a website is HTML written into the `<body>` of a document. 
	* The body is the biggest part of writing HTML, so let's take a closer look at everything.

	** Adding in the `<BODY>` Tags. Our document now looks like this: **
	
		<!DOCTYPE HTML>
		<html>
			<head>
				All head info goes in here...
			</head>
			<body>
				I'm the body, everything you see goes here!
			</body>
		</html>		

## What does it look like? What are these _tags_?

All HTML tags can be broken down to open and close like this:

	<tagname>content goes in here</tagname>

The tags along with the content inside make up our **HTML Element**. We will learn more about what tags are for in the next class.

## Marking up our content

You have probably seen some HTML before (or even coded some yourself) that looks like this:

	<p>Hello there! How are <em>you</em> today?</p>

The line above outputs something that looks like this:

><p>Hello there! How are <em>you</em> today?</p>

We wrap everything in the **`p`** tag because we are describing the content as a paragraph. Inside of that we wrap *"you"* in `em` - the emphasis tag - because we are describing the content as something that has an emphasis on the word that can change the nuance of a sentence.

The outputted result from the browser is human readable with some default styling.

## Separation of Content and Style (Very important)

At this point we are still only focusing on how we are creating our __HTML Document__ and not what it looks like.

Probably the most important thing you'll take away from today is that when we write HTML, we are **only describing** the meaning of the content by wrapping it in tags. If you have done some HTML in the past, you may have used some of the following tags to control how your website looks: (Note, please never use any of these)

	<u>I'm underlined!</u>
	<font size="large">HUGE FONTS!!!!11</font>
	<marquee>Anyone remember the marquee tag?</marquee>
	<blink>Blinky blinkerson</blink>
	<center>I'm centered text!</center>

While your intentions for using these tags are fine, you should never be concerned with the presentation of the your content when writing HTML - that is what CSS styling is for and we will learn a little of that next class.

In the previous version of HTML, known as XHTML, the `<b>` and `<i>` tags were *deprecated* or made obsolete because they were deemed as presentational tags, not semantic tags.  `<strong>` and `<em>` were introduced as semantic replacements for these tags. While `<b>` and `<i>` are now rarely used, they were reintroduced in HTML5 with new semantic meanings.
	
It used to be: 

	<b>bold text</b>
	<i>italic text</i>
	<strong>text with stronger emphasis</strong>
	<emphasis>test with emphasis</emphasis>

In HTML5, it now means: 
	
	<b>stylistically offset text</b>
	<i>text in an "alternative voice"</i>
	<strong>strong importance</strong>
	<emphasis>stress emphasis</emphasis>

**More info:** [HTML5Doctor: The i, b, em, & strong elements](http://html5doctor.com/i-b-em-strong-element/)

**Take away:** It's very important to create semantic, clean and valid markup before doing anything else. In class 2 we are going to take a look at all of the __HTML elements__ at our disposal for creating our HTML document.


## Nesting

## Nesting Tips
When you are nesting tags within each other, you must __always__ close them in the reverse order that you opened them. Failing to do so will cause your HTML be to __invalid__ and your page will break.

In this example, even though we close the `</div>` and `</strong>` tags, we do it in the wrong order. Because the `<div>` was the __first__ element to be opened, it needs to be the __last__ closed.

**Wrong:**

	<div><h1>Welcome</h1>, Today is <strong>September 1st</div></strong>
	
**Right:**

	<div><h1>Welcome</h1>, Today is <strong>September 1st</strong></div>

	
## Playing with HTML & CSS
The first few days of learning HTML & CSS can be a bit limiting because you have to learn the underlying fundamentals before you can do more advanced fun CSS!

This exercise is designed to give you a little taste of what we will be working with over the course of HackerYou. 

<http://codepen.io/wesbos/pen/Dovrc>

Open the above codepen and let's step through the HTML, adding class names where the comments say to do so.

When you finish that, try read through the CSS code and make some changes. Try and change values for sizes, fonts, borders, widths, padding and margin. See what happens.

## More Questions
1. What does HTML stand for? CSS?
	* <span class="hide">HyperText Markup Language, Cascading Stylesheets</span>
1. Give me an example of a tag
	* <span class="hide">html,head, link,body,p</span>
1. Give me an example of content
	* <span class="hide">"HackerYou is great!"</span>
1. Give me an example of two HTML Elements
	* <span class="hide">`<p>I'm the body, everything you see goes here!</p>`</span>
1. What is the entire thing called?
	* <span class="hide">The HTML Document</span>
1. What tags are bad?
	* <span class="hide">u,blink,marquee,center,font</span>
1. We are really concerned with separation of `_______` and `_____`
	* <span class="hide">Content and Style</span>
1. Why? What is HTML used for? What is CSS used for?
	* <span class="hide">HTML is for describing content, CSS is for styling content</span>
