---
layout: notes
topic: wp
title: Page Templates
---

# Template Files

Themes are filled with *template files* that control how different pages or parts of the website are laid out.

What do they all do? Let's look at the `theme-hackeryou`.

![](http://wes.io/UHfu/content)

Each of these files are responsible for part of all of a layout.

#### 404.php
Controls and lays out the 404 page

#### archive.php
Controls and lays out the archive pages. Want to see posts from March 2012? `archive.php` controls this layout.

#### attachment.php
When a user clicks an attachment (usually an image), this is the page that display that image.

#### author.php
When viewing all posts from a certain author. THis is a great space to pull a bio for the currently viewed author. 

#### category.php
When filtering posts by category, this template lays it out. 

#### comments.php
Markup for the comment form.

#### editor-style.css
Special styles that will be applied to the WYSIWYG editor in the backend of wordpres. 

#### footer.php
The footer on every page. Usually contains copyright, navs and/or social links.

#### functions.php
This is a special file inside the theme. It is used to add or enabled special functionality that is specific to your theme. 

If your theme requires 300px by 400px images, you would specify the image size here.

#### header.php
Header of your site. Usually contains your logo, navigation as well as the starting elements that wrap your entire site.

eg `<div class="wrapper"></div>` or `<div class="container"></div>`. These would then be _closed_ in the `footer.php` file.

#### humans.txt
This is a file where you can attribute yourself, others and technologies used in the site. More info: http://humanstxt.org/

#### index.php
Usually you would think index.php would be the home page of your site. And with a default wordpress, this is true. However, if we set another page to be the home page, `index.php` controls the *front page of your blog*.

#### /js
A folder for all of your JavaScripts.

#### loop.php
Used to iterate over multiple posts. Much more on this later.

#### mq.css
CSS file for your media queries. This is a personal preference to have MQ in a seperate CSS file.

Note now mq.css is linked in the `<head>`.

#### page-full.php
An example custom page template. More on this later.

#### page.php
The default template for displaying *every page* on your website. Anytime you create a page inside of wordpress, `page.php` is used to lay it out.

#### screenshot.png
This is the screenshot for your theme when you view it in the appearance tab.

#### search.php
Controls how your search results look.

#### searchform.php
Controls the markup for your search input.

#### sidebar.php
Controls the markup of your sidebar. There is code for pulling in widgets in here.

#### single.php
Used when viewing a *single blog post*.

#### style.css
Main stylesheet.

#### tag.php
Like `category.php`, but for tags!


## Building up a page

So when a page needs to be built, WordPress will take the template it needs, say `page.php` and then pull all the different parts it needs.

Here is a visual example:

![](http://cl.ly/Buih/Screen%20Shot%202011-11-17%20at%204.38.53%20PM.png)

## Template Exercise

Open up `single.php` and type some text right above the opening section div.

![](http://wes.io/UHbb/content)

Save and open your site. Do you see it on the home page? Why Not?

Open click on a blog post. Do you see it now? Open another. 

![](http://wes.io/UHhh/content)

This is because `single.php` controls how _all_ blog posts are displayed.

Try this again with:

* page.php
* author.php
* category.php
* tag.php
* header.php
* footer.php

Bonus points if you can figure out how to get `page-full.php` to work.

## Template Hierarchy

So how does WordPress know what template file to use?

There is something called the [WordPress template hierarchy](https://codex.wordpress.org/Template_Hierarchy)

Easiest way to understand this is is to view the image and walk through it for the following possible pages:

<https://codex.wordpress.org/images/1/18/Template_Hierarchy.png>

* a single blog post
* a single page
* the latest blog posts
* archive for March 2012
* tag for 'puppies'
* category of 'html5'


