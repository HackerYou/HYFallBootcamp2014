#JavaScript Terminology and Syntax Cheat Sheet

##Variables

A jar to store a something you might want to use again in your code.

    var myStringVariable = "whatever" 
    var myNumberVariable = 42 
    var myBooleanVariable = true  // can only be 'true' or 'false'

##Functions 

A group of code that can be run repeatedly.

###Defining a function (write out a set of instructions)

    function myFunction(){
        //do stuff
    }
    
    //OR (alternate syntax)

    var myFunction = function(){
        //do stuff
    }


###Calling a function (make it go!)

    myFunction();

###Functions with Parameters/Arguments

**Parameters** can be used to pass in extra options to our function when it runs. This makes them even more versatile and re-usable. 

You might hear parameters referred to as **arguments**. Techinically, this is what we they're called when calling the function.

    function myFunction(param1, param2){
        //do something with param1 and param2
        console.log(param1);
        console.log('But also, ' + param2);
    }

    myFunction ("whatever", "pshaw!");

Logs:

    > whatever
    > But also, pshaw!

##Arrays

A grouped collection of items, ordered by a numeric index.

###Define an empty array

    myArray = [];

###Define an array with some things in it.

Items in an array are comma separated.

    myLuckyNumbers = [8, 84];
    myAnimals = ["aligator", "monkey", "snake"];

###Add a new thing to an array

    myAnimals.push("lion"); //myArray now equals ["aligator", "monkey", "snake", "lion"];


###Get items from an array

The location of items in an array is based on a numeric **index*, which starts counting from zero. i.e. the fourth item in the array will have an index of 3. 

    myLuckyNumbers[0]; // 8
    myAnimals[2]; // "snake"


##Objects

Objects are like super-powered arrays! They're still collections of items, but this time each item can be labelled with it's own key. We often store both variables and functions inside objects.

###Define an empty object 

    myObject = {};

####Define an object with some things in it

Variables are called **properties** when they're inside objects.
Functions are called **methods** when they're inside objects.

    myObject = {
        myProperty : "value",
        myOtherProp : "another value",
        myMethod : function(){
            console.log("I'm a method!");
        }
    };

###Retrieve an item from an object

You can retrive properties with two different syntaxes, dot notation, or key-value lookup notation.

    myObject.property; //"value"
    myObject["property"]; //"value"

You can call a method (run the function) using dot notation.

    myObject.myMethod(); // logs > I'm a method!

###Add new items to an object

You can also add new properties and methods to your object after it has been created.

    myObject.newProp = "I'm new here";
    myObject["newProp"] = "I'm new here";
    myObject.newMethod = function (){
        //do some new things
    }

##If statements (aka "control flow")

If statements are used to make decisions with your code.

## Basic format

    if (condition to evaluate) {
        //do stuff if the condition hold true
    }

    if (3 > 1) {
        console.log("yup, three is bigger than one!");
    }

    if (5 < 2) {
        console.log("never gonna happen");
    }

logs:

    > yup, three is bigger than one!  

## Adding a catch-all (else)

You can add a fallback block of code that will execute if your condition isn't met.

    if (5 < 2){
        console.log("never gonna happen");
    } else {
        console.log("who took all the truth, you guys?")
    }

logs:

    > who took all the truth, you guys?

### Checking for multiple conditions (else if)

You can add even more conditions to test within a single if statement by using else if. You can use as many else if statements as you like, and else (catch-all) is still optional.

    
    var country = "United States";

    if (country === "canada") {
        console.log("Oh Canada!");
    } else if (country === "United States")
        console.log("'MURICA") {
    } else if (country === "Mexico"){
        console.log("Hola!");
    } else {
        console.log("hello world!")
    }

logs:

    > MURICA


#### Complex conditionals

You can use logical operators (and, or, not) to create more complex conditional statements.

**&&** and    
**||** or    
**!** not    

    var name = "Bob";
    var email = "bob@hotmail.com"
    var hairColour = "blonde"

    if (firstName === "Bob" && email === "bob@hotmail.com"){
        // this code only evaluates if BOTH conditions hold true
        console.log('identity verified');
    }

    if (name === "Bob" || name === "Robert") {
        // this code executies if any one of the conditions hold true
        console.log("Hey buddy!")
    } 

    if (hairColour !== "blonde"){
        console.log('Halt, impostor!');
    }

logs:

    >   identity verified
    >   Hey buddy!


##For Loops 

For loops can be used to repeat a set of instructions over and over again. 

###Loop using a counter

Takes the general form:

    for(start; stop; increment) {
        // do this each time
    }

In practice:

    for (var i = 1; i < 5; i++) {
        console.log("The current count of the loop is " + i);
    }

logs:

    > The current count of the loop is 1
    > The current count of the loop is 2
    > The current count of the loop is 3
    > The current count of the loop is 4


###Loop through an array 

We can use for loops to iterate over all the items within an array, by using 0 as the start position and the length of the array as the end condition.
*Remember, the item at index "n" in an array can be retrieved using array[n];*

    myAnimals = ["aligator", "monkey", "snake", "lion"];

    for(var i = 0; i < myAnimals.length; i++){
        console.log("Look at this " + myAnimals[i] + ". Just look at it.");
    }

logs:

    > Look at this aligator. Just look at it.
    > Look at this monkey. Just look at it.
    > Look at this snake. Just look at it.
    > Look at this lion. Just look at it.
 
###Loop through an object (for in)

We can use a special kind of for loop - the for in loop - to iterate over the key value pairs of an object.  When looping over obejcts, we can output both the name of the key and it's associated value. *Remeber: you can retreive the property with key, "prop" from an object using object["prop"];*

    dinnerOrder = {
        appetizer: "fried calamari",
        main: "chicken parmesean",
        dessert: "tiramisu"
    }

    for (course in dinnerOrder){
        var sentence = "Your " + course + " is " + dinnerOrder[course] + ".";
        console.log(sentence);
    }

logs:

    > The appetizer course is fried calamari.
    > The main course is chicken parmesean.
    > The dessert course is tiramisu.


 








