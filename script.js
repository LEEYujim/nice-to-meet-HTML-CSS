$(document).ready(function(){


    //slide
    function slide(){
        $('.slide ul').animate({right: "-100%"},1000,
            function(){
                $('.slide ul').append($('.slide ul li').first());
                $('.slide ul').css({right:"0px"});
            });
    }
    
    setInterval(slide,3000);

    //menu
    $('nav>ul>li').mouseenter(function(){
        $('.sub, .menubg').stop().slideDown();
    });
    $('nav>ul>li').mouseleave(function(){
        $('.sub, .menubg').stop().slideUp();
    });
    

    //popup
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('button').click(function(){
        $('.popup').hide();
    });

});