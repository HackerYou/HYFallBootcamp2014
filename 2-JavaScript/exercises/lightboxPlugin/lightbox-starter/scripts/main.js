$(function() {

  $('a').click(function(e) {

		// Prevent Default Behaviour of clicking to new link page
		e.preventDefault();

		// Get the HREF of the target
		var image_href = $(this).attr('href');
		var text = $(this).attr('data-title');

		// Build Template
		var lightbox =
			'<div id="lightbox">' +
					'<div id="content">' + //insert clicked link's href into img src
							'<img src="' + image_href +'" />' +
							'<p id="title">' + text + '</p>'+
					'</div>' +
			'</div>';

			// insert lightbox HTML into page
			$(lightbox).hide().appendTo('body').fadeIn(200);

			// Set Variable of instantiated object
			var lightbg = $('#lightbox');
			// Remove Lightbox on click of background
			lightbg.on('click', function() {
				$(this).fadeOut(300, function() {
					this.remove();
				});
			});

			// ESC Key Close Function
			$(document).keyup(function(e) {
				if (e.keyCode == 27 ) {
					lightbg.fadeOut(300, function() {
						this.remove();
					});
				}
			});
	});

});