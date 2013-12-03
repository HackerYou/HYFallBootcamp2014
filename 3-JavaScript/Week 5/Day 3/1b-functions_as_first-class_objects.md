## Functions as first-class objects

**JavaScript functions are first-class objects**. This behaviour is rare in programming languages. It means that functions can be passed as arguments to other functions and that they can be properties of objects. 

### Functions as arguments

Example:

```
function taskRunner(taskName, someTask){
	console.log("I just did: " + taskName);
	someTask();
}
```

We defined a function called `taskRunner` which takes a string called `taskName` and a function called `someTask`. It then prints `"I just did: <taskName>"` and calls the function.

```
taskRunner("Adding two numbers", function(){
	console.log(22 + 66);
});
```

The `taskRunner` will print `I just did: Adding two numbers` and then print `88`

> Teacher note: Functions as arguments is a rather weird concept. This is a good time to stop and ask students to explain the code above. See if there are any misconceptions.

**Exercises**:

* Write a function that accepts two arguments, a `number` and a `function`. If the number that is passed is greater than 50 then call the function. If the number is lower than 50 then print an error message.