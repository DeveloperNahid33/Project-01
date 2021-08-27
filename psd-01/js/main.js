// bx slider
$(document).ready(function(){
    $('.slider').bxSlider();
    $('.header_bottom').meanmenu({
      meanMenuContainer:'#mobile_manue',
      meanScreenWidth:992,
    });
  });
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth:1200
  });