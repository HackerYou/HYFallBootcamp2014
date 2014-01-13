# Week 1 - Weekly Project

There is a major project every week. For this week you will build a single page website from scratch (a personal site if you don’t have one already). This project is meant to call upon everything we have done so far.

If you already have a personal website then you may choose to do your website on anything you wish. Here are some ideas:

* Try and recreate an existing website. A student last year replicated the hackeryou website.
* Site for a your own or a friends business
* Small site for a local charity

The layout is also 100% up to you, provided you include most/all of the below requirements. If you need some inspiration for the this project's layout, considering crafting the below layout or visiting these websites for ideas:

* [http://www.designfridge.co.uk/](http://www.designfridge.co.uk/)
* [http://cssremix.com/](http://cssremix.com/)
* [http://www.cssmania.com/](http://www.cssmania.com/)

![](http://wes.io/KLYI/projectWireframe.png)

## You must have at least the following:
1. When sizing the main divs - (header, general info, content, sidebar and footer in my example) - use percentages.
1. 1 `.html` page
1. 1 external `.css` file
1. box-sizing:border-box;
1. Clearfix
1. header div
1. footer div
1. Three divs that hold content (content and sidebar are two examples we have used so far)

## Bonus points for things we haven't covered yet

#### When finished

When you are done, zip the folder up and upload to Basecamp. I will review your code and make notes on your projects. Please submit by the following Monday, however earlier is definitely encouraged.

You will not be graded, I simply want to have a look at how everyone is coding and see what areas we are doing well at and what areas we need some more practice in.

There are no template files to start with, but you can visit past notes or projects to pull code from. If you need some guidance on where to start, this is how I would start the project:

#### Help getting Started
1. Create a new folder your project called `week1project`.
1. Inside that folder create index.html and a folder called `images` to store all image assets
1. Create a base HTML structure from the cheat sheet or an existing project
1. Create our `style.css` file in the same folder as `index.html`
1. Link the CSS from `index.html` with `<link rel="stylesheet" type="text/css" href="style.css">` in the HEAD
1. Write all your markup, adding classes where you think necessary
1. Write your CSS rules, saving and viewing in the browser as you go

##### Here is my base HTML if you need some help:

	<!DOCTYPE HTML>
	<html>
	<head>
		<title>My First Project</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
		<body>
			<p>get going!</p>
		</body>
	</html>

##### And then in my style.css file:
<small>Remember: becase we have a seperate style.css file, we **do not need** the `<style>` tags</small>

	* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

	body {
		/* start body styles here */
	}