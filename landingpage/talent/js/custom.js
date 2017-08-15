$('.slider-customers-say').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:3000,
    lazyLoad: 'ondemand',
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows:false,
                dots: true
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slider-customers').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 800,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay:true,
    autoplaySpeed:1000,
    lazyLoad: 'ondemand',
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});


var LP=new function __LP(){
    this.init=function(){
        $(window).scroll(function(){
            fixHeader();
            
        });
        fixHeader();   
        $(".menus .item").click(function(){
            $(this).toggleClass("active");
        });
    };
    
    function fixHeader(){
        var top=$(window).scrollTop();
        
        if (top>60){
            if (!$(".header").hasClass("scrolled")){
                $(".header").addClass("scrolled");
            }
        }else{
            $(".header").removeClass("scrolled");
        }
    }
    this.expandMenu=function(a,b){
        if(a=="open"){
            $(b).toggleClass("show");
            $(".header .box-menu").addClass("show");
            $(".common-overlay").addClass("show");
        }else{
            $(b).toggleClass("show");
            $(".header .box-menu").removeClass("show");
            $(".common-overlay").removeClass("show");
        }
    }
    this.playVideo=function(){
        var w=1280;
        var h=720;
        
        
        
        if ($(window).width() < w+200){
            w=853;
            h=480;
        }
        
        if ($(window).width() < w){
            w=640;
            h=360;
        }
        
        if ($(window).width() < w){
            w="100%";
            h=360;
        }
        
        var wpx=w+"px";
        if (w=="100%"){
            wpx=w;
        }
        
        
        var url="https://www.youtube.com/watch?v=QnU6c6SHqh8";
        var html="<div class='close full-mask' onclick='LP.hideVideo();'></div> <div class='video' style='width:"+wpx+"'><iframe width='"+w+"' height='"+h+"' src='https://www.youtube.com/embed/QnU6c6SHqh8?autoplay=1' frameborder='0' allowfullscreen></iframe><</div>"
        $(document.body).addClass("xo");
        $("#video-player").html(html).show();
    };
    
    this.hideVideo=function(){
        $(document.body).removeClass("xo");
        $("#video-player").html("").hide();
    };
};
LP.init();