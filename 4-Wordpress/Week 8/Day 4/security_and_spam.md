# Week 8 Day 4 

## Security

Security is a major issue online. You need to build websites for clients that will not get hacked. Some things to consider:

* remove headers (version info)
* use stronger passwords, no admin user (use different name)
* change database prefix away from _wp
* backup always!
* block known bad hosts and agents by using the hackrepair.com blacklist
* protect against brute force attacks (i.e. stop multiple attempts at logging in)
* actively block attackers trying to scan the site for vulnerabilities (404 request detection and threshold)
* turn off editor in appearance menu
* protect wp-config and .htacess
* no directory browsing (use the .htaccess to do this)
* require SSL for the admin area

There are plugins that can achieve all of the above, checkout [Better WP SEcurity](http://wordpress.org/plugins/better-wp-security/).

### HTTPS & SSL

You might have seen websites that use HTTPS instead of HTTP. Secure Hypertext Transfer Protocol (HTTPS) is used to secure data that your users submit on your website. It doesn't prevent your server from being hacked; it simply stops people from capturing the information that users submit to you. 

If you have a form or shopping cart that takes sensitive data from your users (like Credit Card information) then you should use HTTPS. HTTPS renders slower than HTTP so don't use it unless you need it.

To get access to HTTPS you need to purchase and SSL certificate and install it on your server. Once you have an SSL certificate, most hosts will help you install it.

To use HTTPS with Wordpress just follow these instructions:
http://make.wordpress.org/support/user-manual/web-publishing/https-for-wordpress/


### DDOS

Distributed Denial Of Service attacks pretty much amount of million of people visiting your website at the same time. So it crashes your server.

https://www.cloudflare.com/ provides some protection from this.


The codex has more:
http://codex.wordpress.org/Hardening_WordPress#Securing_wp-admin

## SPAM

Most if not all spam is done by bots. So if you don't protect your website you'll get tons of comments on your blog posts and tons of spam form submissions. 

Akismet is a plugin that will provide some protection against spam.

The codex has more:
http://codex.wordpress.org/Combating_Comment_Spam