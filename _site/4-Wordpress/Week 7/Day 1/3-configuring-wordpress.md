## Jargon
**Codex** - The WordPress documentation. Very helpful when you require a reference or assistance with a certain part of WordPress. http://codex.wordpress.org/

**Permalinks** - Human readable URL. When turned on, WordPress changes the url structure from something like MySite.com/?p=54 to MySite.com/contact-me

**Theme** - The collection of files that we use to lay out and style our WordPress website. WordPress allows you to easily change and modify themes without losing any of your posts or pages.

**Template** - A specific file within our theme that lays out either an entire page or part of a page. For example, page.php is the template within our theme that lays out the structure for all of our pages

## Populating WordPress

We need some content to work with. Go ahead and create:

* At least 7 posts, each with a 2-3 categories and tags
* 4 pages: Home, About, Blog and Contact

## Configuring WordPress

To get setup with WordPress, we need to set a number of config options. Let's walk through them Now.

### 1. Setup your home page
Go to `Settings` → `Reading` in the sidebar of your WordPress backend.

First, we want to setup a custom home page, and then put our blog on another page. 

1. Select the `A static page (select below)` radio button
2. Set front page to be `home`
3. Set posts page to be `Blog`
4. Set the number of posts per page to 5
5. Click "Save Changes"

![](http://wes.io/UF4v/content)


### 2. Permalinks

Permalinks turn our urls from something like `mysite.com?p=10` to `mysite.com/about-me`

Head on over to `settings` → `permalinks` and select `Post Name`:

![](http://wes.io/UFGc/content)

Save Changes. 
