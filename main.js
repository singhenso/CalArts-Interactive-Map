var activeClass = 'active';

$('.distribution-map .map-point').click(function (event) {
  $('.distribution-map .map-point').removeClass(activeClass);
  $(event.target).addClass(activeClass);
  event.stopPropagation();
});