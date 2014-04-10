---
layout: notes
title: Configuring Sublime Text
topic: tools
---

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

