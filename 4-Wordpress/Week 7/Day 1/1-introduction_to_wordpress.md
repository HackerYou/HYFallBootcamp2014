# Introduction to Wordpress

We started out by creating "static" websites with just HTML and CSS. To add some interactivity to our websites we learned about JavaScript and jQuery. Now the final step of this journey is to learn about server-side languages like PHP and the applications that they make like Wordpress.

Wordpress, developed in 2003, is a Content Management System (CMS) built with PHP. It is a piece of software that can be used to create dynamic websites and blogs.

## Why Wordpress?

Many reasons but here are a few:

* free and open source
* thousands of free and commercial plugins to add functionality
* thousands of beautiful free and commercial themes
* Mature and stable product
* Actively being developed
* Huge community (forums, mailing lists, conferences, etc.)
* Powers more than 17% of the web
* Flexible, meaning you can make a personal blog/website, a photoblog, a business website, a professional portfolio, a government website, a magazine or news website, an online community, etc.
* Beautiful admin interface that is very easy to use.
* Easy to install and keep up to date

## Wordpress.com vs. Wordpress.org

The Wordpress codebase can be downloaded from Wordpress.org and then we need to put the code on our own server. Wordpress.com is a service, they will host the code for you (for a price of course). To get the full power of Wordpress we'll need to host Wordpress ourselves because the Wordpress.com service is somewhat limited.

## Wordpress requirements

Wordpress requires a certain environment to work properly. This is usually referred to as a software "stack".

1. Operating system: Linux (Windows and Mac work too)
2. Server: Apache
3. Database: MySQL
4. Back-end Language: PHP

Usually we use a "development" stack on our own computer to experiment and build out our Wordpress websites. The environment that is used "live" is called "production".

**Development:** WAMP or MAMP stack (Windows/Mac, Apache, MySQL, PHP).

**Production:** **LAMP** stack (Linux, Apache, MySQL, PHP).

## What is a server?

The world wide web works by using the TCP/IP protocol. 

* Every computer has an IP address. E.g. 171.64.64.166. Yours can be accessed with the keyword `localhost` or 127.0.0.1.
* Computers are connected by ethernet cables or through wireless networks.
* Communication happens by sending data from one IP address to another.
* An IP address is like a home's address. But that's not enough to deliver the data. The computer needs to know which "door" to use. A "port" is in a sense a "door". HTTP uses port 80 and HTTPS uses port 443. 

A server is a piece of software that listens on a specific port and responds to requests made on that port. Development servers will usually listen on port `8080`.

Imagine your computer as a house with multiple doors that are locked. When setting up your development environment you unlock door/port `8080` so that you can test how a server behaves. A real server would open port `80` so that others can communicate with it using the HTTP protocol.

## What is a database?

With JavaScript we can make very interesting interactions but they are not persistent. For example, imagine you created an image gallery using HTML, CSS and Javascript. The images can be dragged and rearranged by the user but without a place to store the user's choices, the arrangement resets everytime the browser is refreshed.

With bigger applications, the need for persistence is even greater. We need a place to store user settings and user data. This is where a database comes in handy. We'll be working with SQL databases. Structured Query Language (SQL) is a special language used to work with relational databases. It's a crude approximation but think of relational databases as spreadsheets with columns and rows where you can store data. Fortunately, you don't have to learn the SQL language since Wordpress will do the work for us and we'll talk to the MySQL database using a user interface called phpMyAdmin.

The MySQL database that Wordpress creates stores the content of posts, pages, comments, user and admin preferences, etc.

## What is a "back-end" language?

Server-side or back-end languages allow us to:

* create admin interfaces so that our clients can edit their own content without touching HTML.
* reuse layout components so that we don't have to repeat ourselves.
* persist data by placing it in a database

PHP has syntax that looks very much like JavaScript. There are a few differences but now that you know JS learning PHP will be relatively easy.

Differences:

* use `$` instead of `var`
* `array()` instead of `[]`
* ... others which we'll get to

```
$name = "Homer";
$age = 25;
$myArray = array(1,2,3);
```

## Development Environment

> **Teacher note**: Go through setting up the development environment first while the students watch and take notes. After that get students to get their own development environment setup.

### WAMP or MAMP stack

You of course have an operating system (Windows or Mac) so what you need to get Wordpress working is Apache, PHP and MySQL. Installing all three and configuring them correctly can be a bit difficult so web developers usually download pre-packaged  software that will get everything up and running for them. You can use MAMP, WAMP or XAMP. 

* XAMPP on Windows — http://www.youtube.com/watch?v=LQX0O7EArI8
* WAMP on Windows — http://www.youtube.com/watch?v=kVc_9vAO7oI 
* MAMP on Mac — http://www.youtube.com/watch?v=KInHgUob8VM

*Written instructions*: http://make.wordpress.org/core/handbook/installing-a-local-server/

**Key Points**

* phpMyAdmin is a user interface which is used to work with the MySQL database.
* There is a directory called `htdocs` where we'll put our Wordpress files.
* When the Apache server is on, the home directory can be accessed on port `8080`, i.e. `http://localhost:8080`.

### Installing Wordpress

Wordpress has a famous 5-minute install for people who are comfortable and experienced. The instructions are at: http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install

For everyone else there is a detailed guide here: http://codex.wordpress.org/Installing_WordPress#Detailed_Instructions

### Bitnami's Wordpress Stack

Another option is the Bitnami Wordpress Stack which includes Wordpress in the installation. Go to https://bitnami.com/stack/wordpress and download the installer. They have an installer for Linux, Mac and Windows.

## Explore the Wordpress Dashboard

Use the Wordpress Codex to help you learn about the admin dashboard:
http://codex.wordpress.org/Administration_Panels

The dashboard allows you to:

* Configure WordPress ([reading](http://codex.wordpress.org/Settings_Reading_Screen)/[writing](http://codex.wordpress.org/Settings_Writing_Screen) [general settings](http://codex.wordpress.org/Settings_General_Screen), [permalinks](http://codex.wordpress.org/Settings_Permalinks_Screen), )
* Add / Edit Content
* Manage Comments
* Customize the look of your website

**Exercise**:

By the end of the week you will have a fully functional personal Wordpress website online. By the end of the day you should have most of the content for your website added.

* Add at least one page (e.g. about/bio)
* Migrate your blog posts here (you've been blogging right?)
* Comment on your own post/page
* Use the admin interface to delete the comment.
* Add media (image or video) to a post or page.