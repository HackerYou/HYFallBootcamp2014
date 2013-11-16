# Custom Themes

As a class we're going to create a custom theme, test it and package it. 

## Where to start?

We could code everything from scratch but the reality is that most websites require the same components. We need a navigation, some widgets, a blog, pages, etc. So we'll start with a starter theme. These themes don't have any style but they are a good starting point.

**Starter Themes**:

* http://themble.com/bones/
* http://underscores.me/
* Wes Bos starter theme

**Why use starter themes?**

* Modern HTML5 markup
* Most of the PHP template tags that we need already added
* Good defaults for CSS
* Files already organized into folders
* Commented code that we can learn from
* 1000-hour head start! (idk about this one...)

## Download, Install and Activate
Just like any other theme, we download the zip file, put it in the proper place and activate it. The theme will of course have very little or no style.

## Build a theme

We are going to build a typical personal website so that when we're done you can apply the same techniques to your own personal website.

> Teacher note: We need a simple template that doesn't have too much content. The idea is just to illustrate how to go from a simple HTML template to a simple Wordpress theme.

We have an HTML/CSS template to start with. Our goal is to take this template and "Wordpressify" it. We will be modifying the following theme files:

* header.php & footer.php
* sidebar.php
* index.php
* page.php & single.php
* archive.php, category.php, tag.php & search.php
* style.css

**Brief instructions**:

1. Copy the template's style to style.css
2. Copy template's header to header.php (ditto for footer.php)
3. Copy template's sidebar to sidebar.php
4. Copy template's main content area into index.php, page.php, single.php, archive.php, category.php, tag.php and search.php. 


The idea is to move the markup without any of the "content". The content will be in the Wordpress database, we just copy the "skeleton". The content will be added through widgets and the Wordpress Loop.


## Test the theme

Using test data/content will help us see more components so that we can design them. http://wptest.io/ is a plugin that adds test data so that we can avoid the tedious task of adding dummy content for each theme that we develop.

Use the following plugin for testing your theme against the latest Wordpress standards and practices:
http://wordpress.org/plugins/theme-check/

Resources:
How To Improve And Refine Your WordPress Theme Development Process => http://wp.smashingmagazine.com/2013/02/21/wp-theme-development-process/

## Debugging & Developer plugin




 
