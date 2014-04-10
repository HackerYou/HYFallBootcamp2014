---
layout: notes
topic: wp
title: Custom Post Types and Custom Fields
---

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

To learn custom post types, we will code along to create an entire portfolio listing for our website. This will be useful to add/edit/remove portfolio items on your website.

Make sure you have your XAMPP / MAMP running and you are logged into your local install of WordPress.

### Creating a custom post type

Custom post types can be created with 50-60 lines of PHP that we put in our functions.php file. While this is a great way to do it, its clunky and hard to manage. A much easier way to create custom post types is with a plugin called **custom post type UI**. 

Go ahead and search for this plugin and install it. 

![](http://wes.io/UHxk/content)

Once installed, click `activate plugin`

You should now see a new item in your sidebar called `CPT UI`. Click __Add New__.

On the left we can create a post type, on the right you will see the interface to create a custom taxonomy. We will go into those later.

Start by filling out the names and labels. The post type name is the most important part so pay attention here:

The post type name should be **singular**, **lowercase** and **without spaces** or **numbers**.

We should use:

**Post Type Name :** portfolio
**Label :** Portfolio
**Singular Label :** Portfolio Item
**Description :** Portfolio of web development work

![](http://wes.io/UHra/content)

Then click __Advanced Options__ to view some more options when creating the post type.  There are also _advnaced label options_ for when you want to specify the language used when adding/deleting items.

Scroll down to the __Supports__ checkboxes and set it as the following:

![](http://wes.io/UHTv/content)

Once finished, click Create Custom Post Type. You should now see portfolio in your sidebar.

![](http://wes.io/UNaB/content)

## Custom Fields

Now, if we try and add a portfolio item, you will just see the basic title and content fields. 

Custom fields allow us to push past the basic title and content and into more meaningful fields that may be associated with a specific content type.

For a portfolio item, we might want to have the following inputs:

* Name of item
* short description of item
* long description of item
* client name
* list of technologies used
* list of images, each with their own captions

With custom fields in WordPress, we can create user inputs for each of these inputs.

### Advanced Custom Fields

The **Advanced Custom Fields** plugin makes creating custom interfaces extremely easy. Let's go ahead and install it from the wordpress backend.

`Plugins` → `Add New` → search for `Advanced Custom Fields` → Install the first one → Activate

![](http://wes.io/UNNT/content)

This comes with a number of custom fields and is totally free. Later on we will require other types of inputs such as a repeater or gallery. These are paid add ons available at <http://www.advancedcustomfields.com/add-ons/>.

For learning purposes, I have a license to share with you. However, on your own projects / clients you must buy your own. Each plugin is $25 and has an unlimited site license.

To install these, move all four plugins form our `assets folder` (found on basecamp last week) into our plugins directory.

![](http://wes.io/UNOD/content)

Your plugin folder will look similar to this depending on what you have installed:

![](http://wes.io/UNWO/content)

In your wordpress backend, go to the `plugins` menu item and activate all four of these.

![](http://wes.io/UMUX/content)

### Creating Custom Fields

Now that we have the plugins installed, let's __create an interface__ for our portfolio items. You can do this by going to `Custom Fields` in your sidebar and clicking `Add New`.


![](http://wes.io/UN6J/content)

This will create what we call a group of fields. We can name it whatever we want, let's call it "Portfolio Details".

Next, we need to tell WordPress when to show these fields. By default, the newly created fields will show up when we create a blog post. We want them to show up when we create a Portfolio Item, so set it to do that:

![](http://wes.io/UMBH/content)


Finally we can create our custom fields.  Let's start simple and just do the following:

* Name of item
* short description of item
* long description of item
* client name

For the _name_ and _long description_ we can use the existing __the_title()__ and __the_content()__ fields so no need to create ones for them. We do, however, need to create fields for __short desc__ and __client name__.

To create a field, click the ![](http://wes.io/UMu6/content) + Add Field button. We can now step through each what input does. You will most likely leave all but the first four blank:

![](http://wes.io/UMCP/content)

**Note: There are many different kinds of fields availble here. You should take some time to try each one and see what they produce.**

When finished, click "Close Field" at the bottom and repeat for the client name field and click **publish**.

![](http://wes.io/UMXR/content)

Now, when you add a portfolio item, you will see your custom fields:

![](http://wes.io/UMXR/content)


### Adding a repeater field

Occasionally you will have a situation where you wish to add between 1 and n items. For our portfolio items, we may 1 image, or we may have 10 images.

How do we properly prepare for any amount of images? We can't assume there will always be 4 and we can't just make 15 fields as a 'just incase' situation.

This is where the repeater field will come in. It allows your users to add as many fields to your post type as you wish.

Some examples include:

- Recipe Ingredients
- photo / caption pairs
- Links for an event

For ours, we need to allow the user to add 1 to n photo and caption pairs. For this we will create a repeater field.

Go back to `Custom Fields` and edit your `portfolio details` group and add a new field.

We will call this field `images` and set the field type to be `repeater`. Once you select this, you should see a new interface for adding **sub fields**.

![](http://wes.io/UNCV/content)

So, we want users to both upload an image as well as add a caption for that image. So we will add sub-fields of `image` and `caption`.

The `image` field type will be simply image and th caption will be `text`. Each of these will have your regular options that you may or may not want to set.

![](http://wes.io/UNKw/content)

When you now add a portfolio item, you should see the repeater field available to you. 

### Exercise:

Add 4-5 portfolio items. Ideally these will be things you have worked on, but dummy content will do for now. Make sure to include:

* Name
* Long Desc
* Short Desc
* 2-3 Images / captions
* A single featured image that will be used as the display image when viewing all portfolio items at once. This could just be the first image from the previous repeater.
* Client Name

### Working with Custom Fields

Now that we have our portfolio items within wordpress, how do we get them into the code? 

Let's start by viewing one of our portfolio items. Looks like a regular blog post. What file is controlling this? 

If we follow the WordPress template hierarchy chart, we will see that `single-$posttype.php` is the magic template. Since we don't have one, it is using the regular `single.php`.

We want the design of our blog posts to be different from the portfolio items, so let's create our own template for that.

Create a new file and name it `single-portfolio.php`. We can start with some base PHP/HTML:

  <?php get_header(); ?>
  <div class="section">
    <div class="innerWrapper">
      <div class="full">
        <?php
         if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

          
        <?php endwhile; // end of the loop. ?>

      </div>
    </div> <!-- /.innerWrapper -->
  </div> <!-- /.section -->
  <?php get_footer(); ?>

We already know how to get the default text and body:

  <h2><?php the_title(); ?></h2>
  <?php the_content(); ?>


But how do we get the custom fields? For that we use the `the_field()` template tags and pass it the field name. You can see a list of all available ACF template tags at the ACF docs: <http://www.advancedcustomfields.com/resources/#functions>

  <?php the_field('client_name'); ?>
  <?php the_field('short_desc'); ?>

When it comes to styling, that is up to you. You may want to wrap the different tags in their own tags:

  <h2><?php the_title(); ?></h2>
  <p class="client"><?php the_field('client_name'); ?></p> 

  <div class="shortDesc">
    <?php the_field('short_desc'); ?>
  </div>

  <?php the_content(); ?>

Hot Tip: forget the name of your fields? Grab it from `Field Name` in your custom field group:

![](http://wes.io/UPfI/content) 

### Working with the repeater field

That works great for single text fields, but what if we want to use the other types of fields? Images? Repeaters? Let's take a look at how to use those.

Since we do no know how many images/captions a user may input, we have to loop over all available until there are left. For this we use a combination of [has_sub_field()](http://www.advancedcustomfields.com/resources/functions/has_sub_field/) and [the_sub_field()](http://www.advancedcustomfields.com/resources/functions/the_sub_field/).

Remember that we named our repeater field `images`:

![](http://wes.io/UPsf/content)

So, we will use the following code to setup our field loop. Note that this isn't the same thing as our WordPress Loop, but just a way to iterate over a repeater field.

  <?php while( has_sub_field('images') ): ?>
    <!-- Our sub fields go here -->
  <?php endwhile; ?>

Then, inside this loop, we can use `<?php the_sub_field('caption'); ?>` to grab the caption. I recommend putting it inside a div with a class so we can style it later.

  <div class="image">
    <p><?php the_sub_field('caption'); ?></p>
  </div>

Great, but what about the image? If we use `<?php the_sub_field('image'); ?>` we get this error: 

**Notice: Array to string conversion in /Users/wesbos/Dropbox/wordpress/wp-content/plugins/advanced-custom-fields/core/api.php on line 678
1046, , ss 2014-03-11 at 4.38.01 PM, , , image/png, http://localhost/wordpress/wp-content/uploads/2014/03/ss-2014-03-11-at-4.38.01-PM.png, 694, 526, Array**

What?! This is because the image doesn't just return a *string* but an *Array* almost exactly the same as objects in JavaScript. So, how do we properly view this array? First, we need to assign it to a variable:

  <?php $image = get_sub_field('image'); ?>

<small>Notice how we use **get**_sub_field() rather than the_sub_field()? This is because we are assigning it to a variable rather than printing/echoing it.</small>

Then we can view the entire variable by using `<pre>` tags and dumping it to the screen:

  <pre><?php print_r($image);?></pre>

will output all the information in the array:

![](http://wes.io/UPhF/content)

See the sizes? If you have previously defined a custom size in your `functions.php` you will see them all in here.

How do I access those paths? Just like JavaScript arrays/objects, we can use square brackets:

  <img src="<?php echo $image['sizes']['square'] ?>">

<small>Notice how we used echo to print out the variable</small>

All said and done, our repeater should look something like this:

  <div class="images">
    <?php while( has_sub_field('images') ): ?>
      <div class="image">
        <p><?php the_sub_field('caption'); ?></p>
        <?php $image = get_sub_field('image'); ?>
        <img src="<?php echo $image['sizes']['square'] ?>">
      </div>
    <?php endwhile; ?>
  </div>

If you were using flexslider, your could modify the markup to look something like this:

    <div class="flexslider">
      <ul class="slides">
        <?php while( has_sub_field('images') ): ?>
          <li>
            <p><?php the_sub_field('caption'); ?></p>
            <?php $image = get_sub_field('image'); ?>
            <img src="<?php echo $image['sizes']['square'] ?>">
          </li>
        <?php endwhile; ?>
      </ul>
    </div>

## Viewing them all at once
If we go to <http://localhost/wordpress/portfolio/javascript-weather-app> or any other single portfolio item, we can see the content for that specific portfolio item.

If I go to <http://localhost/wordpress/portfolio/>, I get a 404 error: 

![](http://wes.io/UPnK/content)

How come we don't see a listing of **all our portfolio items**?

This is because when we created our custom post type, we set **has archive?** to false. Meaning that there isn't an archive page for it. We do actually need one, so let's edit our CPT and set it to true.

WordPress Dashboard → CPT UI → Manage Post Types → Edit Portfolio → Advanced Options → Set Has Archive to true and save.

![](http://wes.io/UPu0/content)

Now when we go to `/portfolio` on our website do we see our posts? 

No?! What? You have stumbled upon a very common WordPress gotcha. To fix this, we need to re-save our permalink structure in `Settings` → `Permalinks`. No changes are needed, simply just click the `Save Changes` button.  

WordPress, you soo weird! 
<img src="http://cdn.gifbay.com/2012/12/horse_shaking_its_head-21249.gif"  width="200" alt="">

Finally, when you visit `/portfolio` on your site, you should see a listing of your portfolio items.

## Exercise

Now that you can view each individual portfolio item as well as view all portfolio items when visiting `/portfolio`, we have a few questions:

1. Why is it styled exactly like our blog? 
2. Where did our custom fields go? How do I pull them into this page?
3. How do I style it differently from the blog? Add my own classes?

For this, we will need to create ourselves a new file called `archive-portfolio.php` which will control how our portfolio items are pushed out. You can start with all the code from `single-portfolio.php` and work from there.

So, for this exercise, we need to do the following:

1. Style your portfolio items so that it isn't just a list of items. Take inspiration from <http://patterntap.com/?terms=portfolio>
2. Pull in the "featured image"
2. When a user clicks a portfolio item, take them to the single page, style that. 
3. When I have more than 5 portfolio items, where do the rest go? How do I get more on the screen?
4. How do I reorder them? Is there a plugin?
3. This is going to be your portfolio. Make it shine!
  4. What other data do you want attached to each portfolio item? 
  5. Do you want a slider for the images?
  6. Do you want to link to the website you created?
  7. Include tags such as HTML/CSS/jQuery/JavaSCript/WordPress/Design? More on this when we hit custom taxonomies  
