
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
