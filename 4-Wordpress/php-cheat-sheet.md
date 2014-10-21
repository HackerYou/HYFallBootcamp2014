---
layout: default
title: PHP cheat sheet
---

#PHP Terminology and Syntax Cheat Sheet

When writing PHP code, it requires and opening and closing tag (similar to `<script>` for JavaScript and `<style>` for CSS). Anything outside of the opening and closing tags will be ignored by the PHP parser.

    <?php 
        //PHP code here 
    ?>

If you mix PHP with other languages (like HTML), an opening and closing tag is required for each PHP code block that is separated by non-PHP code.

    <p>This is just HTML and will be ignored by PHP.</p>
    <?php //PHP code here ?>
    <p>More HTML. Ignored by PHP.</p>


##Comments

    <?php
        // This is a one-line style comment.
        # This is also a one-line style comment.
        
        /* 
            This is a 
            multi line 
            comment. 
        */  
    ?>

##Variables

Declare a variable in PHP using the `$` symbol. Naming convention for variables can be camel case or underscores. **Wordpress uses underscores**.
	
	$greeting = "Hello!";


##Arrays

In PHP, declare an array using `array()`.

    $cheese = array('Gouda','Provolone','Swiss'); // PHP

Array with a key/value pair:

    $array = array(
        "key" => "value",
        "key" => "another value"
    );


##echo
`echo` can be used to output content to the page.

Output a string:

    <?php
        echo "Hello World";
        echo "Escape characters \"like this\".";
    ?>

Output a variable:

    <?php       
        $myVariable = "hello";
        echo $myVariable; // prints "hello"
        
        // Using single quotes will print the VARIABLE NAME, not the value
        echo '$myVariable;' // prints "$myVariable"
    ?>
	

##Functions	

Functions in PHP are similar to JavaScript but you may see them written in camelCase or underscores. **Wordpress uses underscores**.
	
    <?php 
        // declaring a function
        function my_function($parameter){
            //code to execute
        }
        
        echo my_function();     
    ?>


##if/else Statements
Note that in PHP, the syntax is **`elseif`**. (Not `if else` like in JavaScript).

    if ( condition ) {
        //code to execute
    } elseif ( condition2 ) {
        //code to execute;
    } else {
        //code to execute
    }

Alternative syntax:

```
<?php if ($a == 5): ?>
    A is equal to 5
<?php endif; ?>
```

```
<?php
    if ($a == 5):
        echo "a equals 5";
    elseif ($a == 6):
        echo "a equals 6";
    else:
        echo "a is neither 5 nor 6";
    endif;
?>
```

##Wordpress Cheat Sheet and Coding Standards
Wordpress PHP coding standards:
[http://make.wordpress.org/core/handbook/coding-standards/php/](http://make.wordpress.org/core/handbook/coding-standards/php/)

Wordpress cheatsheet: [http://wp-cheatsheet.com/](http://wp-cheatsheet.com/)