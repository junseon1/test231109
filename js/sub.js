$(document).ready(function(){
    const swiper = new Swiper('.main_s', {
        // 3초마다 자동실행
        autoplay:{
            delay:5000,
            disableOnInteraction: false,
        },
        // 1,2,3,1,2,3,... 무한루프 
        loop: true,
        allowTouchMove: false,
        // 페이지네이션(동그란 버튼)
        pagination: {
        el: '.main_s .swiper-pagination'
       
        }
    });
    let winTop=$(this).scrollTop();
    // .scrollSet 영역 개수만큼 반복하는 메서드 (each())
    $('.scrollSet').each(function(){
        // $(this) : .scrollSet(인덱스 0~4)
        let secTop=$(this).offset().top;
        // section의 bottom 값
        let secBottom=secTop+$(this).height();
        // 만약 secTop이 winTop보다 작고 secBottom이 winTop보다 크면
        // section의 자식객체에 active 추가
        if(secTop < winTop && secBottom > winTop){
        $(this).find('.ani').addClass('active');
        }
        
    });
    
    
   
});