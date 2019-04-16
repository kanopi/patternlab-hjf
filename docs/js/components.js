
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLW5hdmlnYXRpb24vMDEtbWFpbi9tYWluLmpzIiwiY2FyZC9jYXJkLmpzIiwiMDEtaGVhZGVyLXJlZ2lvbi9oZWFkZXItcmVnaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24gKCQpIHtcblxuICAkKCcuZHJpbGxkb3duJykub24oJ29wZW4uemYuZHJpbGxkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnJvdy51dGlsaXR5LW1lbnUnKS5oaWRlKCk7XG4gICAgJCgnLnJlZ2lvbi0tbmF2aWdhdGlvbiAub2ZmLWNhbnZhcycpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsJyMxMDQ0NWUnKTtcbiAgfSk7XG5cbiAgJCgnLmRyaWxsZG93bicpLm9uKCdoaWRlLnpmLmRyaWxsZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5yb3cudXRpbGl0eS1tZW51Jykuc2hvdygpO1xuICAgICQoJy5yZWdpb24tLW5hdmlnYXRpb24gLm9mZi1jYW52YXMnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCcjMjA2MTc4Jyk7XG4gIH0pO1xuXG4gICQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgZnVuY3Rpb24oZXZlbnQsIG1lZGl1bSwgc21hbGwpIHtcbiAgICAkKCcucm93LnV0aWxpdHktbWVudScpLnNob3coKTtcbiAgICAkKCcucmVnaW9uLS1uYXZpZ2F0aW9uIC5vZmYtY2FudmFzJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywnIzIwNjE3OCcpO1xuICB9KTtcblxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbi8vIE9wZW4gQ2FyZCBSZXZlYWwgQ2xpY2tcbiQoJy5jLWNhcmQtLXJldmVhbCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICQodGhpcykuZmluZCgnLmMtY2FyZF9fb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdob3ZlcicpO1xufSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJcbihmdW5jdGlvbiAoJCkge1xuXG4gICQoJyNzZWFyY2gtYmxvY2stZm9ybSBhJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCcjc2VhcmNoLWJsb2NrLWZvcm0nKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcbiAgICAgIC8vIGlmIHRoZSBzZWFyY2ggZmllbGQgaXMgZXhwYW5kZWQsIGZvY3VzIG9uIGl0XG4gICAgICBpZiAoJCgnI3NlYXJjaC1ibG9jay1mb3JtJykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgJCgnLmZpZWxkLXdyYXBwZXIgLmZvcm0tc2VhcmNoJykuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiJdfQ==
