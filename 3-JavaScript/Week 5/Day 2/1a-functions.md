# Week 5, Day 2 Functions

Just to recap, we said that functions are chunks of code that can be run at any point in time. Functions are arguably the most important and powerful concept in any programming language but this is especially true for JavaScript. Understand functions and you can become a JavaScript wizard or at the very least a latte artist.

So far you have seen built-in functions but it is time to take things to the next level. You will now learn how to create your own functions.

## Defining Functions

A function is `defined` and then `called` at a later point in the code. The syntax looks like this:

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
We call the function by typing its name including the parentheses.

```
> helloWorld();
"Hello there!"
```

## Parameters

If that was all that functions could do then latte art would be impossible! This is where **parameters** come in. Parameters are the comma separated list of variables that serve as placeholders for the values passed to the function (i.e. arguments).

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

**Example**:

```
> function add(a, b) {
	return a + b;
}

> add(2, 4);
6
```

So first we *define* a function called "add" that takes the parameters `a` and `b` and returns their sum. Then we *call* the function and *pass* it the *values* `2` and `4` as *arguments*. Inside the function, `a` refers to the value `2` and `b` refers to the value `4`. The function *returns* the value `6`.

## Return vs. print

A function can print values to the console with `console.log()` or write values to the HTML page with `document.write()`. Don't confuse this with `return`. Returning a value is useful if you want to store this value and reuse it.

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

> **Teacher note**: Discussion: Can students think of other problems that can be easily solved by returned a value? Do students think that they can both return and print a value? Get them to test this out.

**Exercise**: How can we use the `add()` function to add three numbers together?

Solution 1:
<div class="solution">
<pre>
var sum = add(1,2);
var sum2 = add(3, sum);
</pre>
</div>

Solution 2:

```
add(1,add(2,3))
```

The second solution above shows a function calling itself. A function can even call itself **from inside its own definition**; this is a very powerful if mind-blowing concept called **recursion**. 

> **Teacher note**: Ask students if they have encountered recursion before? Is this intuitive? It can appear a bit magical at first.

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


## Problem Solving Lesson

Going from a problem described in our everyday language to actual code is not easy. So the "Problem Solving Lesson" will help with that. Let's jump to those notes before doing these exercises.

## Exercises
1. (*) Write a function `maxOfTwo(n1,n2)` which returns the higher of two numeric values.

2. (*) Write a function `maxOfThree(n1,n2,n3)` which returns the higher of three numeric values.

3. (*) Write a function `charIsVowel(c)` that takes a character (i.e. a string of length 1) as argument and returns true if it is a vowel, false otherwise. E.g. `charIsVowel("b")` returns `false`.

4. (**) Write a function `palindrome(string)` which returns `true` if the string is a palindrome, i.e. it reads the same both backwards and forwards. E.g. `palindrome("pumpkin");` returns `false` and `palindrome("civic");` returns `true`.

5. (**) Write a function that prints the numbers from 1 to n (n being an argument). But for multiples of 3 print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiple of both 3 and 5, print “FizzBuzz”. 

6. (***) Write a function `englishNumber(n)` which takes a number as an argument and returns a string which is the english version of the number. This function should work for numbers between 0 and 100.

7. (***) Write a program which prints out the lyrics to the song "99 Bottles of Beer on the Wall." The function should take a number  `n` as an argument and print the lyrics starting at that number. The `englishNumber()` function will be handy here.

8. Create a problem that requires a bit of JavaScript to solve and share it with the class. You should have a solution!