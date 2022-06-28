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

//케이크 시트 선택시
    $('.sheet li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
//크림 선택시
    $('.cream li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  
//주문요청 버튼 클릭하면 안내창
    $('.submit a').click(function(){
      alert('🍰주문이 완료되었습니다💕\n 주문과 관련하여 안내 연락이 갈 예정입니다😊');
    });

});

//order-premade-product 구매수량 연산
function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('t_qty');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }else if(parseInt(number) < 1)
      number = 1;
    // 결과 출력
    resultElement.innerText = number;
  }



