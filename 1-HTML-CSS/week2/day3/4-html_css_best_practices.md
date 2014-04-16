---
layout: notes
title: HTML & CSS Best Practices
topic: html
---

#HTML & CSS Best Practices

## Organizing CSS

CSS can become a tangled mess if isn't managed properly. You might have multiple selectors styling the same element. You change the font-size but it doesn't do anything because the style is being re-defined somewhere else.

Add CSS comments and order your CSS by type to help you stay organized. See the following page for an example:

<http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/>

## Don't repeat yourself

If you have two boxes that are for the most part the same then avoid writing the same CSS rules twice. Write one rule that applies to both boxes and then add individual rules later. For example:

```
.box1, .box2 {
	width: 300px;
	height: 50px;
	padding: 10px;
}
.box1 {
	color: #fff;
}
.box2 {
	color: #444;
}
```

Or an even better way is to create a class that you can reuse for both boxes:

```
.box {
	width: 300px;
	height: 50px;
	padding: 10px;
}
.box1 {
	color: #fff;
}
.box2 {
	color: #444;
}
```

## Selectors efficiency

CSS selectors are read from right to left by the browsers. So for the selector `body #container ul li`, the browser will have to evaluate `li`, `ul li`, `div#container ul li` and the full selector. If you have just one unordered list then `li` is sufficient to apply the right style. 

* Avoid being too specific when you don't have to.
* IDs are by definition unique so instead of `div#container` just write `#container`.
* Use classes to replace long/specific selectors.

Resource: [https://developers.google.com/speed/docs/best-practices/rendering?csw=1](https://developers.google.com/speed/docs/best-practices/rendering?csw=1)

## Image Replacement

CSS image replacement is used in situation where you want text for accessibility and SEO but would rather show an image than text. A great example is a website's logo. Many techniques have been developed to accomplish this; CSS Tricks has created a museum that showcases all of the methods: [http://css-tricks.com/examples/ImageReplacement/](http://css-tricks.com/examples/ImageReplacement/)

We recommend using the one here:
[http://css-tricks.com/examples/ImageReplacement/#kellum](http://css-tricks.com/examples/ImageReplacement/#kellum)

## Compression

To make our websites faster we can compress the CSS and images. The CSS minifying will git rid of unnecessary whitespace and characters to reduce the size of the file. Image compression will "losslessly" optimize images by removing unnecessary bytes without affecting image quality. 

* minify CSS: [http://www.csscompressor.com/](http://www.csscompressor.com/)
* compress images: [http://www.smushit.com/](http://www.smushit.com/)
* OSX impage compression tool: <http://imageoptim.com/>

Even with compression tools, it's still a good idea to crop your images to an appropriate dimension before using them on the web.  Users shouldn't have to download a 2000px hi-res photo if it's only going to be 200px wide on their screen. 


## Reduce HTTP Requests & Image Sprites

Every image, CSS and JavaScript file referenced in your HTML file will make an HTTP request. Each request takes time to execute so it will increase the load time of your website. One way of reducing HTTP requests is to combine files. Stylesheets should be combined together into one file.

We can do the same thing with images. These are called **image sprites**. To create sprites:

1. combine images into one image file
2. use CSS `background-position` to show the correct image

Use [http://www.spritecow.com/](http://www.spritecow.com/) to combine images and get the appropriate CSS.

## Automating your Optimizations

You can automate a lot of these best practices with task runner tools like **Grunt** and **Gulp**. Here's a great tutorial from Chris Coyier on getting started with Grunt. <http://24ways.org/2013/grunt-is-not-weird-and-hard/>.