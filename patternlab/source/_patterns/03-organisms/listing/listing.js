(function ($) {
  
  $(".media-object").click(function() {
    window.location = $(this).find("h3 a").attr("href"); 
    return false;
  });

})(jQuery);
