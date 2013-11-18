# Deploying Wordpress

To install Wordpress on a "production" web server so that everyone can access it you need: 

* a web host (e.g. bluehost.com)
* FTP client and FTP credentials for the web host
* access to phpmyadmin on the web host


The famous 5 minute install gives us a good overview of what we need to do. The only difference is where it says "Download and unzip the WordPress package" we'll instead just use the Wordpress folder from our development environment.

Resource: http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install


## Using Git

Whenever you make changes to your local/development environment you will need to use FTP to update the production/live environment. This can get tedious, you might forget what changes need to be updated, etc. This is where Git comes in handy. Git is a version control system that is already part  of your workflow.

One way to use git is by installing Git-FTP:
https://github.com/git-ftp/git-ftp

Since you will not be updating any Wordpress files outside of the wp-content folder it's safe to initialize this folder as a git repo. Then set up git-ftp to push to `ftp://host.example.com/public_html/<wordpress_folder>/wp-content`.

The git repo has all of the instructions that you need to get this up and running. 

**Pro-tip**: Once you have git-ftp installed you can use `git config git-ftp` to set up some defaults so that you don't have to specific the ftp password, username and path every time you push. Have a look at the documentation here: https://github.com/git-ftp/git-ftp/blob/develop/man/git-ftp.1.md.