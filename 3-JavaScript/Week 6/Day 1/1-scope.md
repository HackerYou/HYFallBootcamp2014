# Scope

Variables declared outside of functions are in the "**global**" scope. This means these variables can be accessed from anywhere. This also means that declaring a variable with the same name will "clobber" (unintentionally overwrite) the original variable. 

**Local Scopes** are used to control the visibility of variables in order to reduce clobbering. Javascript has **function scope**. This means variables defined inside of a function are not visible out of the function (creating local scope).

# Global abatement | namespacing

To reduce bad interactions with other code create a global object that contains your application: `var MYAPP = {};`. Define all variables and functions as properties of this object.

```
MYAPP.myFunction = function(){
	// something here;
};
MYAPP.myObject = {name: "HackerYou", location: "Toronto"};
```

# Closure

It is possible to nest functions in JavaScript. The inner function gets access to the parameters and variables of the outer/containing function (`this` being the exception).

```
function outerFunction(x){
	return function(){
		return x;
	};
}
innerFunction = outerFunction(6);
innerFuntion(); // 6
```

**Closures** are functions that refer to variables from a different context. In the example above, `innerFunction()` is a closure because it refers to `x` which is in `outerFunction()`'s context.

## Closures can be used to achieve privacy.

Below you will see a function that is wrapping all of the code. This function is surrounded by parentheses and an additional `()` at the end are used to immediately invoke/call the function. This is called an **immediately invoked function**. The result of invoking this function is stored in the variable `getCircumference`.

There is a function which calculates circumference. There is also a variable `PI`. The variable and function are private because they cannot be seen or used outside of the enclosing function. We keep our behaviour(function) and state(data) private but expose one **closure** by making it the return value of the whole function. This function/closure can see the private data but it can't change them.

```
var getCircumference = (function(){
	var calculateCircumference, PI;
	//private function
	calculateCircumference = function(diameter){
		return diameter * PI;
	};
	//private variable
	PI = 3.14159265359;
	//public function using a private function
	return function(diameter){
		return calculateCircumference(diameter)
	}
})()
```

The above is sometimes referred to as the "**Module Pattern**". A module is a function or object that is used to keep code cleanly separated and organized.