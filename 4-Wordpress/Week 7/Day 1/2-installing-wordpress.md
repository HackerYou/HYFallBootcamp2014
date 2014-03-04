# Installing WordPress
Installing WordPress is really fast. Let's go through the steps on how to install WordPress locally. 

## 1. Download WordPress 
Go ahead and download WordPress from <http://WordPress.org>. Unzip it. 

## 2. Move WordPress to your local server
Where is your local server setup to? I recommend setting your local server to be your website projects folder or even your Dropbox:

Mac: click MAMP icon → Preferences → Apache Tab

Windows: <http://stackoverflow.com/questions/8847392/how-to-change-xampp-localhost-to-another-folder-outside-xampp-folder>

Once you have completed this, move your `wordpress` folder that you just unzipped into your server. 

__At this time, you may wish to rename your `wordpress` folder to something that makes sense for your project__.

## 3. Create a blank database
You need to open your server to the main page and then find `phpMyAdmin`.

On MAMP, this will be <http://localhost:8888/MAMP> (unless you change it otherwise) and then click the phpMyAdmin Tab.

On XAMPP, this will be <http://localhost> and click `phpMyAdmin` under `tools` in the sidebar.

We then need to *create a blank database*. Click the `Databases` tab:

![](http://wes.io/UEvo/content)

And then create a blank database by typing in the box and clicking create. This can be called anything you wish, I recommend `wordpress`. Don't worry about the dropdown beside it. 

![](http://wes.io/UEe5/content)

That is it for now. You may close the PhpMyAdmin tab.

## 4. Tell the WordPress code to hookup to the WordPress Database.

To do this, we need to edit a file named `wp-config.php` file that is inside the folder you just moved over to your server.

By default, we will see `wp-config-sample.php`. **Rename** this to `wp-config.php` and open this in sublime text.

Scroll down to lines 19-25 and we will now update it to the following:

![](http://wes.io/UEZC/content)

**If you are on Windows, you should leave the password blank** 

![](http://wes.io/UEUs/content)

## 5. Install!

We now need to visit WordPress in the browser and install it. 

On MAMP, visit <http://localhost:8888/wordpress> 

On XAMPP, visit <http://localhost/wordpress>

If you had renamed your directory in step 2, change `wordpress` with the new directory name.