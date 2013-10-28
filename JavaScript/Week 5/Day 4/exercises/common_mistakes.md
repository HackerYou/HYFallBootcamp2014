# Common mistakes

I will be writing an exercise for each of the following code snippets. Each snippet is an error which is representative of a common error that people make. The students will run the code and use chrome console/debugging tools to figure out the problem.

## Interpreter adding semi-colons where they don't belong.

In this case, the curly bracket should go on the above line or the interpreter will add a semicolon there.

```
function returnPerson (name) {  
    return  
    {  
        personsName : name
    }; 
}
```

## Trailing comma

```
var shoppingList = {
	veggies: ["tomato", "ketchup"],
	fruit: "apples",
	milk: 2,
}
```

## Case Sensitivity

```
document.getElementByID('myId');
```

## Mismatching parenthesis

```
function printLocation()({
	console.log("I am in Toronto!");
};
```

## Assignment in condition

```
var name = "Marge";
if (name = "Homer"){
	console.log("D'oh!");
}
```

## Variable "Hoisting"

```
var num = 56;
function calculateSomething() {
    console.log(num);    
    var num = 12;
    console.log(num);    
}
```
The output of `calculateSomething()` is undefined and then 12. JavaScript has function scope, meaning that all variables defined within a function can be used at any point… This means JavaScript sees the above code like this:

```
var num = 56;
function calculateSomething() {
    var num;            // undefined
    console.log(num);    // outputs 'undefined'    
    num = 12;            // 12
    console.log(num);    // outputs '12'    
}
```

This is why Douglas Crockford advised in his book JavaScript – The Good Parts to declare all variables at the top of the function body.

## Function "Hoisting"

* function expression (assigning it to a variable) can only be called after it has been defined.
* function declaration is always defined as a named function and it is hoisted, meaning it can be called before it is defined.

```
myFunction();
var myFunction = function(){
	console.log("I won't work!")
}
```

Hoisting examples are courtesy of: http://elegantcode.com/

## Assuming form input is a number

```
var tshirtSize = $('#tshirt-sizes option:selected').val();

if( tshirtSize === 1 ){
  console.log('Thanks for ordering a small!');
}
```

Even if a small is ordered, the above message will not be printed. This is in a sense a "silent" error. Convert the tshirt size to a number to fix this:

```
var tshirtSize = Number ($('#tshirt-sizes option:selected').val());
```

## Loading jQuery after code that depends on it

## 