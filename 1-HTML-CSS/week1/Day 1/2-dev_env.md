# Week 1, Day 1 Lesson: Your Development Environment

## Say Hello to your Text Editor!
At HackerYou, we can't stress enough how important having the right tools for the job is. Probably the most important tool you have as a web developer or designer is your text editor in which we use to edit our code.

HTML is written is plain text, so we could technically use notepad(windows) or textedit(mac) to view and code our HTML files. The downside to this is that its just black text on a white background, making it very easy to make a mistake!

Text editors give you something called Syntax Highlighting. It changes the colours of your tags helping you to quickly view scan your code for relevant parts. When you make a mistake, the colour of the tag changes and its visually apparent that something isn't right. Let's take a look at our earlier snippet in textedit:

![Using Textedit or Notepad](http://wes.io/IJBn/Screen%20Shot%202012-07-24%20at%203.11.49%20PM.png)


![Using a Text Editor](http://wes.io/IINV/Screen%20Shot%202012-07-24%20at%203.15.00%20PM.png)

Note how all the tags are blue colour and the current selected tag `<BODY>` is underlined yellow? When your code gets long an nested, its very helpful to take advantage of these features.

Text editors can do a ton more, this is just the beginning. I highly recommend using [Sublime Text 3](http://www.sublimetext.com/3) because I will be using it throughout this course. I also firmly believe that it is by far the best text editor available. Its available on Mac, PC and Linux with an unlimited free trial period. You only need to pay for it when you get sick of clicking the popup box every 15 or so saves. 

Free alternatives include NotePad++, BBEdit, TextWrangler. Anyone else have a favorite?

I do no recommend using DreamWeaver as it is bloated and the interface is confusing. We're learning how to be real coders here, not WYSIWYG pushers!

### Installing Sublime Text 3
Head on over to [SublimeText.com](http://www.sublimetext.com/3) to download and install Sublime Text if you haven't already.

We are going to be using Sublime Text 3, which is the newest version of Sublime Text. You must go to the following URL to download version 3:

<http://www.sublimetext.com/3>

If you have previously installed version 2, make sure to upgrade to version 3. 

### Installing Package Control
Packages are little "plugins" or "addons" that add and new and extend functionality to the text editor. Sublime doesn't come with a package manager built in, so we need to install one. This will let us easily add new plugins in the future.

This is a little scary, but only needs to be done once so follow along. When in Sublime Text, hit `CRTL` and <code>`</code> (backtick or tilde key) and you will open up a console at the bottom of your page that looks something like this:

![](http://wes.io/Ne1S/content)

Visit <https://sublime.wbond.net/installation>, copy the block of code under the Sublime Text 3 tab, paste it into the console and hit enter.

If it worked, you will see a success message. Close and restart Sublime Text and you are finished!

### Installing packages
Let's step through installing a package together. 

First open the command palette by going to `tools` → `Command Palette`. Take note of the keyboard shortcut as you will be using this quite a bit over the course.

Type install and enter when you see "Install Package".

![](http://wes.io/Nebk/content)

Then search and install the following two:

* Emmet
* Cobalt2

We will now take some time to play and get comfortable with the package. Over the course of HackerYou, I will recommend tips, tricks and packages that we can use to speed up our development.
