<style> .note {display: none; /* Hide teachers notes */ } .solution {color:white; } .solution:hover {color:black; } </style>

# Week5 Day3, Reading jQuery API documentation

jQuery objects have tons of methods, it would take forever to cover how all of them work. What we will do here is introduce you to the jQuery API documentation. The jQuery API will be an invaluable resource as your write jQuery code. 

Go to: [api.jquery.com](http://api.jquery.com)

## Finding DOM elements

There is an overwhelming amount of information so we have to narrow things down a bit. If I want to find an element on the page, which section of the API should I look under? Read the API navigation and decide which section to look in.

<div class="note">
> **Teacher note**: Ask students to get involved here. Ask students to suggest a section or start eliminating one section at a time. "Oh is it the CSS section, nope, the documentation says 'These methods get and set CSS-related properties of elements.'. 
</div>

Solution: What we're looking for is the 'selectors' section. The main "selectors" category has a lot of infomation too. So we look at the sub-categories, again doing the same thing we did above. The "basic" sub-category tells us what we want.

Under the "basic" sub-category click on `Class Selector (“.class”)`. Let's have a look at the detailed view. On this page you'll see:

- description of the method
- method syntax
- examples

<div class="note">
> **Teacher note**: Walk through each section (description, method syntax and examples). Point out that terminology/vocabulary is really important here. Understanding the vocabulary will help students decipher the documentation.
</div>

## Do the same for:

- document traversal
- DOM manipulation
- events
- effects/animations
- attributes