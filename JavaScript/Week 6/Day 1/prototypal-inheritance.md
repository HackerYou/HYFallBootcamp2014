# Prototypal Inheritance

> JavaScript is a prototypal inheritance language. That means that objects can inherit properties directly from other objects. The language is class-free.
> 
> **JavaScript the Good Parts**

JavaScript objects can be linked together. We say "an object is linked to its **prototype**". When doing a property lookup, JavaScript will first look for the property in the object. If it doesn't find it then it will look in the object's prototype. This can be thought of as **delegation** or **inheritance** of properties. 

Prototypes are used as a form of code reuse. If multiple objects have the same properties and methods then why repeat yourself? Link the objects together instead.

All objects created with the object literal syntax `{}` are linked to `Object.prototype`. Meaning these objects respond to a few properties/methods that are inside of `Object.prototype`.

==> Add diagram of prototype chain here <==

In the console let's create an object `var myObject = {}`. Next type the name of the object with a trailing dot and you'll see all available properties/methods => `myObject.`. All of these properties and methods come from `Object.prototype`.

**Note**:

* Only one link can be established. We can't link an object to multiple objects.
* Methods are delegated the same way as properties.

## Linking Objects

1. Creating an object

```
var Mammal = {
  kingdom: "Animalia",
  class: "Mammalia",  get_name: function () {            return this.name;        }
};
```

2. Link object with another:

```
var myCat = Object.create(Mammal);
\\ create an empty object called myCat and set its prototype to Mammal
myCat.kingdom; \\ "Animalia"
myCat.class; \\ "Mammalia"
myCat.get_name(); \\ undefined
\\ set the name
myCat.name = "Panthera Tigris"; 
myCat.get_name(); \\ "Panthera tigris"
```

> Note that chapter 3 shows how to add a polyfill for the `Object.create` method (when it's not supported by a browser).

## Differential inheritance

What we saw above is called differential inheritance; we customizing a new object by specifying how it differs from its prototype.

We can optionally create an initializer (`init`) function to specify multiple custom properties at once.

```
var Mammal = {
  kingdom: "Animalia",
  class: "Mammalia",
  init: function(name, age) {
        this.name = name;
        this.age = age;
    },  identify: function() {        return this.name + " is " + this.age + " years old.";   }
};
var myCat = Object.create(Mammal);
myCat.init("Panthera Tigris", 12);
myCat.identify(); // "Panthera Tigris is 12 years old."
```

We can use **self-reflection** to check that the inheritance was set up properly.

```
Mammal.isPrototypeOf(myCat); // true
Object.getPrototypeOf(myCat) === Mammal; // true
```

## Pseudoclassical inheritance

To get inheritance that resembles the classical OOP patterns we  can use the `new` operator and a constructor function. 

`new F()` does four things:

1. Create an empty object (think `{}`)
2. Set the object's prototype to `F.prototype`
3. Change context of `this` to the object and run `F()`.
4. Return the object

Example constructor function:

```
function Student(id, name) {
	this.name = name;
	this.id = id;
	this.sayHello = function(){
		console.log("Hi!");
	}
}
```

We can create a new object (instance) like this:

```
var paula = new Student(33, "Paula");
```

This works but the sayHello function is recreated every time we create an object with the above constructor.

What's interesting about functions is that a `<functionName>.prototype` property is created (since functions are objects) whenever they are created. This property is an object. Remember from #2 above... the objects created by `new` all inherit from `F.prototype` so voila we have a place to put functions once and all new objects inherit from it.

Revised code:

```
function Student(id, name) {
	this.name = name;
	this.id = id;
}
Student.prototype.sayHello = function(){
		console.log("Hi!");
}
```

The combination of the `F` constructor function and its property `F.prototype` mimics a `Class` in classical OOP languages like Java or Ruby.

Resources:

* http://kevinoncode.blogspot.ca/2011/04/understanding-javascript-inheritance.html
* http://www.packtpub.com/article/using-prototype-property-in-javascript
* http://howtonode.org/object-graphs
* http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
* http://davidwalsh.name/javascript-objects-deconstruction