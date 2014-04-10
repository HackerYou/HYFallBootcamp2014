---
layout: notes
topic: wp
title: The Loop
---

# The Loop

The loop is the lifeblood of a WordPress Theme, is it use to iterate over and display each of the posts that are available on a given page.

## The Loop in plain English

“For as long as there are posts to show, show them”

Our blog page loop shows 5 posts, but a single post page only shows 1.

Every page has at least a basic loop to output that page's content.

![](http://cl.ly/C20B/Screen%20Shot%202011-11-22%20at%205.58.51%20PM.png)

## Sudo Loop

This is the logic behind the loop in plain english. You can recall ifs and loops from JavaScript.

	if we have posts
	    while we have posts
	       1. The Code in here is run once for every piece of content 
	          retrieved from the database
	       2. We might want to output the title, the date and the content
	    end while
	end if

## The Loop Steps

Let's step through how the loop works with the blog page.

1. The blog page is requested by the user. Wordpress asks the database for all content for that page.
2. The database returns 5 of the latest blog posts.
3. Wordpress first grab the header.php file and starts the page output
4. Wordpress then _hits the loop_. Since we have 5 posts from the database, wordpress outputs the code within the loop __5 times__.
5. Wordpress is done the loop, it moves on and outputs the sidebar and the footer.
6. Page is finished and is now one big HTML file. WordPress sends that HTML to the browser.


## The Loop Code

Most templates will come with the loop code already. It is important that you can both recognize the loop within an existing template as well as be able to write your own when you need it.

Here is the most basic loop:

	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<?php the_title(); ?>
		<?php the_content(); ?>
	<?php endwhile; ?>

The above code will loop over every piece of content available to it and spit it out onto the screen. For a page, it would be only once. For my blog home, it would be 5 times or however many posts should be one the page. 

You can then extend this and add any of your markup and template tags inside:

	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	  <div class="post">
	    <?php the_title(); ?>
	    <p class="author">Written by <?php the_author(); ?> on <?php the_date(); ?> at exactly <?php the_time(); ?></p>
	    <?php the_content(); ?>
	  </div>
	<?php endwhile; ?>

## loop.php in our theme
The loop is used in every page, and does almost the same thing on many pages such as `index.php`, `archive.php`, `category.php` and `tag.php`.

Instead of writing the loop on _every_ page, we can farm our the similar task to loop.php. 

So, if and when you want to edit how blog posts are spit out on the page, you can edit `loop.php`.

Individual pages do not use `loop.php` as they are very different from blog posts. They have their own loop. Let's open `page.php` and see where the loop starts and stops.

## Exercise

This exercise will get you up to speed with working with both template tags as well as the loop.

Using the HackerYou Theme, do at least the following:

1. Change the date of each post and add the authors image. 

![](http://wes.io/UJET/content)

To:

![](http://wes.io/UIJs/content)

For the date part of it, the available options for date formatting are available here:

<http://ca3.php.net/manual/en/function.date.php>

2. When you click on an authors name, you get a listing of their posts:

![](http://wes.io/UIAl/content)

Change this to look and function like below. Note you will have to edit your profile with a bio and website for it to show up.

You will have to add new HTML, Template Tags and CSS to achieve this. 

![](http://wes.io/UIg9/content)

3. Style the posts. If you go to your blog page, you will notice that all your posts sort of run together. Style them to stand out from each other.

Use dev tools to figure out what classes you need to target.

Feel free to style it however you wish. If you need guidance, you should go from something like this:

![](http://wes.io/UIJr/content)

To:

![](http://wes.io/UI9X/content)

4. Integrate more tags.

This will be the start of your own personal blog / portfolio. Take a look at the [template tags page](https://codex.wordpress.org/Template_Tags) and integrate at least 5 of them. 

Suggestions include:

* Display the tags in little tag icons. Similar to something like this: <http://cdn.instantshift.com/wp-content/uploads/2012/12/free-tags-psd-12.jpg> or get more inspiration here:  <http://patterntap.com/>. 
* Create a second menu and put it in the footer
* Display the categories of each post in a more attractive way
* Show the number of comments the post has beside the title
* Create a calendar icon and display the Month name and day in it
* Introduce post thumbnails
* Use image replacement to replace your site header with a logo
* Style the sidebar widgets
* Style and customize the search button
* Style your search results
* Remove the sidebar from pages you do not wish to have it on
