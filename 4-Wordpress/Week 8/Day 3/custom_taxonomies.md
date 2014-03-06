# Week 8 Day 3 Custom Taxonomies

##What's a taxonomy?

	 Taxonomy: a scheme of classification

Taxonomies in WordPress are used to classify posts, pages, and custom post types. At this point, you're already familiar with two taxonomies: the built-in Wordpress taxonomies, **categories** and **tags**.

In addition to categories and tags, WordPress allows you to create your own custom taxonomies. 

##Why would I want to create custom taxnomies?

When we're creating our own custom post types, we might want to create custom taxonomies as well because categories and tags might not be appropriate for our needs.

For example, let's say we've created a custom post type called **books**. To build a library that is easy to navigate we can add several custom taxonomies. We can create taxonomies called:

* **Binding** (e.g. paperback, hardcover, ebook)
* **Language** (e.g. English, French, etc.)
* **Subject** (e.g. Arts, Business, Education, Health & Fitness, etc.)

Or, say you made a custom post type called **Recipes**. You could create a bunch of relevant taxonomies, including:

* **Cuisine** (e.g. Italian, Indian, Chinese, etc.)
* **Recipe type** (e.g. appetizer, dessert, main)
* **Dietary restrictions** (e.g. gluten free, vegan)

The possibilities are really endless. Using custom taxonomies along with custom post types are what let you take WordPress from being a simple CMS made up of posts and pages to a really powerful, custom CMS that you make into whatever you want it to be.

##The two different types of taxonomies

There are two types of custom taxonomies that you can create: **hierarchical** and **non-hierarchical**. A hierarchical taxonomy can have child items beneath its terms, and a non-hierarchical taxonomy is flat, meaning that all its terms are on the same level.

###Hierarchical taxonomies

Categories are an example of a hierarchical taxonomy, so any hierarchical taxonomy you create will look like that. This means that terms can be children of other terms, like this:

![hierarchical](http://cl.ly/image/2n0M3Y2Y0329/Screen%20Shot%202014-03-06%20at%204.40.21%20PM.png)

###Non-hierarchical taxonomies

Tags are an example of a non-hierarchical taxonomy, where all the terms are at the same level. That would look like this:

![hierarchical](http://cl.ly/image/0b1W3I0e3V1L/Screen%20Shot%202014-03-06%20at%204.41.38%20PM.png)

Sometimes, even if your taxonomy terms are going to be flat, you can choose to make it a hierarchical taxonomy anyway, because you might find that interface a little easier to use. It's up to you!

## Learn more about custom taxonomies

http://codex.wordpress.org/Taxonomies

## How to create custom taxonomies

1. Create the taxonomies by using the same plugins that we used to create custom post types and fields.
2. Add the following template tag inside the loop:

```
<?php the_terms( $id, $taxonomy, $before, $sep, $after ); ?>
```

If your custom post type is "department" then the code would be:

```
<?php the_terms( $post->ID, 'department', 'Departments: ', ', '); ?>
```


## Exercise: Add custom taxonomies to your portfolio

Add a custom taxonomy or two to your portfolio. The taxonomies can be used to organize and filter your portfolio. Users could click on "HTML/CSS" to see work that involves only those technologies, "Wordpress" to see themes, "JavaScript" to see the apps that you have built, etc.