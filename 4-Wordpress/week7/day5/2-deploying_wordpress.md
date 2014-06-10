---
layout: notes
topic: wp
title: Deploying Wordpress
---

# Deploying Wordpress

Once you've finished developing your WordPress site locally, you'll want to send it out into the wild by deploying to a production server.

Most servers (and definitley Bluehost) will have everything you need to host a WordPress site. If you're not sure, make sure you have the following:

* FTP access to your server
* an FTP client (like Filezilla or Transmit)
* access to phpMyAdmin (a database tool) from your hosting control panel

##The process 

Here's an overview of the process. We'll go into details of each of these steps.

1. Upload all files to production server
2. Export your local database
3. Create a new databse on your production server
4. Create a new database username & password 
5. Assign new user to new database
6. Import database on production server
7. Update production wp-config.php file
8. Run a find/replace tool on production database
9. [Optional] Clear the permalinks cache

##1. Upload your files to your production server

Use an FTP program to upload all your WordPress site files to your server. This should be everything in your project folder (`wp-admin`, `wp-blog-header.php`, etc.).

##2. Export your local database.

To export our local databse, we need to access our local phpMyAdmin. 
From MAMP, click "Open StartPage", then from the start page, click phpMyAdmin in the top bar. From XAMPP, click the "Admin" button to the right of MySQL.

From phpMyAdmin, select your WordPress database from the sidebar, then click the "Export" tab.

You should see this screen:

![](http://f.cl.ly/items/3q0t0s0I3k3j0L181C3U/exportDB.png)

Some phpMyAdmin installs are a little different. You will encounter different interfaces for phpMyAdmin on different hosts.

You may need to click **Custom - display all possible options** and then select **Save output to file** :

![](http://wes.io/UeOr/content)

Check off "Save as File", then click GO to download a copy of your export. You don't need to change any of the other settings.

##3. Create a new database on your production server

Log in to your hosting account (eg. <http://bluehost.com>), and head to your cPanel(control panel) if you're not brought there automatically.  Find and click on the option for "MySQL Databases" (search the page if you can't find it right away!).

From the databases page, give your new database a name and click "Create Database". 

![](http://cl.ly/image/0x0T1W2N3N0m/Screen%20Shot%202014-03-06%20at%207.27.57%20PM.png)

Once it's created, return to the databases page with the "Go Back" button.

##4. Create a new database username & password 

Further down on the databases page, you should see an option to add new MySQL user.  Go ahead and fill that out and click "Create User." Make sure you remember the info. You'll need it for the last step.

![](http://cl.ly/image/402s1K443L3i/Screen%20Shot%202014-03-06%20at%207.31.57%20PM.png)

Again, head back to the databases page after the user has been added.

##5. Assign new user to new database

Back on your databases page, scroll even further down to the "Add User to Database" section. Choose the newly created user and the newly created database to link them together.

![](http://cl.ly/image/1I3d1C3Z0f2v/Screen%20Shot%202014-03-06%20at%207.41.12%20PM.png)

##6. Import database on production server

Now that your database and user have been created and linked, head back to the cPanel home, and find and click on phpMyAdmin.

This should look similar to your local phpMyAdmin, and you should see your newly created databas in the sidebar.  Select it, then click on the "Import" tab.

Choose "Browse your computer" and select your export file from step 2.

![](http://cl.ly/image/341i37070m1E/Screen%20Shot%202014-03-06%20at%207.45.36%20PM.png)

You don't need to change any of the other options. Click "Go" to start the import. You should get a success message if the import went smoothly.

##7. Update production wp-config.php file

We need to tell WordPress on your server to connect to your newly created database instead of your local databse. We'll create a new `wp-config.php` file with that info and upload it to the server.

In your local files, create a copy of `wp-config.php` and name it `wp-config-prod.php`.

Change `DB_NAME` to the name of the database you created in step 3.
Change `DB_USER` and `DB_PASSWORD` to the username and password created in step 4.

Save your file and upload it to your production server via FTP - in the same spot you uploaded all your WordPress files. Once uploaded, rename it to `wp-config.php`.

Vist your production site ("http://mysiste.com") to ensure the database connection is working. Don't worry if things look broken - as long as you don't see a database connection error, you're ready to move on to the next step!


##8. Run a find/replace tool on the production database

WordPress stores the URL of your site all over the place in the database.  When developing locally, your site URL is something like "http://localhost:888/mysite". For production, we want the site URL to be something like "http://mysite.com".  To switch all the instances of "http://localhost:8888/mysite" over to "http://mysite.com", we can use a database serach & replace tool.

[Search Replace DB](https://interconnectit.com/products/search-and-replace-for-wordpress-databases/) does a great job on WordPress databases. Go ahead and download the latest stable version (v 2.1.0). Extract the .zip file and upload the `searchreplacedb2.php` file to your server - again, in the same spot as all your WordPress files.

In your browser, head to `http://mysite.com/searchreplacedb2.php` to run the tool.

Allow the tool to autopopulate your database info from wp-config by clicking "Submit, then click "Submit DB details."

The tool will then ask you which tables you want to run the search replace on. They should all be selected by default. If not, make sure they all are, and click "Continue."

Now you can provide the search and replace details. You want to search for your local site URL and replace with your production URL.

![](http://cl.ly/image/0Z2Y3P1o3g16/Screen%20Shot%202014-03-06%20at%208.14.56%20PM.png)

Go ahead and click "Submit Search String" to run the replace.

Once complete, head back to your FTP program and **delete the searchreplacedb2.php file from your server**. This is very important! If someone is able to access this file, they'll have free reign to edit your database and potentially destroy your site. And we don't want that, now do we?

If the search replace worked, you should see your site working on your production server!

##9. [Optional] Clear the permalinks cache

If things like your CSS file and images aren't showing up, you may need to clear WordPress' cache of the site URL.  To do this, log in to your production admin panel (http://mysite.com/wp-admin), and visit Settings > Permalinks. You don't have to edit anything - just visiting the Permalinks page will force the cache to clear.

Keep this litte fix in your back pocket for anytime something isn't working on your WordPress site - especially if you don't see any CSS.


<!-- removed for now - I think this is too complex
### Using Git

Whenever you make changes to your local/development environment you will need to use FTP to update the production/live environment. This can get tedious, you might forget what changes need to be updated, etc. This is where Git comes in handy. Git is a version control system that is already part  of your workflow.

One way to use git is by installing Git-FTP:
https://github.com/git-ftp/git-ftp

Since you will not be updating any Wordpress files outside of the wp-content folder it's safe to initialize this folder as a git repo. Then set up git-ftp to push to `ftp://host.example.com/public_html/<wordpress_folder>/wp-content`.

The git repo has all of the instructions that you need to get this up and running. 

**Pro-tip**: Once you have git-ftp installed you can use `git config git-ftp` to set up some defaults so that you don't have to specific the ftp password, username and path every time you push. Have a look at the documentation here: https://github.com/git-ftp/git-ftp/blob/develop/man/git-ftp.1.md.

-->