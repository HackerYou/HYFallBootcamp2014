<?php

function my_scripts_method() {
  wp_enqueue_script(
    'dropotron', //handle
    get_stylesheet_directory_uri() . '/js/jquery.dropotron.min.js', //source
    array( 'jquery' ), //dependencies
    null, // version number
    true //load in footer
  );

  wp_enqueue_script(
    'config', //handle
    get_stylesheet_directory_uri() . '/js/config.js', //source
    array( 'dropotron' ), //dependencies
    null, // version number
    true //load in footer
  );
}

add_action( 'wp_enqueue_scripts', 'my_scripts_method' );
register_nav_menu( 'primary', 'Primary Menu' );

function my_sidebars_method() {
  register_sidebar(array(
          'id' => 'sidebar1',
          'name' => 'Sidebar 1',
          'description' => 'The first (primary) sidebar.',
          'before_widget' => '<section>',
          'after_widget' => '</section>',
          'before_title' => '<header class="major"><h2>',
          'after_title' => '</h2></header>',
  ));
}

add_action( 'widgets_init', 'my_sidebars_method' );
?>