#Custom queries and loops

So, we've all seen the loop a bunch of times by now - loops are found in **index.php**, **archive.php**, **page.php**, **single.php**, and any template that displays post content entered into WordPress. That looks something like this:

	<?php if ( have_posts() ) : ?>

		<?php /* Start the Loop */ ?>
		<?php while ( have_posts() ) : the_post(); ?>

			[stuff that happens while inside the loop]

		<?php endwhile; ?>

			[stuff that happens after the loop]

	<?php else : ?>

		[stuff that happens if there aren't any posts]

	<?php endif; ?>


WordPress knows what kind of content to output based on what page it's on. If you're on a single post, WordPress knows to pull content from the database and serve it up using the code we've created in single.php.

##What if we told you that you could create your own loops?

[And you could make those loops output basically anything?](http://farm5.staticflickr.com/4119/5409686785_fe496a83fa_o.gif)

