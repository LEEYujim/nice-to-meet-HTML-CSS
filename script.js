$(document).ready(function(){


    //slide
    function slide(){
        $('.slide ul').animate({top:"-300px"},1000,
        function(){$('.slide ul').append($('.slide ul li').first());
            $('.slide ul').css({top:"0"});
        });
    }
    setInterval(slide,3000)

    //nav
    $('nav>ul>li').mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $('nav>ul>li').mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    //popup
    $('.pp').click(function(){
        $('.popup').show();
    });
    $('.btn button').click(function(){
        $('.popup').hide();
    });

});