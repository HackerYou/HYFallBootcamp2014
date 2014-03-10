# Wordpress Troubleshooting

You will probably run into many issues when using Wordpress. Troubleshooting is a very important skill to have as a developer, and the more WordPress sites you'll work on, the better you'll get at it.

##Oh no! My WordPress site is showing a blank screen and/or is really messed up! What do I do?

###Step 1: Don't panic

[It's going to be okay!](http://anongallery.org/img/9046/there-is-no-need-to-be-upset.gif)

###Step 2: Is this a WordPress problem?

Could the problem with your site be in your HTML, CSS or JavaScript? If so, you won't need any WordPress-specific resources to solve them. It never hurts to check your Console to see if anything weird is going on there.

But if you know that your front-end code is just fine, then try to...

###Step 3: Trace your steps/eliminate potential culprits

What were you doing just before the problem happened? Were you editing a theme file? Did you just install a new plugin?

The first thing you'll want to do is try undoing what you just did. That might just fix the problem.

If you think that a **plugin** might be the culprit, you can try disabling all of your plugins to see if that gets rid of your problem. If it does, then re-enable each plugin one by one to find out which one is the troublemaker.

If you suspect that **your theme** is the issue, you can eliminate that variable by disabling your custom theme and temporarily activating a default theme like **Twenty Fourteen**. Does the issue go away? If so, you've narrowed down the issue to your theme's files.

There can be lots of causes of WordPress issues - your database, your

###Step 4: Get some information

If you're dealing with a White Screen of Death™, it's likely that the culprit is somewhere in your PHP. If something's wrong in your PHP code, it can cause the whole page to not load, because when PHP encounters a problem, it gives up and doesn't try to load anything else.

You can try undoing a few steps to see if that solves the problem, but if not, you'll have to ask your code for some feedback. The way we do that is by setting **WP_DEBUG** to **true** in your wp-config file. This kind of like the WordPress version of when you look at your Console to see if your JavaScript has any errors. We do this by inserting the following line into our wp-config.php file:

	define('WP_DEBUG', true);
	
Turning WP_DEBUG on shows you all your errors at the top of the page. Depending on which plugins you have installed, you might find some errors that start with **Depreciated:** or **Strict Standards:** - those probably aren't the problem, just like seeing stuff like **event.returnValue is deprecated.** in the Console, but it's not the problem. 

You're looking for something like this:

	Parse error: syntax error, unexpected 'do_action' (T_STRING) in /Users/[yourname]/[your-folder]/wp-content/themes/[your-theme]/[file-the-error-is-in].php on line 42

**Note:** You never want to have WP_DEBUG set to true on a live site, because you never want your user to be seeing error messages. It's a good idea to keep this to local or staging sites.

###Step 5: Search for a solution

By this point, you've probably already found your solution, but if not, it's very likely that someone else on the Internet has experienced the same problem and can probably help you out.

Resources you'll want to consult include:

* [The Troubleshooting section of the WordPress Codex](http://codex.wordpress.org/Troubleshooting)
* [The WordPress support forum](http://www.wordpress.org/support/)
* [WordPress Development Stack Exchange](http://wordpress.stackexchange.com/) (It's like a StackOverflow but just for WordPress!)
* [Google](http://google.com), like always, is still your friend.

Since WordPress is so widely used, it's very likely that someone has had your problem before. Often, copying and pasting the error message that you see into Google will quickly lead you towards the solution you're looking for.

##Avoiding issues in the first place

###Always develop locally

A "White Screen Of Death" is never fun, but it's about 100 times more stressful and/or embarrassing if it happens on a live site, especially if it's a client's site. When you're making changes to a WordPress theme, it's much safer to code it on your local installation first to make sure it's working properly, and then push it to the live site.

###Avoid WordPress's built-in theme editor

You may have noticed that when you're logged into WordPress, there's an "Editor" screen that lets you edit all of your HTML/CSS/PHP via the WordPress admin interface. Cool, right?

Wrong! This can be dangerous. While HTML and CSS are pretty forgiving, it's really easy to accidentally mess up PHP (like in JavaScript, a missing semicolon can take out all your code), and if you make a mistake in the online editor, you risk taking out your site and not being able to undo your mistake, because every time you save your file, it reloads the screen, so there's no Undo option like in a text editor.

*Friends don't let friends develop in the built-in editor!*

###Use Git to track your changes

If you've realized that you messed up something in your theme but have no idea what exactly you did, Git can come in handy in a couple of ways:

* You can compare differences between commits on GitHub, so you'll know exactly what you changed and when you changed it.
* You can use Git to roll back to a previous version of your project

Using version control can make your life a lot easier when things go wrong!

## Words of advice

* Be persistent — problems take a bit of time to solve but they're all solveable.
* Lots of questions have already been asked, so properly phrasing your search query can be a huge time saver.
* Take some time off if you get too frustrated!
* It's okay if you don't know the answer - you'll get used to that feeling, as a developer and/or a freelancer.