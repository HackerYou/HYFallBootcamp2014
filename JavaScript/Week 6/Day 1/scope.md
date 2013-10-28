# Scope

Variables declared outside of functions are in the "**global**" scope. This means these variables can be accessed from anywhere. This also means that declaring a variable with the same name will "clobber" (unintentionally overwrite) the original variable. 

**Local Scopes** are used to control the visibility of variables in order to reduce clobbering. Javascript has **function scope**. This means variables defined inside of a function are not visible out of the function (creating local scope).

# Global abatement

To reduce bad interactions with other code create a global variable for your application: `var MYAPP = {};`. Now define all variables and functions as properties of this object.

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
	function innerFunction(){
		return x + 7;
	};
  return innerFunction();
}
outerFunction(6); // 13
```

**Closures** are functions that refer to variables from a different context. In the example above, `innerFunction()` is a closure because it refers to `x` which is in `outerFunction()`'s context.

## Closures can be used to create private.

```
function Person(name) {
  this.name = name,
  this.getName = function() {
    return this.name;
  };
}
var bob = new Person("Bob");
bob.getName; // "Bob"
bob.name = "Phil";
bob.getName; // "Phil"
```

We might not want the name to be changeable. So we create a variable local to the `Person` constructor function. Note that the underscore is a convention, it is used for declaring private variables.

```
function Person(name) {
  var _name = name;
  this.getName = function() {
    return _name;
  };
}
var bob = new Person("Bob");
bob.getName; // "Bob"
bob.name = "Phil";
bob.getName; // "Bob"
```

`getName` is a closure, it's still referring to `_name` which is in a different context.


# Module pattern

We can use function scope and closures (immediately invoked function) to make modules. A module is a function or object that is used to keep code cleanly separated and organized.
