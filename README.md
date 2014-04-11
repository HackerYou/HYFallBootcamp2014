#HackerYou Front-end Bootcamp Curriculum

###Notes and exercises for our Front-end Web Development Immersive course

http://hackeryou.herokuapp.com/

This course covers:

1. HTML & CSS
2. Web Desgin Fundamentals
3. JavaScript & jQuery
4. WordPress
5. Freelancing Tips

All course notes and exercises &copy; 2014 [HackerYou Inc.](http://hackeryou.com) Not to be be redistributed without permission.


##To contribute to the curriculum

###Lessons/Notes

All lessons are written in markdown.

New lessons will be indexed in the order they appear if you tag them with YAML front matter at the top of the markdown file:

```
---
layout: notes
topic: html
title: Intro to HTML
---
```

Choices for topics are:

`html` for HTML & CSS  
`tools` for GitHub, SublimeText etc.   
`ux` for Design and UX  
`js` for JavaScript and jQuery  
`wp` for WordPress
`freelance` for Freelancing

Title is up to you.

###Exercises

Links to exercise files should be catalogued in `topic-list.yml` if you want them to appear on the table of contents.  You can also link them from within notes with a relative link:

```
To practice your CSS skills, open up [css-selectors.html](exercises/css-selectors.html)
```

Exercises that contain multiple files should be zipped for easy download.

##To preview the curriculum locally

Behind the scenes, the hosted notes are generated with Jekyll and GitHub Pages. To get setup for local preview:

1. make sure you have Ruby v1.9.3 or above installed
2. install Bundler (a Ruby pagckage manager) `gem install bundler`
3. run `bundle intall` to install Jekyll and GitHub pages

When you want to preview the build:

1. run `bundle exec jekyll serve --watch` to generate the site (the --watch flag will regenerate whenever you edit a file)
2. You preview awaits you at `http://localhost:4000` !


