---
layout: notes
title: Sublime Productivity Tools
topic: tools
---

# Productivity Tools

# Sublime Tricks

## Snippets!
Snippets make your workflow much faster. By typing a small shortcut and hitting `tab` we can expand that into some really good boiler plate code.

To create a new snippet, you to go `tool` → `New Snippet`. It will open a new file with the default snippet code. Let's step through how to make out own now.

## Existing Snippets
Here are four snippets for things that we use fairly often:

1. A compressed version of normalize ([download](snippets/normalize.sublime-snippet))
2. box-sizing border-box snippet ([download](snippets/border-box.sublime-snippet))
3. clearfix snippet ([download](snippets/clearfix.sublime-snippet))
4. jQuery CDN snippet ([download](snippets/jquerycdn.sublime-snippet))

These files need to go into a special folder, which is a little tricky to find. To get to it, follow these steps:

1. Click `Preferences` in the top nav (on OSX it is under 'sublime text 2', windows is just in the nav)
2. click `Browse Packages`
3. This will open up a big list of folders. Find the one called `User`
4. Copy your files into that folder

If completed correctly, you will now have access to the following snippets:

* `border-box` + `tab`
* `normalize` + `tab`
* `clearfix` + `tab`
* `jquerycdn` + `tab`

**Note**: If another plugin prevents the tab trigger form working, you can also access your snippets throught th command pallette. `cmd/ctrl` + `shift` + `P`, then start typing `snippet` or the name of your snippet, then the enter key to insert.

Feel free to make your own as you go!

## Emmet Shortcuts

Lets refresh on how to code quicker with emmet:

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
When in css, you can usually just type the first few letters of what you want, and emmet will figure out what you were looking for. Try some of the following:

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