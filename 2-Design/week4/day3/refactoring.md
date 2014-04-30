---
layout: notes
title: Refactoring HTML & CSS
topic: html
---

#Refactoring and Maintaining HTML & CSS

Writing clean, organized and efficient code will not only make your pages run faster but it will be easier to maintain and can potentially reduce browser bugs. It's tempting to say "I'll fix it later" but later doesn't always come. It's important to refactor your code as you go along.

Here are some tips for writing purty code.

##Write clean code
Duh, right?

###HTML
Using proper indentation not only makes for better readability but also makes your work look more polished and professional.  Use the appropriate HTML tag to describe the *content* and make the CSS work with the HTML, rather than write non-semantic HTML just for styling purposes.

HTML indentation should *clearly* show which elements are nested. This will also make it possible to collapse code blocks in Sublime Text which comes in handy when the codebase gets really long.

Cure the *divitis*! It's not always necessary to throw a `<div>` around anything that needs to be styled because *every* HTML element is a box anyway! It's best to use a `<div>` when multiple elements need to styled together **as a group**.

Before:

 	<div class="header">
		<div class="logo">
			<img src="company-logo.jpg">
		</div>
	</div>

After: 
	
	<header>
		<h1>Company Name</h1>
	</header>


###Images - HTML or CSS?

Use `<img>` if the image is part of the content. (Exception: for logo images, many prefer to use the text replacement method to include a name in the `<h1>`)

ex. diagrams, profile picture, if the image needs to be printed

Use `background` or `background-image` for images that are for presentation and decoration.

ex. gradient backgrounds (if CSS3 cannot be used), shadows (if CSS3 cannot be used), sprites for faster page load and decorative images.


###CSS Setup

Start with general and reset styles first, then get more specific as required (`div.about` vs `.about`). Allow the CSS to do it's job and *cascade* the styles down to it's children.

Apply globals styles to the HTML element first (ex. `body`, `p`, `a`, etc) and general page layout classes (ex. `.wrapper`).

If styles are common on most of the page, it's better to add the CSS to a parent or basic selector and overriding it when necessary, rather than declaring the same style over and over again. (ex. Setting the font-family in the body and overriding it for headings only.)

If using a CSS preprocessor (Sass, Less, Stylus), declare base variables for commonly repeated styles such as colours and font styles.

Use comments to section off related styles to make for better organization. Be diligent about keeping related CSS grouped together. (ex. header, footer, buttons, etc)

##CSS best practices

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


####Specificity
As a general rule of thumb, start general and get as specific as needed. 

Using clear class names vs over-qualifying selectors

```
img.profile
```
```
.profile-image

```

Skipping a level (or two)

```
ul.nav li ul.submenu 
```

```
ul.submenu
```

```
.submenu
```

###Lean & Mean CSS
Writing efficient CSS will makes it easier to make changes.

If you find you are declaring the same styles over and over again, try combining selectors, using a shared class or apply the style to the parent selector.

When writing media queries and adding responsive changes, *only add the specific CSS property* that needs to be change. Do not repeat styles.

	.wrapper {
		max-width: 1140px;
		font-family: helvetica, arial, sans-serif;
		background: white;
		padding: 20px;
	}

	@media (max-width: 940px) {
		.wrapper {
			max-width: 900px;
			padding-top: 10px;
		}
	}

Avoid mixing shorthand and longhand properties.

Before:

	.example {
		padding: 5%;
		padding-top: 1%;
	}

After:

	.example {
		padding: 1% 5% 5% 5%;
	}

####Going Beyond Basic Selectors

Read this: [The 30 CSS Selectors you Must Memorize](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048). Bookmark it. Now. 

Using many of the more advanced selectors will reduce the need to add additional classes to your markup.


###Lists or divs?
Remember, HTML is used to describe the meaning of the content to the browser.  A `<div>` has no meaning and is used purely to put a box around an element to style it.  Often, divs are used to style multiple elements that share the same styles when a list can be used instead.  It can give the content more semantic meaning as well as provide an alternate way to add CSS.


Additional Resource: [Slaying the Dragon: Refactoring CSS for Maintainability](http://blog.alicialiu.net/post/46971921553/html5devconf-slaying-the-dragon-refactoring-css-for)





