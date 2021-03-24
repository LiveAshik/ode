//  Responsive Menu
jQuery(document).ready(function ($) {
  "use strict";

  var ph1_responsive_menu = $(".responsive-menu");

  $('body').on("click", 'a.responsive-menu-hand', function () {
    if ($(".responsive-menu").hasClass('active')) {
      $(".responsive-menu").slideUp();
      $(".responsive-menu").removeClass('active');
      $("body").removeClass('mobile-menu-active');
    } else {
      $(".responsive-menu").slideDown();
      $(".responsive-menu").addClass('active');
      $("body").addClass('mobile-menu-active');
    }
    return false;
  });

  $('body').on("click", 'a.responsive-menu-close', function () {
    $(".responsive-menu").slideUp();
    $(".responsive-menu").removeClass('active');
    $("body").removeClass('mobile-menu-active');
  });
});

jQuery(window).scroll(function () {
  "use strict";

  var sa_body_scroll = jQuery(document).scrollTop();

  if (sa_body_scroll > 50) {
    jQuery('.sk_header').addClass('active');
  } else if (sa_body_scroll < 50) {
    jQuery('.sk_header').removeClass('active');
  }
});


// Slider 
jQuery(document).ready(function ($) {
  "use strict";

  $('.od6_slider').slick({
    slidesToShow: 1,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });

});



// Slider 
jQuery(document).ready(function ($) {
  "use strict";

  $('.od8_slider').slick({
    slidesToShow: 3,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });

});





// instragramFeed
$(window).on('load', function () {
  var instagram_feed_username = $('#instagram_feed').attr('data-ig-name');
  $.instagramFeed({
    'username': instagram_feed_username,
    'container': "#instagram_feed",
    'display_profile': false,
    'display_biography': true,
    'display_igtv': false,
    'items': 4,
    'items_per_row': 4,
    'margin': 1
  });
});


// setion 3 tab style 
jQuery(document).ready(function ($) {
  "use strict";

  $('body').on("click", '#od3_item_hand_01', function () {
  
    $(".od3_down").removeClass('active');
    $(".od3_item").removeClass('active');

    $("#od3_item_hand_01").addClass('active');
    $("#od3_item_content_01").addClass('active');
  });

  $('body').on("click", '#od3_item_hand_02', function () {
  
    $(".od3_down").removeClass('active');
    $(".od3_item").removeClass('active');

    $("#od3_item_hand_02").addClass('active');
    $("#od3_item_content_02").addClass('active');
  });

  $('body').on("click", '#od3_item_hand_03', function () {
  
    $(".od3_down").removeClass('active');
    $(".od3_item").removeClass('active');

    $("#od3_item_hand_03").addClass('active');
    $("#od3_item_content_03").addClass('active');
  });

  $('body').on("click", '#od3_item_hand_04', function () {
  
    $(".od3_down").removeClass('active');
    $(".od3_item").removeClass('active');

    $("#od3_item_hand_04").addClass('active');
    $("#od3_item_content_04").addClass('active');
  });

  $('body').on("click", '#od3_item_hand_05', function () {
  
    $(".od3_down").removeClass('active');
    $(".od3_item").removeClass('active');

    $("#od3_item_hand_05").addClass('active');
    $("#od3_item_content_05").addClass('active');
  });

  $('body').on("click", '#od3_item_hand_06', function () {
  
    $(".od3_down").removeClass('active');
    $(".od3_item").removeClass('active');

    $("#od3_item_hand_06").addClass('active');
    $("#od3_item_content_06").addClass('active');
  });





  $('body').on("click", '.od6_slider .slick-arrow', function () {
  
    if($('.od6_slider_item.slick-current').hasClass('od6_slider_item_1')){
      $('.od6_img_item').removeClass('od6_rotate2');
      $('.od6_img_item').removeClass('od6_rotate3');
      $('.od6_img_item').removeClass('od6_rotate4');

      $('.od6_img_item').addClass('od6_rotate1');
    }

    else if($('.od6_slider_item.slick-current').hasClass('od6_slider_item_2')){
      $('.od6_img_item').removeClass('od6_rotate1');
      $('.od6_img_item').removeClass('od6_rotate3');
      $('.od6_img_item').removeClass('od6_rotate4');

      $('.od6_img_item').addClass('od6_rotate2');
    }

    else if($('.od6_slider_item.slick-current').hasClass('od6_slider_item_3')){
      $('.od6_img_item').removeClass('od6_rotate2');
      $('.od6_img_item').removeClass('od6_rotate1');
      $('.od6_img_item').removeClass('od6_rotate4');

      $('.od6_img_item').addClass('od6_rotate3');
    }

    else if($('.od6_slider_item.slick-current').hasClass('od6_slider_item_4')){
      $('.od6_img_item').removeClass('od6_rotate2');
      $('.od6_img_item').removeClass('od6_rotate3');
      $('.od6_img_item').removeClass('od6_rotate1');

      $('.od6_img_item').addClass('od6_rotate4');
    }

    console.log($('.od6_slider_item').hasClass('od6_slider_item_1')); 

  });

});