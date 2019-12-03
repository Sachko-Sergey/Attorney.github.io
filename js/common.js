$(document).ready(function () {
  $('.reviews-slider').slick({
    slidesToShow: 1,
    dots: true,
    dotsClass: 'slick-dots  slick-dots-wrap',
    prevArrow: '<button type="button" class="slick-prev  prev-arrow"><img src="img/reviews/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next  next-arrow"><img src="img/reviews/arrow-next.svg" alt=""></button>',
  });

  $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function () {
      $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  $(".tab-content").not(":first").hide();
    $(".tab-body").click(function () {
      $(".tab-body").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


});

