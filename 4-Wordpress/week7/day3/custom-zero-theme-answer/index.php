<?php get_header(); ?>

    <!-- Main Wrapper -->
      <div id="main-wrapper">
        <div class="main-wrapper-style2">
          <div class="inner">
            <div class="container">
              <div class="row">
                <div class="8u">
                  <div id="content skel-cell-important">

                    <!-- Content -->

                    <?php if ( have_posts() ) : ?>

                      <?php while ( have_posts() ) : the_post(); ?>
                        <article>
                          <header class="major">
                            <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                          </header>

                          <?php the_content(); ?>
                        </article>
                      <?php endwhile; ?>

                    <?php else : ?>
                      <!-- nothing found! -->
                    <?php endif; ?>

                  </div>
                </div>
                <div class="4u">
                  <?php get_sidebar(); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
<?php get_footer(); ?>