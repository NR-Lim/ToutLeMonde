$(function(){
  $('#all').click(function () {
    $('.all').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
    $('.filter1, .filter2, .filter3').hide();
  });
  $('#filter1').click(function () {
    $('.filter1').show();
    $('.filter2, .filter3, .all').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
  });
  $('#filter2').click(function () {
    $('.filter2').show();
    $('.filter1, .filter3, .all').hide();
  });
  $('#filter3').click(function () {
    $('.filter3').show();
    $('.filter1, .filter2, .all').hide();
  });
  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});