---
layout: notes
title: Chrome Developer Tools
topic: tools
---

# Developer Tools!

## Developer Tools!
Developer Tools are the secret weapon of any web designer or developer, without them the web would look a whole lot worse. 

Every browser has their own set of dev tools - Chrome has dev tools, Firefox has firebug (separate addon install) as well as their recent native tools. Safari has webkit dev tools, Opera has dragonfly and IE has F12 developer tools. They are all a little different but they all do generally the same thing, you'll probably have to learn how to use them all at one point when debugging in other browsers. We will be using the Chrome Dev tools at HackerYou because they are the absolute best. (IMHO!)

Chrome dev tools are packed with tons of helpful little tools for developing a website, we are going to take a look at the most common use of inspecting elements. By now you may be pulling your hair out wondering how someone can know which CSS rule applies to which element(s). The good news is that we aren't _that smart_ - we use dev tools to help us with this.

### Trying Dev Tools
Open up <a href="exercises/devtools-testing.html" class="exercise">`devtools-testing.html`</a> in Google Chrome. You'll notice this is the same markup and CSS from our selector exercise.

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