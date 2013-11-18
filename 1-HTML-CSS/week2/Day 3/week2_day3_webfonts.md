# Week 2, Day 3

## Web Fonts (or Using Custom Fonts)

**What happens when we want to use a font that isn't installed on someones computer?**

Previously we were held back to using font stacks that were 'websafe', which means a good percentage of users would have at least one of them installed. This was a bummer because we had a list of fonts about 10 long, all of which were fairly boring. When we wanted to use nice fonts, we would have to save the graphic in photoshop and export it as an image.

No longer! In the past few years CSS3 has allowed us to use something called **web fonts** which lets up embed a file that magically makes custom fonts available.

There are various ways to embed **web fonts** including the paid [typekit](http://typekit.com), but we will be using the super easy and free option of [Google Web Fonts](http://www.google.com/webfonts)

### Embedding a custom web font
Doing so is fairly easy:

1. simply head on over to [Google Web Fonts](http://www.google.com/webfonts) and track down a font you like
1. Click the "arrow in a box" icon ![](http://wes.io/OTGu/content) for **quick use** <br>
1. Choose the weights that you wish to use
	* ![](http://wes.io/OUDA/content)
	* Note that the more fonts and the more weights you add to a page, the slower your page will load. As rule of thumb, try not to include more that 3-4 fonts/weights in production code.
1. Some fonts have extended charter sets available if your website will be in a language such as Russian or Vietnamese.
	* ![](http://wes.io/OTDK/content)
1. In the next step, click the "standard tab" if it isn't already selected and copy the code provided.
	* ![](http://wes.io/OTpq/content)
6. Paste that line of code into the `<head>` of your document
7. You can now use the value of the font name in your `font-family` stack, just as you would any other font. Google will recommend a good font-stack for you to use.
	* ![](http://wes.io/OUEr/content)
	* You may want to apply it to all text on the body:
		* `body { font-family: 'Open Sans', sans-serif; }`
	* Or just your headers:
		* `h1,h2,h3,h4,h5,h6 { font-family: 'Open Sans', sans-serif; }`


### Trying it yourself

Go ahead and pick a few fonts that you like from Google Web Fonts and embed them into `web-fonts.html` in place of the ones I already have there. Feel free to write new selectors to change the h2 and h3 headings as well!

![](http://wes.io/JOcr/Screen%20Shot%202012-09-12%20at%2010.47.08%20AM.png)

## Taking typography to its limits with CSS3

Okay, now that you have a good grasp on the basics, we are going to take a look at some of the fun CSS3 techniques that we can use to make our web typography look its best.

### text-shadow

Text shadow allows us to apply, you guess it, a shadow to text! This effect can definitely be abused and bring back horrible memories of Word Art, but with the right colours and techniques you can use it to look really great!

Text shadow takes 4 value - horizontal offset, vertical offset, blur, and colour. It can also take multiple common separated values so you can add as many shadows to your text as you wish!

![](http://wes.io/JPZK/Screen%20Shot%202012-09-12%20at%201.26.36%20PM.png)

Lets take a look at some different example in `text-shadow.html`


### box-shadow
Similar to text-shadow, we also have box-shadow available to us which allows for adding shadow to the box around text as well as all other elements (such as divs, elements).

Take a look at `box-shadow.html` for two examples on how to use box shadow - you'll notice its exactly the same syntax as text-shadow.


**For some great examples of taking pure text to the next level, take a look at the examples at [http://tympanus.net/Tutorials/TypographyStyles/index4.html](http://tympanus.net/Tutorials/TypographyStyles/index4.html)**

![](http://wes.io/JPhe/Screen%20Shot%202012-09-12%20at%201.20.12%20PM.png)
