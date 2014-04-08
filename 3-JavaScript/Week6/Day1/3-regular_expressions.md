---
layout: omit
topic: js
---


# Regular Expressions

A **Regular expression** (abbreviated regex) is a sequence of characters used for pattern matching in strings. Regular expressions can be thought of as their own language. They are implemented in JavaScript and in other programming languages as well. The implementation of regex should be the same no matter what programming language you use so learning regex is worthwhile.

Let's say you have a form with an email address field that is not being filled out properly. People keep using invalid email addresses. We can use regular expressions to check if an email address is of the right format.

The literal syntax for a regex looks like this:

```
var re = /abc/;
```
The characters between the `/` form the pattern. In the above example we're looking for the characters "a" followed by "b" and then "c".

We use a regex like this:

```
var re = /abc/;
re.exec("hello!");
```

The `exec` method looks for the pattern inside of the string that is passed to it. It returns either an array of the matches or `null` if it doesn't find anything. 

```
var emailInput = $('.email').val();
var re = /@/;
re.exec(emailInput);
```
The above code will check whether the text inside of the input with class `email` has the character `@`. If it doesn't then that's one clue that the email isn't formatted properly. 

http://gskinner.com/RegExr/ is a great tool for both testing regex and for learning how to construct patterns. On the side there is a list of all of the matchers that can be used along with an explanation. Some common matchers:

. => match all characters
\w => match all words
\W => match all non-words
\d => match any digit
\D => match non-digits
\s => match any whitespace character
[ab] => match any single character in the set 
[^cd] => match any single character not in the set

and so on...