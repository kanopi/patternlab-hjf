
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

// Open Card Reveal Click
$('.c-card--reveal').hover(function(){
  $(this).find('.c-card__overlay').toggleClass('hover');
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
