# Week 5, Day 4 Debugging code with developer tools

You will hear people say "JavaScript fails silently". This is not entirely true. JavaScript debugging tools have come a long way. Usually if there is an error it will be printed to the console, you just have to look.

`console.log()` isn't the only way to print information to the console. We can also use `console.info()` and `console.error()`.  These methods work very much like `console.log()` except they have additional icons and colours to make the information more meaningful. At the bottom of the console there are tabs for filtering based on what method was used.


### With chrome developer tools we can:

- navigate to where errors are and fix them in real-time to test solutions
- pause execution of the code whenever an error occurs and dig into the code to see what is causing the issue.
- create breakpoints where execution of the code stops so that we can see the state of variables at any point in the code.

Complete level 4 of CodeSchool's free course "Discover Devtools" to learn the above.

## Exercises

For these exercises make sure that the JavaScript console in chrome is open. Errors will be printed there.

1. `bug1.html` has a simple JavaScript function. We pass it a name and it returns an object. Unfortunately we get `undefined` when we try to write the function's return value to the page. What is wrong?
2. In `bug2.html` we're simply printing to the console a DOM object. Instead of the object we get an error message; what's wrong?
3. The function in `bug3.html` is really simple, we just want to print our current physical location. Why isn't it working?
4. The boolean logic in `bug4.html` doesn't seem to work. We want to print "D'oh!" only if the name is "Homer". Clearly the name is "Marge" so why isn't this program doing what we want?
5. The output of `calculateSomething()` from `bug5.html` is undefined and then 12. You would think that the output would be 56 and then 12. This doesn't make any sense!! What's going on?
6. In `bug6.html` I'm defining two functions at the bottom and calling them both at the top of the script. The `sayHello` function seems to work just fine but I get an error for `sayGoodbye`. Both are functions so why is this happening?
7. We have a simple select element in `bug7.html`. When a T-shirt size is selected we check if it's the first one, if it is then we print out "Thanks for the ordering a small". This should work but it isn't. What's going on?