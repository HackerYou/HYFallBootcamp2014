---
layout: notes
title: FTP & Hosting Your Site
topic: html
---

# FTP & Web Hosting

## FTP-ing

Soon it will come time to get your site up on the net. We have already talked about what servers are, but lets take a look how to acutally use FTP to get our site online.

FTP stands for **file transfer protocol**. It allows us to connect to a server and upload files to it.

There are many many ways to deploy your files to a web server, for example rails developers may use something called Capistrano or use Heroku deployment tools. However, FTP is the simplest and most common for developers like yourself.

To connect to FTP, we need a FTP client. You may have a favourite FTP client already, and you are welcome to use it. These are the most popular and do more than enough.

**Mac and Windows:** Filezilla [http://filezilla-project.org/download.php?type=client](http://filezilla-project.org/download.php?type=client)

**Mac:** Transmit [http://panic.com/transmit/](http://panic.com/transmit/)


## FTP Username and Password
If you already have a FTP username and password, you can skip this step.

Log into your bluehost account and click FTP accounts: ![http://wes.io/L96O](http://wes.io/L96O/content)

Go ahead and enter the information as so. Make sure the directory is set to `public_html` and not a sub directory.

![](http://wes.io/L88a/content)

Remember your username and passowrd for just a few minutes!

## Configuring Filezilla

Click the blue and green 'Site Manager' icon in the top left corner ![](http://f.cl.ly/items/0i0K3B0S1e273V2u0M0S/Screen%20Shot%202014-01-22%20at%201.25.49%20PM.png) then click "New Site" to enter your credentials:

![](http://f.cl.ly/items/3Y0V093u08133f0b0G09/Screen%20Shot%202014-01-22%20at%201.37.16%20PM.png)
* Rename "New Site" to whatever you like
* Host is **ftp.yourdomainname.com**
* Leave Port, Protocol & Encryption as is
* Set Logon Type to **Normal**
* User is whatever you just set plus **@yourdomainname.com** (ex: wesbos@hackeryou.com )
* Password is whatever you just set

Go ahead and click connect, you should connect to your server.

Filezilla will now show a listing of all the files on your **local** machine (left hand side) and all the files in the **root** directory of your **remote** webserver (right hand side). 

You can navigate around the files and directories on both sides like in Explorer or Finder. To upload to the server, drag and drop from the left side to the right. 

![](http://f.cl.ly/items/432X360I0h2T3H2Y1b24/Screen%20Shot%202014-01-22%20at%202.16.43%20PM.png)

The server works just like your computer, upload an **index.html** and surf to www.yourdomain.com and you will see it. Note that with most server configurations, you'll need to place your files in the  `public_html` directory. 

Similarly, you can upload a folder called `finalproject` and surf to `www.yourdomain.com/finalproject` to see it.

A best practice is to edit your website locally (on your computer) until you are happy with your progress. Then just drag and drop the entire folders contents onto your server.