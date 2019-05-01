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

  /**
   * Adds counter and highlighting to Filter button.
   */
  $(function () {
    $('#filter-button .counter').text(' ');
    var len = $(".checkboxes-wrapper input[type='checkbox']:checked").length;
    if (len > 0) {
      $("#filter-button .counter").text('(' + len + ')');
    } else {
      $("#filter-button .counter").text(' ');
    }
  })

  function updateCounter() {
    var len = $(".checkboxes-wrapper input[type='checkbox']:checked").length;
    if (len > 0) {
      $("#filter-button .counter").text(' (' + len + ') ');
    } else {
      $("#filter-button .counter").text(' ');
    }
  }

  $(".checkboxes-wrapper input:checkbox").on("change", function () {
    updateCounter();
    // Highlighting Filter button when there are filters selected.
    var len = $(".checkboxes-wrapper input[type='checkbox']:checked").length;
    if ($(this).parents('.search-wrapper').find("#filter-button").hasClass('unfiltered') && len > 0) {
      $("#filter-button").removeClass('unfiltered').addClass('filtered');
    }
    // Un-highlighting Filter button when there are no filters selected.
    if (len == 0) {
      $("#filter-button").addClass('unfiltered').removeClass('filtered');
    }
  });
  // On load check if there are filters enabled and highlight Filter button.
  var len = $(".checkboxes-wrapper input[type='checkbox']:checked").length;
  if (len > 0) {
    $("#filter-button").removeClass('unfiltered').addClass('filtered');
  }


})(jQuery);



