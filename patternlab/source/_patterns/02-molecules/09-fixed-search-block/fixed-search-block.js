(function ($) {


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
