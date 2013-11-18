# Week 1, Day 5

# FTP & Web Hosting

# FTP-ing

Soon it will come time to get your site up on the net. We have already talked about what servers are, but lets take a look how to acutally use FTP to get our site online.

FTP stands for **file transfer protocol**. It allows us to connect to a server and upload files to it.

There are many many ways to deploy your files to a web server, for example rails developers may use something called Capistrano or use Heroku deployment tools. However, FTP is the simplest and most common for developers like yourself.

To connect to FTP, we need a FTP client. You may have a favourite FTP client already, and you are welcome to use it. These are the most popular and do more than enough.

**Mac and Windows:** CyberDuck [http://cyberduck.ch/](http://cyberduck.ch/)

**Mac and Windows:** Filezilla [http://filezilla-project.org/download.php?type=client](http://filezilla-project.org/download.php?type=client)

## FTP Username and Password
If you already have a FTP username and password, you can skip this step.

Log into your bluehost account and click FTP accounts: ![http://wes.io/L96O](http://wes.io/L96O/content)

Go ahead and enter the information as so. Make sure the directory is set to `public_html` and not a sub directory.

![](http://wes.io/L88a/content)

Remember your username and passowrd for just a few minutes!

## Configuring Cyberduck

Click the 'Open Connection' in the top left corner and you'll see an interface like this:

![](http://wes.io/L9fs/content)

Server is **ftp.yourdomainname.com**
Leave port at **21**
Username is whatever you just set plus **@yourdomainname.com** (ex: wesbos@hackeryou.com )
password is whatever you just set

Go ahead and click connect, you should connect to your server.

If you see this popup, click **change** this will change it to SFTP, which is more secure.

![](http://wes.io/L9GE/content)

If you see this popup, click **continue**

![](http://wes.io/L9Dw/content)

You should then see what we call the **root** directory. This is a listing of files on your webserver. It works just like your computer, upload an **index.html** and surf to www.yourdomain.com and you will see it.

Similarly, you can upload a folder called `finalproject` and surf to `www.yourdomain.com/finalproject` to see it.

A best practice is to edit your website locally (on your computer) until you are happy with your progress. Then just drag and drop the entire folders contents onto your server.