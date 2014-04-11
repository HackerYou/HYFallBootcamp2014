---
layout: notes
title: HTML Elements
topic: html
---

# HTML Elements

## Viewing HTML in the browser

When we write HTML, we save our files with the extension of `.html`. To open an HTML file, you can either double click the file in your computer's file finder/explorer or right from Sublime Text, you can right click and select "Open in browser"

![](http://wes.io/NpjT/content)

If these are opening in another browser, you may want to set Chrome as the default browser. If you need help — grab a mentor or me at the break and we will set that up for you.

## Creating Elements with available tags

As of the latest HTML5 Specification - there are just over 100 different kinds of HTML tags at our disposal, many of which we either shouldn't be using (as we learned earlier) or aren't as commonly used.

There is a full list of all available tags at [http://www.quackit.com/html_5/tags/](http://www.quackit.com/html_5/tags/)

Let's take a look at the most commonly used tags used to mark up a document.

### A quick word on styles

HTML was originally created for formatting text only. So as a convenience, the browser gives us a handful of default styles that are applied to our HTML. Even though we haven't touched CSS yet, all of the below elements have some styling to them already. If you don't like these styles, no problem! We will change them to _anything_ we want using CSS.

### Six types of Headings `<h1></h1>` -> `<h6></h6>` 

Remember when we said HTML tags are use to describe the document? Well for our page's headings, we need to categorize the importance of each of those headings.

Think of your HTML document as if you were writing a paper.
You would have 1 main heading at the top of the page with the paper's name on it. This would be your Heading 1 - `<h1>Paper Title</h1>`

Then under that you may have several high level sections to break down the paper. These would be your Heading 2 titles. `<h2>`

Under each of those sections, you will probably have a few more smaller sections (`<h3></h3>`) and so on through to `<h6>`.

**As a rule of thumb, your web page should only ever have 1 `<h1>` tag which is usually the website's name. After that, use your discretion of a title's importance appending H2 to H6 tags. Don't let the default style of the tag determine which level heading you use.**

### Paragraph Tags `<p></p>` 

The paragraph tag is one of the most used tags on the Internet as a large part of all content on the web is text. This one is fairly easy to use: every time you have a full line break in your text, wrap that entire block of text with `<p></p>` tags. Let's use this following block of text from my website as an example:

>I’m super passionate about design, development, and business. I’ve been very fortunate to be able to do all three as a career.

>From a technical standpoint, I spend most of my time working with JavaScript, CSS3, HTML5 and PHP. I’ve been a WordPress developer for 5 years now and over the past year have been working a lot with HTML5, NodeJS and many sprinkles of CSS3. New and open sources web technologies make me super excited and I can’t wait to see whats to come of the web in the next few years.

>I learn from the community and love to share what I have learned back. I regularly have speaking events on everything from HTML5 to UI/UX. I’m part of the amazing Ladies Learning Code where I instruct the WordPress courses.

You can clearly see there are three paragraphs in this block of text. I would mark it up as follows:

	<p>I’m super passionate about design, development, and business. I’ve been very fortunate to be able to do all three as a career.</p>

	<p>From a technical standpoint, I spend most of my time working with JavaScript, CSS3, HTML5 and PHP. I’ve been a WordPress developer for 5 years now and over the past year have been working a lot with HTML5, NodeJS and many sprinkles of CSS3. New and open sources web technologies make me super excited and I can’t wait to see whats to come of the web in the next few years.</p>

	<p>I learn from the community and love to share what I have learned back. I regularly have speaking events on everything from HTML5 to UI/UX. I’m part of the amazing Ladies Learning Code where I instruct the WordPress courses.</p>


### Unordered, Ordered Lists and list items `<ul></ul>`, `<ol></ol>` and `<li></li>`
Suppose you wanted to create a bulleted list in html. You may be tempted to put an asterisk beside each line item and be done with it. **Remember we are describing the content to the browser** so this is how lists are done in HTML. We have two types:

*	**Unordered lists** for when the order of the bulleted items does not matter:
	*	Milk
	*	Eggs
	* 	Bread
*	**Ordered lists** for when the order *does* matter:
	1. Combine Ingredients
	1. Blend Mixture _slowly_
	1. Bake at 350 for 30 mins

Each item inside an unordered or ordered list is called a **list item** and is wrapped inside `<li></li>`. So our first unordered and ordered lists look like this:
	
	<ul>
		<li>Milk</li>
		<li>Eggs</li>
		<li>Bread</li>
	</ul>

	<ol>
		<li>Combine Ingredients</li>
		<li>Blend Mixture <em>slowly</em></li>
		<li>Bake at 350 for 30 mins</li>
	</ol>

**Quick Test:**

* What Tags are above?
* What Content is above?
* What elements are above?
* How many elements are above? 
* What else can you use lists for on the web?


### `<strong></strong>` and `<em></em>` - Strong and Emphasis
Remember when I said using the `<b>` tag and `<i>` tag was not preferred?

Instead, STRONG and EM to note that they are important and should have emphasis. Default styling in the browser already bolds and italicizes them accordingly.)

### `<div></div>` divs
The DIV tag in HTML is foundation for laying out a web page. We use divs to group together HTML elements into a defined section of content. Divs are also one of the few tags that have *no semantic meaning* and is used as a generic container. 

\*record scratch\* — let's go over that again because divs are super important. Divs are used as containers to group together common elements. We do this primarily for two reasons:

1. To keep our HTML modular — we should be able to easily move around chunks of HTML
1. To later target a group of elements with CSS

Later, when we get into CSS, we will see how we can style divs however we want, but for now let's take a look at how a very simple website may be laid out.

![](http://wes.io/IJQK/diagrams.png)

See how we divided up each section into a div? See how everything is nested inside the **wrapper* div? The code for something like this would look like:
	
	<!DOCTYPE HTML>
	<html>
		<head>
		</head>
		<body>
			<div class="wrapper">
				<div class="header">
					<p>I'm a header</p>
				</div>
				
				<div class="content">
					<p>I'm the content</p>
				</div>
				
				<div class="sidebar">
					<p>I'm the sidebar</p>
				</div>

				<div class="footer">
					<p>I'm the footer!</p>
				</div>
			</div>
		</body>
	</html>


### `<a></a>` Anchor Links
Chances are you have probably had to write a link to another page or website at some point in your life. Anchor links allow us to link to other

Links take an *attribute* of `href` which tells the link where to link do. Here are a few examples:
	
	<!-- Links to other sites -->
	<a href="http://google.com">Google.com</a>
	<a href="http://hackeryou.com">Visit the hckerYou site!</a>
	<!-- Links within our website -->
	<a href="about.html">Visit my about page</a>
	<!--linking a nested image to another page -->
	<a href="contact.html">
		<img src="images/contact.png" alt="">
	</a>

### `<span></span>` Spans
The span tag is a small, yet mighty HMTL tag. A span is an **inline element** which means that you can pop one right in the middle of a sentence and it wont give you a line break or any other unwanted effect. The span tag itself, like divs, have no semantic meaning.

Suppose we were writing a sentence about our favourite foods and wanted to add a background colour to each of the foods names so they could be easily referenced.

> My favourite foods are sushi, pizza and pulled pork

We would first wrap it in our paragraph tag:
	
	<p>My favourite foods are sushi, pizza and pulled pork</p>

and then around each food, we wrap it in a span with the class of food. We use a class so we can target just these specific spans with a style. More on classes and styles later!

	<p>My favourite foods are <span class='food'>sushi</span>, <span class='food'>pizza</span> and <span class='food'>pulled pork</span></p>

<p>My favourite foods are <span class='food' style="background:red; color:#fff;">sushi</span>, <span class='food' style="background:red; color:#fff;">pizza</span> and <span class='food' style="background:red; color:#fff;">pulled pork</span></p>

#### div or span?!!?!?!
This is a big source of confusion — when do we use a div and when do we use a span? Whats the difference? 

The technical difference between the two is `div` is a block element and `span` is an inline element. Now these probably don't mean much to you right now, so let's take a look at the previous example using divs instead of spans:

	<p>My favourite foods are <div class='food'>sushi</div>, <div class='food'>pizza</div> and <div class='food'>pulled pork</div></p>

<p>My favourite foods are <div class='food' style="background:red; color:#fff;">sushi</div>, <div class='food' style="background:red; color:#fff;">pizza</div> and <div class='food' style="background:red; color:#fff;">pulled pork</div></p>

Why does each item go onto a new line? Because `div`s are block element, which means they should not be used **in a line** or **inline**.

As a general rule of thumb, spans go inside other elements — such as `<p>` or `<h2>` — so we can later specifically target that bit of content. Divs are used to wrap larger sections of content together.


### `<img>` Embedded Image
Finally the image tag! Used to embed images into your webpage. We have two mandatory *attributes* here:

**src** this is the source of the image that is to appear  
**alt** this is the alternate text. It's used to describe the image to people who can't see images or search engine robots (who also can't see images... yet)

	<!-- using a url relative to the HTML page -->
	<img src="images/dog.jpg" alt="My Dog Hugo">

	<!-- using an absolute url from another website -->
	<img src="http://dogpictures.com/dog.jpg" alt="Someone else's dog">

#### Place dogs and pug holders

One of the many fun parts of being a web developer is using funny images for placeholders. So, in many of our examples, we will use random images that we found on the net. Often is the case where we require a specific size of image, so instead of finding an image and using photoshop to resize it, we can make use of services that provide placeholder images.

Here are a few options:

* [http://placehold.it/](http://placehold.it/)
* [http://placekitten.com/](http://placekitten.com/)
* [http://baconmockup.com/](http://baconmockup.com/)
* [http://nicenicejpg.com/](http://nicenicejpg.com/)

For each of the above, instead of setting the image src to a .jpg url, we set it to one of the previous URLs with the last two numbers being the `width` and the `height`:

	<img src="http://placehold.it/350x150">

<img src="http://placehold.it/350x150">

	<img src="http://placekitten.com/200/200">

<img src="http://placekitten.com/200/200">

	http://baconmockup.com/400/200	

<img src="http://baconmockup.com/400/200">	

	<img src="http://nicenicejpg.com/700/300">	

<img src="http://nicenicejpg.com/700/300">	
(A quick google search will turn up many more placeholder image services!)

## Attributes
Before we jump into all the tags, its important to understand what **attributes** are.

Attributes are used to provide additional info on the HTML element. Different elements require different types of attributes. Here are some common ones you will be using:

**src** - used to pass in the source of an element. Most commonly used on an image element:

	<img src="dog.jpg" alt="My Dog">
	
**href** - with anchor links, we pass the href to tell the anchor link where to point to
	
	<a href="http://hackeryou.com">HackerYou</a>
	
**alt**  - the alternate text that describes an image. Helpful for both search engines and visually impaired users

	<img src="dog.jpg" alt="My Dog">
	
**title** - provides extra information about an element such as a link or list item. When the user hovers over it, the little yellow tooltip shows up.

	<a href="http://google.com" title="Google is a great search engine!">Google.com</a>

![](http://wes.io/IKT5/Screen%20Shot%202012-07-25%20at%204.24.20%20PM.png)

**class** - This is probably one of the most important attributes that you can assign to **any** element. It allows us to be able to grab onto element(s) with that class with our CSS code and style only those elements. More on this when we learn CSS.	
	
	<p class='largeText'>Welcome to our site, we hope you enjoy browsing around!</p>
	
**id** - Exactly the same as class, but can only be used **once** on a website. In general and in this course we wont use IDs because we value code reuse. 
	
	<div id="wrapper">... entire website ...</div>

**lang** - This classifies the language and can be used for translation tools, improve quality of search results and even be used for styling the fonts based on the language!

	<html lang="en"> 

**charset** - helps the browser translates computer language (bytes) into characters & symbols. Special characters like round quotes and accented characters can be more effectively rendered.

	<meta charset="utf-8">

**Many More** - We will run into many more attributes as we work with HTML, most of which will be obvious as to what they do.  
`type=""`,`value=""`,`placeholder=""`,`style=""`, `checked=""`, `for="'`, `name="'`

**The Bad Parts** - As with HTML tags, older versions of HTML introduced some attributes which you should never use. As you may have guessed, these all relate to presentation. Any of these will work in the browser, but it is **not the job of HTML**. All of these can be completed with CSS.  
`width="'`, `height="'`, `align="'`, `color="'`, `size="'`, `bgcolor=""`, `font=""`


## The `<br>` and `<hr>` Tag
A quick word on these two tags. The `<br>` tag (the break tag) lets you clear lines in your html (similar to pressing enter in MS word) and the `<hr>` tag lets you insert an horizontal ruler.

You should try and stay away from these tags as much as possible because they both are doing something visual inside your HTML (the job of CSS!). **BUT**, they can be helpful when we are doing todays exercises as we haven't taken a dive in CSS yet.

	<img src="images/dog.jpg" alt="A Dog">
	<br>
	<img src="images/dog2.jpg" alt="Another Dog">


### Commenting Your Code

As developers, its super important that comment our code.

Commenting your code means leaving little notes for both yourself and future developers explaining what the code is doing. Often times you may stumble upon some code and either wonder why it was done that way, or wonder what the heck its doing all together. A well commented document allows anyone to jump in and start working without very much code reading.

Comments are also great for temporarily deactivating code from your document without deleting it entirely. Anything in comments is invisible to both the browser and the website visitor.

Every language has its own syntax for commenting code. We are HTML and CSS coders, so were going to take a look at how to do it in these two languages.

#### HTML Comments
HTML comments out anything between `<!--` and `-->`

	<!-- This is a basic comment -->
	<!-- <p>This is some <strong>HTML</strong> commented out -->
	<!--
		This is a
		muli line
		comment
	-->

Another useful way to use comments is to mark what closing divs belong to. This if very helpful when your page is hundreds of lines long.

	<div class="wrapper">
		<div class="header">
			<div class="nav"></div>
		</div><!-- /.header -->
	</div><!-- /.wrapper -->

Or marking where content starts and stops:

	<!-- Header Code STARTS -->
		My HTML Code...
	<!-- Header Code ENDS -->

#### CSS Comments
CSS Comments are almost the same as HTML comments except we use `/*` and `*/` to start and stop them.

	.body {
		color : red; /* I love red */
	}

You can also comment out entire lines:

	.body {
		/* font-size:100px; */
	}

Or entire rules all together while adding your own comments as to why its commented out:

	/*  This rule was a terrible idea, so ugly!
	.body {
		color : red;
		background:green;
		padding:20px;
	} */

## Exercise Time
We are going to take a whole document of unformatted text and mark it up with HTML tags to it is an HTML document.

Open up `markup-exercise.html` in your text editor and follow the comments through the entire document, marking them up as requested.