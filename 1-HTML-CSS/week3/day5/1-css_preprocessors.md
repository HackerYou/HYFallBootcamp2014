---
layout: notes
topic: html
title: CSS Preprocessors
---

# CSS preprocessors

Sass (Syntactically Awesome Style Sheets), LESS (The dynamic stylesheet language) and Stylus extend CSS with superpowers! The general idea is that instead of writing CSS you write Sass or LESS and a "compiler" converts what you write to CSS. 

We'll be demonstrating the power of pre-processors using Sass. Think of Sass as extension of CSS, and note that all your regular CSS is also valid Sass! Use as much or as little Sass as you're comfortable with when you're getting started.

![](http://cl.ly/image/15293X1N0c0J/sass-css.png)

## Variables
Specify values in one place and reuse them throughout the stylesheet. This allows you change a font-size or colour in one place and have the change take effect in multiple places.

Example:

	$peagreen : #BADA55; 

	a.myLink {
		background:$peagreen;
	}

	p.confirm {
		border:1px solid $peagreen;
	}


## Nested Rules
You can nest selectors instead of using long selector names. This keeps your stylesheet organized and saves some space. You can even tack on pseudo selectors in a nested rule using the `&` symbol!

SASS:

	$peagreen : #bada55;
	ul.nav {
		background:red;
		width:100%;
		li {
			border-right:1px solid $peagreen;
			a {
				background:#bada55;
				padding:10px;

				&:hover {
					background: yellow;
				}
			}
		}
	}

Spits out this CSS:

	ul.nav {
	  background: red;
	  width: 100%;
	}
	ul.nav li {
	  border-right: 1px solid #bada55;
	}
	ul.nav li a {
	  background: #bada55;
	  padding: 10px;
	}
	ul.nav li a:hover {
		background: yellow;
	}

**The Sass Inception Rule:** "Never nest more than three levels deep." <http://thesassway.com/beginner/the-inception-rule>

## Partials

You can break your CSS into organized chunks and they will be stitched together for you. This keeps the CSS organized and more maintainable. 

Files:

	_normalize.scss
	_nav.scss

Then in `style.scss`

	@import "normalize"
	@import "nav"

## Functions
SASS has something called functions which can do some of the hard work for you. Let's take a look at a few:

<http://sass-lang.com/documentation/Sass/Script/Functions.html>

One I use quite frequently is the [`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) function. It creates a lighter version of any colour. Let's use it to make a nice subtle hover state:
    
    $peagreen : #BADA55; 

	a.myLink {
		background:$peagreen;

		&:hover {
			background: lighten($peagreen, 10) //10% lighter than $peagreen
		}
	}

## Mixins

Remember the DRY rule? It stands for "Don't Repeat Yourself." Sass can help you with this through the use of mixins - little chuncks of CSS that we can call repeatedly in our Sass files.

Let's take a look at a mixin for some flashy text styles you might want to reuse:

    @mixin flashy-text {
    	font-family: "Lobster", serif;
    	font-size: 30px;
    	font-weight: bold;
    	color: DarkSlateGray;
    }
    
    h1 {
    	@include flashy-text;
    }
    
    .announcementBox p {
    	@include flashy-text;
    }


## Much More
There are entire frameworks built on top of SASS and there is a lot to jump into. Before we look into frameworks, let's get comfortable working with SASS. 

## A taste of Sass

To get started, go through the [guide](http://sass-lang.com/guide) and use the [Sassmeister tool](http://sassmeister.com/) to play around with the Sass syntax. We've given you a few suggestions to try here: <http://sassmeister.com/gist/11157284>

## Using Sass in your projects

The idea of sass is that you will write your styles in `style.scss` which will then compile into a `style.css` file. The browser doesn't understand sass, so it needs to be compiled to regular CSS before that.

![](http://cl.ly/image/1W0E2w1l1j3q/compiling-scss.png)

Instead of compiling it on every save manually, it is much easier to use a tool that will watch your SCSS file for changes and automatically compile into CSS for you. 

We recommend using Sass with the [Prepros app](http://alphapixels.com/prepros/), which is available for both Windows and Mac. Prepros is a free application which we will now download and try out.

### Exercise

Take one of your existing CSS stylesheets and turn it into a Sass file.

* replace duplicate values with variables
* use nesting to simplify your CSS
* use partials to better organize your CSS

## Going forward

It's relatively easy to get started with Sass because you can use as little or as many of the features as you want. You don't have to use all of the features right away (or ever?). The more you work with it the more comfortable you get.

Here are some topics worth exploring:

* How to structure a Sass project: <http://thesassway.com/beginner/how-to->structure-a-sass-project
* Compass Framework: <http://compass-style.org/>
* Bourbon Mixin Library: <http://bourbon.io/>
* Neat - Grid Framework: <http://neat.bourbon.io/>
* Susy - Grid Framework: <http://susy.oddbird.net/>