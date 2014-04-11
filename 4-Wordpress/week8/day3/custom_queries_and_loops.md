---
layout: notes
topic: wp
title: Custom queries and loops
---

#Custom queries and loops

So, we've all seen the loop a bunch of times by now - loops are found in **index.php**, **archive.php**, **page.php**, **single.php**, and any template that displays post content entered into WordPress. That looks something like this:

	<?php if ( have_posts() ) : ?>

		<?php while ( have_posts() ) : the_post(); ?>

			[stuff that happens while inside the loop]

		<?php endwhile; ?>

			[stuff that happens after the loop]

	<?php else : ?>

		[stuff that happens if there aren't any posts]

	<?php endif; ?>


WordPress knows what kind of content to output based on what page it's on. If you're on a single post, WordPress knows to use the single.php template, just like if you're in a category archive, WordPress knows to go to category.php. Up until now, you've had to play by WordPress's rules to display content, and you've probably become best friends with the [Template Hierarchy](https://codex.wordpress.org/images/1/18/Template_Hierarchy.png).

The default loop uses a bunch of logic that you've probably taken for granted by now: for example, it always displays posts chronologically from newest to oldest.

##But what if we told you that you could create your own loops?

[And you could make those loops output basically anything, in any order?](http://farm5.staticflickr.com/4119/5409686785_fe496a83fa_o.gif)

##Enter WP_Query

Creating your own loop with WP_Query doesn't actually look very different from a standard loop. Here's the basic syntax:

	<?php $newAwesomeQuery = new WP_Query( [PARAMETERS GO HERE] ); ?>

	<?php if ( $newAwesomeQuery->have_posts() ) : ?>
	
		<?php while ( $newAwesomeQuery->have_posts() ) : $newAwesomeQuery->the_post(); ?>
			[stuff that happens while inside the loop]
		<?php endwhile; ?>

	  	<?php wp_reset_postdata(); ?>

	<?php else:  ?>
		[stuff that happens if there aren't any posts]
	<?php endif; ?>
	
That wasn't too scary! The biggest differences between a standard loop and a custom loop are:

* We create a new variable for our custom loop and use that its name throughout the new loop. In this case, we called it $newAwesomeQuery
* On the first line, we pass WP_Query parameters that describe what kind content we want returned, how we want it filtered, and in what order. More on that in a minute.
* After we're finished with our custom loop, it's important to call the **wp_reset_postdata()** function, which resets global post variables to their original values. For example, let's say we're using a custom loop in a single post. By using **wp_reset_postdata()** after our custom loop, template tags like **the_permalink()** will refer to your original post again.

##A few common parameters

Our code snippet above wouldn't actually work, of course, because we'd actually need to write something where it said **[PARAMETERS GO HERE]**. Here are a few examples:

###Number of posts displayed

* Display only four posts: **'posts_per_page' => 4**
* Display unlimited posts: **'posts_per_page' => -1**

###Filter by post type

* **'post_type' => 'post'** or **'post_type' => 'page'** or **'post_type' => 'your-custom-post-type-name-here'**

###Filter by category/tag

* Show items in a few specific categories: **cat=2,6,17,38** (the numbers are the category IDs)
* Display items except those in specific categories: **cat=-12,-34,-56**

###Order by

* Display items alphabetically: **'orderby' => 'title'**
* Order items by a custom field, alphabetically (e.g. for a word): **'orderby' => 'meta_value', 'meta_key' => 'name-of-field'**
* Order items by a custom field, numerically (e.g. for a date): **'orderby' => 'meta_value_num', 'meta_key' => 'name-of-field'**

Ordering items by custom fields can be really powerful. Let's say you have an **Events** custom post type and wanted to order your items by the event time, as opposed to when you entered the event into WordPress. Order by **meta_value_num** and you're all set!


Whenever you order items by something, you can also set which direction they go in by setting **order** to **ASC** (ascending) or **DESC** (descending).

##An example of a custom loop in action

Let's say you've set up a custom post type for your portfolio and you have a custom taxonomy for the type of work that you do (e.g. Branding, Web Design, and Web Development). 

The default loop will work great to show the items and display a single item, but what if we wanted to make a single portfolio item page cooler by displaying four related item thumbnails at the bottom of the page?

Here's how we could do that:

	<?php
	// First, let's find out what type of project we're dealing with by finding out which terms of our custom 'project_type' taxonomy apply to this post
	
	$projectTerms = wp_get_post_terms( $post->ID, 'project_type' );	
	
	// Next, let's build our custom query!
	
	$projectQuery = new WP_Query( 
		array( 
			'posts_per_page' => 4, 
			'post_type' => 'projects', 
			'project_type' => $projectTerms, 
			'post__not_in' => array( $post->ID )  
			) 
	); ?>
	
	<?php if ( $projectQuery->have_posts() ) : ?>
	
		<?php while ($projectQuery->have_posts()) : $projectQuery->the_post(); ?>

			<?php echo get_the_post_thumbnail( $post->ID); ?> 
			<a href="<?php the_permalink(); ?>">
				<?php the_title(); ?>
			</a>
		<?php endwhile; ?>
		
		<?php wp_reset_postdata(); ?>
		
	<?php else:  ?>
		[stuff that happens if there aren't any posts]
	<?php endif; ?>

Let's break that down a bit and look at the parameters that we passed our new WP_Query up there:

* **posts_per_page => 4** tells the custom loop to only give us four items
* **'post_type' => 'projects'** tells the custom loop to only display items in a custom post type called "Projects"
* **'project_type' => $projectTerms** is a taxonomy parameter that tells the loop to only return items in the custom "Project Type" taxonomy that match the terms of this post (we'd figured out what those were before we ran the loop and assigned them to that $projectTerms variable)
* **'post__not_in' => array( $post->ID )** this tells the loop to exclude the current post (because we wouldn't want the current post in a list of related posts!)

Then, inside the loop, we grabbed the featured image for each item, and linked to the item using the title as the link text. 

##A custom query for a one-page site

	<?php
	
	$onePageQuery = new WP_Query( 
		array( 
			'posts_per_page' => -1,
			'post_type' => 'page', 
			'orderby' => 'menu_order',
			'order' => 'ASC',
			'post__not_in' => array( 42 ) // if you wanted to exclude a page with the ID of 42
			) 
	); ?>
	
	<?php if ( $onePageQuery->have_posts() ) : ?>
	
		<?php while ($onePageQuery->have_posts()) : $onePageQuery->the_post(); ?>

			<section id="<?php echo $post->post_name; ?>">
				<h2><?php the_title(); ?></h2>
				<?php the_content(); ?>
			</section>
		<?php endwhile; ?>
		
		<?php wp_reset_postdata(); ?>
		
	<?php else:  ?>
		[stuff that happens if there aren't any posts]
	<?php endif; ?>
	
Now, let's break this one down as well.

* **'posts_per_page' => -1** means that this loop will run for as many items match the query. -1 means unlimited. We're doing this because your WordPress settings might default to showing 5 or 10 posts per page, but if there are more sections than this, we want the loop to go as long as it has to.
* **'post_type' => 'page'** tells the custom loop to only display pages, as opposed to posts and custom post types
* **'orderby' => 'menu_order'** This parameter tells us how to order the posts. We could have told the query to order the pages chronologically or alphabetically, but this is a little arbitrary, and you might not get the posts in the order you actually want them. By setting the order to **"menu_order"**, this lets us set the order from the WordPress editor. You do that here, right below the Template in the Page Attributes: ![](http://cl.ly/image/3e2v1K3d321x/Screen%20Shot%202014-03-18%20at%202.30.50%20PM.png)
* **'post__not_in' => array( 42 )** tells the loop to exclude a specific page by ID, if you wanted to do so.

You might also notice that, in the loop, we surrounded the content with a section and gave it the class of **"$post->post_name"**. That's a bit of WordPress code that outputs the name of the 'slug' of each page, and that gives us a unique ID to link to in the nav menu.


One page site accomplished!


##The possibilities are nearly endless

Don't worry if this seems a little daunting. The Codex is here to help! If you're interested in building complex WordPress themes with lots of custom functionality, the [entry for WP Query](http://codex.wordpress.org/Class_Reference/WP_Query) will be one that you'll be visiting every so often. In particular, you can jump down to the [section on parameters](http://codex.wordpress.org/Class_Reference/WP_Query#Parameters) to see all the ways you can customize the loop.