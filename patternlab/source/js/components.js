
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
