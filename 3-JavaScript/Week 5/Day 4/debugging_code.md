# Week 5, Day 4 Debugging code with developer tools

You will hear people say "JavaScript fails silently". This is not entirely true. JavaScript debugging tools have come a long way. Usually if there is an error it will be printed to the console, you just have to look.

`console.log()` isn't the only way to print information to the console. We can also use `console.info()` and `console.error()`.  These methods work very much like `console.log()` except they have additional icons and colours to make the information more meaningful. At the bottom of the console there are tabs for filtering based on what method was used.


With chrome developer tools we can also:
- navigate to where errors are and fix them in real time to test solutions.
- pause execution of the code whenever an error occurs and dig into the code to see what is causing the issue.
- create breakpoints where execution of the code stops so that we can see the state of variables at any point in the code.

CodeSchool's free course "Discover Devtools" has an excellent level (Level 4: Debugging) for learning the above stuff.

### Rough notes from level 4:

- fix syntax errors, navigation to where the error is. This takes you to the sources panel
- pause on exception (clicking the pause icon at the bottom). Code will pause so we can hover over each variable to see its value.
- two clicks on pause icon => stop at uncaught exceptions only

**Breakpoints**

- click on left side
- execution controls are on top right corner
- resume (until next breakpoint if there is one)
- step-over (go to next line of code)
- step-in (go into functions on that line)
- step-out (of current function into its caller)
- deactive breakpoints 