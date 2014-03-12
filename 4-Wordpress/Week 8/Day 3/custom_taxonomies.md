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

Or, say you made a custom post type called **Movie reviews**. You could create a taxonomy for **genre**, **actors**, or whatever you find useful to categorize this post type.

The possibilities are really endless! Using custom taxonomies along with custom post types are what let you take WordPress from being a simple CMS made up of posts and pages to a really powerful, custom CMS that you make into whatever you want it to be.

##The two different types of taxonomies

There are two types of custom taxonomies that you can create: **hierarchical** and **non-hierarchical**. A hierarchical taxonomy can have child items beneath its terms, and a non-hierarchical taxonomy is flat, meaning that all its terms are on the same level.

###Hierarchical taxonomies

Categories are an example of a hierarchical taxonomy, so any hierarchical taxonomy you create will look like that. This means that terms can be children of other terms, like this:

![hierarchical](http://cl.ly/image/2n0M3Y2Y0329/Screen%20Shot%202014-03-06%20at%204.40.21%20PM.png)

###Non-hierarchical taxonomies

Tags are an example of a non-hierarchical taxonomy, where all the terms are at the same level. That would look like this:

![hierarchical](http://cl.ly/image/0b1W3I0e3V1L/Screen%20Shot%202014-03-06%20at%204.41.38%20PM.png)

Sometimes, even if your taxonomy terms are going to be flat, you can choose to make it a hierarchical taxonomy anyway, because you might find that interface a little easier to use. It's up to you!

## How to create custom taxonomies

1. Create the taxonomies by using the same plugins that we used to create custom post types and fields.
2. You'll want to pay attention to a few settings, like which post type you want it attached to, and whether the taxonomy is hierarchical or not.

## A couple of things you can do with taxonomies

#### 1. Adding the terms for a particular post (which is just like adding the tags or categories associated with a particular post):

In the right template of the post type you've associated the taxonomy width, add the following template tag inside the loop:

```
<?php the_terms( $id, $taxonomy, $before, $sep, $after ); ?>
```

For example, if your custom post type is "movies" then the code would be:

```
<?php the_terms( $post->ID, 'movies', 'Movies: ', ', '); ?>
```

If you want to know why this code works and what each parameter is for, check out [what the Codex has to say about it](https://codex.wordpress.org/Function_Reference/the_terms)!

####2. Creating a special taxonomy archive

Remember the awesome [Template Hierarchy graphic](https://codex.wordpress.org/Template_Hierarchy) we looked at last week? You'll notice that you have the ability to make a custom archive for taxonomies. This can be really handy!

You can create an archive for all taxonomies by creating a **taxonomy.php** file, an archive for a specific taxonomy by creating a **taxonomy-[taxonomyname].php** file, or even a specific archive for a taxonomy's term by creating **taxonomy-[taxonomyname]-[taxonomyterm].php**.


## Exercise: Add custom taxonomies to your portfolio

Add a custom taxonomy or two to your portfolio. The taxonomies can be used to organize and filter your portfolio. Users could click on "HTML/CSS" to see work that involves only those technologies, "Wordpress" to see themes, "JavaScript" to see the apps that you have built, etc. Be creative!