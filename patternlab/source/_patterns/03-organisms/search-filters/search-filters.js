/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($) {

  /**
   * Opens search filters modal.
   */
    // Open search filters.
    $('#filter-button').click(function() {
      $('#filters-modal').toggleClass('closed');
    });
    // Modal close button.
    $('#filters-modal .close-button').click(function() {
      $('#filters-modal').toggleClass('closed');
    });


})(jQuery);



