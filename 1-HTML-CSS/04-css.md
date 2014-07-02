---
layout: notes
title: Intro to CSS
topic: html
---

#Intro to CSS

## Introducing CSS

We now have a good handle on HTML itself but you have probably noticed that all this HTML, when viewed, is pretty plain. We get that HTML is purely for marking up the document and describing the content. Now we get to explore the purely visual and presentational side of making websites with styling.

To style websites, we use **Cascading Stylesheets** or **CSS** as we will call it. CSS is a language that we write to apply style to various **elements** on our page. You can control the look, feel, size, colour and virtually any visual aspect of the elements on your page. CSS is definitely a lot more fun than writing markup, but its also a lot more complex than writing HTML. We are going to step through the foundational building blocks of writing good CSS and then step it up to make our websites look amazing.

### CSS Breakdown

Your CSS is made up of **rules**, here is a very basic rule to change all `<h3>` headings red:

	h3 {
		color:red;
	}

There are two main parts to a CSS Rule: **selector** and **declaration**.

The **selector** tells the rule which element(s) to apply the styles to. In our example above, we are targeting only `h3` tags. We will go more indepth on complex selectors later, for now know that this is how we specify which elements on the page get styled.

The **declaration** is where we define our styles. Inside the `{` and `}` we include both a **property** and **value**. In our example above, the property is **color** and the value is **red**. Pretty simple, eh?

![Diagram](http://wes.io/J3WP/diagrams.png)

We can include as many property and values inside the declaration as we want, they can sometimes get pretty big! Just remember to use a colon in between the property and value as well as end off your line with a semicolon.

## Colors in CSS
In the coming classes we take a look at 5 different ways to use color, but it's helpful to quickly look at the two main ways right now.

**name** - you can use the straight up name of the colour - for most basic colours (red, green, blue, pink...) as well as a few exotic ones like `papayaWhip` and `paleGoldenrod`. 

**hex value** - the most common way to specify a colour is with a hex code made up of the number sign `#` and a 6 digit alphanumeric code. The easiest way is to use a colour picker such as the one at [http://www.colorpicker.com/](http://www.colorpicker.com/) or use the photoshop eydropper tool.

If you aren't one for colours, I like to use the website [http://www.colourlovers.com/](http://www.colourlovers.com/) to find great pallets, hex codes supplied!

## Let's play with CSS a little (Exercise 2)
Writing CSS from scratch can be confusing if you are new to the game. The best way is to take some existing CSS, read it over, understand it and *hack it*.

In coming classes, we will be learning a **ton** more about CSS, and what the values are, but for now we will be playing with some simple CSS properties and values.

Go ahead and open up [css-fun.html](exercises/css-fun.html) in both your browser and your text editor. Change around the css values and see what happens!

## Adding your own markup (Exercise 3)
To get a handle on how to add your own markup, take a few paragraphs and and images that you either write or pull off a website and try and code them into [css-fun.html](exercises/css-fun.html) after the last paragraph. Add an h3 heading above the text and inset the image. You should use the proper HTML tags to insert the content. Good luck and be sure to ask questions as you go along.