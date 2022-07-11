$(function(){
    $('.nav li:nth-child(-n+2)').mouseenter(function(){
        $('.sub').stop().slideDown();
    });
    $('.nav li:nth-child(-n+2)').mouseleave(function(){
        $('.sub').stop().slideUp();
    });

    $('.cakemore').click(function(){
        $('.hidden').slideToggle();
    });
    
    $(".thumb li").click(function () { 
        var address = $(this).children("img"); 
        $(".zoom img").attr("src", address.attr("src")).attr("alt", address.attr("alt")); 
        $(this).addClass("on").siblings().removeClass("on"); return false; });
// 출처: https://uidevelop.tistory.com/31 [UI Develop:티스토리]

//비건레시피 비디오 호버시 텍스트 박스 슬라이드
    $('.element-item').mouseenter(function(){
      $(this).children('.video-hover').stop().slideDown();
    });
    $('.element-item').mouseleave(function(){
      $(this).children('.video-hover').stop().slideUp();
    });
  
//주문요청 버튼 클릭하면 안내창
    $('.submit a').click(function(){
      alert('🍰주문이 완료되었습니다💕\n 주문과 관련하여 안내 연락이 갈 예정입니다😊');
    });

    $("#attach").on('change',function(){
      var fileName = $("#attach").val();
      $(".filename").val(fileName).css({
        "color" : "#e7685d"
      });
    });

});


//order-premade-product 구매수량 연산
var qty = document.getElementById('t_qty').value;
var add = document.getElementById('plus');
var subtract = document.getElementById('minus');
add.onclick = function () {
  qty = parseInt(qty) + 1;
  document.getElementById('t_qty').value = qty;
};
minus.onclick = function () {
  qty = parseInt(qty) - 1;
  document.getElementById('t_qty').value = qty;  

  if(qty < 1) { 
    document.getElementById('t_qty').value = 1;
    qty = 1;
    }  
};

//주문 총액 연산
var total = document.getElementById('amount').innerText;
var price = 45000;
function total () {
  price * qty;
  document.getElementById('amount').innerText = total;
}; 



