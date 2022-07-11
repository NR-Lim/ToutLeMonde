$(document).on('ready', function() {
  $(".slider").slick({
    //설정 값을 원하지 않는 경우 true값을 false로 바꿔주세요.

    centerMode: true, //센터 모드
    centerPadding: "0", //센터모드 양 끝에 보이는 이미지 간격
    speed: 1500, //다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
    autoplay:true, //자동 갤러리 구문
    autoplaySpeed:2000, //자동 갤러리가 넘어가는 시간
    slidesToShow: 3,//보여지는 갤러리 수
    slidesToScroll: 3,//넘어가는 갤러리 수
    pauseOnHover:true, // 마우스 호버시 슬라이드 이동 멈춤
    arrows: true, //화살표 버튼
    dots: false, //슬라이드 밑에 동그라미 버튼
    infinite: true //무한반복
  });
});