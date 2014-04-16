---
layout: notes
title: Embeddable Media
topic: html
---

#Embeddable Media

## Working with embeddable media
Its quite common to embed some sort of (social) media into your website - it can take your website to the next level without having to code any of our own server-side languages or JavaScript.

Most social networking sites have something called an **API** or **Application Programming Interface** that allows you to access their site's info (tweets, likes, usernames, pictures...) programatically. Lets go through a few of the popular sites and learn how to embed.

### Twitter
There are two different kinds of embedding we can do with twitter: **widgets** and **buttons** 

### Tweet Buttons
Similar to the widget, we can have tweet buttons on our site. You don't need to sign in for this one, so go on over to [https://twitter.com/about/resources/buttons](https://twitter.com/about/resources/buttons)

You can choose any type of button that you like - tweet, follow, hashtag or mention.

There are a few options here. We can set the share URL if we want the URL to be shared to be another page than we want to embed it on. So if we want to share "MyWebsite.com" when we are on "MyWebsite.com/about.html" we would set it here. Otherwise let it go automatically.

I recommend filling out the Text tweet to something like "Check out my @thisishackeryou site".

The Via is a way to give props to the site you got it from. So globe and mail might set their twitter shares to VIA @globeandmail

The **recommended** is kind of a neat way to get more followers. When one is finished tweeting a link from your website, it can suggest people to follow.

The Hash tag is pretty straightforward.

Additionally you can set a large button and opt out of tailoring.

Finally we are done and get a chunk of code that looks like this:

	<a href="https://twitter.com/share" class="twitter-share-button" data-via="wesbos">Tweet</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

There are two parts here and as a best practice, we are going to separate them. The reason we do this is because sometimes we might want multiple tweet buttons on a page. For example a blog might have 10 posts on a page, each with a tweet button.

From your experience in HTML, you can probably pick out which line is the HTML link. **Put this line where you want the tweet button to appear**

The other line is the javascript that turns your normal link into a tweet button. **Put this line in your head, below your stylesheet links**. This will make sure that we only load the JavaScript once, regardless of how many buttons we have on our page.


#### Widgets
A twitter widget allows you to embed your tweet stream into your webpage. To get started, simply log into twitter and visit [https://twitter.com/settings/widgets](https://twitter.com/settings/widgets) and click 'create new'.

Fill out the settings based on what you require. The tricky part / downside here is that you have to specify the domain name that you will be running it on. If you don't know the URL right now, then you'll have to go back and edit your widget once completed.

Note: Because JavaScript needs to run in a server environment, and not just by viewing  plain `.html` files, we won't be able to see the widget when working locally. There are local servers that you can get running. If you are interested in getting this working, there is a great plugin for sublime called `SimpleServer` that will let you do this.

Once you have completed it, you'll have two lines of code that look something like this:

	<a class="twitter-timeline" href="https://twitter.com/wesbos" data-widget-id="262938723455483904">Tweets by @wesbos</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

Paste this wherever you wish to have your twitter box and you are off to the races. **Note that if you already have a twitter button, you dont need the second line**. The Javascript will already be embedded into your page and you will simply just need the first HTML line!

Since twitter uses an element called an `<iframe>`. An iframe is basically a way of framing other websites into your own website. You are able to see all that websites content, but we don't have access to it via CSS. 


### Facebook

Facebook is very similar to twitter in process. There is a little snippet of JavaScript that we add to our page as well as some HTML to embed the widget/like button.

Head on over to [http://developers.facebook.com/docs/reference/plugins/like/](http://developers.facebook.com/docs/reference/plugins/like/) and fill out the required information.

If you put a website in the **Page URL field** then it will create a like button, but if you put a link to a facebook page/group, it will automatically change to a feed box.

![](http://wes.io/KV5O/Screen%20Shot%202012-10-29%20at%2012.04.11%20PM.png)

When done, click "Get Code" and a popup will show.

![](http://wes.io/KUK1/Screen%20Shot%202012-10-29%20at%2012.01.04%20PM.png)

The first part is the JavaScript. Facebook suggests we put this right after the opening `<body>` tag so go ahead and do that.

Then you can put the second snippet of HTML wherever you wish to have the like button.

### Youtube
Whew, those last two were tough. Lets do something a lot easier.

To embed a youtube video, simply visit any youtube video URL and click the **share** button under the player.

![](http://wes.io/KUXr/Screen%20Shot%202012-10-29%20at%2012.07.01%20PM.png)

That will open up a pane with a few features, click the **embed** button and it will spit out a chunk of code.

There are a few options you can use here, but otherwise go ahead and paste that code anywhere into your HTML document.

	<iframe width="560" height="315" src="http://www.youtube.com/embed/Uc4NvjzdHZ8" frameborder="0" allowfullscreen></iframe>

Makes:

<iframe width="560" height="315" src="http://www.youtube.com/embed/Uc4NvjzdHZ8" frameborder="0" allowfullscreen></iframe>

**Potential Gotcha!** YouTube and other embeds will often give you a url like `//wwww.youtube.com/`, without the `http:` part. What gives, YouTube??  This is so your browswer can use either http: or https:, depending on whether or not a secure connection is available. The downside is that these `//` urls won't work locally, so you'll have to add the `http:` in yourself in that case.
 
If you are a keener, you'll figure out that you just need to swap the youtube video ID out each time you want to embed a video.

### Vimeo

Vimeo is almost exactly the same except there are a few more options allowed.

Vimeo videos all have a distinct url that consists of their video ID. If you are watching a video on vimeo you'll see that the url looks something like this: `http://vimeo.com/42358247`

`42358247` is the video ID.

To emebed a video, we use the HTML code

	<iframe src="http://player.vimeo.com/video/VIDEO_ID" width="WIDTH" height="HEIGHT" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

<iframe src="http://player.vimeo.com/video/42358247" width="500" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

Replace VIDEO_ID with the video id and with WIDTH and HEIGHT accordingly.

There are also a number of additional paramters that we can specify. View [http://developer.vimeo.com/player/embedding](http://developer.vimeo.com/player/embedding) for all the documentation.

To add a paramater, simply append `?` onto the end of the URL and then specify the params and value. Here is an example to take the title off the embedded video

	<iframe src="http://player.vimeo.com/video/42358247?title=0" width="500" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

For multiple parameters add an ampersand in between each one

	<iframe src="http://player.vimeo.com/video/42358247?title=0&autoplay=1" width="500" height="300" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

<table class="params">
            <tbody>
                <tr>
                    <td class="param">title</td>
                    <td>Show the title on the video. Defaults to <code>1</code>.</td>
                </tr>
                <tr>
                    <td class="param">byline</td>
                    <td>Show the user’s byline on the video. Defaults to <code>1</code>.</td>
                </tr>
                <tr>
                    <td class="param">portrait</td>
                    <td>Show the user’s portrait on the video. Defaults to <code>1</code>.</td>
                </tr>
                <tr>
                    <td class="param">color</td>
                    <td>Specify the color of the video controls. Defaults to <code>00adef</code>. Make sure that you don’t include the #.</td>
                </tr>
                <tr>
                    <td class="param">autoplay</td>
                    <td>Play the video automatically on load. Defaults to <code>0</code>. Note that this won’t work on some devices.</td>
                </tr>
                <tr>
                    <td class="param">loop</td>
                    <td>Play the video again when it reaches the end. Defaults to <code>0</code>.</td>
                </tr>
                <tr>
                    <td class="param">api</td>
                    <td>Set to <code>1</code> to enable the <a href="/player/js-api">Javascript API</a>.</td>
                </tr>
                <tr>
                    <td class="param">player_id</td>
                    <td>An unique id for the player that will be passed back with all Javascript API responses.</td>
                </tr>
            </tbody>
        </table>


### Have fun embedding!

Almost all sharing buttons are the same, feel free to embed other sites - weather network, pinterest, soundcloud, bandcamp etc..
