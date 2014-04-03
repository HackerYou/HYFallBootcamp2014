---
layout: notes
title: Explore CSS
topic: html
---

#Explore CSS

As a freelancer you will get requests from clients that you will not know how to accomplish. If you say "I don't know how to do that" then you will find yourself without a job most of the time. Most requests can be handled by doing a bit of research and by being resourceful.

"Exercises" are different from a regular lesson because they require you to do the research yourself. This simulates the process that freelancers have to going through on a daily basis. You will work in groups of 2-3 students and have notes to reference if you REALLY need to - this is to scaffold your learning. 

Don't limit yourself to just answering the questions though; explore the web by using the titles from each section. Learn something interesting to share with the class!

The markup for this exercise is in `explore_css_exercise.html`.


## Including CSS

* There are several ways of including CSS to style HTML elements. What are these approaches?
* What are the pros and cons of each approach?

## CSS Selectors

* How do you write a CSS rule that applies to all "p" elements on a page?
* How would you write a rule that only applies to the second paragraph?
* How would you write a rule that only applies to the first paragraph. You may change the markup by adding attributes.


## CSS inheritance

* How would you change the colour of all text on the page by only using one CSS rule?

## CSS Specificity

* Let's say that you write two different rules for the same element, which would apply? For example:

```
p {
	color: red;
}
p {
	colour: blue;
}
```

* What if one of the selectors is more specific? For example:

```
body p {
	color: red;
}
p {
	colour: blue;
}
```

* Come up with some guidelines for predicting which rules apply.

## Pseudo Selectors

* How would you add a CSS rule that makes the first paragraph change colour upon hovering over it with a mouse?