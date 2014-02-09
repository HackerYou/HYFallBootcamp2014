# Week 3 , Day 2

<a href="#" class="snowToggle">Grinchify</a> 

# CSS3 Animations & Keyframes

We have talked about both Transitions and Transforms so far. Now lets take a look at using keyframes to produce animations

Key frames are a time line that spells out different points in an animations life. We use % to mark different points within the keyframe. Here is a very simple example:

First, we need to create the animation. Unlike most css, we do this outside of the element we want to apply it to, in its own CSS rule:

	@-webkit-keyframes snow {
		0% {
			top :0;

		}
		100% {
			top:100%;
		}
	}

You are able to specify any % along the way, 0 and 100 being the obvious start and finish. If you have multiple points where you want to apply the same values, you can comma separate the % points: 

	@-webkit-keyframes snow {
		0% {
			top :0;
		}
		20%, 40%, 60%, 80% {
			margin-left: 100px;
		}
		10%, 30%, 50%, 70%, 90% {
			margin-left: 10px;
		}
		100% {
			top:100%;
		}
	}


Now, that doesn't do anything except make an animation called `snow`. We need to apply it to something!

	<div class="snowflake snowflake1">&#10052;</div> <!-- unicode snowflake -->

	<style>
		/* Define our snow animation */
		@-webkit-keyframes snow {
			0% {
				top :0;

			}
			100% {
				top:100%;
			}
		}	
		/* Apply our snow animation */
		.snowflake {
			position: absolute;
			font-size:40px;
			color:white;
			-webkit-animation:snow 3s linear infinite;
		}
	</style>

`-webkit-animation:snow 3s linear infinite;` took four arguments.

- **snow** is the animation name
- **3s** is the duration it takes to complete the animation
- **linear** is something we call _easing_. Easing allows you to make smoother animations - not what we want in this case. You can choose from `ease-in`, `ease-out`, `ease-in-out` or `linear`.
- **infinite** is the # of iterations to complete. You could also set a number here.

You can also set them independently as well as add a few other options:

	.snowflake {
		-webkit-animation-name: snow;
		-webkit-animation-duration: 20s;
		-webkit-animation-timing-function: linear; 
		-webkit-animation-delay: 1s;             
		-webkit-animation-iteration-count: 2;    
		-webkit-animation-direction: alternate;  
	}

## Stepping it up

We have animated `top` so far, but just like css transitions, you can animate **any property** you can think of!

width, height, scale, font color, background color, font size, position and so on. If you have some extra time on your final project, add some fun animation to it!

<style type="text/css">
	/* Setup all snowflakes */
	body, #wrapper {
		background:#0F284E;
		color:white;
	}
	code {
		color:black;
	}
	.snowflake {
		position: absolute;
		font-size:40px;
		color:white;
		-webkit-animation:snow 3s linear infinite;
	}
	@-webkit-keyframes snow {
		0% {
			top :0;

		}
		100% {
			top:100%;
		}
	}
</style>

<div class="flakes">
<span class="snowflake snowflake1">&#10052;</span>
<span class="snowflake snowflake2">&#10052;</span>
<span class="snowflake snowflake3">&#10052;</span>
<span class="snowflake snowflake4">&#10052;</span>
<span class="snowflake snowflake5">&#10052;</span>
<span class="snowflake snowflake6">&#10052;</span>
<span class="snowflake snowflake7">&#10052;</span>
<span class="snowflake snowflake8">&#10052;</span>
<span class="snowflake snowflake9">&#10052;</span>
<span class="snowflake snowflake10">&#10052;</span>
<span class="snowflake snowflake11">&#10052;</span>
<span class="snowflake snowflake12">&#10052;</span>
<span class="snowflake snowflake13">&#10052;</span>
<span class="snowflake snowflake14">&#10052;</span>
<span class="snowflake snowflake15">&#10052;</span>
<span class="snowflake snowflake16">&#10052;</span>
<span class="snowflake snowflake17">&#10052;</span>
<span class="snowflake snowflake18">&#10052;</span>
<span class="snowflake snowflake19">&#10052;</span>
<span class="snowflake snowflake20">&#10052;</span>
<span class="snowflake snowflake21">&#10052;</span>
<span class="snowflake snowflake22">&#10052;</span>
<span class="snowflake snowflake23">&#10052;</span>
<span class="snowflake snowflake24">&#10052;</span>
<span class="snowflake snowflake25">&#10052;</span>
<span class="snowflake snowflake26">&#10052;</span>
<span class="snowflake snowflake27">&#10052;</span>
<span class="snowflake snowflake28">&#10052;</span>
<span class="snowflake snowflake29">&#10052;</span>
<span class="snowflake snowflake30">&#10052;</span>
<span class="snowflake snowflake31">&#10052;</span>
<span class="snowflake snowflake32">&#10052;</span>
<span class="snowflake snowflake33">&#10052;</span>
<span class="snowflake snowflake34">&#10052;</span>
<span class="snowflake snowflake35">&#10052;</span>
<span class="snowflake snowflake36">&#10052;</span>
<span class="snowflake snowflake37">&#10052;</span>
<span class="snowflake snowflake38">&#10052;</span>
<span class="snowflake snowflake39">&#10052;</span>
<span class="snowflake snowflake40">&#10052;</span>
<span class="snowflake snowflake1">&#10052;</span>
<span class="snowflake snowflake2">&#10052;</span>
<span class="snowflake snowflake3">&#10052;</span>
<span class="snowflake snowflake4">&#10052;</span>
<span class="snowflake snowflake5">&#10052;</span>
<span class="snowflake snowflake6">&#10052;</span>
<span class="snowflake snowflake7">&#10052;</span>
<span class="snowflake snowflake8">&#10052;</span>
<span class="snowflake snowflake9">&#10052;</span>
<span class="snowflake snowflake10">&#10052;</span>
<span class="snowflake snowflake11">&#10052;</span>
<span class="snowflake snowflake12">&#10052;</span>
<span class="snowflake snowflake13">&#10052;</span>
<span class="snowflake snowflake14">&#10052;</span>
<span class="snowflake snowflake15">&#10052;</span>
<span class="snowflake snowflake16">&#10052;</span>
<span class="snowflake snowflake17">&#10052;</span>
<span class="snowflake snowflake18">&#10052;</span>
<span class="snowflake snowflake19">&#10052;</span>
<span class="snowflake snowflake20">&#10052;</span>
<span class="snowflake snowflake21">&#10052;</span>
<span class="snowflake snowflake22">&#10052;</span>
<span class="snowflake snowflake23">&#10052;</span>
<span class="snowflake snowflake24">&#10052;</span>
<span class="snowflake snowflake25">&#10052;</span>
<span class="snowflake snowflake26">&#10052;</span>
<span class="snowflake snowflake27">&#10052;</span>
<span class="snowflake snowflake28">&#10052;</span>
<span class="snowflake snowflake29">&#10052;</span>
<span class="snowflake snowflake30">&#10052;</span>
<span class="snowflake snowflake31">&#10052;</span>
<span class="snowflake snowflake32">&#10052;</span>
<span class="snowflake snowflake33">&#10052;</span>
<span class="snowflake snowflake34">&#10052;</span>
<span class="snowflake snowflake35">&#10052;</span>
<span class="snowflake snowflake36">&#10052;</span>
<span class="snowflake snowflake37">&#10052;</span>
<span class="snowflake snowflake38">&#10052;</span>
<span class="snowflake snowflake39">&#10052;</span>
<span class="snowflake snowflake40">&#10052;</span>
<span class="snowflake snowflake1">&#10052;</span>
<span class="snowflake snowflake2">&#10052;</span>
<span class="snowflake snowflake3">&#10052;</span>
<span class="snowflake snowflake4">&#10052;</span>
<span class="snowflake snowflake5">&#10052;</span>
<span class="snowflake snowflake6">&#10052;</span>
<span class="snowflake snowflake7">&#10052;</span>
<span class="snowflake snowflake8">&#10052;</span>
<span class="snowflake snowflake9">&#10052;</span>
<span class="snowflake snowflake10">&#10052;</span>
<span class="snowflake snowflake11">&#10052;</span>
<span class="snowflake snowflake12">&#10052;</span>
<span class="snowflake snowflake13">&#10052;</span>
<span class="snowflake snowflake14">&#10052;</span>
<span class="snowflake snowflake15">&#10052;</span>
<span class="snowflake snowflake16">&#10052;</span>
<span class="snowflake snowflake17">&#10052;</span>
<span class="snowflake snowflake18">&#10052;</span>
<span class="snowflake snowflake19">&#10052;</span>
<span class="snowflake snowflake20">&#10052;</span>
<span class="snowflake snowflake21">&#10052;</span>
<span class="snowflake snowflake22">&#10052;</span>
<span class="snowflake snowflake23">&#10052;</span>
<span class="snowflake snowflake24">&#10052;</span>
<span class="snowflake snowflake25">&#10052;</span>
<span class="snowflake snowflake26">&#10052;</span>
<span class="snowflake snowflake27">&#10052;</span>
<span class="snowflake snowflake28">&#10052;</span>
<span class="snowflake snowflake29">&#10052;</span>
<span class="snowflake snowflake30">&#10052;</span>
<span class="snowflake snowflake31">&#10052;</span>
<span class="snowflake snowflake32">&#10052;</span>
<span class="snowflake snowflake33">&#10052;</span>
<span class="snowflake snowflake34">&#10052;</span>
<span class="snowflake snowflake35">&#10052;</span>
<span class="snowflake snowflake36">&#10052;</span>
<span class="snowflake snowflake37">&#10052;</span>
<span class="snowflake snowflake38">&#10052;</span>
<span class="snowflake snowflake39">&#10052;</span>
<span class="snowflake snowflake40">&#10052;</span>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript">
	function randNum(from,to) {
	    return Math.floor(Math.random()*(to-from+1)+from);
	}
	$(function() {
		$('.snowflake').each(function() {
			$(this).css({
				'font-size':randNum(5,55) + 'px',
				'left':randNum(0,100) + '%',
				'-webkit-animation': 'snow '+ randNum(6,60) + 's linear '+ randNum(0,5) +'s infinite',
				'-webkit-filter' : 'blur('+( Math.random() ) +'px)'
			}); 
		});

		$('.snowToggle').click(function() {
			$('.snowflake').fadeOut(); 
		});
	});
</script>
