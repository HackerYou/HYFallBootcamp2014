---
layout: notes
title: HTML Forms
topic: html
---
# HTML Forms

## HTML Forms and Inputs
There is one part of HTML markup that we haven't talked about yet, and that is HTML Form.

Put simply, forms are a collection of inputs that are used to take in information from a user. When submitted, that information is sent to a server and then the server analyzes the data and does something with it.

There are two major parts to forms:

1. **inputs** - Inputs are ways that we can collect information from a user. The most common inputs are plain text boxes that might ask you for something like your email address, password or name. There are many types of inputs which we will look into in a second.
1. **The form itself** - The form is how we how we group **sets of inputs** together. All inputs inside of a form tag belong to that form and will be sent over the internet when that form is **Submitted**

Lets take an example of twitter.com and break it down:

![](http://f.cl.ly/items/3B3u1Y251y1E322q3P0x/Screen%20Shot%202012-10-17%20at%2012.37.19%20PM.png)

We see here two different forms:

1. The sign in form
1. The register forms

They both have different types of inputs depending on what you want to do.

The first one has 4 inputs: an email input, a password input, a check box for if you want it to to remember your password and a submit button.

The second one has 4 as well: Name, email, password and a submit button.

When the log in form is submitted, it send the information in the inputs to the servers at twitter.com who then check if the information if correct. If it is, they display your dashboard, if not they show you an error screen.

The important thing to note here is that we use a form to send information from the **browser** to the **server**.

## The Server side
When we work with forms, we start to dip into what we call **server side technologies**, which means a computer in the cloud computes what it is sent based on some logic on the server. In our last example, twitter will check its database to make sure that 1) There is someone by the username of `joeschmoe` and 2) the password supplied is a match of the one they have on file for the user `joeschmoe`.

With just HTML and CSS, we can't really do much with forms. That is because the HTML only creates the form and the browser only sends the information to the server. Once it hits the server, its up to them to do what they want with it. Such things include:

- checks if username and password match
- uploads a photo
- post a new listing to craigslist
- add a comment on a blog post
- post a tweet / update to a users timeline

We wont be touching on any serverside languages in this course, but if you do want to explore what happens once you submit the form to the server, you look into learning a language such as Ruby (Ruby on Rails framework), PHP (Code Igniter/WordPress), Python(Django), NodeJS (JavaScript on the server), ASP /.NET ( Microsoft products).

Lucky for us there are services that do the entire server side part for us. In our final project, you can use a service called **Wufoo** to do the email form sending for us.

## The Form Tag
The form tag itself is very simple. It takes a number of **attributes** to specify some information about the form. Lets take a look an example contact form.

	<form action="sendEmail.php" method="POST" class="myForm" autocomplete="off" name="myForm">
		... inputs go here ...
	</form>

1. **action** is the address of a serverside file that will handle the information sent to it. In this example I have a php file called sendEmail.php
1. **method** - Generally POST or GET which are two ways of sending information to a server. POST used when sending passwords. You generally wont need to worry about this until you get into developing with a serverside language.
1. **class** - Just like any other element, we can add classes (and an id) to a form
1. **autocomplete** - This can be applied to the entire form or a specific input. It disables the autocomplete that your browser might fill in for you. There are also two others called **autocorrect** and **autocapitalize** which you can set to off if you are developing for that pesky autocorrecting iphone.
1. **name** can be applied to both the form and its inputs. It's basically a way of referencing the form when you get into both JavaScript and server side languages

## Inputs
Inputs are the second piece of the pie in HTML forms. They collect the inputted information, usually text, from the user.

Note that inputs are **self closing** - just like images. There is no need to close an input tag.

### Input type="text"

The most basic and most common input is a text input

	<input type="text">

Makes: <input type="text" name="firstName">

As we would with a div, span or any other element, we can add a class to our inputs and then use CSS to style it:

	<input type="text" class="myInput" name="firstName">

	<style type="text/css">
		.myInput {
			padding:10px;
			border:2px solid blue;
			width:400px;
			font-size:40px;
			color:green;
		}
	</style>

<input type="text" class="myInput" name="firstName" style="padding:10px; border:2px solid blue; width:400px; font-size:40px;color:green;">

### Input type="password"
Exactly like input type="text" but changes characters to dots so the password isn't revealed to sly and sneaky snoopers

<input type="password">

### Input type="submit"

Input type=submit is technically an input, but you would probably think of it as a button. The submit input is the magic button that submits the form and sends the information to the server.

	<input type="submit">

<input type="submit">

You can style the submit button in any way you want, the above is just a default styling for your browser. More on this in a bit.

You can use the `value` attribute to change the text inside of the button.

	<input type="submit" value="Heyo! I've finished the form so you can send it now!">

<input type="submit" value="Heyo! I've finished the form so you can send it now!">

### Input type="email"

Part of HTML5, this is a new input. It works exactly like a text input but it will validate the input for a properly formatted email address. This is pretty new so if the browser doesn't support it, it will just fall back to a text input.

	<input type="email" name="email">

Try submit this form with an invalid email address

<form> <input type="email"> <input type="submit"> </form>​

![](http://wes.io/KEjD/Screen%20Shot%202012-10-17%20at%201.34.48%20PM.png)

### Input type=search

Again, exactly like input text, but in newer browsers it provides a &times; to clear the search box as well as some different styling.

	<input type="search">

<input type="search" name="q">

### Input type=file

This input allows the user to select a file from their computer.

	<input type="file" name="profilePicture">

<input type="file" name="profilePicture">

You  can also pass it **multiple="true"** to allow for multiple file selection

### Input type=color
Another new input as of HTML5 - will fall back to input text if not available.

	<input type="color" name="bgColor">

<input type="color" name="bgColor">

### Input type=range

Allows you to implement sliders - handy for when users need to gauge something based on a numerical value. I use this sometimes to get a zoom % from the user when zooming into photos.

	<input type="range" name="zoomLevel">

<input type="range" name="zoomLevel" style="width:100%;">

You can set the max and min values as well as a step value.

	<input type="range" name="zoomLevel" min="30" max="150" step="10">

<input type="range" name="zoomLevel" min="0" max="250" step="20" style="width:100%;">

### textarea

Textarea is the weird cousin of the bunch, its not an input tag and it allows for multiple lines. It **does** need to be closed

	<textarea name="bio" cols="30" rows="10"></textarea>

<textarea name="bio" id="" cols="30" rows="10"></textarea>

Here we see two new attributes: **cols and rows**. This value is the # of characters the text area can hold vertically and horizontally.

For some reason, valid HTML requires we input cols and rows as part of the tag even though we can use CSS width/height to do this. If you leave them out, they will fallback to 20/2 cols and rows respectively. I wont tell anyone if you leave them out, no harm done.

### Radio Buttons

Radio buttons are useful for when you want users to select from a list of options but only click one. We can group them together by giving them the **same name value**

	Small <input type="radio" name="shirtSize" value="small">
	Medium <input type="radio" name="shirtSize" value="medium">
	Large <input type="radio" name="shirtSize" value="large" checked="true">

Small <input type="radio" name="shirtSize" value="small">
Medium <input type="radio" name="shirtSize" value="medium">
Large <input type="radio" name="shirtSize" value="large" checked="true">

See how I set the `checked="true"` to the third one? Thats how I can set the default selected radio button. You may sometimes also see

	<input type="radio" name="shirtSize" value="large" checked>
	<!-- OR -->
	<input type="radio" name="shirtSize" value="large" checked="checked">

Both are valid and work the same as `checked=true`

### checkboxes
Very similar to radio buttons but with the ability to check multiple values

	salsa <input type="checkbox" name="topping" value="salsa">
	avacado <input type="checkbox" name="topping" value="avacado" checked>
	hotsauce <input type="checkbox"name="topping" value="hotsauce">
	ranch <input type="checkbox" name="topping" value="ranch" checked>
	lemon <input type="checkbox" name="topping" value="lemon">

salsa <input type="checkbox" 	name="topping"		value="salsa">
avacado <input type="checkbox" 	name="topping"		value="avacado" checked>
hotsauce <input type="checkbox" name="topping"		value="hotsauce">
ranch <input type="checkbox" 	name="topping"		value="ranch" checked>
lemon <input type="checkbox" 	name="topping"		value="lemon">

Note how each one has the same **name** but different **value**

### Dropdown Select
This one is a little different because it contains multiple elements - you can think of it as similar to an unordered list.

First we have a `<select></select>` tag and inside of that, we define the available options with the `<option></option>` tag.

	<select name="country">
		<option value="canada">Canada</option>
		<option value="usa">'Merica</option>
		<option value="france">France</option>
		<option value="germany">Germany</option>
		<option value="netherlands" selected>Holland</option>
	</select>

<select name="country">
	<option value="canada">Canada</option>
	<option value="usa">'Merica</option>
	<option value="france">France</option>
	<option value="germany">Germany</option>
	<option value="netherlands" selected>Holland</option>
</select>

In the above example, the **value** is what gets sent to the server and he text in between the the option tags is what the user sees.

Note that we cannot use any HTML inside of an option tag.

### Input x-webkit-speech

Kind of a fun and useful attribute you can add to your HTML is `x-webkit-speech` which allows users to speak their text inputs. This only works on chrome at the moment.

	<input type="text" x-webkit-speech="true">

<input type="text" x-webkit-speech="true" style="font-size:25px; width:100%;">

### Making an input required
Another handy part of HTML5 allows us to easily make an input required. Before this we needed to use JavaScript to check if inputs were valid, now we just pass the required attribute

	<input type="text" name="firstName" required="true">

<input type="text" name="firstName" required="true">

### Other attributes

#### Placeholder
If you want to have default text in your input that clears when a user starts typing, use the **placeholder** atrribute.

	<input type="email" name="emailAddress" palceholder="Please enter your email address">

<input type="email" name="emailAddress" palceholder="Please enter your email address" style="width:100%; font-size:20px;">

#### Character Limit
Limit the number of characters a box will take. Useful for limiting how long a username can be.

	<input type="text" name="userName" placeholder="max 6 chars please" maxlength="6">

<input type="text" name="userName" placeholder="max 6 chars please" maxlength="6">

#### Default Value
You can set the default value on any input by simply setting the value attribute

	<input type="text" name="phoneNumber" value="416-">

<input type="text" name="phoneNumber" value="416-">

Note: there is also an input for phone numbers called `<input type="tel">`

#### Disabled
Disable an input

	<input type="text" value="you cant edit me!" disabled>

<input type="text" value="you cant edit me!" disabled>

#### Hidden
Hide an input with input type="hidden". This is similar to display:none, but the better way to go about it in the case that your CSS doesn't load.

This input is often used to store meta data related to the page. Sometimes codes that mean nothing to the user:

	<input type="hidden" value="3Xrg54@Scds!">

Gives us:

<input type="hidden" value="3Xrg54@Scds!">

[lol]

## Labels
There is a third type of element that is associated with HTML forms and that is the `<label></label>` tag.

A label is used to simply label an input. We can still use all our regular HTML - paragraphs, headings, strong, etc.. - inside of forms, but its best practice to use a label when naming an input.

A basic form might look like this:

	<form action="login.php">
		<label for="username">Your Username:</label>
		<input type="text" name="username">

		<label for="userpass">Password</label>
		<input type="password" name="userpass">

		<input type="submit" value="log me in!">
	</form>

Makes:

<form action="login.php">
	<label for="username">Your Username:</label>
	<input type="text" name="username">

	<label for="userpass">Password</label>
	<input type="password" name="userpass">

	<input type="submit" value="log me in!">
</form>


We use the **for** attribute to associate the label with the input. This is purely to make the forms accessible for screen readers.

### CSS and forms/inputs
Whew! That was a lot to take in. Let's start coding some CSS to make them look a little nicer.

Before we jump into that, lets take a look at a new type of selector that we can use.

Selecting all inputs is easy:

	input {

	}

Or we could add a class to the ones that we want:

	input.emailAddress {

	}

But we can also select them based on their type

	input[type=email] {

	}

This can be useful to set browser defaults. For simplicity's sake, we will stick with classes today.

##Twitter Form Codealong

Open up <a href="exercises/form.html" class="exercise">**form.html**</a> in your browser and you'll see a basic form similar to the one on twitter. Lets see how we can use CSS to match it to pretty much the exact style of twitter.

Most inputs and forms are just like any other element, so we can use whatever CSS we want on them.

Before we go on, we should note that at this time, you cannot style the look and feel of radio buttons, dropdown selects, file inputs, or checkboxes. There are sneaky Javascript ways to fake this, but no pure CSS solution.

The completed version is <a href="exercises/form-ANSWER.html" class="exercise">here</a> if you need it.

##Exercise: Styling Inputs

Getting the hang of both CSS and HTML with forms takes practice, open up <a href="exercises/inputs-exercise.html" class="exercise">**inputs-exercise.html**</a> and work through the problems, matching both the HTML/functionality as well as the CSS look and feel.

Open the <a href="exercises/inputs-exercise-ANSWER.html" class="exercise">answer</a> in your browser as a reference for how it should look.


## Review

<style type="text/css">
	.white {
		color:white;
		border-bottom: 1px solid black;
	}
	.white:hover {
		color:black;
	}
</style>
1. What is a form tag?
	1. <span class="white">A form tag wraps and groups inputs together for a single purpose - signing into a website or editing a profile for example</span>
1. What is an input?
	1. <span class="white">An input is an area to collect a single piece of information form the user, many inputs go inside of a form tag</span>
1. name 10 different kinds of inputs and what they are for
	1. <span class="white">Check the notes :) </span>
1. What type of input creates a "send" or "login" button?
	1. <span class="white">input with a type="submit"</span>
1. What happens if an older browser encounters a new input, like email?
	1. <span class="white">It will fallback to input with a type="text"</span>
1. What elements are allowed inside of the form tag?
	1. <span class="white">Any type of element!</span>
1. For accessibility, what do we use to name our inputs?
	1. <span class="white">`<label for="...">Label Name</label>`</span>
1. For the previous question, how do we associate one with an input?
	1. <span class="white">We set the `for` attribute to match the inputs `name` attribute</span>
1. What attribute do we use to set the default text?
	1. <span class="white">placeholder</span>
1. What attribute do we use to set a unique identifier for the server side?
	1. <span class="white">name</span>
1. What attribute do we use to specify where the form is sent?
	1. <span class="white">action - for example if we have a PHP script that sends the email call "sendEmail.php" - we would set it to wherever the path is</span>
1. How do we group checkboxes or radio buttons together?
	1. <span class="white">We set the same name value on all of the grouped ones</span>
1. What is the difference between an input and textarea?
	1. <span class="white">inputs are for single line inputs and textareas are for multi lines</span>
1. How do we set a checkbox or radio to be selected by default?
	1. <span class="white">set the attribute checked="true"</span>
1. What kind of input is a slider? What attributes can it have?
	1. <span class="white">Range, we can set the min, max, value (default value), and step</span>
1. What element do we use to create a dropdown menu?
	1. <span class="white">`<select></select>` tag</span>
1. What elements do we use within the above element?
	1. <span class="white">`<option value="can">Canada</option>`</span>
1. Name 10 different attributes that inputs or forms can use
	1. <span class="white">autocomplete, autocapitalize, autocorrect, name, type, for, class, action, method, placeholder, required, checked, value, min, max, step</span>