# Week 3 , Day 2

## CSS3 Transitions
I've talked a little but about CSS3 Transitions before, but I wanted to document them so you are able to use them in your projects

So far we have worked with hover states where an item goes from A to B in a split second - a hard transition. So if we have an element 200px wide and 500px wide on hover, it just snaps to that size on hover.

CSS3 allows up to animate the transition between A and B (or normal and hover state).

Take the following markup for example:


	<div class="myBox"></div>

and

	.myBox {
		width:200px;
		height:200px;
		background:red;

	}
		.myBox:hover {
		width:500px;
	}

makes (hover it):

<style type="text/css">
	.myBox {
	width:200px;
	height:200px;
	background:red;
}
	.myBox:hover {
	width:500px;
}
</style>
<div class="myBox"></div>

What if we wanted to animate it from 200px to 500px instead of the harsh snap to 500px? Well, thats where we are able to use CSS3 transitions.

By simply appending a CSS property called `transition` and then specifying *which property should be animated and for how long** we can add animation.

<small>Note: This part of CSS3 is still in development, so we need to vendor prefix it with -webkit and -moz... </small>

	<style type="text/css">
		.myBox2 {
		width:200px;
		height:200px;
		background:red;
		-webkit-transition:width 1s;
	}
		.myBox2:hover {
		width:500px;
	}
	</style>
	<div class="myBox2"></div>

Makes:

<style type="text/css">
	.myBox2 {
	width:200px;
	height:200px;
	background:red;
	-webkit-transition:width 1s;
}
	.myBox2:hover {
	width:500px;
}
</style>
<div class="myBox2"></div>

Notice how we only added `-webkit-transition:width 1s;` to the CSS?

You can animate any property: width, height, padding, margin, borders and even background colors!

	<style type="text/css">
		.myBox3 {
		width:200px;
		height:200px;
		background:red;
		-webkit-transition:background 1s;
	}
		.myBox3:hover {
		width:500px;
		background:yellow;
	}
	</style>
	<div class="myBox3"></div>

<style type="text/css">
	.myBox3 {
	width:200px;
	height:200px;
	background:red;
	-webkit-transition:background 1s;
}
	.myBox3:hover {
	width:500px;
	background:yellow;
}
</style>
<div class="myBox3"></div>

### Multiple Values
To do multiple properties, simply comma separate. In this example I've set different times for each of them.

	<style type="text/css">
		.myBox4 {
		width:200px;
		height:200px;
		background:purple;
		-webkit-transition:background 1s, height 10s, width .5s;
	}
		.myBox4:hover {
		width:500px;
		height:500px;
		background:yellow;
	}
	</style>
	<div class="myBox4"></div>


<style type="text/css">
	.myBox4 {
	width:200px;
	height:200px;
	background:purple;
	-webkit-transition:background 1s, height 10s, width .5s;
}
	.myBox4:hover {
	width:500px;
	height:500px;
	background:yellow;
}
</style>
<div class="myBox4"></div>


### The All Keyword!

Be cautious with this one because it can slow down mobile phones and cause flickering, but its fun to play with on the desktop. Morph everything!

		.myBox5 {
		width:200px;
		height:200px;
		background:purple;
		color:white;
		-webkit-transition:all 2s;
		box-sizing:border-box;
	}
		.myBox5:hover {
		width:500px;
		height:500px;
		border:10px dotted green;
		background:yellow;
		border-radius:50%;
		padding:10%;
		margin:50px;
		text-align: center;
		box-shadow: 0 0 20px red;
		color:black;
	}

<style type="text/css">
	.myBox5 {
	width:200px;
	height:200px;
	background:purple;
	color:white;
	-webkit-transition:all 2s;
	box-sizing:border-box;
}
	.myBox5:hover {
	width:500px;
	height:500px;
	border:10px dotted green;
	background:yellow;
	border-radius:50%;
	padding:10%;
	margin:50px;
	text-align: center;
	box-shadow: 0 0 20px red;
	color:black;
}
</style>
<div class="myBox5"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nulla eget lacus gravida rutrum. Fusce sit amet tellus arcu. Nam in accumsan diam. Etiam quis augue risus, eget molestie sapien. </p></div>


## Final Project

The time has come to start the final project! I want you to be as creative as you can with this project so I won't be imposing very many rules for it but here are a few:

1. Make a website for something you are interested in:
	* A personal website
	* Interactive online resume / portfolio
	* A company website
	* An internal website for your coworkers
	* A resources websites - The best CSS3 techniques, a site teaching HTML, collection of Photoshop elements, whatever you want!
	* Landing page for an application you want to build
	* Re-do a non-profits website so its entirely responsive
1. It must be entirely responsive. When I resize my browser it should resize with it.
1. It should be using the latest techniques we have learned in class

Past that, I don't require you to have anything else although I encourage you to use the following if it makes sense for your website:

1. Twitter / facebook integration (widget or like buttons)
1. Contact Form / sign in form / whatever form. It doesn't need to work, but I can help you with making it work if you want it to.
1. border-radius
1. text-shadow and/or box shadow
1. Have some fun with CSS3 typography
1. absolute / relative positioning

### Motivation
I encourage you to think **outside what you think you can do and push yourself**. The best way to learn, is to jump in over your head. We have lots of help here to get you on the right path and tackling something difficult is very rewarding.

If you have ideas that you aren't sure are possible, please run them by us. Usually the JavaScript dependent stuff can be done in a few lines of JS and myself or the mentors have no problem helping you with that!

Here are a few sites from last class:

* [http://reddotdesign.ca/](http://reddotdesign.ca/)
* [http://stephlaba.com/](http://stephlaba.com/)
* [http://afi100in100.com/](http://afi100in100.com/)
* [http://liift.me/](http://liift.me/)
* [http://www.andreasaxe.com/about.html](http://www.andreasaxe.com/about.html)

Let's go around the class and say what we are going to do for our final project!

### Sample Project

I've included a sample project that I have done, let's take a look at it now.

If you would like to get started, go nuts!

For those that would like a little direction, let's work through creating the bones of my example site - from there you can customize the innards all you like!

## CSS3 Transforms
Relativity new to CSS, is css transforms. They allow you to transform an element in a variety of ways, including in a 2D or 3D manor.

The CSS property for transforms is simply just `transform`, however since it is so new, we have to vendor prefix them. For simplicity, we will be using the webkit (chrome, safari, most mobile devices) vendor prefix like so:

	.myBox {
		-webkit-transform:rotate(20deg);
	}

However, in any production code, it shoudl look like this:

	.myBox {
		-webkit-transform:rotate(20deg);
		-moz-transform:rotate(20deg);
		-o-transform:rotate(20deg);
		transform:rotate(20deg);
	}

### Rotate
<style type="text/css">.myBox {width:200px; height:200px; background:purple;}</style>

The most basic and most useful is rotate, which allows us to rotate an object based on a degree.

	<style type="text/css">
	.myBox {
		width:200px;
		height:200px;
		background:purple;
		-webkit-transform:rotate(20deg);
	}
	</style>
	<div class="myBox"></div>

<div class="myBox" style="-webkit-transform:rotate(20deg);"></div>

You can also apply these effects on hover
	
	<style type="text/css">
	.myBox2 {
		width:200px;
		height:200px;
		background:red;
	}
		.myBox2:hover {
			-webkit-transform:rotate(50deg);
		}
	</style>
	<div class="myBox2"></div>

<style type="text/css">
.myBox2 {
	width:200px;
	height:200px;
	background:red;
}
	.myBox2:hover {
		-webkit-transform:rotate(50deg);
	}
</style>
<div class="myBox2"></div>

And combine them CSS3 transitions:

	<style type="text/css">
	.myBox3 {
		width:200px;
		height:200px;
		background:#BADA55;
		-webkit-transition:all 1s;
	}
		.myBox3:hover {
			-webkit-transform:rotate(360deg);
		}
	</style>
	<div class="myBox3"></div>

<style type="text/css">
.myBox3 {
	width:200px;
	height:200px;
	background:#BADA55;
	-webkit-transition:all 1s;
}
	.myBox3:hover {
		-webkit-transform:rotate(360deg);
	}
</style>
<div class="myBox3"></div>


## Scale
Scale is pretty straight forward too, it simply scales an element to be larger or smaller. Lets take the same 200px by 200px block. 

The value of scale is a multiple of the original element. So 1 would be the original element. 2 would be twice the size.

	<style type="text/css">
	.myBox4 {
		width:200px;
		height:200px;
		background:orange;
	}
		.myBox4:hover {
			-webkit-transform:scale(1.5);
		}
	</style>
	<div class="myBox4"></div>

<style type="text/css">
.myBox4 {
	width:200px;
	height:200px;
	background:orange;
}
	.myBox4:hover {
		-webkit-transform:scale(1.5);
	}
</style>
<div class="myBox4"></div>

As with the last one, we can also animate them.
<small>Note: because this is new, you may see some screen flickering on mobile devices or even desktop browsers.</small>

	<style type="text/css">
		.pug {
			-webkit-transition:all 0.5s;
		}
			.pug:hover {
				-webkit-transform: scale(2);
			}

	</style>
	<img src="http://pugholder.com/200" class="pug">
	<img src="http://pugholder.com/200" class="pug">
	<img src="http://pugholder.com/200" class="pug">
	<img src="http://pugholder.com/200" class="pug">

<style type="text/css">
	.pug {
		-webkit-transition:all 0.5s;
	}
		.pug:hover {
			-webkit-transform: scale(2);
		}

</style>
<img src="http://pugholder.com/200" class="pug">
<img src="http://pugholder.com/200" class="pug">
<img src="http://pugholder.com/200" class="pug">
<img src="http://pugholder.com/200" class="pug">

We can also combine transforms by simply adding a space between each effect:

	<style type="text/css">
		.pug2 {
			-webkit-transition:all 0.5s;
		}
			.pug2:hover {
				-webkit-transform: scale(2) rotate(1000deg);
			}

	</style>
	<img src="http://pugholder.com/200" class="pug2">
	<img src="http://pugholder.com/200" class="pug2">
	<img src="http://pugholder.com/200" class="pug2">
	<img src="http://pugholder.com/200" class="pug2">

<style type="text/css">
	.pug2 {
		-webkit-transition:all 0.5s;
	}
		.pug2:hover {
			-webkit-transform: scale(2) rotate(1000deg);
		}

</style>
<img src="http://pugholder.com/200" class="pug2">
<img src="http://pugholder.com/200" class="pug2">
<img src="http://pugholder.com/200" class="pug2">
<img src="http://pugholder.com/200" class="pug2">	

## scaleX and scaleY

We can also just scale X or Y, not very useful on images but may be useful if you had a situation where you didn't want to change the width or height.

	<style type="text/css">
		.pug3 {
			-webkit-transform:scaleX(2);
		}
	</style>
	<img src="http://pugholder.com/200" class="pug3">

<style type="text/css">
	.pug3 {
		-webkit-transform:scaleX(2);
	}
</style>
<img src="http://pugholder.com/200" class="pug3">	

## skewX and skewY

This is where it starts to get a little twisted, we can use skewX and skewY to skew our images a certain **degree**

	<style type="text/css">
	.myBox5 {
		width:200px;
		height:200px;
		background:orange;
		-webkit-transform:skewX(20deg);
	}
	</style>
	<div class="myBox5"></div>

<style type="text/css">
.myBox5 {
	width:200px;
	height:200px;
	background:orange;
	-webkit-transform:skewX(20deg);
}
</style>
<div class="myBox5"></div>

## Others
There are a few more:

* translate: Allows you to move the image X and Y pixels/percentages. Not very useful unless you are doing heavy animation.
* 3D scales, rotation and transforms: Most of the above will (eventually, some now) allow you to do these on a 3d basis. So instead of rotating on just a 2d field, we can rotate based on a Z value.

[http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/](http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/) has as great example.
[http://desandro.github.io/3dtransforms/docs/card-flip.html](http://desandro.github.io/3dtransforms/docs/card-flip.html) Card Flip Tutorial