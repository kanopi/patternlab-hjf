
(function ($) {

  $('#search-block-form a').click(function() {
      $('#search-block-form').toggleClass('expanded');
      // if the search field is expanded, focus on it
      if ($('#search-block-form').hasClass('expanded')) {
        $('.field-wrapper .form-search').focus();
      }
    });

})(jQuery);
