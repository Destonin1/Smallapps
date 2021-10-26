$(document).ready(function(){

 	var slideNow = 1;
  var translateheight = 0;
  var translateheightScroll = 0;
  var slideCount = $('#slidewrapper').children().length;   
  var navBtnId = 0;
  var input_range = document.getElementById("input_range");

  $('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();
    input_range.value = navBtnId;
    if (navBtnId + 1 != slideNow) {
          translateheight = -$('#viewport').height() * (navBtnId);
            $('#slidewrapper').css({
              'transform': 'translate(0, ' + translateheight + 'px)',
              '-webkit-transform': 'translate(0, ' + translateheight + 'px)',
              '-ms-transform': 'translate(0, ' + translateheight + 'px)',
             });
          slideNow = navBtnId + 1;
    };
  });

  $(input_range).on('input', function(){
  var range = document.getElementById("input_range").value;
  if (range + 1 != slideNow) {
          translateheight = -$('#viewport').height() * (range);
            $('#slidewrapper').css({
              'transform': 'translate(0, ' + translateheight + 'px)',
              '-webkit-transform': 'translate(0, ' + translateheight + 'px)',
              '-ms-transform': 'translate(0, ' + translateheight + 'px)',
             });
          slideNow = range + 1;    
    };
  })

 $('.screenshots_slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });

 $('.reviews_slider').slick({
    arrows: false,
    dots: true
  });

 $('.menu_btn').click(function() {
  $(this).toggleClass('menu_btn_active');
  $('.phone_menu').toggleClass('phone_menu_active');
  $('.contacts_header').toggleClass('contacts_header_active');
  $('#header').toggleClass('header_underline');
 });

 $(".menu_header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top}, 500);
  })

 $(".phone_menu_header").on("click","a", function (event) {
        event.preventDefault();
        $('.menu_btn').toggleClass('menu_btn_active');
        $('.phone_menu').toggleClass('phone_menu_active');
        $('.contacts_header').toggleClass('contacts_header_active');
        $('#header').toggleClass('header_underline');
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top}, 500);
  })

});