$(document).ready(function(){


    //슬라이드 쿼리 작성
    var i = 0;//인덱스(아래아-배열[사과,포도]) 방식으로다가 슬라이드 순서를 호출해오겠다.라는 의미로 초기 변수 0을 만듭니다.

    function slide(){//슬라이드 전환을 해주는 함수를 만듭니다.
        //조건식
        if(i < 2){  //if구문이 참이면 = 현재 슬라이드 인덱스 번호가 2보다 작을 때
            i++;    //슬라이드 인덱스 번호를 증가시킴
        }
        else{   //if가 참이 아닌 모든 경우 = i가 2보다 크게 되면
            i=0; //슬라이드 인덱스 번호를 다시 0번째로 초기화
        };
        $('.slide ul li').fadeOut('slow');//모든 슬라이드 리스트는 슈루룩 페이드 아웃으로 사라져라
        $('.slide ul li').eq(i).fadeIn('slow');//하나의 슬라이드가 나타날 때, 해당 리스트를 페이드 인으로 수루룩 나타나게 해라.
    }
    setInterval(slide,3000)//1000밀리초 ms == 1s//해당 함수를 3초마다 반복해주는 녀석

    //메뉴1 쿼리 작성

    //메뉴2 쿼리 작성 - 1뎁스 영역 쿼리 작성
    $('nav>ul>li').mouseenter(function(){   //1뎁스 메뉴에 마우스를 진입시켰을 때
        $('.sub, .menuBg').stop().slideDown();
    });
    $('nav>ul>li').mouseleave(function(){   //1뎁스 메뉴에 마우스가 다시 빠져 나갔을 때
        $('.sub, .menuBg').stop().slideUp();
    });


    //팝업 쿼리 작성
    $('.pp').click(function(){
        $('.popup').show();
        return false;//오류 났을 때, 리턴문 추가 > 탭,팝업
    });

    $('.button').click(function(){
        $('.popup').hide();
    });

});