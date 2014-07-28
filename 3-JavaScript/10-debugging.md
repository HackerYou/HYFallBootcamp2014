---
layout: notes
topic: js
title: Debugging JavaScript
---

# Debugging code with developer tools

You will hear people say "JavaScript fails silently". This is not entirely true. JavaScript debugging tools have come a long way. Usually if there is an error it will be printed to the console, you just have to look.

`console.log()` isn't the only way to print information to the console. We can also use `console.info()` and `console.error()`.  These methods work very much like `console.log()` except they have additional icons and colours to make the information more meaningful. At the bottom of the console there are tabs for filtering based on what method was used.


### With chrome developer tools we can:

- navigate to where errors are and fix them in real-time to test solutions
- pause execution of the code whenever an error occurs and dig into the code to see what is causing the issue.
- create breakpoints where execution of the code stops so that we can see the state of variables at any point in the code.

Complete level 4 of CodeSchool's free course "Discover Devtools" to learn the above.

## Exercises

Open up <a href="exercises/debugging.html" class="exercise">**debugging.html**</a> and make sure your console in chrome is open! Errors will be printed there.

1. The function in **bug 3** should log our current location. Why isn't it working?
2. In **bug 2** we  want to print a DOM object to the console. Instead of the object we get an error message; what's wrong?
3. **Bug 3** has a simple JavaScript function. We pass it a name and it returns an object. Unfortunately we get `undefined` when we try to write the function's return value to the page. What is wrong?
4. The boolean logic in **bug4*** doesn't seem to work. We want to print "D'oh!" only if the name is "Homer". We set the name to be "Marge" so why is it still printing "D'oh!"?
5. The output of `calculateSomething()` from **bug 5** is undefined and then 12. You would think that the output would be 56 and then 12. This doesn't make any sense!! What's going on?
6. In **bug 6** we've defined two functions at the bottom and we call them both at the top of the script. The `sayHello` function seems to work just fine but we get an error for `sayGoodbye`. The code seems the same. What's going on here?
7. We have a select element in **bug 7**, where the "small" option has been given value of 1. When the selection changes, we check to see if the selected value matches 1 for small, and alert "Thanks for ordering a small". This should work but it isn't. What's going on?

The squashed bug version is <a href="exercises/debugging-answer.html" class="exercise">**here**</a>.
