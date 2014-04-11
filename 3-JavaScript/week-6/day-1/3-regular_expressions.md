---
layout: notes
topic: js
title: Regular Expressions
---


# Regular Expressions

You might come across regular expressions if you need to check for patterns within string. They look a little crazy at first glance, but are very powerful if you can get your head around them.  

One common use case is form validation. For example, we could check to see if a user's submitted email address in a valid format like `name@domain.tld`. 

A **regular expression** (abbreviated regex) is a sequence of characters used for pattern matching in strings. Regular expressions can be thought of as their own language. They are implemented in JavaScript and in other programming languages as well.

The syntax for a regex is `/` , then a pattern to match, then a closing `/`.

```
var re = /abc/;
```
This regex would match the characters, "abc".

##Checking for a match with `exec`

To check to see if a regex pattern has any matches in a string, we can use the `exex` method. It returns either an array of the matches or `null` if it doesn't find anything. 

```
var re = /abc/;
re.exec("I'm learning the alphabet."); //returns null
re.exec("Now I know my abc's"); //returns "["abc"]";
```

##Regex for string replacement

You can also use a regex in the `replace` string method.  

```
var name="HackerYou";
var newName = name.replace(/You/, "U"); //returns "HackerU"
```

Regex can do a lot more than just replace a simple string of characters. You can use it to catch multiple things at once. 

We can make our replace function search for both upper and lower case Y's by matching a set of characters instead of just capital Y. We use `[]` to indicate a set of characters to match.

```
var name="HackerYou";
var newName = name.replace(/[Yy]ou/, "U"); //name="HackerU"

var name="hackeryou";
var newName = name.replace(/[Yy]ou/, "U"); //name="HackerU"
```

You can also use what are called **flags** to change the way the search behaves.  Adding the `i` flag to the end of a regex means 'case insensitive'.

```
var name="hackeryOu";
var newName = name.replace(/You/i, "U"); //name="HackerU"
```

Some other common symbols:

`*` => match multiples<br>
`.` => match any character except line breaks<br>
`\w` => match all words <br>   
`\W` => match all non-words  <br>  
`\d` => match any digit <br>   
`\s` => match any whitespace character   <br>  
`[a-z]` => match a range of characters   <br>  
`[^cd]` => match characters NOT in the set    <br>


##Writing Your Own Regular Expressions

There are lots more patterns and flags, and you'll probably never remember them all, so don't be afraid to:

####1. google for someone else who's written the same regex before

If you're looking for something common like email address validation, you can usually find a pre-written regex online.

#### 2. use a regex tester

<http://www.regexr.com/> We love this online regex tester. You can test your regex against your own text to quickly see if you've got it working. The sidebar also contains a reference of all the different symbols and flags available, and some common examples to get you started.