<!DOCTYPE HTML>
<!--
  ZeroFour 2.5 by HTML5 UP
  html5up.net | @n33co
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
  <head>
    <title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <?php wp_head(); ?>
  </head>
  <body class="right-sidebar">

    <!-- Header Wrapper -->
      <div id="header-wrapper">
        <div class="container">
          <div class="row">
            <div class="12u">

              <!-- Header -->
                <header id="header">
                  <div class="inner">

                    <!-- Logo -->
                      <h1><a href="<?php echo home_url(); ?>" id="logo"><?php bloginfo('name'); ?></a></h1>

                    <!-- Nav -->
                    <?php wp_nav_menu( array('theme_location' => 'primary', 'container' => 'nav', 'container_id' => 'nav') ); ?>

                  </div>
                </header>

            </div>
          </div>
        </div>
      </div>
