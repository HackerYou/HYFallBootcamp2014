---
layout: notes
title: Style Guides
topic: wp
---

#Style Guides

Working with the many many pages of a WordPress theme or large website is a lot of work. It's a lot of CSS to write and it can be tough to keep your styles organized and consistent across pages.

When building out a WordPress theme, we recommend using a CSS style guide to get started. A style guide and the CSS that accompany it will ensure that all elements have some consistent, basic styling applied to them.  For example, if a client (or you!) adds a `blockquote` later on, it will fit right in thanks to your base styles.

Style guides help you to build modularly, which makes your CSS more lean and organized. They're also living documentation of your front-end code, which makes it easy for others to collaborate on a project.

##Style Guide How To

###Start with some basic markup

Create a page or page template that holds at least one of each semantic HTML element. (eg. paragraphs, headings, lists, blockquote etc.). 

I also like to include colour swatches with a hex code reference, and other UI components like buttons and avatars.

Here is a sample HTML file that you could work with. <a href="exercises/style-guide.html" class="exercise">**style-guide.html**</a>

###Write your base CSS

Get started with your CSS or Sass file by styling the elements on the style guide page. If you're working in Sass, create variables for your colours.

Extract as many styles as you can from the design you're working from. If any elements remain unstyled, you should be able to write some CSS that makes them fit in with the other elements.

###Typography

Pay close attention to typography - it's critical to good web design and makes up a huge portion of most websites. 

Some things to keep in mind

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
Think about the different kind of media you might have on your site - images, user avatars, video embeds, and give those some styles too. Some ideas:
* make user avatars circular
* frame all media elements using properties like border, padding and box-shadow

![](http://f.cl.ly/items/100w0O0p0A2h3N0h0k2q/Screen%20Shot%202014-02-16%20at%201.20.48%20PM.png)

####UI Components
Consider other common UI elements that appear on most websites.  **Buttons** are common and a great way to draw attention to actionable items.  Create at least one button style - then vary sizing or colour scheme to create more if needed. Again, don't forget to add your `:hover` states.

![](http://f.cl.ly/items/2Z0e0R0r1v3H412B1A3z/buttons.gif)

A **panel** is a nice way to draw attention to content by making it pop out from its surroundings.

![](http://f.cl.ly/items/0p2d313Y3D2E1M0D1d1J/Screen%20Shot%202014-02-16%20at%201.24.19%20PM.png)

Add anything else you observe to be a recurring component on your site.

###Optional: Build More Complex Modules
If you've nailed down all the basics above, you can start combining smaller elements to create modular components for your site. 

**Example:** A user profile might be comprised of an avatar, some text elements, inside a .panel

**Example:** A simple sign-up form might include name and email inputs and a submit button laid out vertically.

###Watch the Magic Happen
When your style guide is complete, you'll find most of your HTML will style itself! If you need to revise core styles, you can easily see the effect they'll have by checking back on your style guide page. Adding new pages or components at a later time will also be much quicker than if you had to style them from scratch.

####Examples and further reading
[Atomic Web Design by Brad Frost](http://bradfrostweb.com/blog/post/atomic-web-design/) <br>
[Front-end Style Guides on 24 Ways](http://24ways.org/2011/front-end-style-guides/) <br>
[Learning Labs Style Guide](http://learninglabs.org/style-guide/) <br>
[Think Logistics Style Guide](http://www.thinklogistics.com/style-guide/) <br>
[Twitter Bootstrap Style Guide](http://stylebootstrap.info/) <br>
[BBC's Global Experience Langauge](http://www.bbc.co.uk/gel/web/building-blocks/typography/fonts) <br>
