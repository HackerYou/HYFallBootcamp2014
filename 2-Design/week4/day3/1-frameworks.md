---
layout: omit
title: Front-end Frameworkds
topic: ux
---

# Frameworks

By now you have probably heard of frameworks like Bootstrap or Foundation.

These are pre-built toolboxes of HTML, CSS and JavaScript that allow you to quickly mock up a website or application. They include many pre-styled elements for common things like grids, buttons, forms and icons. Most of them also provide some sort of framework for building a responsive website.

All of these frameworks work similarity to each other. You add classes to your elements which then apply a set of default styles.

These frameworks are extremely helpful in a few situations:

1. Back end developers who aren't strong in front end development can easily get a basic interface up.
1. Designers/developers can easily prototype or wireframe  an interface inside the browser, rather than in photoshop

So, why haven't we used frameworks in our class?

1. These frameworks do not teach you how to code CSS, they teach you how to add class names to elements. It's very easy to skirt through and not learn how underlying CSS works. Knowing why and how floats, display block vs inline, et all works is crucial to building websites and web apps. 

I've seen many people use these frameworks over learning CSS and the questions quickly change from "Why is my float/div/clear/typography acting like this" to "how do I code this in bootstrap / foundation". 

1. Creativity is smashed. These frameworks give you a set of pre-designed elements which most people use to lay out their website. It can be very hard to think outside the box when you start with a very specific one. 

If you have a really good understanding of HTML and CSS, these frameworks are fantastic as they will speed up your workflow. Just make sure the framework isn't a blackbox with unknown internals.


## Let's take a look!

The two most popular frameworks are [Bootstrap](http://twitter.github.io/bootstrap) and [Foundation](foundation.zurb.com). A new player recently launched by Adobe is [TopCoat](http://topcoat.io/).

We will be taking a look at foundation today. Let's take a quick look at that they have available at <http://foundation.zurb.com/docs/>


## Grids and Wireframing
Foundation is a fantastic wireframing tool. It allows you to quickly mockup the layout and responsive layout of a website without too much (or any) code. 

Foundation has a 12 column grid which most good designs are based upon. If you take a look at any content heavy website, you will start to notice that all the content files into a grid formation.

The idea is that instead of giving width and floats to every div, we use **pre-defined classes** to size the width of our columns. 

Classes are as follows:

**.row** — This is used as a wrapper of your columns. Before you start to use the grid, you need to wrap them in a div with the class of row.

`<div class="row">...</div>`

**.large-#** This is where you define the width of your column. We have everything from **.large-1** to **.large-12**. 1 being 1/12th of a column and 12 being the entire width. 

Want a 66%/33% column?

	<div class="row">
		<div class="large-8"></div>
		<div class="large-4"></div>
	</div>

No CSS required! 

**.medium-#** and **.small-#**
What is large? Large is the desktop sizes. If you resize your browser after that, they all snap to 100% wide. 

We also need to specify what the widths will be at medium (think tablet) and small (think phone) screen sizes. 

So, our above HTML might look like this:

	<div class="row">
		<div class="large-8 medium-7 small-6"></div>
		<div class="large-4 medium-3 small-6"></div>
	</div>

Ugly for real HTML, great for wireframing!

###Exercise

Let's take a sketched wireframe and code it up as a prototype in Foundation. 

Head over to <http://foundation.zurb.com/> and download the complete version of Foundation to get started.

