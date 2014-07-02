---
layout: notes
title: Sublime Text 
topic: tools
---

#Your Development Environment

## Say Hello to your Text Editor!
At HackerYou, we can't stress enough how important having the right tools for the job is. Probably the most important tool you have as a web developer or designer is your text editor in which we use to edit our code.

HTML is written is plain text, so we could technically use Notepad (Windows) or TextEdit (Mac) to view and code our HTML files. The downside to this is that its just black text on a white background, making it very easy to make a mistake!

Text editors give you something called Syntax Highlighting. It changes the colours of your tags helping you to quickly view scan your code for relevant parts. When you make a mistake, the colour of the tag changes and its visually apparent that something isn't right. Let's take a look at our earlier snippet in TextEdit:

![Using Textedit or Notepad](http://wes.io/IJBn/Screen%20Shot%202012-07-24%20at%203.11.49%20PM.png)


![Using a Text Editor](http://wes.io/IINV/Screen%20Shot%202012-07-24%20at%203.15.00%20PM.png)

Note how all the tags are blue colour and the current selected tag `<body>` is underlined yellow? When your code gets long an nested, its very helpful to take advantage of these features.

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

## Sublime Text Settings
Sublime text has hundreds of settings that you can play with to make your editor just the way you like it. Unlike most programs, the editor doesn't include a GUI (Graphical User Interface) to manage out settings. Since we are becoming coders, we code our settings file!

The settings file is stored in something called `JSON` which is a portable way to display and transfer data files.  JSON starts with just two curly braces, just like CSS:

    {

    }

In between that, we can add each of our setting names as well as a value:

    {
      "setting 1" : "brenna is cool"
    }

Your settings file probably looks something like the one below because you have changed your colour scheme

    {
      "color_scheme": "Packages/Theme - Cobalt2/cobalt2.tmTheme"
    }

Note how in the above, each side is wrapped in **"double quotes"** — Very important as most settings need this. The exception is when you are using numbers:

    {
      "font_size" : 16
    }

Or something called a boolean, which means true or false

    {
      "highlight_modified_tabs": true
    }

### Multiple Settings at once

Chances are you will want to use more than 1 setting, and if you have already changed your colour scheme, you should already see something in your settings file.

Multiple settings are comma delimited:

    {
      "highlight_modified_tabs": true,
      "font_size" : 16,
      "bold_folder_labels" : true
    }

**Note how the last line doesn't have a comma? This is very important!**

If you put a trailing comma on your last line, it will break.

### Opening your settings file
To open your own settings file, go to  `Preferences` (Under `Sublime Text` for Mac users) → `Settings - User`

This will open a blank settings file. You may have a few settings already in there if you have changed your colour scheme already.

Here is a list of settings you will probably enjoy. Feel free to modify or delete them as you wish:

    {
      "bold_folder_labels": true,
      "caret_style": "solid",
      "color_scheme": "Packages/Theme - Cobalt2/cobalt2.tmTheme",
      "theme": "Cobalt2.sublime-theme",
      "highlight_line": true,
      "highlight_modified_tabs": true,
      "indent_guide_options":
      [
        "draw_normal",
        "draw_active"
      ],
      "line_padding_bottom": 1,
      "line_padding_top": 1,
      "match_brackets": true,
      "match_brackets_angle": true,
      "match_brackets_braces": true,
      "match_brackets_content": true,
      "match_brackets_square": true,
      "open_files_in_new_window": false,
      "scroll_past_end": true,
      "wide_caret": true,
      "word_wrap": true
    }

**If you change "theme", You will need to restart sublime text after you save this settings file as you are changing the skin of sublime**

A full list of available setting defaults is available at `Preferences` → `Settings - Default` (Do not change these, simply restate them in your own file).

## Emmet Shortcuts

Lets look at how to code quicker with emmet:

### Emmet and HTML

* `[element]` + `tab` creates that element and puts your cursor inside:
  * `span` + `tab` → `<span></span>`
  * `div` + `tab` → `<div></div>`
  * `p` + `tab` → `<p></p>`

* `[element.className]` + `tab` creates that element with the associated class(es)
  * `span.hello` + `tab` → `<span class="hello"></span>`
  * `div.goodDay` + `tab` → `<div class="goodDay"></div>`
  * `p.odd.warning` + `tab` → `<p class="odd warning"></p>`

* `[element#idName]` + `tab` creates that element with the associated ID
  * `div#contact` + `tab` → `<div id="contact"></div>`

* `[element>childElement]` + `tab` creates nested elements
  * `ul>li` + `tab` → `<ul><li></li></ul>`
  * `p>span` + `tab` → `<p><span></span></p>`

* `[element*5]` + `tab` creates that element times the number
  * `span*2` + `tab` → `<span></span><span></span>`
  * `p.hello*2` + `tab` → `<p class="hello"></p><p class="hello"></p>`
  * `div.box.box$*5` + `tab` → `<div class="box box1"></div> <div class="box box2"></div> <div class="box box3"></div> <div class="box box4"></div> <div class="box box5"></div>`

All the above can be mixed and matched, try some of the following:

* `ul>li.food.food$*10`
* `div.wrapper>div.content+div.sidebar`
* `ul.list.list-number-$*2>li.item.item$*2>h2{intense}+p>span{woah}`

### Emmet and CSS
When in css, you can usually just type the first few letters of what you want, and Emmet will figure out what you were looking for. Try some of the following:

* `posrel` →  `position: relative;`
* `posab` →  `position: absolute;`
* `fl` →  `float: `
* `fr` →  `float: right;`
* `db` →  `display: block;`
* `dib` →  `display: inline-block;`
* `tdn` →  `text-decoration: none;`
* `c` →  `color: #`
* `w` →  `width: `
* `w100` →  `width: 100px;`
* `w100p` →  `width: 100%;`
* `p` →  `padding: `
* `p10` →  `padding: 10px;`
* `p10p` →  `padding: 10%;`
* `bt` →  `border-top: `
* `bb` →  `border-bottom: `
