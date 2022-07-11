//랜덤날짜 생성하기(리뷰)
function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();
      
    return new Date(startDate + Math.random() * (endDate - startDate));
  }
  
  // 시작 날짜 ~ 종료 날짜
  getRandomDate(new Date(2021, 1, 1), new Date(2022, 6, 24));

  //랜덤날짜 리뷰칸에 입력하기

var rd = document.getElementById('randomdate')

rd.innerText = getRandomDate(new Date(2021, 1, 1), new Date(2022, 6, 24)).toISOString().split("T")[0];