---
layout: notes
topic: wp
title: Template Tags
---

# Template Tags

With templates, we don't just code our content straight into `page.php` or `single.php` because these are re-usable for every single page or blog post.

Now that we know _which_ pages describe the layout. How do we get the content from the backend into our templates?

If we writing a PHP site from scratch, we'd have to connect to our database, query the database for the content, then parse and output (`echo`) the content to the page.

Thankfully, WordPress has a number of template tags that do a lot of the work for us. Think of template tags as magical WordPress shortcuts for getting and printing bits of content. They're really little pre-written php functions that come with WordPress, so you'll always see them between `<?php` `?>` tags.

Let's take a look at some of the template tags being using in the HackerYou theme. Open up `assets\theme-hackeryou\page.php`.

Aside from the loop, we see:

`get_header();` gets the header.php file and includes the contents in your template  

`the_title();` echo's out the title of the current post or page

`the_content();`  echo's out the content (what was added via the WYSIWYG editor) of the current post or page

`get_sidebar();` gets the contents of sidebar.php and includes the contents in your template

`get_footer();` get the footer.php file and includes the contents in your template  

These are some of the most common template tags you'll see, but there are [many more](https://codex.wordpress.org/Template_Tags)! This is part of what makes WordPress so powerful and easy to use. 

##Getting vs. Echoing

Let's explore the various author template tags to find out more about how they work: <https://codex.wordpress.org/Template_Tags#Author_tags>.

Notice there are several paris of similar looking tags - like `the_author` and `get_the_author`, `the_author_link`  and `get_the_author_link`.

Exploring the documentation for [`the_author`](https://codex.wordpress.org/Function_Reference/the_author) and [`get_the_author`](https://codex.wordpress.org/Function_Reference/get_the_author),
we see that `the author` is used to **display** the author of a post, and `get_the_author` is used to **retrieve** the post author.  This is a common naming convention for template tags.

####`the_` tags will display content on your page using php's `echo`

####`get_` and `get_the` tags will return the content for you to use as you please

`<h1><?php the_title(); ?></h1>`

Typically, when using a `get_the_` template tag, you'll store the return value in a variable so you can manipulate it or pass it into another functoin. Note that in PHP, we declare variables by starting thier names with a `$`.

    $postTitle = get_the_title();
    $postTitle = strtoupper($postTitle); //a PHP function that makes a string all caps
    <h1><?php echo $postTitle; ?></h1>


##Where can template tags be used?

###Inside the loop
Some template tags refer specifically to post or page data, so they need to be used inside the loop.  Some examples we've seen already include, `the_content()`, `get_the_author()`, and `the_title()`. 

Usually the codex will tell you whether or not a template tag needs to be used inside the loop, [like the docs for `the_author`](https://codex.wordpress.org/Function_Reference/the_author), but if your tags aren't outputting any info, you may be using a loop specific tag outside the loop.  

###Outside the loop

Other template tags refer to site wide info, so these can be used anywhere in your templates. `get_header()`,  `wp_nav_menu()`, `home_url()` are some examples of template tags that can be used globally.

###Inside or outside the Loop - depending on how you use it

Sometimes you might want to retrieve info for something *other than the current post or page*.  Many `get_` adn `get_the` template tags allow you to pass in a post or page ID to get info for an arbitrary post.

    get_permalink(); //inside the loop, will return current post's permalink

    get_permalink('45'); //returns the permalink for post with an ID of 45

