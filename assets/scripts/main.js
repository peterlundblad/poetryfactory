$(document).on('click', '.hamburger', function () {
  $(".logo").animate({
    opacity: '0'
  }, 200);    // Sets the duration to in milliseconds
  $(".menu").show()
  $(".menu").animate({
      left: '10%',
      opacity: '1'
    }, 400);    // Sets the duration to in milliseconds
    

  });
  




  $(document).on('click', '.menu-esc', function () {
    
    $(".logo").animate({
      opacity: '1'
    }, 400);    // Sets the duration to in milliseconds 
    $(".menu").animate({
      left: '-10%',
      opacity: '0'
    }, 400);    // Sets the duration in milliseconds
    // $(".menu").hide()

  });