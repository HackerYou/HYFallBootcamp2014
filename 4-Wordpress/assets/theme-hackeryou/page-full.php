<?php

/*
	Template Name: Full Page, No Sidebar
*/ 

get_header();  ?>

<div class="section">
  <div class="innerWrapper">
    <div class="full">
      <?php // Start the loop ?>
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

        <h2><?php the_title(); ?></h2>
        <?php the_content(); ?>

      <?php endwhile; // end the loop?>
    </div>
  </div> <!-- /.innerWrapper -->
</div> <!-- /.section -->
<?php get_footer(); ?>