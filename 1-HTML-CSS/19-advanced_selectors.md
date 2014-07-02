---
layout: notes
title: Advanced CSS Selectors
topic: html
---

# Advanced CSS Selectors

# Advanced Selectors
By now, we have become pretty comfortable with the following selectors:

	p {...}

	ul li {...}

	.className {...}

	#idName {...}

	.warning, .error {...}


CSS3 (and CSS2 in some cases) has ushered in a set of new, more complex, selectors. Let's take a look at Some of them. Compatability and examples of each can be found at the excellent article by net tuts [http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/](http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/)


## Adjacent Selectors — .cat + .dog {}

Select an element right next to another element. Cats and dogs should not be beside eachother. Let's flag it!

	<div class="cat">Cat</div>
	<div class="dog">Dog</div>
	<div class="dog">Dog</div>

	<style>
		.cat + .dog {
			background:red;
		}
	</style>

<div class="cat">Cat</div>
<div class="dog">Dog</div>
<div class="dog">Dog</div>

<style>
	.cat + .dog {
		background:red;
	}
</style>

This can be handy when you are trying to pad text, but only when it comes after an image element.

## Direct Child Selector — .cat > .kitten

Select elements only when they are a direct descendant. No children should be selected.
	
	<div class="parent">
		Parent
		<div class="child">Child</div>
		<div class="child">Child</div>
		<div class="child">Child</div>
		<div class="anotherDiv">
			<div class="child">Child</div>
		</div>
	</div>

	<style>
		.parent > .child {
			background:red;
		}
	</style>

<div class="parent">
	Parent
	<div class="child">Child</div>
	<div class="child">Child</div>
	<div class="child">Child</div>
	<div class="anotherDiv">
		<div class="child">Child</div>
	</div>
</div>

<style>
	.parent > .child {
		background:red;
	}
</style>



## Following Selector — img ~ p {}

Select elements that follow an element:


	<div class="followExample">
		<p>I'm a paragraph</p>
		<p>I'm a paragraph</p>
		<p>I'm a paragraph</p>
		<img src="http://placedoge.com/100/100">
		<p>I'm a paragraph</p>
		<p>I'm a paragraph</p>
		<p>I'm a paragraph</p>
	</div>

	<style>
		.followExample img ~ p {
			background:red;
		}
	</style>

<div class="followExample">
	<p>I'm a paragraph</p>
	<p>I'm a paragraph</p>
	<p>I'm a paragraph</p>
	<img src="http://placedoge.com/100/100">
	<p>I'm a paragraph</p>
	<p>I'm a paragraph</p>
	<p>I'm a paragraph</p>
</div>

<style>
	.followExample img ~ p {
		background:red;
	}
</style>

## Attribute Selector — input[type=text]

Select elements with specific attribute. We have done this with input types before, but it works with any type of attribute!

## Exactly 

	<a href="http://wesbos.com">Wes Bos</a>
	<a href="http://www.wesbos.com">Wes Bos (with www)</a>
	<a href="http://hackeryou.com">HackerYou</a>

	<style>
	 a[href="http://wesbos.com"] {
	 	background:red;
	 	color:white;
	 	padding:10px;
	 }
		
	</style>
 
<a href="http://wesbos.com">Wes Bos</a>
<a href="http://www.wesbos.com">Wes Bos (with www)</a>
<a href="http://hackeryou.com">HackerYou</a>

<style>
 a[href="http://wesbos.com"] {
 	background:red;
 	color:white;
 	padding:10px;
 }
	
</style>

## Contains — a[href*="hack"]

We can be a bit more lax with this. 

<a href="http://hack.ca">Hack.ca</a>
<a href="http://www.google.com">Google</a>
<a href="http://hackeryou.com">HackerYou</a>

<style>
	a[href*="hack"] {
		border:2px solid red;
	}	
</style>

	<a href="http://hack.ca">Hack.ca</a>
	<a href="http://www.google.com">Google</a>
	<a href="http://hackeryou.com">HackerYou</a>

	<style>
		a[href*="hack"] {
			border:2px solid red;
		}	
	</style>

## Starts with — `a[href^="https://"]`

Let's make all https links green:
	
	<a href="http://google.com">Google.com</a>
	<a href="https://cibc.ca">CIBC</a>
	<a href="https://google.com">Google.com</a>
	<a href="http://tsn.ca">TSN</a>

	<style>
		a[href^="https://"] {
			background:green;
			color:white;
		}
	</style>

<a href="http://google.com">Google.com</a>
<a href="https://cibc.ca">CIBC</a>
<a href="https://google.com">Google.com</a>
<a href="http://tsn.ca">TSN</a>

<style>
	a[href^="https://"] {
		background:green;
		color:white;
	}
</style>

## Ends with

Target the end of an attribute. Turn all links to jpgs goldenrod.

<a href="http://google.com">Google.com</a>
<a href="http://wesbos.com/logo.png">Wes Bos' logo</a>
<a href="http://cache.wallpaperdownloader.com/bing/img/BabyRedFox_20110322.jpg">baby fox picture</a>

<style>
	a[href$="jpg"] {
		color:goldenrod;
	}
</style>

	<a href="http://google.com">Google.com</a>
	<a href="http://wesbos.com/logo.png">Wes Bos' logo</a>
	<a href="http://wesbos.com/face.jpg">Wes Bos' picture</a>

	<style>
		a[href$="jpg"] {
			color:blue;
		}
	</style>

## Checked — :checked

Kind of a fun pseudo selector, you can target checkboxes when they are in the checked state.

<div class="floatEx">
<input type="checkbox">
<input type="checkbox">
<input type="checkbox">
<input type="checkbox">
<input type="checkbox">
</div>
<style>
	.floatEx input[type='checkbox']:checked {
		float:right;
	}
</style>

	<input type="checkbox">
	<input type="checkbox">
	<input type="checkbox">
	<input type="checkbox">
	<input type="checkbox">

	<style>
		input[type='checkbox']:checked {
			float:right;
		}
	</style>

### zzzz
Kind of boring, but we can use this in conjunction with the sibling selectors. 

<div class="wat">
<input type="checkbox" class="toggle"><div class="showMe">I can be hidden</div>
</div>

<style>
	.showMe {
		background:red;
		color:white;
		padding:20px;
	}
	input[type='checkbox']:checked + .showMe {
		display: none;
	}
</style>


	<input type="checkbox" class="toggle">
	<div class="showMe">I can be hidden</div>

	<style>
		.showMe {
			background:red;
			color:white;
			padding:20px;
		}
		input[type='checkbox']:checked + .showMe {
			display: none;
		}
	</style>

## :not
This is a new one. Select elements but not certain ones.
	
	<div class="items">
		<p class="item1">Item # 01</p>
		<p class="item2">Item # 02</p>
		<p class="item3">Item # 03</p>
		<p class="item4">Item # 04</p>
		<p class="item5">Item # 05</p>
		<p class="item6">Item # 06</p>
		<p class="item7">Item # 07</p>
		<p class="item8">Item # 08</p>
		<p class="item9">Item # 09</p>
		<p class="item10">Item # 10</p>
	</div>

	<style>
		.items p:not(.item9) {
			background:red;
		}
	</style>

<div class="items">
	<p class="item1">Item # 01</p>
	<p class="item2">Item # 02</p>
	<p class="item3">Item # 03</p>
	<p class="item4">Item # 04</p>
	<p class="item5">Item # 05</p>
	<p class="item6">Item # 06</p>
	<p class="item7">Item # 07</p>
	<p class="item8">Item # 08</p>
	<p class="item9">Item # 09</p>
	<p class="item10">Item # 10</p>
</div>

<style>
	.items p:not(.item9) {
		background:red;
	}
</style>

## First Letter — ::first-letter

Select the first letter of an element

	<p class="wes">Wes Bos</p>

	<style>
		p.wes::first-letter {
			font-size:100px;
		}
	</style>

<p class="hacker">HackerYou</p>

<style>
	p.hacker::first-letter {
		font-size:100px;
	}
</style>


## First Line — ::first-line
	
	<p class="lines">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, minus, quos, earum expedita obcaecati reprehenderitinventore libero atque veniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat tempora!</p>

	<style>
		p.lines::first-line {
			color:red;	
		}
	</style>

<p class="lines">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, minus, quos, earum expedita obcaecati reprehenderitinventore libero atque veniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat temporaveniam aut repellendus tenetur in repellat necessitatibus eveniet iure eos quaerat tempora!</p>

<style>
	p.lines::first-line {
		color:red;	
	}
</style>