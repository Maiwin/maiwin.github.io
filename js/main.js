$(window).on('load', function () {
  // Настройка слайдера до и после  
  $(".before-after").twentytwenty({
    before_label: 'без скинали',
    after_label: 'скинали'
  });
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

  // Настройка select 
  $('.select_checked').on('click', function () {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function () {
    var value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  // маска на форму для ввода номера
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 130 + "px" });
    return false;
  });
  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  //показывать карту когда пользователь докрудил до блока reviews для снижения нагрузки 
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6b7ebf47e0a66f9b2d92a91392ef8d4941503584b0e467af46385a71fd6664c9&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll');
    }
  });
});

