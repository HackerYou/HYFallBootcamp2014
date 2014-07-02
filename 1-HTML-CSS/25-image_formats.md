---
layout: notes
title: Working with Different Image Formats
topic: html
---

#Working with Different Image Formats

There are several file types used for adding images to a web page. Each type is best suited for specific kinds of images. As a rule of thumb, use the format that maintains the best quality while reducing the file size.

First, a quick look at two types of compression:   

* **Lossless:** the image is made smaller with no loss to the quality. The image can be saved over and over any without losing any data.
* **Lossy:** the image is made (even) smaller, but loses some of the quality. When saving an image in a lossy format repeatedly, the image quality would get progressively worse.


## GIF
GIF uses **lossless** compression and usually has the smallest file size of all the different formats.  However, it can only take a maximum of 256 different colours so it is best used for images with minimal colour variation.

GIF images can also have transparency (though transparency is better handled with PNGs). And of course, they can also be animated!

<iframe src="https://giphy.com/embed/n0WvhHFTpihk4" width="500" height="285" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

**Best used for**: images with simple colours, line drawings, icons and animated gifs.


##JPEG

JPEG images uses **lossy** compression. It can support lots of rich colours and gradients making it optimal for photographic images.

However, the lossy compression makes it less favourable for images with flat colours and line drawings and may look fuzzy.  JPEGs generally have larger file-sizes than GIFs.

**Best used for**: photographs and images with lots of rich colours and gradients.


## PNG

There are two types of PNG formats, PNG-8 and PNG-24. They both use **lossless** compression.

###PNG-8
PNG-8 is short for *8-bit PNG* meaning the image is 8 bits per pixel. Similar to GIFs, it can only store 256 and supports transparency but it has better support for *alpha* transparency than GIFs.

![png-8 vs gif](http://i.stack.imgur.com/B09oZ.png)

However, PNGs do not support animation so stick to GIFs for that.

**Best used for**: Images with simple colours including those that require alpha transparency.


###PNG-24

PNG-24 is short for *24-bit PNG* so it can hold a lot more colours than PNG-8. Just like PNG-8, PNG-24 supports alpha-transparency, too.

However, PNG-24 files are usually much bigger than JPEGs, GIFs and PNG-8s. Even though PNG-24s can handle a lot more colours, they are not meant to replace JPEGs. 

**Best used for:** Images with rich colours, gradients and shadows, that all require transparency, alpha transparency or opaque background.


##SVG

SVG (scalable vector graphics) is a vector graphic based on an XML format but you can use SVG in the same way as other image types (in an image tag). SVGs generally have small file sizes and scales without losing clarity. It also looks great on retina displays.

Because it's based on XML, it can also be added inline, into the HTML document. When included inline, CSS and JavaScript can be applied to it! 

Note that SVGs are not supported in IE8 and below.

**Best used for:** 2D shapes and icons (ex. cartoon graphics or illustrations) and animations. Not good for photos.

###Using SVGs inline

SVGs consist of circles, rectangles, and paths created in XML and combined into drawings on web pages rather than a bitmap, like other image types. Because of this, you can apply colours, gradients and filters to SVGs (though not all browsers support all filter types). 

Inline SVGs also removes unnecessary HTTP requests. When defining images in an `<img>` tag, you are defining a file that the browser will *request*. This request will take up bandwidth and require time to download. SVGs embedded inline cuts the extra HTTP request out, making your website faster.

However, screen reader support is poor which can create a challenge for sites that use SVG where accessibility is a requirement. [More on SVG and accessibility here](http://schepers.cc/authoring-accessible-svg).

####Finding / Creating SVGs

SVGs can be created using vector graphics software such as Adobe Illustrator or [Inkscape](http://www.inkscape.org/) (open source a.k.a. free). There are also online resources such as [The Noun Project](http://thenounproject.com/) that has a wide variety of icons available for download.

But once we've found the perfect image to use, where do we actually get the SVG code?  We can simply open the SVG file in our text editor and there's the code. Viola!

**Note:** Optimize your SVGs to remove markup that's not needed. Go here: [http://petercollingridge.appspot.com/svg_optimiser](http://petercollingridge.appspot.com/svg_optimiser)


####SVG and CSS
Styling SVG with CSS is the same as for other HTML elements. However, there are CSS properties that are specific for SVG. For example, instead of using `background` or `background-color`, use `fill` to change the colour of the icon. To create a border, use the `stroke` property. 

See the [full list of SVG properties](http://www.w3.org/TR/SVG/propidx.html).


###Exercise

Download <a href="exercises/inline-svg.zip" class="exercise">inline-svg.zip</a> and open [inline-svg.html](exercises/inline-svg.html) in your editor. Let's try adding images using the `<img>` tag and inline (there's a few to choose from in the **images** folder) and some CSS!


###The `<svg>` element
You can also create SVGs without an image editor using SVG specific tags starting with the `<svg>` element. Note, the inclusion of the two namespace declarations so the browser will read this fragment as an SVG element rather than an XML file.

	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<svg>

####Basic shape elements
SVG contains the following set of basic shape elements:

* rectangles `<rect>`
* circles `<circle>`
* ellipses `<ellipse>`
* straight lines `<line>`
* polylines `<polyline>`
* polygons `<polygon>`

Each element also has different attributes used to define various styles of the shapes.

** Example **

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect x="10" y="30" height="100" width="100" style="stroke:#006600; fill: #cc0066;"/>
        <circle class="circle" cx="200" cy="80" r="30" />
        <line x1="300" y1="30" x2="300" y2="135"/>
    </svg>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="150" width="400">
        <rect x="10" y="30" height="100" width="100" style="stroke:#006600; fill: #cc0066;"/>
        <circle class="circle" cx="200" cy="80" r="30" />
        <line x1="300" y1="30" x2="300" y2="135"/>
    </svg>

The `x` and `y` attributes are used to determine the location of the rectangle, relative to the parent element's location. The `width` and `height` attributes determine the size of the rectangle. The style attribute can also be used to set inline CSS.

The location of the circle is determined by `cx` and `cy` and has a radius of `r`.

####The `<path>` element

This element is used to draw advanced shapes combined from lines, arcs, curves etc. with or without fill. 

####The `<g>` element
This element is used to group SVG shapes together. This group can then be treated as a single shape.

###Exercise
Download <a href="exercises/svg-tags.html" class="exercise">svg-tags.html</a> and use the [tutorials listed here](http://tutorials.jenkov.com/svg/index.html) to experiment with shapes, transformations, gradients, etc. There are a few examples already included in the exercise file.

###More SVG Resources
* [Using SVG](http://css-tricks.com/using-svg/)
* [Styling Scalable Vector Graphic (SVG) With CSS](http://www.hongkiat.com/blog/scalable-vector-graphic-css-styling/)
* [How to Create a Responsive SVG](http://joshuasortino.com/journal/creating-a-responsive-svg)
* [W3C SVG documentation](http://www.w3.org/TR/SVG11/expanded-toc.html)

##Image Optimization
There are many factors to consider when optimizing images for the web.  Here are a few to consider:

* Use the appropriate file type based on the type of image being used.
* Images should always be resized to the appropriate dimensions before using them in a web page.
* When saving images using an image editor such as Photoshop, use the **save for web** option.
* Try to keep your image file sizes as small as possible and up to 100KB at an absolute maximum.

Here are some handy tools:

* [Pixlr](http://pixlr.com/)
* [Image Optim](http://imageoptim.com/)
* [SVG Optimiser](http://petercollingridge.appspot.com/svg_optimiser)

Extra readings:

* [How to optimize images for the web](http://johnkuefler.com/how-to-optimize-images-for-the-web/)
* [10 Must Know Image Optimization Tips](http://www.shopify.ca/blog/7412852-10-must-know-image-optimization-tips)


## Image Replacement

CSS image replacement is used in situation where you want text for accessibility and SEO but would rather show an image than text. A great example is a website's logo. Many techniques have been developed to accomplish this; CSS Tricks has created a museum that showcases all of the methods: [http://css-tricks.com/examples/ImageReplacement/](http://css-tricks.com/examples/ImageReplacement/)

We recommend using the one here:
[http://css-tricks.com/examples/ImageReplacement/#kellum](http://css-tricks.com/examples/ImageReplacement/#kellum)

## Reduce HTTP Requests & Image Sprites

Every image, CSS and JavaScript file referenced in your HTML file will make an HTTP request. Each request takes time to execute so it will increase the load time of your website. One way of reducing HTTP requests is to combine files. Stylesheets should be combined together into one file.

We can do the same thing with images. These are called **image sprites**. To create sprites:

1. combine images into one image file
2. use CSS `background-position` to show the correct image

Use [http://www.spritecow.com/](http://www.spritecow.com/) to combine images and get the appropriate CSS.