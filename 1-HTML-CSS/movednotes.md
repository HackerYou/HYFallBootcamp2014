#Best Practices

## Review

1. We write ____ to create our website content structure.
  * <span class="hide">HTML</span>
1. We use **HTML** purely for __________ our content.
  * <span class="hide">describing</span>
1. We can mark up our content by surrounding it in <span class="hide">**tags**</span> that make up <span class="hide">**html elements**</span>
1. We use `<h1>` to `<h6>` tags for headings, `<p></p>` for paragraphs as well as many others which you will now tell me what they do: 
  1. `<strong></strong>`
  1. `<em></em>`
  1. `<img src="" alt="">`
  1. What are the two types of image paths? <span class="hide">absolute and relative</span>
1. We use  the `<span></span>` tags to wrap inline elements and target them with CSS.
1. We use `<div></div>` tags to group and organize elements on a page as well as target with styling later on
1. What is the difference between spans and divs?
  * <span class="hide">divs are block, spans are inline. We generally use divs to group elements together, and spans to target single words</span>
1. We use attributes such as **alt, src and title** to provide additional data to the HTML tag. What do these do?
1. We use the **class** and **id** attribute to name our elements and to make them selectable with CSS
  1. What is the difference between a class and an id?
    * <span class="hide">ids can only be used once</span>
  1. Can an element have multiple classes and ids?
    * <span class="hide">Yes multiple classes, no only a single id</span>
  1. What can I name my classes and ids?
    * <span class="hide">Anything!</span>   
  1. What is camelcasing?
    * <span class="hide">itsWhenYouWriteLikeThis. First letter of every word is capitalized except the very first word.</span>
1. We use **CSS** to style the look and feel of our website
1. We select elements from **html document** with CSS Selectors and then write **CSS Rules** to apply styles to them.
1. CSS rules have a definition made up of 1 or many property and values
  1. A selector can target all elements but just typing the element name:  
    ![](http://wes.io/J3WP/diagrams.png)
  1. We use **dots** to select elements with class names  
    `.bigTitles { font-size: 100px; }`
  1. We use **hashes** to select elements with id names  
    `#nav { width: 100% }`
  1. Why do we recommend not using ids? 
    * <span class="hide">They can only be used once!</span>
  1. How would I select a span with the class or warning?