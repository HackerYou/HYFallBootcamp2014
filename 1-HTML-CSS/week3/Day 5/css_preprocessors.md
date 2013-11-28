# CSS preprocessors

Sass (Syntactically Awesome Style Sheets) and LESS (The dynamic stylesheet language) extend CSS with superpowers! The general idea is that instead of writing CSS you write Sass or LESS and a "compiler" converts what you write to CSS. So why bother using this stuff?

1. **Variables**: Specify values in one place and reuse them throughout the stylesheet. This allows you change a font-size or colour in one place and have the change take effect in multiple places.
2. **Nested Rules**: You can nest selectors instead of using long selector names. This keeps your stylesheet organized and saves some space.
3. **Partials**: You can break your CSS into organized chunks and they will be stitched together for you. This keeps the CSS organized and more maintainable. 
4. **And more**...

## A taste of Sass

To get started, go through the [guide](http://sass-lang.com/guide) and use the [Sassmeister tool](http://sassmeister.com/) to play around with the Sass syntax.

## Sass for real

We recommend using Sass with the [Prepros app](http://alphapixels.com/prepros/), which is available for both Windows and Mac.

Take one of your existing CSS stylesheets and turn it into a Sass file.

* replace duplicate values with variables
* use nesting to simplify your CSS
* use partials to better organize your CSS

## Going forward

It's relatively easy to get started with Sass because you can use as little or as many of the features as you want. You don't have to use all of the features right away (or ever?). The more you work with it the more comfortable you get.

Here are some topics worth exploring:

* How to structure a Sass project: http://thesassway.com/beginner/how-to-structure-a-sass-project
* Compass Framework: http://compass-style.org/
* Bourbon Mixin Library: http://bourbon.io/
* Neat - Grid Framework: http://neat.bourbon.io/
* Susy - Grid Framework: http://susy.oddbird.net/