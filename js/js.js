$(document).ready(function(){

    // Drop down search
    $('#show-search-bar').on('click', function(){
        $('.search-container').toggle();
        // Change icon depending on toggle
      if($('.search-container').css('display') == 'block') {
          $('#show-search-bar').removeClass('fas');
          $('#show-search-bar').removeClass('fa-search');
          $('#show-search-bar').addClass('far');
          $('#show-search-bar').addClass('fa-times-circle');
      } else {
          $('#show-search-bar').addClass('fas');
          $('#show-search-bar').addClass('fa-search');
          $('#show-search-bar').removeClass('far');
          $('#show-search-bar').removeClass('fa-times-circle');
      }
    });
});
