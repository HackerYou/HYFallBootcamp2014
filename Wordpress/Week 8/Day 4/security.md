# Week 8 Day 4 Security

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

There are plugins that can achieve all of the above. 

## DDOS

Distributed Denial Of Service attacks pretty much amount of million of people visiting your website at the same time. So it crashes your server.

https://www.cloudflare.com/ provides some protection from this.