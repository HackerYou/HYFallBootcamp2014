---
layout: notes
title: Cross-Browser Testing
topic: tools
---

# Cross Browser Testing
Testing your code across multiple browsers can be a pain, but its crucial do do if you want to maintain a good experience for all users.

There are five main browsers:

1. Chrome
1. Firefox
1. Safari
1. Internet Explorer
1. Opera


Chrome has a rapid release schedule and it automatically updates, so you usually only have to support the latest version.

Firefox recently switched to a similar schedule, so supporting the latest version is 100% okay.

Safari is pretty aggressive about updating as well, most support the latest two versions of Safari. 

Opera has recently abandoned their browser engine and adopted Chromium / Blink, which is the engine behind Chrome. So, testing for Chrome is essentially testing for Opera.

Internet Explorer is the pain in every developer's ass. There are currently versions 6,7,8,9,10, and 11 in use. Most IE users are stuck on IE at a corporate job and cannot upgrade. While the future of IE looks very good and fast, at the moment we are stuck supporting buggy versions of IE.

Right now, most developers still support IE8, which is considered the last of the buggy browsers to support. 

If you're catering to a modern audience, you may be okay supporting IE9 and above. When in doubt, look at analytics data on what browsers site visitors are actually using.

### Testing Internet Explorer

#### IE Tester
IE tester for Internet Explorer: [http://www.my-debugbar.com/wiki/IETester/HomePage](http://www.my-debugbar.com/wiki/IETester/HomePage) - lets you open IE in every version. I recommend supporting IE 8,9 and 10 at the moment although I encourage you to view alanytics of existing sites to see if IE8 support is nessecary. 

#### Virtual Box + Modern.ie
Regardless of PC/MAC/Linux, you can run a copy of windows right inside of your operating system. Microsoft knows the pain of testing on multiple versions of IE, so they have provided images of windows with different versions of IE loaded onto them. You can download them at [http://www.modern.ie/en-us/virtualization-tools](http://www.modern.ie/en-us/virtualization-tools). These are huge downloads, so plan to do so on a stable internet connection.

To run them, you need a free program called Virtual Box — [https://www.virtualbox.org/](https://www.virtualbox.org/).

You can download a copy of windows specially made for testing IE on <http://modern.ie>

### Testing Firefox, Chrome & Opera
For Google Chrome you don't need to worry about old versions - it auto updates. It is always wise to check your website on both a PC and Mac version of both. 

### Testing Safari
For Safari you generally don't need to worry either, but in some edge cases I use this: [http://michelf.ca/projects/multi-safari/](http://michelf.ca/projects/multi-safari/)

### Other Testing
Here are a few tools you can use to help test:

[http://www.smashingmagazine.com/2011/08/07/a-dozen-cross-browser-testing-tools/](http://www.smashingmagazine.com/2011/08/07/a-dozen-cross-browser-testing-tools/)

* [Browser Stack](http://www.browserstack.com/) Provides live testing across mulitple browsers and mobile devices.
* [Sauce Labs](https://saucelabs.com/) also provides a similar service
* [Browser Shots](http://browsershots.org/) Gives you screenshots in many different types of browsers
* [Litmus](https://litmus.com/) provides testing in every type of email program you can imagine. Testing email is extremely difficult and this tool is invaluable. If you are coding an email for someone, make sure to bake a few months of Litmus into the price ($80/month). 
	* Paid MailChimp accounts also have litmus integration. It is slower (~10 mins for each test VS 2 mins) but cheaper ($20/month). 

* [MultiFirefox](http://davemartorana.com/multifirefox/) Allows you to run various version of Firefox simultaneously.
* [DebugBar](http://www.my-debugbar.com/)


### Mobile Testing
All tools aside, I prefer just to test on actual hardware. I try and keep at least one device with every major version of the mobile operating system on it. If you are on your own, this can get expensive as phones aren't cheap. 

Many cities have Device Labs where you can go and test your website on every single device. 

HackerYou is starting a device lab that will be up and running very soon!

[http://devicelab.fi/](http://devicelab.fi/)


### Mobile Testing with Localhost

Some test cases require you to use the physical device for testing. You can do cross browser testing via localhost without pushing to a live sandbox site. A good article describing the process on how to utilize localhost testing on devices using your local IP can be found at the following link:

[http://support.apple.com/kb/ts5329](http://support.apple.com/kb/ts5329)


### Remote Debugging

If you do find bugs specific to mobile devices, you can use remote debugging to inspect and debug your page from your computer. 

You can remote debug Chrome for Android using the phone's USB cable and desktop Chrome and (OSX and Windows). <https://developer.chrome.com/devtools/docs/remote-debugging>

Similarly, you can remote debug iOS Safari using the iPhone/iPad USB cable and desktop Safari (OSX only). <http://moduscreate.com/enable-remote-web-inspector-in-ios-6/>

### Writing cross-browser code with Modernizr

If you want to use the new and shiny HTML5 & CSS3 features but still support older browsers, Modernizr (<http://modernizr.com/>) can help write cross-browser compatible code.

Modernizr tests to see which features are supported and then classes the HTML element with the test results.

Chrome 38 gets the following classes. We can see things like `flexbox` and `rgba` are supported.

![](https://i.cloudup.com/I7tMBL9wHU.png)

Compare this with IE9. `rgba` is supported but `flexbox` is not.

![](http://cl.ly/image/4123102x2l0C/ie8-modernizr.png)

Say we found a browser where box-shadow isn't supported.  We can use Modernizr's `.no-boxshadow` class to provide an alternate style.

    .widget {
        background: #fff;
        padding: 10px;
        /* this shadow won't show up in really old browsers*/
        box-shadow: 1px 1px 5px #aaa; 
    }

    .no-boxshadow .widget {
        /* give it a border in old browsers */
        border: solid 1px #ddd;
    }

![](https://i.cloudup.com/uJyJEkiH2A.png)
