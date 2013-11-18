# Week 8 Day 3 Custom Taxonomies

You are already familiar with the built-in Wordpress taxonomies like category and tags. Taxonomies are used to classify posts and pages. When building our own "custom" post types we can add "custom" taxonomies since category and tags might not be appropriate for our needs.

For example let's say we create a custom taxonomy called "books". To build a library that is easy to navigate we can add several custom taxonomies. We can add binding (paperback, hardcover, ebook), language (English, French, etc.), Department (Arts, Business, Education, Health & Fitness, etc.).

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