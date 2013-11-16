# Wordpress Themes

## Using Themes

For this lesson you will be referring to the following codex:
http://codex.wordpress.org/Using_Themes

**Exercise 1**:
Read the "What is a Theme?" section of the codex if you don't know what a Wordpress theme is. If you're familiar with the concept then skip ahead to the next exercises.

**Exercise 2**:
Find a theme that you like in the Wordpress Theme Directory, install it in your development environment and activate it.

1. Find a theme in the directory (http://wordpress.org/extend/themes/)
2. Follow the instructions in the "Adding New Themes using the Administration Panels" section of the codex above. Put the name of the theme in the search input field and you should see it.
3. Follow the instructions in the "Selecting the Active Theme" section of the codex above to active the theme.

Does your version of the theme look like the demo? Usually it doesn't because your Wordpress site likely has different content and settings. 

**Exercise 3**:

Woothemes is a very popular place to get professionally designed themes. Woothemes are the makers of Woocomerce which is a shopping cart plugin for Wordpress so their themes have built-in support for the plugin.

1. Find a free theme that you like from: http://www.woothemes.com/product-category/themes/?prod_cat%5B%5D=100&s=&post_type=product

2. install, activate and set it up so that it looks similar to the theme's demo.

*Instructions*

* download zip file
* go into your Wordpress directory, it should be in the htdocs folder on your local machine.
* extract the zip file and put it in `wp-content/themes`. So if your theme's name is "Mystile" then you should have the folder `wp-content/themes/mystile`.
* activate the theme as before

WooFramework powers all Woothemes WordPress themes so explore the theme options. Try to get your website to look like the demo on the woothemes site.

## Developing Themes

Using pre-built themes will do for some projects but what if you want your own look? This is where we need to dive into theme development.

For this lesson you will be referring to the following codex:
http://codex.wordpress.org/Theme_Development

**Exercise 1**:
Start by look over the "Anatomy of a Theme" section in the codex to learn about the components of a theme.

The simplest way of modifying a theme is to use a child theme. Have a look at the Child Theme codex for more details: http://codex.wordpress.org/Child_Themes

Your task is to create a child theme to modify/tweak the default twenty thirteen theme. Your child theme can be just a stylesheet that modifies the look of the parent theme.

**Class Exercise**:

As a class we're going to explore the Twenty Thirteen theme folder. In groups of ~4 you will explore one part of the theme, read the comments, do research and present your findings to the class. 

Once all groups have presented we should have a better understanding of how the theme has been put together.

Sections to explore:

* index.php + content-*.php
* page.php + content-*.php
* single.php + content-*.php
* header.php & footer.php
* sidebar-main.php & sidebar.php
* search.php & archive.php
* comments.php, category.php, & tag.php

The following resources will be very handy:
* Codecademy PHP Track
* http://codex.wordpress.org/Template_Tags
* http://codex.wordpress.org/The_Loop

Consolidating exercise: combine the findings of all groups into one document.