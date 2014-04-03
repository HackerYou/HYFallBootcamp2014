# Week 1, Day 4

## Developer Tools!
Developer Tools are the secret weapon of any web designer or developer, without them the web would look a whole lot worse. 

Every browser has their own set of dev tools - Chrome has dev tools, Firefox has firebug (separate addon install) as well as their recent native tools. Safari has webkit dev tools, Opera has dragonfly and IE has F12 developer tools. They are all a little different but they all do generally the same thing, you'll probably have to learn how to use them all at one point when debugging in other browsers. We will be using the Chrome Dev tools at HackerYou because they are the absolute best. (IMHO!)

Chrome dev tools are packed with tons of helpful little tools for developing a website, we are going to take a look at the most common use of inspecting elements. By now you may be pulling your hair out wondering how someone can know which CSS rule applies to which element(s). The good news is that we aren't _that smart_ - we use dev tools to help us with this.

### Trying Dev Tools
Open up `devtools-testing.html` in Google Chrome. You'll notice this is the same markup and CSS from our selector exercise.

Let's left click our page and select **inspect element**. This brings up two panels:

![](http://wes.io/JOER/Screen%20Shot%202012-09-11%20at%201.37.32%20PM.png)

On the left you will see the markup from earlier and on the right you will see the CSS that applies to the element you selected.

### Editing a Selector
Remember we wrote the selector to make all h1 tags red? Click the **magnifying glass** icon and then click the red "HackerYou CSS Testing" title. You'll see the CSS Rule we wrote! Go ahead and try change the colour or font size. You can even add new properties like `border:2px solid green;`

### Playing with Dev tools
The only way to get awesome at dev tools is to play with it. Here are a bunch of tasks to get comfortable with dev tools. After you are done, we will go through some of the ones you had trouble with.

1. Decrease the padding on the white `<div class="wrapper">` and add a black border
2. Change the `<body>` colour to something you like better <small>**Hint: You can click the red square to reveal the colour picker**</small>
3. Increase the padding of the `<div class="description">` and add 20px of margin to the top of it
3. Select any `<p>` (any text black text inside the blue) and make the font size 25px
4. Double click any text element and change the text!
5. Go to Google.com and change the colour of three things

As you can see, Dev tools are very helpful for figuring out which styles are being applied to which elements as well as quickly testing new styles on existing elements. We will be using dev tools throughout the entire course to please don't hesitate to ask questions about it!

## Sublime Text Settings
Sublime text has hundreds of settings that you can play with to make your editor just the way you like it. Unlike most programs, the editor doesn't include a GUI (Graphical User Interface) to manage out settings. Since we are becoming coders, we code our settings file!

The settings file is stored in something called `JSON` which is a portable way to display and transfer data files.  JSON starts with just two curly braces, just like CSS:

	{

	}

In between that, we can add each of our setting names as well as a value:

	{
			"setting 1" : "wes is cool"
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

