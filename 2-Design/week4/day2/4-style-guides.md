---
layout: notes
title: Style Guides
topic: ux
---

#Style Guides

To help you turn your design ideas into beautiful CSS, it's helpful to have a step in between your vision and the finished product. We use style guides to test our ideas and establish a soild design direction. They will help you to build modularly, which makes your CSS more lean and organized. Style guide also make for easy collaboration by providing living documentation of front-end code.

##Style Guide How To

###Before You Start: Collect Inspiration
Take screen shots or use a bookmarking service (like Evernote) to collect snippets of things you like. They can be from websites, design resources (colourlovers palette, google web fonts), or just anything you find appealing.

Here are some of the things I collected when designing my own website:

![](http://f.cl.ly/items/1g3w0w1P0t3O1b2H1x1j/inspiration.jpg)

Not everything made the cut, but you can see how some elements translated into the [finished product](http://brennaobrien.com). 

<!-- ![](http://f.cl.ly/items/0h3Q2t2b26441D0g2q3Y/Screen%20Shot%202014-02-13%20at%2010.55.27%20PM.png)   -->  


###Build it out, one piece at a time.

####Establish a Colour Scheme
Pull some colours that you like out of what you've collected.

Use the <a href="exercises/style-guide.html" class="exercise">**style-guide.html**</a> starter file (or your favourite design software). and try editing and adding to the colour swatches. This will give you a preview of how all your colours work together. Keep editing until you find something you love! If you're using Sass, you can create and .scss file and start keeping those colours in variables for later.

You can also add swatches for background patterns and textures here if you're using them.

![](http://f.cl.ly/items/1Q3j1t2D060b2p470t0R/Screen%20Shot%202014-02-16%20at%201.10.09%20PM.png)    

####Create a Typography Heirarchy
Web design relies quite heavily on typography, so it's important to nail that down. `style-guide.html` also has a collection of various text elements. Set up all your typography CSS, drawing from your collected inspiration and making sure each element has been styled. Some suggestions to get you started:

* start with a base `font-family` and `font-size` on your `body`
* try another font-family, weight or colour to develop an alternate set of styles for all your headings
* increase the `font-size` on some or all of your headings to help establish a visual heitarchy
* edit the margins on all text elements to create a pleasing vertical rhythm. The size of the space *in between* elements is just as important as the size of the elements themselves
* set at default style (and :hover state!) for all inline links
* think about specialized text elements you might want to have included in your site and create styles for those, eg. intro paragaphs, meta-data like for blog posts, etc.

![](http://f.cl.ly/items/433V1c2A0J1b0Z1S3i09/type.png)

####Forms
Similarly, establish some sensible defaults for all your possible form elements. Don't worry too much about the form's layout here, just ensure that each input has been styled and pay attention to vertical spacing between labels and inputs (i.e. margins). Try to borrow from your typography styles here to help establish consistency. And don't forget to add `:focus` styles!

![](http://f.cl.ly/items/230R3N3y0s2V2T094416/Screen%20Shot%202014-02-16%20at%201.15.41%20PM.png)

####Media
Think about the differnt kind of media you might have on your site - images, user avatars, video embeds, and give those some styles too. Some ideas:
* make user avatars circular
* frame all media elements using properties like border, padding and box-shadow

![](http://f.cl.ly/items/100w0O0p0A2h3N0h0k2q/Screen%20Shot%202014-02-16%20at%201.20.48%20PM.png)

####UI Components
Consider other common UI elements that appear on most websites.  **Buttons** are common and a great way to draw attention to actionable items.  Create at least one button style - then vary sizing or colour scheme to create more if needed. Again, don't forget to add your `:hover` states.

![](http://f.cl.ly/items/2Z0e0R0r1v3H412B1A3z/buttons.gif)

A **panel** is a nice way to draw attention to content by making it pop out from its surroundings.

![](http://f.cl.ly/items/0p2d313Y3D2E1M0D1d1J/Screen%20Shot%202014-02-16%20at%201.24.19%20PM.png)

Add anything else you think might be a recurring component on your site.

###Optional: Build More Complex Modules
If you've nailed down all the basics above, you can start planning out how they'll combine together to create modular components for your site. 

**Example:** A user profile might be comprised of an avatar, some text elements, inside a .panel

**Example:** A simple sign-up form might include name and email inputs and a submit button laid out vertically.

###Watch the Magic Happen
When your style guide and wireframe (more on this later) are complete, start writing all the HTML for you site and you'll find most things will style themselves! Add some layout and fine tuning and you'll have a well designed site in no time. If you need to revise core styles, you can easily see the cummulative effect they'll have by checking back on your style guide page.Adding new pages or components at a later time will also be much quicker than if you had to style them from <scratch class=""></scratch>

####Examples and further reading
[Atomic Web Design by Brad Frost](http://bradfrostweb.com/blog/post/atomic-web-design/)
[Front-end Style Guides on 24 Ways](http://24ways.org/2011/front-end-style-guides/)
[Learning Labs Style Guide](http://learninglabs.org/style-guide/)
[Think Logistics Style Guide](http://www.thinklogistics.com/style-guide/)
[Twitter Bootstrap Style Guide](http://stylebootstrap.info/)
[BBC's Global Experience Langauge](http://www.bbc.co.uk/gel/web/building-blocks/typography/fonts)
