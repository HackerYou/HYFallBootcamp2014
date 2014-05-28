                  <div id="sidebar">
                    <!-- Sidebar -->
                    <?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>
                      <?php dynamic_sidebar( 'sidebar1' ); ?>
                    <?php else : ?>
                      <div>No widgets have been activated</div>
                    <?php endif; ?>
                  </div>