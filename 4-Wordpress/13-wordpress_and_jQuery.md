---
layout: notes
topic: wp
title: jQuery with Wordpress
---

# jQuery with Wordpress

Wordpress themes are at the end of the day going to resolve to just HTML and CSS so we can easily add jQuery to the mix. In fact jQuery is automatically loaded by Wordpress.

Unfortunately Wordpress includes a local copy of jQuery into the head of the page. We would rather use jQuery from a CDN and include it at the end of our page.

The snippet here will help with that:
http://css-tricks.com/snippets/wordpress/include-jquery-in-wordpress-theme/

The only change we need to make to the snippet is adding an extra argument to `wp_register_script` with the value `true` so that jQuery loads in the footer instead.

The snippet to be added to functions.php looks like this:

```
add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);

function my_jquery_enqueue() {
   wp_deregister_script('jquery');
   wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js", false, null, true);
   wp_enqueue_script('jquery');
}
```

Now we can write jQuery and use jQuery plugins to add interesting interactions to our Wordpress website.

**Exercise**:

Use jQuery plugins or pure jQuery to add interesting effects to your Wordpress theme.