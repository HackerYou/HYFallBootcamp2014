# Week 2, Day 3 CSS Typography and Webfonts

## CSS Typography
Having good CSS Typography is one of the best ways to make your site look amazing. With CSS we have complete control over how our text looks and feels. We will spend the next while going through some of the available properties to style your text, but first we let's review a few different ways we can mark up text:

For the next couple examples, open up the file `typography.html`

### Text Markup

#### Headings
	<h1>Heading 1, for the most important / title of the document</h1>
	<h2>Heading 2, for the main titles of your document</h2>
	...
	<h6>Heading 6, the smallest of headings</h6>

#### Paragraphs, spans, strong and emphasis
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna deserunt mollit anim id est laborum.</p>

	<p>Hey there my name is <strong>Wes Bos> and I <em>really</em> like to code HTML and CSS.</p>

	<p>My birthday party is on <span class="date">February 18</span>, please come with presents!</p>


## Fonts, font-stacks and font-family
Perhaps the first thing you will want to do with CSS is change the font of either the entire document or of certain elements.

With CSS we can set the font with the **font family name**:

	body {
		font-family: "Helvetica";
	}

Or a **generic name**:

	body {
		font-family:sans-serif;
	}

The difference being that with a font family, you assume/hope the end user has that specific font on their computer. With a **Generic name** you let the browser/computer supply the best font. In the case of `sans-serif` a windows computer will deliver **arial** while a mac will deliver **helvetica**.

Available Generic names are:

* 'serif' (e.g., Times)
* 'sans-serif' (e.g., Helvetica)
* 'cursive' (e.g., Zapf-Chancery)
* 'fantasy' (e.g., Western)
* 'monospace' (e.g., Courier)

### Font Stacks
What if a user doesn't have the font you want installed? What will the font turn to?

Lets say we have a special font called `lobster` that I have downloaded and installed and then wrote the code below:

	body {
		font-family:'lobster';
	}

When I view the page, the font looks great, but if anyone else who doesn't have the font installed they wont see it and **the browser defaults to times new roman** (or another serif font).

Thats kind of crappy, so to prevent that we use **font stacks** which allows us to supply a list of desired fonts for the browser to fallback on:

	body {
		font-family:'lobster','wedding',cursive;
	}

The code above checks for lobster, if it isn't found, it checks for 'wedding', if that isn't found, we go to the default cursive font for that computer.

An excellent resource for building your fail-proof font stacks is [http://cssfontstack.com/](http://cssfontstack.com/) Lets take a look.

## font-size
Next up is font-size. This one is pretty self explanatory and something we covered last week. We are going to be working in pixels.

If you set the font-size on the `body`, it is inherited by all the `<p>` tags on the page:

	body {
		font-size:15px;
	}

If we then want to target just the second paragraph with the class of `text2`, we can overide that last rule with the following:

	p.text2 {
		font-size:20px;
	}

## font-weight

If any of you are designers, you will know that fonts come with a variety of weights. The weight of a font controls how bold it is. Most fonts just have **normal** and **bold**, but some can have up to 9 different weights. There are two different ways to specify the font weight:
### By keyword
	p.text3 {
		font-weight: bold; /* Also accepted: bold | bolder | lighter | normal | inherit */
	}
### By Value
	p.text3 {
		font-weight:600; /* From 100 to 900 in increments of 100 */
	}

The most important things to remember here are `font-weight:normal;` and `font-weight:bold;`

## font-style
Similar to `font-weight`, `font-style` allows you to change the style of the font if that family permits.

The most common use case for this is for making your font italicized.

	p.text4 {
		font-style:italic; /* Also accepts normal, oblique, and inherit */
	}

## line-height

Line height lets you explicitly set the height of a line of text as it appears in the browser. Designer types know this as **leading**. This can dramatically help the readability of large blocks of text.

Just as other values, we can set it in a variety of measurements including px, ems and %. We can also set it as a **number** and since font sizes can change, its recommended that set line height as a multiple of itself.

By default most fonts have line height of 1.2x its font size, so a font-size of 10, would have a line height of 12.

	p.text5 {
		line-height:2.2;
	}

## text-align

text-align is another property that does exactly what you think it does, align text.

	p.text5 {
		text-align:right; /* Also accepted: left, center, justify */
	}

## Letter Spacing

Letter spacing allows you to control the amount of space inbetween letters.

	h3.spacing {
		letter-spacing:4px;
	}

A little trick I like to use with sans-serif fonts is set the letter spacing to -1px on all headings. It makes for a much more appealing header.

	h1,h2,h3,h4,h5,h6 {
		letter-spacing:-1px;
	}

<h3 style="color:red; font-size:40px;">Normal letter spacing on a heading</h3>
<h3 style="color:red; letter-spacing:-1px; font-size:40px;">-1px Spacing on a heading</h3>

## text-transform
Text transform is an extremely handy property that doesn't get used as often as it should As we talked about in the first few courses, your HTML should only describe the content and not worry about the style.

So if you have a design that relies on either all uppercase or all lowercase characters, you can still go ahead and type it with proper capitalization and then use `text-transform` to change the look of it.

	<h3 class="uppercase">I'm all uppercase</h3>
	<h3 class="lowercase">I'M ALL LOWERCASE</h3>
	<h3 class="capitalize">capitalized</h3>

Our CSS:

	.uppercase {
		text-transform:uppercase;
	}
	.lowercase {
		text-transform:lowercase;
	}
	.capitalize {
		text-transform:capitalize;
	}

## Review
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

#### Exercise
Its time to flex our typography muscles. Open `typography-exercise1.html` in your browser and editor.

You can have some fun with this one and pick your own colours, patterns, fonts, widths and whatnot. Match the ruleBox stylings to the answer key.

## Web Fonts (or Using Custom Fonts)

**What happens when we want to use a font that isn't installed on someones computer?**

Previously we were held back to using font stacks that were 'websafe', which means a good percentage of users would have at least one of them installed. This was a bummer because we had a list of fonts about 10 long, all of which were fairly boring. When we wanted to use nice fonts, we would have to save the graphic in photoshop and export it as an image.

No longer! In the past few years CSS3 has allowed us to use something called **web fonts** which lets up embed a file that magically makes custom fonts available.

There are various ways to embed **web fonts** including the paid [typekit](http://typekit.com), but we will be using the super easy and free option of [Google Web Fonts](http://www.google.com/webfonts)

### Embedding a custom web font
Doing so is fairly easy:

1. simply head on over to [Google Web Fonts](http://www.google.com/webfonts) and track down a font you like
1. Click the "arrow in a box" icon ![](http://wes.io/OTGu/content) for **quick use** <br>
1. Choose the weights that you wish to use
	* ![](http://wes.io/OUDA/content)
	* Note that the more fonts and the more weights you add to a page, the slower your page will load. As rule of thumb, try not to include more that 3-4 fonts/weights in production code.
1. Some fonts have extended charter sets available if your website will be in a language such as Russian or Vietnamese.
	* ![](http://wes.io/OTDK/content)
1. In the next step, click the "standard tab" if it isn't already selected and copy the code provided.
	* ![](http://wes.io/OTpq/content)
6. Paste that line of code into the `<head>` of your document
7. You can now use the value of the font name in your `font-family` stack, just as you would any other font. Google will recommend a good font-stack for you to use.
	* ![](http://wes.io/OUEr/content)
	* You may want to apply it to all text on the body:
		* `body { font-family: 'Open Sans', sans-serif; }`
	* Or just your headers:
		* `h1,h2,h3,h4,h5,h6 { font-family: 'Open Sans', sans-serif; }`


### Trying it yourself

Go ahead and pick a few fonts that you like from Google Web Fonts and embed them into `web-fonts.html` in place of the ones I already have there. Feel free to write new selectors to change the h2 and h3 headings as well!

![](http://wes.io/JOcr/Screen%20Shot%202012-09-12%20at%2010.47.08%20AM.png)

## Taking typography to its limits with CSS3

Okay, now that you have a good grasp on the basics, we are going to take a look at some of the fun CSS3 techniques that we can use to make our web typography look its best.

### text-shadow

Text shadow allows us to apply, you guess it, a shadow to text! This effect can definitely be abused and bring back horrible memories of Word Art, but with the right colours and techniques you can use it to look really great!

Text shadow takes 4 value - horizontal offset, vertical offset, blur, and colour. It can also take multiple common separated values so you can add as many shadows to your text as you wish!

![](http://wes.io/JPZK/Screen%20Shot%202012-09-12%20at%201.26.36%20PM.png)

Lets take a look at some different example in `text-shadow.html`


### box-shadow
Similar to text-shadow, we also have box-shadow available to us which allows for adding shadow to the box around text as well as all other elements (such as divs, elements).

Take a look at `box-shadow.html` for two examples on how to use box shadow - you'll notice its exactly the same syntax as text-shadow.


**For some great examples of taking pure text to the next level, take a look at the examples at [http://tympanus.net/Tutorials/TypographyStyles/index4.html](http://tympanus.net/Tutorials/TypographyStyles/index4.html)**

![](http://wes.io/JPhe/Screen%20Shot%202012-09-12%20at%201.20.12%20PM.png)