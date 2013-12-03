# Week 5, Day 2 Arrays and Methods

## Arrays

Imagine that you wanted to make a list of values where the **order mattered**. You could do this:

```
var musicObject = {
	"0": "do",
	"1": "re",
	"2": "mi",
	"3": "fa",
	"4": "sol",
	"5": "la",
	"6": "si",
	"7": "do"
}
```
And then you would have to sort the properties every time you wanted to work with them. Thankfully JavaScript has a built-in object called "Array" that does what we want. The "literal notation" looks like this:

```
var musicObject = [
	"do",
	"re",
	"mi",
	"fa",
	"sol",
	"la",
	"si",
	"do"
]
```

or to save space:

```
var musicObject = [ "do", "re", "mi", "fa", "sol", "la", "si", "do" ]
```

> Teacher note: It's important to stress here that an Array is an object; it's just a special case. 

What are the differences between a regular object and an array object in terms of syntax?

Solution: <span class="solution">1) square-brackets replace the curly brackets. 2) no property names (they are automatically added).</span>

**Note**: 

* The first number in a sequence is usually 1 but not in programming. Computers use zero-based numbering so the first property of the array object has an **index** (property name) of 0.
* We can't use dot-notation to get at the values.
* Use bracket-notation to get the values.
* Any values (including objects and arrays) can be inside of arrays.

**Exercises**:

The following exercises use this array object:

`var theArray = ["Homer likes pie", 34, { name: "First", age: 66 } ]`

1. Retrieve the 2nd value in the array.
2. Update the first value to `"Homer likes beer"`
3. Retrieve the age property of the object in the array.
4. Update the name property of the object in the array to `"Jack"`.

Solutions:

1. <span class="solution">`theArray[1];`</span>
2. <span class="solution">`theArray[0] = "Homer likes beer";`</span>
3. <span class="solution">`theArray[2].age;`</span>
4. <span class="solution">`theArray[2].name = "Jack";`</span>

Note the chaining of expressions. `theArray[2]` gives us an object which we can immediately work with. Since the value is an object literal, we can use dot-notation `theArray[2].age`. We don't need to store the value in a variable and then get its properties. 

> Teacher note: Chaining methods/operations might not come naturally to students. Stop here and make sure that students understand that we're retrieving a value from an array which we can then work with. This is used a lot in jQuery for example.


## Functions

Let's take a small detour and talk about functions. Functions in JavaScript are objects. This means that like a number, string or array, they can be stored in variables.

`function myFunction(){}` creates a function and makes it available anywhere in our code. We can use function expressions to also define functions.

`var myFunction = function(){}`. This means take this function object and put it in the "myFunction" box so that we can get at it whenever we want. 

### Reference function
If we write `myFunction` then we get back an object. Define a function using a function expression in your chrome console and  then type its name without the parenthesis. Do you see that you get the function back?

### Call function
`myFunction()` calls the function and we get back the result of the function. The only difference is the added parenthesis `()`.

### Method

Since functions are objects, this means that they can be properties of objects. A function that is a property of an object is called a **method**. We define methods like this:

```
var myObject = {
	propertyName: value,
	propertyName: value,
	methodName: function() {
		// statements
	}
}
```

Notice that the method is **not** defined with a name, this is called an **anonymous function**. It's simply referred to by the method name.

### Call methods

```
myObject.methodName();
```

### Built-in Methods
Most objects have built-in methods that do interesting work. We said earlier that an Array is an object. Arrays have some special built in methods.

#### Adding items to array

```
> var myArray = [1, 3, 4];
> myArray.push(5) //add value to the end;
> myArray;
[1, 3, 4, 5];
> myArray.unshift(0) //add value to the beginning;
> myArray;
[0, 1, 3, 4, 5]
```

#### Removing items from array

```
> var myArray = [1, "hi", 4, true];
> myArray.pop() //remove last value & return it;
> myArray;
[1, "hi", 4];
> myArray.shift() //remove first value & return it;
> myArray;
["hi", 4]
```
#### Explore other built-in methods

In the JavaScript console type `myArray.` without pressing enter and you will see the available methods. Do the same with an empty string `"".`.

If you want to know what the method does just search the name in the Mozilla Developer Network: https://developer.mozilla.org 

**Exercises**:

Need to add some here... 

## This

Inside of an object, the keyword `this` refers to the object itself. This can be used to update an object's parameters. For example:

```
var myBasket = {
	apples: 1,
	increment: function() {
		this.apples += 1
	}
}
> myBasket.apples;
1
> myBasket.increment();
> myBasket.apples;
2
```

**Exercise**:

Create an object that represents a "warrior". This warrior has the following properties:

- equipment, an array containing the values "sword" and "shield".
- energy, defaults to the number 100
- location, an object with two properties: x and y. The values of x and y are numeric.
- a method `walk()` which updates the warrior's location. If the warrior's location is x:10 and y:5 then walk(2, 0) will update the location to x:12 and y:5.
- a method `strike()` which uses up energy. If the warrior's energy is at 100 then `strike(25)` will reduce the energy to 75.
- a method `pickUpEquipment()` which adds the argument (a string) to the equipment array.


**Answer**:

<div class="solution">
<pre>
var warrior = {
  equipment: ["sword", "shield"],
  energy: 100,
  location: {x: 6, y: 4},
  walk: function(x, y) {
    this.location["x"] += x;
    this.location["y"] += y;
  },
  strike: function(power) {
    this.energy -= power;
  },
  pickUpEquipment: function(item) {
  		this.equipment.push(item);
  }
}
</pre>
</div>