# Custom Post Types and Custom Fields

Out of the box, WordPress is great for running a blog and powering static pages.

Behind the scenes, there is a great super powerful engine that allows you to create a full-featured content management system. 

What if we want to push past the `page` and `blog post`? For example what if we wanted to create a listing of `stores`, `portfolio items`, or `recipes`? Are these posts? Not really. Pages? Not really either.

These require us to create custom content types. Each of those content types will also require custom fields that are past `title` and `body`.

There are three parts of WordPress that we can use to create a totally custom CMS:

1. Custom Post Types
2. Custom Fields
3. Custom Taxonomies

## Custom Post Types

Put simply, a post type in WordPress is a specific kind of content.
WordPress comes pre-installed with two primary post types: blog posts and pages.

But a post type can be pretty much any type of content! For example Employees, Events, FAQs, Store Locations, Books or Movies.

Each Post type gets ability to edit just as if they were pages or blog posts.

### Exercise

To learn custom post types, we will code along to create an entire portfolio listing for our website. This will be useful to add/edit/remote portfolio items on your website.

Make sure you have your XAMPP / MAMP running and you are logged into your local install of WordPress.

### Creating a custom post type

Custom post types can be created with 50-60 lines of PHP that we put in our functions.php file. While this is a great way to do it, its clunky and hard to manage. A much easier way to create custom post types is with a plugin called **custom post type UI**. 

Go ahead and search for this plugin and install it. 

![](http://wes.io/UHxk/content)

Once installed, click `activate plugin`

You should now see a new item in your sidebar called `CPT UI`. Click __Add New__.

On the left we can create a post type, on the right you will see the interface for create a custom taxonomy. We will go into those later.

Start by filling out the names and labels. The post type name is the most important part so pay attention here:

The post type name should be **singular**, **lowercase** and **without spaces** or **numbers**.

We should use:

**Post Type Name :** portfolio
**Label :** Portfolio
**Singular Label :** Portfolio Item
**Description :** Portfolio of web development work

![](http://wes.io/UHra/content)

Then click __Advanced Options__ to view some more options when creating the post type. 

![](http://wes.io/UHTv/content)

## Custom Fields

## Custom Taxonomies 