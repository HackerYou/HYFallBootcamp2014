---
layout: notes
topic: js
title: Functions
---

# Functions

Just to recap, we said that functions are chunks of code that can be run at any point in time. Functions are arguably the most important and powerful concept in any programming language but this is especially true for JavaScript. Understand functions and you can become a JavaScript wizard or at the very least a latte artist.

So far you have seen built-in functions but it is time to take things to the next level. You will now learn how to create your own functions. 

A function is best used to reduce verbosity in your code. Why write something multiple times when you can simply create a function to do the work for you.

## Defining Functions

A function is `defined` by giving it a name and the code you would like it to execute, and then `called` by referencing the name at a later point in the code. The syntax looks like this:

```
function nameOfFunction() {
  // block of statements to execute
}
```

**Example**:

```
function helloWorld() {
  console.log("Hello there!");
}
```

## Calling Functions
We call the function by typing its name including the parentheses. Note that your function will never run unless you call it!

```
> helloWorld();
"Hello there!"
```

**Exercise:** Write a function called `sayMyName` that alerts your name, then call it.

## Parameters

Functions can do much more than simply executing the same code over and over. This is where **parameters** come in. Parameters are the comma separated list of variables that serve as placeholders for the values passed to the function (i.e. arguments).

```
function nameOfFunction(parameter1, parameter2) {
  // block of statements to execute
}
```

**Terminology**:

- Define: to create a function
- Parameter: a variable (placeholder) for the arguments when defining a function
- Argument: a value provided to a function
- Pass: to provide arguments to a function
- Call: ask JavaScript to evaluate a function
- Return: pass back a value

Using these parameters, you can define a function that will return a result based on the arguments passed.

**Example**:

```
> function add(a, b) {
  return a + b;
}

> add(2, 4);
6
```

So first we *define* a function called "add" that takes the parameters `a` and `b` and returns their sum. Then we *call* the function and *pass* it the *values* `2` and `4` as *arguments*. Inside the function, `a` refers to the value `2` and `b` refers to the value `4`. The function *returns* the value `6`.

**Exercise:** Edit your `sayMyName` function to accept one parameter called `name`, then call it. It should alert out the name that was passed in as an argument. 

## Return vs. print

A function can print / log values to the console with `console.log()`. Don't confuse this with `return`. Returning a value is useful if you want to store this value and reuse it.

For example, the following function prints a value to the console.

```
function add(a,b) {
  console.log(a+b);
}
```
If we try to store the result of the function we see that our variable stored nothing; the value is undefined.

```
> var num = add(1,2);
> num;
undefined
```

If we use the `return` statement then we can make the function a lot more useful.

```
function add(a,b) {
  return a+b;
}
```

```
> var num = add(1,2);
> num;
3
```


<div class="note">
> **Teacher note**: Discussion: Can students think of other problems that can be easily solved by returned a value? Do students think that they can both return and print a value? Get them to test this out.
</div>


**Exercise**: How can we use the `add()` function to add three numbers together?

Solution 1:

<div class="solution">
<pre><code>var sum = add(1,2);
var sum2 = add(3, sum);
</code></pre>
</div>

Solution 2:

<div class="solution">
<pre><code>add(1,add(2,3))</code></pre>
</div>

The second solution above shows a function calling itself. A function can even call itself **from inside its own definition**; this is a very powerful if mind-blowing concept called **recursion**. For beginners, it is much easier to use the first method as it makes more sense with reading the code. Don't worry about recursion for now.

<!-- way too complex for beginners 

Here is an example of a function definition using recursion:

```
function addAll(n){
	if (n > 0) {
		return n + addAll(n - 1);
	} else {
		return 0
	}
}
```

The above function returns the sum of all positive integers between 0 and n (inclusive). Illustrated here are the two main parts needed to define any recursive function:

- a **base case** -- where for some special input value(s) the function has a simple, non-recursive definition -- in our example, addAll(0) is defined to return 0.
- a **reduction step** -- addAll(n) = n + addAll(n-1) -- the value of addAll(n) is defined in terms of addAll(n-1) -- one step closer to our special addAll(0).

-->

<!-- ## Problem Solving Lesson

Going from a problem described in our everyday language to actual code is not easy. So the "Problem Solving Lesson" will help with that. Let's jump to those notes before doing these exercises.
 -->

## Exercises
Complete the functions exercises in <a href="exercises/functions.html" class="exercise">**functions.html**</a>

The solutions are available <a href="exercises/functions-ANSWER.html" class="exercise">**here**</a>
