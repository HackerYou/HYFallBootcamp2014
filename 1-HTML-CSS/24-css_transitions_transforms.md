---
layout: notes
title: CSS3 Transitions and Transforms
topic: html
---

#CSS3 Transitions and Transforms

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

<small>Note: This part of CSS3 is still in development, so we need to vendor prefix it with -webkit for Chrome and iOS Safari. </small>

	<style type="text/css">
		.myBox2 {
		width:200px;
		height:200px;
		background:red;
		-webkit-transition: width 1s;
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


## CSS3 Transforms
Relativity new to CSS, is css transforms. They allow you to transform an element in a variety of ways, including in a 2D or 3D manor.

The CSS property for transforms is simply just `transform`, however since it is still new, we have to vendor prefix them. For simplicity, we will be using the webkit (chrome, safari, most mobile devices) vendor prefix like so:

	.myBox {
		-webkit-transform:rotate(20deg);
	}

However, in any production code, it should look like this:

	.myBox {
		-webkit-transform:rotate(20deg);
		-o-transform:rotate(20deg);
		transform:rotate(20deg);
	}

### Rotate
<style type="text/css">.myBox6 {width:200px; height:200px; background:purple;}</style>

The most basic and most useful is rotate, which allows us to rotate an object based on a degree.

	<style type="text/css">
	.myBox6 {
		width:200px;
		height:200px;
		background:purple;
		-webkit-transform:rotate(20deg);
	}
	</style>
	<div class="myBox6"></div>

<div class="myBox6" style="-webkit-transform:rotate(20deg);"></div>

You can also apply these effects on hover
	
	<style type="text/css">
	.myBox7 {
		width:200px;
		height:200px;
		background:red;
	}
		.myBox7:hover {
			-webkit-transform:rotate(50deg);
		}
	</style>
	<div class="myBox7"></div>

<style type="text/css">
.myBox7 {
	width:200px;
	height:200px;
	background:red;
}
	.myBox7:hover {
		-webkit-transform:rotate(50deg);
	}
</style>
<div class="myBox7"></div>

And combine them CSS3 transitions:

	<style type="text/css">
	.myBox8 {
		width:200px;
		height:200px;
		background:#BADA55;
		-webkit-transition:all 1s;
	}
		.myBox8:hover {
			-webkit-transform:rotate(360deg);
		}
	</style>
	<div class="myBox8"></div>

<style type="text/css">
.myBox8 {
	width:200px;
	height:200px;
	background:#BADA55;
	-webkit-transition:all 1s;
}
	.myBox8:hover {
		-webkit-transform:rotate(360deg);
	}
</style>
<div class="myBox8"></div>


## Scale
Scale is pretty straight forward too, it simply scales an element to be larger or smaller. Lets take the same 200px by 200px block. 

The value of scale is a multiple of the original element. So 1 would be the original element. 2 would be twice the size.

	<style type="text/css">
	.myBox9 {
		width:200px;
		height:200px;
		background:orange;
	}
		.myBox9:hover {
			-webkit-transform:scale(1.5);
		}
	</style>
	<div class="myBox9"></div>

<style type="text/css">
.myBox9 {
	width:200px;
	height:200px;
	background:orange;
}
	.myBox9:hover {
		-webkit-transform:scale(1.5);
	}
</style>
<div class="myBox9"></div>

As with the last one, we can also animate them.
<small>Note: because this is new, you may see some screen flickering on mobile devices or even desktop browsers.</small>

	<style type="text/css">
		.ice {
			-webkit-transition:all 0.5s;
		}
			.ice:hover {
				-webkit-transform: scale(2);
			}

	</style>
	<img src="http://www.nicenicejpg.com/200" class="ice">
	<img src="http://www.nicenicejpg.com/200" class="ice">
	<img src="http://www.nicenicejpg.com/200" class="ice">
	<img src="http://www.nicenicejpg.com/200" class="ice">

<style type="text/css">
	.ice {
		-webkit-transition:all 0.5s;
	}
		.ice:hover {
			-webkit-transform: scale(2);
		}

</style>
<img src="http://www.nicenicejpg.com/200" class="ice">
<img src="http://www.nicenicejpg.com/200" class="ice">
<img src="http://www.nicenicejpg.com/200" class="ice">
<img src="http://www.nicenicejpg.com/200" class="ice">

We can also combine transforms by simply adding a space between each effect:

	<style type="text/css">
		.ice2 {
			-webkit-transition:all 0.5s;
		}
			.ice2:hover {
				-webkit-transform: scale(2) rotate(1000deg);
			}

	</style>
	<img src="http://www.nicenicejpg.com/200" class="ice2">
	<img src="http://www.nicenicejpg.com/200" class="ice2">
	<img src="http://www.nicenicejpg.com/200" class="ice2">
	<img src="http://www.nicenicejpg.com/200" class="ice2">

<style type="text/css">
	.ice2 {
		-webkit-transition:all 0.5s;
	}
		.ice2:hover {
			-webkit-transform: scale(2) rotate(1000deg);
		}

</style>
<img src="http://www.nicenicejpg.com/200" class="ice2">
<img src="http://www.nicenicejpg.com/200" class="ice2">
<img src="http://www.nicenicejpg.com/200" class="ice2">
<img src="http://www.nicenicejpg.com/200" class="ice2">	

## scaleX and scaleY

We can also just scale X or Y, not very useful on images but may be useful if you had a situation where you didn't want to change the width or height.

	<style type="text/css">
		.ice3 {
			-webkit-transform:scaleX(2);
		}
	</style>
	<img src="http://www.nicenicejpg.com/200" class="ice3">

<style type="text/css">
	.ice3 {
		-webkit-transform:scaleX(2);
	}
</style>
<img src="http://www.nicenicejpg.com/200" class="ice3">	

## skewX and skewY

This is where it starts to get a little twisted, we can use skewX and skewY to skew our images a certain **degree**

	<style type="text/css">
	.myBox10 {
		width:200px;
		height:200px;
		background:orange;
		-webkit-transform:skewX(20deg);
	}
	</style>
	<div class="myBox10"></div>

<style type="text/css">
.myBox10 {
	width:200px;
	height:200px;
	background:orange;
	-webkit-transform:skewX(20deg);
}
</style>
<div class="myBox10"></div>

## Others
There are a few more:

* translate: Allows you to move the image X and Y pixels/percentages. Not very useful unless you are doing heavy animation.
* 3D scales, rotation and transforms: Most of the above will (eventually, some now) allow you to do these on a 3d basis. So instead of rotating on just a 2d field, we can rotate based on a Z value.

[http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/](http://www.eleqtriq.com/2010/05/understanding-css-3d-transforms/) has as great example.
[http://desandro.github.io/3dtransforms/docs/card-flip.html](http://desandro.github.io/3dtransforms/docs/card-flip.html) Card Flip Tutorial