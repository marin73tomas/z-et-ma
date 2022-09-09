


window.onload = function() {
    $(".featured-content--image").attr("onclick", "document.location='./collections/la-gamme'");
   
}

$(document).ready(function() {
    // initial top offset of the navigation 
       var stickyNavTop = $('.header--root').offset().top;
       var stickyNavTop = stickyNavTop - 0;
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); //current vertical position from the top
             
        if (scrollTop > stickyNavTop) { 
            $('.header--root').addClass('sticky');
        } else {
            $('.header--root').removeClass('sticky'); 
        
        }

        var pathname = window.location.pathname;

        if(pathname.localeCompare('/') == 0 || pathname.localeCompare('/en') == 0 || pathname.localeCompare('/en/') == 0){
        $(".layout--main-content").attr("style", "margin-top: 0px;");
        }else{
//        $(".layout--main-content").attr("style", "margin-top: 180px;");
        $(".layout--main-content").attr("style", "margin-top: 0px;");
        }

    };

    stickyNav();

    $(window).scroll(function() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        if(y === 0) {
            document.body.classList.add('scrolling');

          //  document.body.classList.remove('scrolling');
           // $('#customlogomenu').removeClass('customlogoeffects');
        } else {
            document.body.classList.add('scrolling');
            //$('#customlogomenu').addClass('customlogoeffects');
        }
        stickyNav();
    });

});