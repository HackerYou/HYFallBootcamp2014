# Introduction to WordPress

We started out by creating "static" websites with just HTML and CSS. To add some interactivity to our websites we learned about JavaScript and jQuery. Now the final step of this journey is to learn about server-side languages like PHP and the applications that they make like WordPress.

Wordpress, developed in 2003, is a Content Management System (CMS) built with PHP. It is a piece of software that can be used to create dynamic websites and blogs.

## Why Wordpress?

Many reasons but here are a few:

* free and open source
* Tastes so good, clients ask for it by name
* thousands of free and commercial plugins to add and extend functionality
* Mature and stable product
* Still actively being developed by a profitable company
* Huge community (forums, mailing lists, conferences, etc.)
* Powers more than 17% of the web
* Flexible, meaning you can make a personal blog/website, a photoblog, a business website, a professional portfolio, a government website, a magazine or news website, an online community, etc.
* Beautiful admin interface that is very easy to use.
* Easy to install and keep up to date

## Wordpress.com vs. Wordpress.org

The WordPress codebase can be downloaded from Wordpress.org and then we need to put the code on our own server. Wordpress.com is a service, they will host the code for you (for a price of course). To get the full power of WordPress we'll need to host WordPress ourselves because the Wordpress.com service is somewhat limited.

WordPress.com is simply a blogging service similar to Tumblr or Blogger. You can migrate your WordPress.com blog to a .org install.

### WordPress.org
- Free and Open Source
- Run it on your own server
- You can modify it however you want
- Run any plugins or themes

### WordPress.com
- Paid and Closed Source
- Run it on WordPress's servers
- Limited customization possible
- Run only approved themes

## WordPress requirements

WordPress requires a certain environment to work properly. This is usually referred to as a software "stack".

1. Operating system: Linux (Windows and Mac work too)
2. Server: Apache
3. Database: MySQL
4. Back-end Language: PHP

Usually we use a "development" stack on our own computer to experiment and build out our WordPress websites. The environment that is used "live" is called "production".

**Development:** WAMP or MAMP stack (Windows/Mac, Apache, MySQL, PHP).

**Production:** **LAMP** stack (Linux, Apache, MySQL, PHP).

## What is a database?

With JavaScript we can make very interesting interactions but they are not __persistent__. For example, imagine you created an image gallery using HTML, CSS and Javascript. The images can be dragged and rearranged by the user but without a place to store the user's choices, the arrangement resets every time the browser is refreshed.

With bigger applications, the need for persistence is even greater. We need a place to store user settings and user data. This is where a database comes in handy. We'll be working with SQL databases. Structured Query Language (SQL) is a special language used to work with relational databases. It's a crude approximation but think of relational databases as spreadsheets with columns and rows where you can store data. Fortunately, you don't have to learn the SQL language since WordPress will do the work for us and we'll talk to the MySQL database using a user interface called phpMyAdmin.

The MySQL database that WordPress creates stores the content of posts, pages, comments, user and admin preferences, etc.

## What is a "back-end" language?

Server-side or back-end languages allow us to:

* create admin interfaces so that our clients can edit their own content without touching HTML.
* reuse layout components so that we don't have to repeat ourselves.
* persist data by placing it in a database

PHP has syntax that looks very much like JavaScript. There are a few differences but now that you know JS learning PHP will be relatively easy.

Differences:

* use `$` instead of `var`

var name = "Wes"; 	// javascript
$name = "wes"; 			// PHP

* `array()` instead of `[]`

var cheese = ['Gouda','Provolone','Swiss']; 		// javascript
$cheese = array('Gouda','Provolone','Swiss');		// PHP

* ... others which we'll get to
 
&nbsp; 

	$name = "Homer";
	$age = 25;
	$myArray = array(1,2,3);

## Development Environment

### WAMP or MAMP stack

You of course have an operating system (Windows or Mac) so what you need to get WordPress working is Apache, PHP and MySQL. Installing all three and configuring them correctly can be a bit difficult so web developers usually download pre-packaged  software that will get everything up and running for them. You can use MAMP, WAMP or XAMP. 

* XAMPP on Windows — http://www.youtube.com/watch?v=LQX0O7EArI8
* WAMP on Windows — http://www.youtube.com/watch?v=kVc_9vAO7oI 
* MAMP on Mac — http://www.youtube.com/watch?v=KInHgUob8VM

*Written instructions*: http://make.wordpress.org/core/handbook/installing-a-local-server/

**Key Points**

* phpMyAdmin is a user interface which is used to work with the MySQL database.
* There is a directory called `htdocs` where we'll put our WordPress files.
* When the Apache server is on, the home directory can be accessed on port `8080`, i.e. `http://localhost:8080`.

### Installing Wordpress

WordPress has a famous 5-minute install for people who are comfortable and experienced. The instructions are at: http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install

For everyone else there is a detailed guide here: http://codex.wordpress.org/Installing_WordPress#Detailed_Instructions


## Explore the WordPress Dashboard

Use the WordPress Codex to help you learn about the admin dashboard:
http://codex.wordpress.org/Administration_Panels

The dashboard allows you to:

* Configure WordPress ([reading](http://codex.wordpress.org/Settings_Reading_Screen)/[writing](http://codex.wordpress.org/Settings_Writing_Screen) [general settings](http://codex.wordpress.org/Settings_General_Screen), [permalinks](http://codex.wordpress.org/Settings_Permalinks_Screen), )
* [Add / Edit Posts](http://codex.wordpress.org/Posts_Add_New_Screen)
* [Add / Edit Pages](http://codex.wordpress.org/Pages_Add_New_Screen)
* [Manage Comments](http://codex.wordpress.org/Comments_Screen)
* [Customize the appearance of your website](http://codex.wordpress.org/Administration_Panels#Appearance)

**Exercise**:

By the end of the week you will have a fully functional personal WordPress website online. By the end of the day you should have most of the content for your website added.

* Add at least one page (e.g. about/bio)
* Migrate your blog posts here (you've been blogging right?)
* Comment on your own post/page
* Use the admin interface to delete the comment.
* Add media (image or video) to a post or page.