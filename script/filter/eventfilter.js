//이벤트 필터
window.onload = function () {
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.shuffle-container');
    
    var shuffleInstance = new Shuffle(element, {
      itemSelector: 'li'
    }); 
      
    
      $('.shuffle-filter li').on('click',function(e){
        e.preventDefault();
        $('.shuffle-filter li').removeClass('selected');
        $(this).addClass('selected'); 
        var keyword = $(this).attr('data-target');
        shuffleInstance.filter(keyword);
      });
      
    };