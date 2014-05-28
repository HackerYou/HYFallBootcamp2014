---
layout: notes
topic: wp
title: Custom Themes
---

# Custom Themes

As a class we're going to create a custom theme, test it and package it. 

## Where to start?

When creating Wordpress themes we can build everything ourself or use a starter theme. Starter themes provide great markup and some base styles so they are a good choice if you're starting fresh. If you already have an HTML template then a starter theme might not be as appropriate.

**Starter Themes**:

* [http://themble.com/bones/](http://themble.com/bones/)
* [http://underscores.me/](http://underscores.me/)
* [http://html5blank.com/](http://html5blank.com/)
* Wes Bos starter theme

**Why use starter themes?**

* Modern HTML5 markup
* Most of the PHP template tags that we need already added
* Good defaults for CSS
* Files already organized into folders
* Commented code that we can learn from

We are going to be building a Wordpress theme by using an existing HTML template called <a href="custom-zero-theme-start.zip" class="exercises">Zerofour from HTML5Up</a>. We will do the minimum amount of work that it takes to take a template and convert it into a theme. 

## Build the custom theme

We are going to build a simple personal blog so that when we're done you can apply the same techniques to your own personal website.

Our goal is to take some components from the template and "Wordpressify" it. The idea is to move the markup without any of the "content". The content will be in the Wordpress database, we just copy the "skeleton". The content will be added through widgets and the Wordpress Loop.

### Step 1: Start a theme

Make sure that your local Wordpress environment is running.

Start by creating a folder called "custom_theme" in your Wordpress themes directory. Open up this folder in sublime text. At the very minimum the theme requires a **style.css** and an **index.php** file. Let's create these files, then activate the theme from the Wordpress admin area.

When we make changes to the theme you should be able to see the changes after refreshing the page. For now your Wordpress website should be blank since our **index.php** file is blank.

### Step 2: Make it yours

We should add a stylesheet header to our style.css to take ownership of the theme. Here's a sample but feel free to add your own information.

```
/*
Theme Name: Custom HackerYou Theme
Theme URI: http://hackeryou.com
Author: HackerYou
Author URI: http://hackeryou.com
Description: A theme created for teaching purposes.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/
```

You should see the changes reflected in the Wordpress admin panel (Appearance => Themes).

### Step 3: Add Styles

Copy the contents of style.css from the template and move it to the theme's style.css file.

### Step 4: Add Markup

Copy the contents of **index.html** from the template and move it to the theme's **index.php** file. You should now see the markup when you refresh the page.

### Step 5: Fix references

Notice that the stylesheet is not loading properly. This is because the file is under `/wp-content/themes/<theme_name>/style.css` but the style sheet references the path `/css/style.css`. To fix this we'll need to reference the stylesheet by using the Wordpress `get_stylesheet_uri()` method.

Replace `css/style.css` with `<?php echo get_stylesheet_uri(); ?>`.

If you open up the Chrome Console you will see that there are many 404 (Not Found) errors. This is because our theme is missing JavaScript, images and fonts. We'll need to move the files to the appropriate directory. 

The stylesheet expects the images to be in a folder called **images** at the same level as the **style.css** file. So move the images folder from **<template_folder>/css/images** to **<theme_folder>/images**. The rest of the images are considered "content" so we won't worry about them for now.

We'll do the same thing with the fonts by moving the fonts folder from **<template_folder>/css/font** to **<theme_folder>/font**.

### Step 6: Enqueue scripts

This template requires three JavaScript files. The recommended way of linking JavaScript to a WordPress theme is by using the `wp_enqueue_script` function ([http://codex.wordpress.org/Function_Reference/wp_enqueue_script](http://codex.wordpress.org/Function_Reference/wp_enqueue_script)). To add functions to our theme we'll need to create a **functions.php** file.

The scripts need to be loaded in the right order so the following function will do just that.

```
<?php

function my_scripts_method() {
  wp_enqueue_script(
    'dropotron', //handle
    get_stylesheet_directory_uri() . '/js/jquery.dropotron.min.js', //source
    array( 'jquery' ), //dependencies
    null, // version number
    true //load in footer
  );

  wp_enqueue_script(
    'config', //handle
    get_stylesheet_directory_uri() . '/js/config.js', //source
    array( 'dropotron' ), //dependencies
    null, // version number
    true //load in footer
  );
}

add_action( 'wp_enqueue_scripts', 'my_scripts_method' );

?>
```
Wordpress already has jQuery loaded. Next we remove the JavaScript references from our theme's index.php file. Copy the js folder to the theme. The errors will go away but the drop-down menu will not work yet. 

Open up the resources tab in Developer tool and look under the "Frames -> localhost" folder. There you'll see the images, CSS and HTML for the page. You will not see any JavaScript there - so what is the problem? Well our Wordpress theme is not much of a theme, it's mostly HTML. Wordpress needs a few hooks in the theme to be able to dynamically add the JavaScript.

### Step 7: Header and Footer

Let's take the top part of our website (the header) and put it in **header.php** and the lower part (i.e. footer) in a file called **footer.php**. Splitting up our template like this will keep the code organized because we will be adding a bit of PHP to make this a real Wordpress theme.

Cut from the `<!DOCTYPE HTML>` all the way down to **but not including** `<!-- Main Wrapper -->` and paste it in **header.php**. Add `<?php get_header(); ?>` at the top of index.php and Wordpress will know what to do! Refresh the page to verify that the website still works.

Cut from `<!-- Footer Wrapper -->` all the way to very bottom of the page and paste it in footer.php. Add `<?php get_footer(); ?>` and refresh the website to verify that it still works.

### Step 8: Header

Let's focus our attention on header.php. We want to:

1. Make titles dynamic: replace `<title>Right Sidebar - ZeroFour by HTML5 UP</title>` with `<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>`.
2. Add ping back: Add `<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">` just before the `</head>` tag.
3. Add the Wordpress header hook:   
Add `<?php wp_head(); ?>`just before the `</head>` tag. Many Wordpress plugins use this hook to add elements to <head> such as styles, scripts, and meta tags.
4. Link logo dynamically to homepage: Replace `<h1><a href="#" id="logo">ZeroFour</a></h1>` with `<h1><a href="<?php echo home_url(); ?>" id="logo"><?php bloginfo('name'); ?></a></h1>`. Now the logo will always link to home.

If you refresh the page and look at the HTML you will see that the header looks a lot different. Wordpress is hooking in and adding a bunch of stuff.


The final thing we need for the header is a Wordpress Navigation so that we can manage links from the admin dashboard. We need to do two things. First register the navigation and then display it.

Register the navigation in functions.php by adding the following before the `?>`:

```
register_nav_menu( 'primary', 'Primary Menu' );
```

Then we'll need to replace the navigation in header.php. Remove the `<nav>` element and all of its children and replace it with :

```
<?php wp_nav_menu( array('theme_location' => 'primary', 'container' => 'nav', 'container_id' => 'nav') ); ?> 
```

Next go into the Wordpress Admin dashboard, click on "Menus" under the appearance tab. There you will find a "Manage Locations" tab at the top of the page. Click on this link and make sure that at least one menu is assigned as "Primary".

This will create navigation markup that should look very similar to what we already have except it will be dynamically generated. And that's it for the header!

### Step 9: Footer

The footer doesn't really have much dynamic content so let's add some. Let's add a year to our copyright notice that updates itself automatically. We'll also replace the word "Untitled" with the name of our blog. Replace the #copyright div with the following:

```
	<div id="copyright">
		&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. All rights reserved | Images: <a href="http://fotogrph.com/">fotogrph</a> | Design: <a href="http://html5up.net/">HTML5 UP</a>
	</div>
```

We also want to add `<?php wp_footer(); ?>` just before the `</body>` tag so that Wordpress can hook into this function and add our JavaScript to the bottom of the page.

From the Wordpress admin panel create a nested navigation menu for testing purposes. If you check the website you should see that the drop-down menu works now! The styling is a bit off probably because the original navigation expects a `<span>` tag inside the navigation. This is a CSS issue that we can resolve later.

### Step 4: Sidebar

The markup for the sidebar is still in index.php so let's take it out. Cut from `<div id="sidebar">` all the way down to the end of that div and put it in sidebar.php. Replace this content with `<?php get_sidebar(); ?>`.

Sidebars are a great place for widgets. Each of the `<section>` elements in our sidebar can be seen as a widget. If we "widgetize" our sidebar then we can add any number of built-in widgets from the Wordpress admin panel.

Just like a navigation, we first register the sidebar and then display it with the right markup.

**Register**

Open up functions.php and add the following:

```
function my_sidebars_method() {
  register_sidebar(array(
          'id' => 'sidebar1',
          'name' => 'Sidebar 1',
          'description' => 'The first (primary) sidebar.',
          'before_widget' => '<section>',
          'after_widget' => '</section>',
          'before_title' => '<header class="major"><h2>',
          'after_title' => '</h2></header>',
  ));
}

add_action( 'widgets_init', 'my_sidebars_method' );
```

**Display**

In sidebar.php take out the two sections and replace them with:

```
	<?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>
   	<?php dynamic_sidebar( 'sidebar1' ); ?>
   <?php else : ?>
   	<div>No widgets have been activated</div>
   <?php endif; ?>
```

From the admin panel drag and drop some widgets into "Sidebar 1". Now you have access to lots of dynamic content that you (or your client) can easily change.

### Step 5: Content Area

The final piece of the puzzle is the main content of our website. This stuff goes in index.php. Here we loop through the page or posts and display them. Of course we don't want to loop unless something is present. So first we check with an if/else conditional:

```
<?php if ( have_posts() ) : ?>
  <!-- do stuff here! -->
<?php else : ?>
  <!-- nothing found! -->
<?php endif; ?>
```

Then add the loop:

```
<?php if ( have_posts() ) : ?>
  
  <?php while ( have_posts() ) : the_post(); ?>
    <?php // do something! ?>
  <?php endwhile; ?>

<?php else : ?>
  <!-- nothing found! -->
<?php endif; ?>
```

Following the template's markup we want to:

1. Surround each post/page with the `<article>` element.
2. Surround the title with `<header class="major"><h2>`.
3. Insert the body of the page/post before the `</article>` element.

Remove the `<article>` element and all of its contents and replace it with:

```
<?php if ( have_posts() ) : ?>
  
  <?php while ( have_posts() ) : the_post(); ?>
    <article>
      <header class="major">
        <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
      </header>

      <?php the_content(); ?>
    </article>
  <?php endwhile; ?>

<?php else : ?>
  <!-- nothing found! -->
<?php endif; ?>
```

And we're done!

## Test the theme

Using test data/content will help us see more components so that we can design them. [http://wptest.io/](http://wptest.io/) is a plugin that adds test data so that we can avoid the tedious task of adding dummy content for each theme that we develop.

Use the following plugin for testing your theme against the latest Wordpress standards and practices:
[http://wordpress.org/plugins/theme-check/](http://wordpress.org/plugins/theme-check/)

Resources:
How To Improve And Refine Your WordPress Theme Development Process => [http://wp.smashingmagazine.com/2013/02/21/wp-theme-development-process/](http://wp.smashingmagazine.com/2013/02/21/wp-theme-development-process/)

Theme testing process: [http://codex.wordpress.org/Theme_Development#Theme_Testing_Process](http://codex.wordpress.org/Theme_Development#Theme_Testing_Process)

## Debugging & Developer plugin

To fully test the theme it's a good idea to install and activate the "developer" plugin: [http://wordpress.org/plugins/developer/](http://wordpress.org/plugins/developer/). 

This plugin will help you see if you have all of the essential developer plugins installed. These plugins allow you to see logs, easily switch users, test widgets, check for deprecation warnings, etc.