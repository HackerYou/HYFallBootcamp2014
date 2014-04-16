---
layout: notes
title: Units, Box Model, and Floats
topic: html
---

# Units, Box Model, and Floats

## Starting the Styling!
Now that we have a good handle on selectors, we can get to work on writing the styles (or **properties** and **values**) for the selected elements.

![Diagram](http://wes.io/J3WP/diagrams.png)

I'm sure you have already picked up on a few, or even know a few from previous experience such as `width` and `height`. There are other properties such as `color` which sets the font colour and `font-size` sets the font size.

There are lots and lots of different types of CSS properties for creating various styles such as colours, backgrounds, typography and page layouts. So it's pretty much near impossible to memorize them all. It's good to have some resources or a cheat sheet bookmarked or printed nearby to reference.  Here's a few to get you started:

* [SitePoint: CSS Properties](http://reference.sitepoint.com/css/propertyref)
* [28 Handy CSS Cheat Sheets](http://www.1stwebdesigner.com/freebies/css-cheat-sheets-designers/)
* [dochub.io](http://dochub.io/#css/)

You'll get the hang of them as you go, but feel free to with google them. It's encouraged!

### Measurement Units
A large part of CSS is declaring what the size of something will be. It may be the width of a div, the amount of padding or the size of a font. There are a number of ways to declare sizes on the web.

####px - Pixels
Pixels are probably the most popular way to size widths, heights and fonts on the web. It's the easiest to understand because our monitors are measured in pixels. Font sizes from Photoshop also line up exactly with pixel sizes. As a general rule of thumb, a website (that isn't responsive) shouldn't be wider than 1000 pixels so it can fit on every type of monitor.

####% - Percentages
Another popular way to size up your fonts and elements is by using percentages of an element's parent. 

For example, a wrapper div with 100% width can contain two children; sidebar of 25% and the main content of 75%. This also works for fonts. If the parent has a font size of 20px, a 50% font size would be 10px.

**Percentages will be really helpful when we get into responsive design.**

####em - Ems
Similar to the percentage approach because these units are also scalable. We set a base font size on the body and then all text on the page is based off of that *or* relative to its closest *ancestor's* font size. Because of this, sizing fonts with `ems` is a bit of a tricky subject to wrap your head around so for simplicity's sake we will be sticking with px and percentages.

####rem - Rem
Introduced in CSS3 so it's not supported by older browsers. Similar to `ems` and stands for "root em." This unit is also relative but only to the **root**, which is the `html` element. The base font size is defined in the `html` tag and all `rem` units will be relative to **only** the `html` element. 

More on [ems and rems here](http://snook.ca/archives/html_and_css/font-size-with-rem).

####keywords
Sometimes we can use keywords for sizes of elements and fonts. You will see the keywords **auto** and **inherit** most often. **Auto** allows an element to automatically size itself based on both its surroundings and content. **Inherit** allows an element to inherit the style from its parent. We will talk about this more in future exercises.

####cm, in, ex, pt, pc
There are a few other measurements that are meant primarily for **printing** documents. These elements are rarely used for styling the web and a usually avoided.

### Width and Height
Let start things off easy and work with `width` and `height`. Let's make a quick document with four divs (see <a href="exercises/css-width-height.html" class="exercise">css-width-height.html</a> for the answer, but let's code ours from the ground up.):

	<div class="box1"></div>
	<div class="box2"></div>
	<div class="box3"></div>
	<div class="box4"></div>

And then a little CSS so we can tell each box apart:

    <style type="text/css">
        .box1 {
            background:red;
        }
        .box2 {
            background:blue;
        }
        .box3 {
            background:green;
        }
        .box4 {
            background:orange;
        }
    </style>

So what does this look like so far? Nothing! Because there is no content, there is no width and no height in our boxes. They aren't taking up any room. We can change that by adding some content to each box:

	<div class="box1">Box #1</div>
	<div class="box2">Box #2</div>
	<div class="box3">Box #3</div>
	<div class="box4">Box #4</div>

**Note:** in a normal document you should never put text inside a div without first wrapping it in a tag (such as `<p>`p tags`</p>`) but we are leaving them out for simplicity :)

#### Auto Width

Now we have something that looks like the screenshot below. You'll notice that they extend the **entire width** of the browser while the text is only a few characters long. Why? This is because **divs are block elements and have a width of auto** by default!

![](http://wes.io/JGZb/Screen%20Shot%202012-09-06%20at%2011.37.53%20AM.png)

#### Specifying Width and Height

Lets try a few different ways of specifying width and height:

    <style type="text/css">
        .box1 {
            background:red;
            width: 200px;
            height:200px;
        }
        .box2 {
            background:blue;
            width:100%;
            height:90px;
        }
        .box3 {
            background:green;
            width:2000px;
            height:150px;
        }
        .box4 {
            background:orange;
            width:500px;
            height:100%;
        }
    </style>

Produces the following:

![](http://wes.io/JGk7/Screen%20Shot%202012-09-06%20at%2011.46.52%20AM.png)

1. Box 1 is 200px by 200px - makes sense, right?
2. Box 2 is spanning 100% of the browser and 90px high - good!
3. Box 3 is 150px high and 2000px wide - much wider than my screen so we have to scroll right to see the entire box.
4. Box 4 is 500px wide - good - and 100% height - **Woah, hold on**. Why isn't box 4 taking up the rest of the room in the browser?

If 100% width takes up the entire width of the browser, shouldn't 100% height take up the entire height? That would make sense, but its one of the many quirks of CSS. Giving an element 100% height means it will take up 100% of it's own content height - not the browsers. As a proof of concept, lets add a **box 5** inside box 4 and give it a width and height of 150px;

![](http://wes.io/JGxM/Screen%20Shot%202012-09-06%20at%2011.58.58%20AM.png)

Because its child **Box 5** is 150px high, **Box 4** reacts and changes its height to 150px + the height of the text 'Box #4'.

### Padding and Margin
Along with your pals `width` and `height`, two of your CSS best friends will be `padding` and `margin`.

These two properties do what you might think - provide space between elements on your page so everything isn't squished together.

The only difference between the two is that margin adds space on the **outside** of an element while padding adding space on the **inside** of the element. It can be tough to remember which one does what so a stupid little trick I used was saying "**Padding** protects your **insides**".

#### Giving it a shot
Let's give it a shot with some real markup. Start off with three basic divs: (See file <a href="exercises/css-margin-padding.html" class="exercise">css-margin-padding.html</a>.

	<div class="box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
	<div class="box2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
	<div class="box3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>

And some styling similar to the last one:

    <style type="text/css">
        .box1 {
            background:red;
        }
        .box2 {
            background:blue;
        }
        .box3 {
            background:green;
        }
    </style>

No big surprises here:

![](http://wes.io/JH4L/Screen%20Shot%202012-09-06%20at%202.08.04%20PM.png)


Go ahead and add some margin to box1, padding to box2 and both to box3:


    <style type="text/css">
        .box1 {
            background:red;
            margin:20px;
        }
        .box2 {
            background:blue;
            padding:20px;
        }
        .box3 {
            background:green;
            padding:20px;
            margin:20px;
        }
    </style>

![](http://wes.io/JHf6/Screen%20Shot%202012-09-06%20at%202.10.52%20PM.png)

1. Box 1 has 20px of margin outside the red, but the text is still squished inside the box.
2. Box 2 has 20px of padding inside the blue, but its right up against the side of the browser.
3. Box 3 has both, allowing for enough space between both the text as well as the blue element above it.

#### One step further

In the last examples, we supplied a single value of 20px. What if we want to add margin/padding just to a single side? We can just append `-[side]` to the property.

    .box1 {
        /* Specific margin values */
        margin-top: 10px;
        margin-right: 5%;
        margin-bottom:10px;
        margin-left: 25px;
        
        /* Same goes for padding */
        padding-top:10px;
        padding-right:20px;
        padding-bottom:25px;
        padding-left:5%;
    }

### Exercise

Its time to get comfortable with margin, padding and widths of elements as well as brush up on our selector writing.

Open <a href="exercises/css-margin-padding-exercise.html" class="exercise">css-margin-padding-exercise.html</a> in your code editor and browser. You will find a set of instructions.

Open <a href="exercises/css-margin-padding-exercise-ANSWER.html" class="exercise">css-margin-padding-exercise-ANSWER.html</a> in your browser to see what you are working towards.


### Thats too much typing! - CSS Shorthand

8 lines just for padding and margin? Seems like a lot of typing! Luckily we have something call **CSS shorthand** for specify padding and margin values (among other properties which we will learn about later). We can just supply the four values with spaces in between:

    .box1 {
        margin: 10px 5% 10px 25px;
        padding: 10px 20px 25px 5%;
    }

**The order** of the above is **top, right, bottom, left**. You can remember it easily because its the same direction as a compass or a clock. I prefer to remember **TROUBLE** or **TRBL** (top right bottom left). Stupid, I know, but it works!

You may also set the **top and bottom** and **right and left** at the same time with the two number syntax:

    .box1 {
        margin:10px 20px; /* renders the same as 10px 20px 10px 20px */
    }

Occasionally you will see three numbers which sets **left and right** with a single value. This is confusing and doesn't save much typing, I recommend against it.

    .box1 {
        margin:10px 20px 50px; /* renders the same as 10px 20px 50px 20px */
    }

### Centering elements with margins

Often we will want to center our website on a page. Since CSS doesnt have a center property for elements, we just use **auto margins** on the left and right to do this.

    .wrapper {
        margin:0 auto;
    }

This will set the `top` and `bottom` margins to zero (you could set it to anything you want) and then the `left` and `right` to auto, which centers the element within the browser.

### Borders

Borders work very much the same way padding and margin do except that we have three properties instead of one.

    .box1 {
        border-width:10px;
        border-color:red;
        border-style:solid;
    }

Width and color are pretty self explanatory. The **border style** allows you to set various styles of borders:

<div style="border:10px solid #D12026; margin:5px;">solid</div>
<div style="border:10px dotted #D12026; margin:5px;">dotted</div>
<div style="border:10px dashed #D12026; margin:5px;">dashed</div>
<div style="border:10px groove #D12026; margin:5px;">groove</div>
<div style="border:10px ridge #D12026; margin:5px;">ridge</div>
<div style="border:10px inset #D12026; margin:5px;">inset</div>
<div style="border:10px outset #D12026; margin:5px;">outset</div>

#### Targeting Single Sides
Just like padding and margin, we can target single sides, just add the side like so:

    .box1 {
        border-[side]-width:10px;
        border-[side]-color:10px;
        border-[side]-style:10px;
    }

#### Common Shorthand
Chances are you won't be using the above code too much as you usually want the border to be the same `size`, `style` and `color` all the way around your element. If this is the case, we can use the commonly used border property and feed it each item separated by a space:

    .box1 {
        border:3px dotted red; /* [width] [style] [color] Much more sane */
    }

#### Exercise

Take a few minutes with <a href="exercises/css-margin-padding-exercise.html" class="exercises">css-margin-padding-exercise.html</a> again and try and change the layout to:

1. Add borders to at least three elements
1. Make the wrapper have a different border for each side
1. Center align the `.moreinfo` div properly
1. Play around with margin and padding. Try using shorthand.

### The Box Model

Sweet, now that we are equipped with width, height, padding, margin and borders, it's important to learn about the **box model**. (See <a href="exercises/css-box-model.html" class="exercise">css-box-model.html</a>)

Lets start off with a simple 150px by 150px box (set with `width` and `height`):

<div style="width:150px;height:150px; background:#D12026;">I'm a 150px by 150px box!</div>

Now let's add some padding so the text isn't all squished to the edge of the box.

<div style="width:150px;height:150px; background:#D12026;padding:20px;">I'm a 150px by 150px box with 20px of padding!</div>

Finally, add a border:

<div style="width:150px;height:150px; background:#D12026;padding:20px; border:10px solid black;">I'm a 150px by 150px box with 20px of padding and a 10px black border!</div>

Notice anything weird? The boxes grow as we add **padding** and **border**. Suddenly our 150px box isn't 150px anymore!

If the width and height of the box is set to 150px, why does the box get bigger? Why doesn't the padding and border take away from the 150 pixels? This is another CSS quirk that is quite an annoyance in web development. By default, `padding` and `border` changes the element's total size and `margin` adds to how much space the element is taking up. This interaction is referred to as **The Box Model**.


#### New techniques with CSS3 - `border-box`

Lucky for us, CSS3 has brought us relief from this. If your project is only going to support Internet Explorer 8 and up, then we can use the `box-sizing` property like so: 

    * {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

By specifying this rule at the top of our CSS, we tell **all** elements (using the wildcard `*` selector) to take **padding** and **border** away from the set width and height. Go ahead and uncomment the selector in <a href="exercise/css-box-model.html" class="exercise">css-box-model.html</a> to see how it works.

<small>**Note:** This is fairly new in the web development world, so chances are most projects you run into in the wild will be using the **old** box model. Its helpful to know both.</small>

**Without `* { box-sizing: border-box }`**
![](http://wes.io/JHEe/Screen%20Shot%202012-09-06%20at%203.24.11%20PM.png)

**With `* { box-sizing: border-box }`**

![](http://wes.io/JGjL/Screen%20Shot%202012-09-06%20at%203.38.46%20PM.png)

<small>Read more on the topic at [Paul Irish's Blog](http://paulirish.com/2012/box-sizing-border-box-ftw/).</small>

### Floats

Floats are a really important part of CSS that help you align your elements to either the right or the left.

So far all of our exercises have had elements stacked vertically, what if we want them to be side by side? What if we want text to wrap around an image? Let's look at a few example to wrap our heads around floats. Open up <a href="exercises/css-floats1.html" class="exercise">css-floats1.html</a> in your editor and browser.

We have a document with a bunch of text, two pictures and a little styling. Whats the deal with the text not wrapping around the pictures of the puppies?

![](http://wes.io/JHGH/Screen%20Shot%202012-09-06%20at%204.46.19%20PM.png)

### Floating Images
This is where floats come in. If we float an image to the right, the text will wrap around its self (and vice versa). Write a selector for the first dog image and float it left. We will also add some margin so the text isn't squished right up against the picture.

    img.dog1 {
        float:left;
        margin-right:20px;
    }
    
Go ahead and write the CSS to float the other one right. The end result should look like this:

![](http://wes.io/JGvc/Screen%20Shot%202012-09-06%20at%204.51.21%20PM.png)

**Note: If you take a look at the exercise we did last class with <a href="../day2/exercises/css-selector-exercises.html" class="exercise">css-selector-exercises.html</a> you'll see that I'm using multiple image floats so the team pictures all line up beside each other**

### Floating other elements in a layout
Let's take a look at a basic HTML layout and see how floats make it happen.

Open up <a href="exercises/css-floats2.html" class="exercise">css-floats2.html</a> and we will take a look at the markup

We have Four main divs: header,content, sidebar and footer. We want to make them look like a normal website.

We want the content and sidebar divs to be side by side, so their widths together, need to make up 100% of the wrapper.

So naturally, we would use CSS to make content 75% and the sidebar 25%:

    .content {
        float:left;
        background:red;
        width:75%;
    }

    .sidebar {
        background:green;
        width:25%;
        float:left;
    }

**Problems?** What do you spot right away?

![](http://wes.io/Jkwi/Screen%20Shot%202012-09-27%20at%201.20.25%20PM.png)

2. The red content extends past the wrapper
1. The footer is all up in the sidebar
3. We cant add padding or a border or it will break! Lets try

Let's go through and fix each issue.

#### Problem #1: The red content extends past the wrapper!

This is a quirk with CSS where the parent (the wrapper) doesn't know how big it actually is!

There are two fixes for this:

**hide overflow** - this is a cheat but a quick fix. If you tell the element to hide its overflows, it automatically smartens up.

    .wrapper {
        overflow:hidden;
    }

This works great but the downside is that you often don't want to hide the overflow of something because you want to overlap or extend elements outside the wrapper.

**clearfix**  
The better alternative is to apply something called a clearfix, which is a CSS hack that targets elements with the class of 'clearfix'.

The clearfix CSS looks like this:

    .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
        }
    * html .clearfix             { zoom: 1; } /* IE6 */
    *:first-child+html .clearfix { zoom: 1; } /* IE7 */

And you should add it to every project you do.

Then when we apply it, we just add the class `clearfix` to our `.wrapper` (or whichever is the parent element of the floated elements).



#### Problem #2: Footer is in the sidebar

This is a common problem with CSS, since the sidebar is only so high, the footer will also try to float and snugs up against the smallest child - the sidebar.

We solve this with clearing the footer. This means that we tell the footer to clear all the floats from the elements before it and start on a new line.

Simple css:

    .footer {
        clear:both;
    }


#### Problem #3 - If we add padding or a border to any of the boxes, the layout breaks!

This is because of the box model that we talked about earlier. The width of a box includes its padding and borders!

There are two fixes for this: 

1. Adjusting the width of the box to include the borders and padding
2. Set the box sizing to `border-box` (Not supported in IE7)


## Exercise: Creating Layouts with Floats

This exercise will throw you into the deep end. We will be using widths, floats, clearing, margin and padding.

Open <a href="exercises/css-layout-exercise.html" class="exercise">css-layout-exercise.html</a> in your editor and browser.

Write the selectors and the CSS code to make it look like <a href="exercises/css-layout-exercise-ANSWER.html" class="exercise">css-layout-exercise-ANSWER.html</a>

Work with each other to write the selectors and please ask questions to me and the mentors. This one is a tough one so you may need to sneak a peak at the answer code every now and then.

## Review
1. Selectors, selectors, selectors!
	1. How do I select the body element?
		* <span class="white">body {...}</span>
	1. Why would someone select the body element?
		* <span class="white">We often set default color and font styles on the body because it is the highest element</span>
	1. How do I select all paragraphs within `<div class="content">...</div>`
		* <span class="white">.content p {...}</span>
	1. How do I select all divs with **both** the class of food and human?
		* <span class="white">div.food.human</span>
	1. How do I select divs with the class of human **and** list items with the class of warning?
		* <span class="white">div.human, li.warning {...}</span>
	1. Why do we sometimes forgo putting the element name in front of something like `.sidebar { ... }` verses `div.sidebar {...}`
		* <span class="white">We either want to select all elements with the class of sidebar **or** we are sure we won't have anything else with the class of sidebar so we are confident in leaving it off</span>
1. Borders: How do I add a 1px border around my div that is dotted and black?
		* <span class="white">div.className { border: 1px dotted black; }</span>
1. Margin and padding
	1. What is margin?
		* <span class="white">Spacing on the _outside_ of elements</span>
	1. What is padding?
		* <span class="white">Spacing on the _inside_ of elements</span>
	1. Explain the traditional box model
		* <span class="white">**padding** and **border** add to the total size of a box.</span>
	1. If I want my div to be 800px wide TOTAL with 20px of padding, and 2px of border. What should I use for width?
		* <span class="white">Let's figure it out...</span>
	1. What CSS3 feature can we use to avoid this weird box model?
		* { -moz-box-sizing: border-box; 	-webkit-box-sizing: border-box; box-sizing: border-box; }
1. Floats
	1. What does a float do?
	1. What elements can be floated?
	1. How do we tell an element to go on the next line?
	1. What CSS hack do we use when our wrapper div doesn't contain its insides/children properly?