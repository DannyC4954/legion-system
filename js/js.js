$(document).ready(function(){

    // Drop down search
    $('#show-search-bar').on('click', function(){
        $('.search-container').slideToggle("slow");
        $( "#search-focus" ).focus();
    });

    // Responsive menu
    var count = 0;
    $('.hamburger').on('click', function(){
      console.log('Click');
      count++;
      if (count%2 != 0){
        $('.hamburger').removeClass('fa-bars');
        $('.hamburger').addClass('fa-times-circle');
        $('.responsive').slideDown("slow");
      } else {
        $('.hamburger').removeClass('fa-times-circle');
        $('.hamburger').addClass('fa-bars');
        $('.responsive').slideUp("fast");
      }
    });

    // Back to top
    $('.back-to-btn').on('click', function(){
      $("html, body").animate({scrollTop: 0}, 1000);
    });

});
