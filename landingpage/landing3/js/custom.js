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
            $(b).toggleClass("active");
            $(".header .box-menu").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }else{
            $(b).toggleClass("active");
            $(".header .box-menu").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }
    }
};
LP.init();