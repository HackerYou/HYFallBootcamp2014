---
layout: notes
title: Responsive Design
topic: html
---

#Responsive Design

Responsive Design aims to provide the best experience for whatever current device a user is viewing the site on. A user could view the site on a 27" IPS Display all the way down to a smaller mobile phone screen.

![](http://wes.io/Kizj/Screen%20Shot%202012-11-07%20at%2010.15.23%20AM.png)

Previously web developers would create what we call "m dot" sites (as in http://m.yousite.com for mobile users), which means we run two independent sites and update them all accordingly when we have new content. One site would be the desktop site and the other would be a mobile friendly site. This takes a lot of developer resources to keep updated.

Responsive design introduces the concept of a single codebase and one website that reacts to its view port. With this, we only have to maintain and update content for a single website versus two+.

![](http://wes.io/Kj95/Screen%20Shot%202012-11-07%20at%2010.16.26%20AM.png)


### How?

Responsive design is done entirely with well thought out HTML and CSS Media Queries. So far we have been crafting our sites with really clean HTML and percentage based elements. We are going to see how we can take that a step further and rearrange and restyle our elements based on what screen size we are on.

## Viewport

Before we jump into media queries, it's important to note a new tag that goes in the `<head>` of your HTML document - the **viewport** meta tag.

Quick reminder: Meta tags in our `<head>` provide data or information on current page - anything from keywords to facebook image paths. The viewport tells browsers (primarily mobile browsers like the one on my iPad) how to size itself.

Even if you aren't developing a responsive site, this tag is useful for when you load a desktop website on a mobile device and have it look half-decent.

### The tag breakdown

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

1. **meta is the tag name**. It goes in the head and provides information on the website to anyone/any browser/any robot that may want it. In this case, the mobile browser cares about it
1. **name of viewport** differentiates it from other meta tags such as keywords - we use **'viewport'** to tell the browser we are providing information about the sizing abilities of the site.
1. **content** is where we provide the information about the **viewport**. We provide as many key value pairs as we want here, each comma separated.
	1. **width=device-width** tells the browser how wide the website should be. We can set this to a value of, say 320px, and it will render the site as if the website browser was 320px wide. This becomes a problem because there are hundreds of devices out there, all with different sizes. If we set this to the keyword of **device-width** it will automatically assign the value based on how wide the device is.
	1. **initial scale** is the zoom value at which the site is zoomed in/out by default. A value of 1.0 will render the size just as it is, no zoom in or out. A value of 0.5 out zoom it out while 1.5 would zoom it in.
	1. **user-scalable=no** (not shown in tag above), will limit users from being able to zoom into your website. This is helpful if you are providing a mobile optimized experience and zooming/panning is not required.
	1. **minimum-scale, maximum-scale** will limit how far in or out a user is allowed to scale/zoom your website.

**Rule of thumb:** You will almost always want to pop the above tag into the `head` of your document. Doing so doesn't make your site responsive, but it set up the viewport to do so. The desktop will ignore the viewport while mobile devices pick it up.

## Media Queries
Media Queries are the bees knees when it comes to making a responsive website.

To put it simply, Media Queries allow you to apply CSS to your document only when the screen has reach a certain size (or other params which we will learn about soon).

So, you can code block of CSS that is only applied at certain points of your website, otherwise it is not applied to your elements.

Lets take a look

### Here is a really basic media query

	@media all and (max-width: 940px) {
		body {
			background:red;
		}
	}

In the above we target all media (which is just how we target normal CSS) **and** the max-width of 940px.

So, anything **equal or less than** 940px wide will have a red background.

Notice how we nested our CSS inside of what looks like another CSS rule? If we had more than one rule it would look like this:

	@media all and (max-width: 940px) {
		body {
			background:red;
		}
		h2 {
			font-size:20px;
		}
	}

The above CSS gets applied when the browser reaches a width of **940px or smaller**. This is what we call a **breakpoint**

I find the easiest way to visualize breakpoints is to set either a background color or a border on the body to make it obvious which breakpoint you current are on.

Open <a href="exercises/responsive1.html" class="exercise">**responsive1.html**</a> in your editor browser and lets take a look through the source code...

### Targeting Width & Height

#### Widths & Width ranges

The most common way to use media queries is by targeting the width of a device.

The above example had just a **max-width** where everything below that is applied. This means that anything written in our `@media (max-width: 940px) {` media query will be applied all the down to the smallest screen size.

Occasionally we will want to limit our CSS to a certain range of pixel values and we can do that like so:

	/* Portrait tablet to landscape and desktop */
	@media (min-width: 768px) and (max-width: 940px) { ... }

The above piece of code will only be applied when the width of your browser is **greater or equal to** 768px and less or equal to 940px

This can be helpful when you are targeting a specific size of screen. However if you want your CSS to cascade down to all levels, simply leave out the min-width like we did in our first example. We will have more examples of this later today.

#### Height

Occasionally you may be in the situation where you want to check if a device has a certain height in order to make design decisions.

A great example of this may be deciding how big a header should be. The newest iPhone has a taller screen, giving us more pixel height to work with. This means we could have a larger header on the iPhone5 (and similarly sized screens) while on the older iPhones, keep it small.

When in portrait mode iPhone 5 height is 568px high while all other iPhones are 480px high. (iPhone 4s and 5 are technically 2x that, but we will blow your mind on that in a bit)

	@media (min-height: 568px) {
		/* anything as high or higher than the iPhone 5 */
	}

You can also mix and match them with width:

	 @media (min-height: 568px) and (min-width:320px) {
	 	/* anything as high or higher than the iPhone 5 */
	 }

**Note:** You shouldn't rely on height too much as there are elements that come into play and affect the browsers height. Some things to note:

1. The iPhone browser bar takes up height, so the 568px is now 568px minus however high that browser bar is
1. People may be viewing your site from an in-app browser such as the facebook or twitter app.
1. Some people use Google Chrome on the iPhone which takes up a different amount of vertical height.

So, as you can see, trying to target a specific device is not a good idea - you are better off using general width media queries most of the time.

### A word on working for specific devices
I'm using iPhone and Android here as examples because they are popular phones. As a general rule of thumb, we don't want to target styles towards a specific device, we want to target our styles towards specific **device sizes**. There are hundreds of screen sizes out there and we will only continue to get more screen sizes.

### Orientation

Orientation is which way you are holding the phone, and we have two ways: Portrait and Landscape.

![](http://wes.io/Kk2i/iPhone-5-Black-White-MockUp.png)

The tricky part here is not to think of the width on landscape being bigger than portrait - because thats what width MQs are for. We want to think **how the user is interacting** with the device. If they are holding the device in portrait rather than landscape, there may be a few things to consider:

1. How many hands might they using to touch the screen? Are the in a grocery store line with 1 hand or sitting on the couch?
1. Where might you want to place certain controls, such as buttons on an online game, when they are in landscape vs portrait?

So you might use something like this to target iPad sized tablets:

	@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
		/* Styles */
	}

For our purposes and in 99% of the cases, you will be okay with just targeting width of the device.

### Resolution and Pixel Ratio
This is where pixels start to bend you mind, especially if you are coming from a print background where everything is in 300DPI and measured in inches.

Pixels are an odd thing that don't necessarily correspond to the size of the screen. Your 50 inch 1080p TV at home is 1080px high while my measily 9 inch ipad is 1536px high.

Lately devices have come out that are what we call HiDPI or High Density Pixels. You have probably heard the marketing term 'Retina screen' when referring to apple devices.

Currently the Google Nexus 10 (released last week), iPhone 4s/5, and iPad 3rd/4th Gen are the only devices are are HiDPI.

What does this mean? The amount of pixels on these devices are doubled and crammed into the same physical size of screen. This results in a much clearer screen size. Now the important part is that nothing has changed for our CSS - the screen still registered as 320px wide even though behind the scenes its 640px wide. This is nice because we don't need to write another set of CSS just for HiDPI devices - everything is normalized and all of our text, borders, colors and so are are crisp.

Here is a nice graphic from [smashing magazine](http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/) on the topic

![](http://wes.io/Kjax/Screen%20Shot%202012-11-07%20at%202.37.48%20PM.png)

The downside to this is that all of our images and graphics are blown up to be 2x the size. This results in blurry images. A fix to that is to use device pixel ratio media queries to sub in images that are 2x the size of the normal one.

	.myButton {
		background:url(images/buttonBG.png) center no-repeat;
	}

	@media only screen and (-min-device-pixel-ratio: 1.5) {
		// feed HiDPI screens a bigger background image
		.myButton {
			background:url(images/buttonBG@2x.png) center no-repeat;
		}
	}

<small>Note: the above will need to be vendor prefixed to work. Check out caniuse.com for the current prefixes.</small>

So the next time anyone is bragging about how good their 1080p resolution TV is, you can let them know that your iPhone 5 has more pixels!

### More Kinds of Media Queries
We are really just concerned with device width and sometimes the device height, however there are a ton more ways that you can use media queries

* **color** - if you could somehow get a web browser on an old gameboy color, you could target low or no bits of color.

	@media all and (color:0) and (width:160px) and (height:144px) { /* Target original gameboy */  }

* aspect ratio - very similar to pixel ratio, used in opera
* monochrome - screens such as a kindle
* progressive scan - if you are working doing TV web apps
* mac theme,windows theme - Target specific themes on mac or windows

There are tons more available at [https://developer.mozilla.org/en-US/docs/CSS/Media_queries](https://developer.mozilla.org/en-US/docs/CSS/Media_queries)

## Common Breakpoints

I like to start my media queries off with the following three breakpoints:

	/* Portrait tablet and small desktops */
	@media (max-width: 940px) {
	}

	/* Landscape phone to portrait tablet */
	@media (max-width: 768px) {
	}

	/* Landscape phones and down */
	@media (max-width: 480px) {
	}

As you design your site, you may need breakpoints that are larger, smaller or in between some of these. For that purpose you are able to add as many new media queries inside of that.

**What size is my browser right now?!!?**
Dev tools has introduced a ruler that shows you pixel values. You can use that or inspect the body of your page to get the current page width and height.

## Working with layouts
Finally we get to see the reasoning behind using percentages to size our website divs. It's worth refreshing ourselves on the `box-sizing:border-box;` model.


### Box Sizing review
When we use set a width on a div such as so:

	.myDiv {
		width:200px;
		height:200px;
		background:red;
		box-sizing:border-box;
	}

We get the following:

<div class="mydiv" style="width:200px; background:red; height:200px;"> hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hho</div>

Now if we add a border, you'll see that the box stays the same size. The border **eats into** the 200px

<div class="mydiv" style="width:200px; background:red; height:200px; border:10px solid black; box-sizing:border-box;"> hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hho</div>

Same goes for padding. It takes part of the 200px pie:

<div class="mydiv" style="width:200px; background:red; height:200px; border:10px solid black; box-sizing:border-box; padding:10px;"> hello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hellohello hello hello hho</div>

So, if you make an element 75% wide, you can add as much padding and border to that and it wont affect the size.

	.myDiv {
		width:75%;
		padding:5%;
		border:10px solid black;
		/* Everything here adds up to 75% */
	}

However, **margin is not included in this**.

If you were to add 5% margin to a 75% width element:

	.myDiv {
		width:75%;
		margin:5%;
		/* This adds up to 85% of the parent */
	}

The entire element needs 85% of the parent width.

Let's work through a basic example together, open up <a href="exercises/responsive2.html" class="exercise">**responsive2.html**</a> in your browser and editor.

## Min and Max Widths/heights

Now that last example worked great, but what if we only want our site to be so a certain width on desktops and then scale down past that?

Easy, we just use a new CSS property called `max-width` which will allow it to be any size with up to this value.

Open up our last example and lets add int he following code:

	.wrapper {
		max-width:960px;
		margin: 0 auto;
	}

## Scaling down images

This is a common problem that happens when your desktop images are large enough to fill the required space, but when you size down the device size, the images are way too big.

![](http://wes.io/Kjhc/Screen%20Shot%202012-11-07%20at%204.13.58%20PM.png)


Open up <a href="exercises/responsive3.html" class="exercise">**responsive3.html**</a> to get an idea of this issue.

The fix is easy. We just need to apply a max width to all images. This ensures that images will never be bigger than their parent element.

	img {
		max-width: 100%;
	}

![](http://wes.io/KjUB/Screen%20Shot%202012-11-07%20at%204.13.47%20PM.png)


## Testing

Testing responsive designs are really easy and you don't need a mobile device to do it!

You simply need to resize your browser to the approximate size of your device. Here are a few more tips:

1. Dock your dev tools to the right of the screen. Click the gear icon in the bottom right of dev tools and check 'Dock to right'
1. You may want to break your dev tools away into a new window - click the window icon in the bottom left corner to pop them out.
1. Check out the new firefox developer tools responsive design view. Go to `Tools` --> `Web Developer` --> `Responsive Design View`

## Basic Layout
We have been working with our header, footer, content sidebar layout quite a bit. Let's work together to see how we can make it a really great responsive site.

## Exercises
Now we are going to work on exercises. Starting with easy media queries and moving on up in complexity. See <a href="exercises/responsive-exercises.zip" class="exercise">**responsive-exercises.zip**</a> for the exercises and answers.


## Fav Icons and Touch Icons

### Fav Icons
Quick note on fav icons. What are they?

Favicons are those little images that show up in your browser's tab.

![](http://wes.io/Kq89/content)

The way we set these are really easy, we simply append the following line of HTML into the `<HEAD>`

	<link type="image/png" href="images/favicon.png" rel="icon">

Your browser will display them at 16x16 pixels but its not a bad idea to make it a little bigger as some devices are starting to use the favicon for larger bookmarking purposes. I usually recommend using a PNG (although .ico files work too) in the size of 32x32 or 48x48. Anything under 128x128 will do just fine, just keep it square!

### Apple Touch Icons
There is also another "version" of the favicon that can be used for mobile devices. It was introduced by apple and it called the Apple Touch Icon. Although Android and a few other mobile OS developers have picked it up.

Basically it allows you to specify what the image is when someone bookmarks your website on the homescreen. This means you get an App icon just like any other app!

The HTML is really similar to a fav icon:

	<link rel="apple-touch-icon" href="somepath/image.png" />

If you don't want the apple 'gloss' on your icon, use the following:

	<link rel="apple-touch-icon-precomposed" href="somepath/image.png" />

It is reccomended you use at least 144x144 and let the device size it down for you. However, you can specify them like this as well:

	<!-- Standard iPhone -->
	<link rel="apple-touch-icon" sizes="57x57" href="touch-icon-iphone-114.png" />
	<!-- Retina iPhone -->
	<link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone-114.png" />
	<!-- Standard iPad -->
	<link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad-144.png" />
	<!-- Retina iPad -->
	<link rel="apple-touch-icon" sizes="144x144" href="touch-icon-ipad-144.png" />

<style>span.white {border-bottom:1px solid black; color:white; } span.white:hover {color:black;}}</style>

##Additional Resources: 

Here is a list of useful cross-browser testing sites for you to explore: 
* <http://www.responsinator.com/>
* <http://quirktools.com/screenfly/ (This one is awesome!)>
* <http://responsive.victorcoulon.fr/>

	 

## Review
1. What is a Media Query?
	* <span class="white">A way to specify CSS to be applied only at certain points (width, height, etc...)</span>
1. How  do media queries work?
	* <span class="white">We write media queries which act like rules. When those rules are met, the browser will then apply that containing CSS</span>
1. What is the most common way we can target a specific device size?
	* <span class="white">Device width</span>
1. How to we target a specific range of screens?
	* <span class="white">min and max width</span>
1. Name 6 different ways we can target different device attributes
	* <span class="white">lets go!</span>
1. What do we do with images that look fine on the desktop, but are too big for smaller mobile devices?
	* <span class="white">img {max-size:100%}</span>
1. What is and isn't included in box-sizing:border-box; ?
	* <span class="white">Included: Padding and Border. Not included: Margin</span>
1. What units do we size our main elements in to make sure they look good on all devices?
	* <span class="white">Usually size our wrapper in pixels with a max-width and the rest in percentages</span>
1. What CSS property do we use to make sure our site doesn't get wider than a certain point?
	* <span class="white">max-width!</span>


