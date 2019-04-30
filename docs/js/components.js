
(function ($) {

  $('.drilldown').on('open.zf.drilldown', function() {
    $('.row.utility-menu').hide();
    $('.region--navigation .off-canvas').css('background-color','#10445e');
  });

  $('.drilldown').on('hide.zf.drilldown', function() {
    $('.row.utility-menu').show();
    $('.region--navigation .off-canvas').css('background-color','#206178');
  });

  $(window).on('changed.zf.mediaquery', function(event, medium, small) {
    $('.row.utility-menu').show();
    $('.region--navigation .off-canvas').css('background-color','#206178');
  });


})(jQuery);
;(function ($) {


  $(".search-box-mobile .search").on("click", function(e) {
      $("#mobile-search-form").toggleClass("is-hidden");
      e.stopPropagation();
    });

    $("#mobile-search-form").on("click", function(e) {
      e.stopPropagation();
    });

    $(document).on("click", function(e) {
      if ($(e.target).is(".search-box-mobile .search") === false) {
        $("#mobile-search-form").addClass("is-hidden");
      }
    });

})(jQuery);
;(function ($) {

// Open Card Reveal Click
$('.c-card--reveal').hover(function(){
  $(this).find('.c-card__overlay').toggleClass('hover');
});

})(jQuery);
;/**
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



;
(function ($) {

  $('#search-block-form a').click(function() {
      $('#search-block-form').toggleClass('expanded');
      // if the search field is expanded, focus on it
      if ($('#search-block-form').hasClass('expanded')) {
        $('.field-wrapper .form-search').focus();
      }
    });

})(jQuery);
