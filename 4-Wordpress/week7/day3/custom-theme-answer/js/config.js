/*
	ZeroFour 2.5 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Note that we are wrapping our code with a function that gets invoked right away. The purpose of this function is to encapsulate our code so that it doesn't interfere with any other code on the page. We're also taking in the jQuery object and aliasing it as $ to avoid conflicts with other libraries that use the $ alias.

(function($){
	$(function() {
		$('#nav > ul').dropotron({
			offsetY: -22,
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			detach: false
		});
	});
})(jQuery)