---
layout: notes
title: CSS Color and Backgrounds
topic: html
---

# CSS Color and Backgrounds

## Color and Background Color

You have probably caught onto this one already, but lets take a second to talk about CSS color.

The first thing to note is that the property is **color** not **colour**. Although the spellings of both **grey** and **gray** are accepted.

### Ways to Specify Color
In CSS there are 6 different ways to supply colour to a property:

**name** - you can use the straight up name of the colour - for most basic colours (red, green, blue, pink...) as well as a few exotic ones like `papayaWhip` and `paleGoldenrod`.

**Hex Value** - the most common way to specify a colour is with a hex code made up of the number sign `#` and a 6 digit alphanumeric code. The easiest way is to use a colour picker such as the one at [http://www.colorpicker.com/](http://www.colorpicker.com/) or use the photoshop eydropper tool.

![](http://wes.io/JNPt/Screen%20Shot%202012-09-11%20at%205.06.28%20PM.png)

Some hex values are: <span style="font-size:17px; color:#fff; padding:4px; background:#000000; ">#000000 (black)</span>, <span style="font-size:17px; color:#000; padding:4px; background:#fff; ">#ffffff (white) (black)</span>, <span style="font-size:17px; color:#000; padding:4px; background:#BADA55; ">#BADA55</span>, <span style="font-size:17px; color:#fff; padding:4px; background:#D12026; ">#D12026 (HY Red)</span>, <span style="font-size:17px; color:#000; padding:4px; background:#c0ffee; ">#COFFEE</span>

<small>**Note:** You may sometimes see hex values of only three like `#000`, `#fff` or `#944`. This is because the first three values are exactly the same as the last three, so we can use three digit shorthand.</small>

**RGB/RGBa and HSL/HSLa** - These are the two/four most recent guys to the party and make working with colours much easier, especially for designers who are comfortable with RGB. These two aren't 100% supported in all the browsers yet because of some older version of Internet Explorer. Regardless, its helpful to learn them because we will be using them in the future.

RGB means **red, green, blue**. In CSS we can pass a value for each channel from 0 to 255.

	.somethingWhite {
		color:rgb(255,255,255);
	}
	.somethingBlue {
		color:rgb(21, 33, 99);
	}
	.somethingBlack {
		color:rgb(0,0,0);
	}

RGBA is exactly the same but it adds a 4th **alpha channel** or transparency channel. We pass it a value between 0 and 1, 0 being totally transparent.

	.somethingWhite {
		background-color:rgb(255,255,255,0.5); /* 50% transparent */
	}

**HSL and HSLA** work the same way except we pass in **Hue, saturation, and lightness** instead. This is very new and not very well supported. For more make sure to check out [http://mothereffinghsl.com/](http://mothereffinghsl.com/)

### Background Images
We are also able to set images as our background. - both on text as well as any other element.

The CSS Property we use is called `background-image`. Now specifying the value is a little different because we have to tell the CSS where the image is located on our hard drive. For this we use the value `url()` and pass in the image path.

Just like the `<img>` tag, we can use absolute or relative tags.

	body {
		background-image:url(images/dog2.jpg)
	}

OR

	body {
		background-image:url(https://www.google.com/images/srpr/logo3w.png)
	}

Open `bg-images.html` in your editor and give these two a try.

#### Background Repeating
You have probably noticed that the background image repeats over and over by default, what if we don't want that functionality? We can specify the `background-repeat` property:

**No Repeat, show only once**

	background-repeat: no-repeat;

**Repeat along the X axis**

	background-repeat: repeat-x;

**Repeat along the Y axis**

	background-repeat: repeat-y;

#### Background Positioning

Now we may also want to specify where the the image is when we are repeating it, for this we use `background-position`. We pass it **two values** which specify the x and y centering. Available values are **top, left, right, bottom** and **center**. By default the browser is **top left**

	background-position: bottom left;

	background-position: center;

	background-position: top right;

**Note: `background-repeat` and `background-position` can be used together to specify where you would like a pattern to anchor from**

We can also specify `px` or `%` in place of these keywords

	background-position: 100px 10%;

#### Background Attachment
Finally, what if we want our background image to stay in place while the text scrolls? Easy, we simply tell the `background-attachment` to be fixed

	background-attachment: fixed;

### TOO MUCH TYPING
No kidding! Lucky for us we can specify everything in the `background` single keyword with **shorthand**. This includes an optional background color.

	background: red url(images/dog2.jpg) top right repeat-y fixed;

Woah, thats:

`[background-color] [background-image] [background-position] [background-repeat] [background-attachment]`


#### Background Patterns

Background image patterns can make a website look really slick.

We learned about [ColourLovers](http://colourLovers.com) already, and you should check out their pattern section when working on your projects.

Another great site for background patterns is [http://subtlepatterns.com/](http://subtlepatterns.com/) which lets you preview them before you download them all.

#### Background Gradients
Another really cool feature of CSS3 is the ability to create gradients in pure CSS. Previously a gradient needed to be exported from something like photoshop.

[http://www.colorzilla.com/gradient-editor/](http://www.colorzilla.com/gradient-editor/) is an excellent site for creating gradients, it even has an image uploader.

Writing gradients by hand isn't advised as the syntax is very long and different for each browser, so the tool at ColorZilla is a great resources.

#### Additional Color Resources

[The Color Scheme Designer](http://colorschemedesigner.com)
[http://hex2rgba.devoth.com](http://hex2rgba.devoth.com)
[Flat UI Colors](http://flatuicolors.com/)
[Instant Eyedropper](http://instant-eyedropper.com)
[Color Grab](https://play.google.com/store/apps/details?id=com.loomatix.colorgrab&hl=en)
[Match Colors To An Image](http://www.pictaculous.com)
[Kuler](https://kuler.adobe.com/create/color-wheel)
[0 to 255](http://0to255.com)
[CSS Colors](http://colours.neilorangepeel.com)

#### Additional Image Resources

[http://join.deathtothestockphoto.com/]
[http://unsplash.com/]
[http://365psd.com/]
[http://freefoodphotos.com/]
[https://medium.com/p/62ae4bcbe01b]
[http://pixlr.com/]
[http://lorempixel.com/]
[http://www.gratisography.com/]
[http://www.psdcovers.com/]
