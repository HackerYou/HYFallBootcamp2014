---
layout: notes
title: HTML5 Semantic Elements
topic: html
---

#Semantic Elements

Before HTML5 was in the picture, HTML elements could be defined with a Div with an ID or a class to be used to styling it. This can lead to confusion on a page as it will be difficult to tell what element does what in the code. Semantics are used to define exactly what role the content plays on a website.

##What we've learned

###Structural Elements

**Div** - A generic container with special meaning

**Form** - A container that holds form elements on a page

**Table** - Contains tabular data

* **tbody** - A block of rows that contains the data of a table
* **thead** - A block of rows that represent the labels of a table
* **tfoot** - A block of rows that represent the summaries or totals of a table
* **tr** - A row of cells in a table. The horizontal row of a table
* **td** - A data cell of a table. Contained in a row

**Img** - Defines an image on a page. Requires a source path to an image.

###Typography Elements
Typography Elements include

**Header Typography** -
Used for titles and emphasis

    <h1>Title 1</h1>
    <h2>Title 2</h2>
    <h3>Title 3</h3>
    <h4>Title 4</h4>
    <h5>Title 5</h5>
    <h6>Title 6</h6>


**Paragraph**

    <p>content goes here</p>

**Links**

    <a href="link path goes here">Link Text</a>

**Lists**

* List Element - li

    `<li>List Element</li>`

* Unordered List - ul
  * Element 1
  * Element 2
  * Element 3

        <ul>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </ul>`

* Ordered List - ol
  1. Element 1
  2. Element 2
  3. Element 3

          <ol>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
          </ol>

###HTML5 Elements
HTML5 introduced new elements that were descriptive as to what part of the page they represented. Instead of using __div class="header"__, you can use __header__ along with a class for specific styling.

###New HTML5 Elements include
**Header** - Defines the header of a page or a section. Contains the title of a page or a section.

    <header>
      <h1>Page Title!</h1>
    </header>

**Footer** - Defines the footer of a page or a section

    <footer>
      <p>Copyright 2014</p>
    </footer>

**Nav** - Defines a section that contains only Navigation elements

    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="page.html">Page</a></li>
      </ul>
    </nav>

**Section** - Defines a section in a document. Use an ID or a class to add styling and specificity.

    <section class="post">
      <p>Content Goes Here</p>
    </section>

**Article** - Defines an individual section of content. Typically used for a post in a blog or a collection of content.

    <article>
      <p>Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>
    </article>

**Aside** - Defines a section of content that is secondary to the main content. Often used as a sidebar.

    <aside>
      <p>Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>
    </aside>


##Exercise: Using Semantic Elements

Working with Semantic Elements is easy, download the <a href="exercises/semanticelements/semanticelements.zip" class="exercise">**semanticselements.zip**</a> folder and work to convert the divs to semantic elements.