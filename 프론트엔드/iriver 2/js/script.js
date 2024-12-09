// alert("안녕하세유");


// document.querySelector(".visual .slider").slick();
// document.querySelector <얘를 드래그해서 쉬프트+4 누르면 달러됨
// $(".visual .slider").slick();


$(document).ready(function () {

    // function activeImg() {
    //     alert("액티브 이미지 기능입니다");
    // }
    // activeImg();


    $(".gnb li img").on("mouseenter", function () {
        // 마우스를 엔터했을때 수행할 기능 구현

        const src = $(this).attr("src");

        const replace = src.replace(".gif", "_on.gif");

        $(this).attr("src", replace);

        // console.log(src)
    });


    $(".gnb li img").on("mouseleave", function () {
        // 마우스를 땠을때 수행할 기능 구현
        const src = $(this).attr("src");
        const replace = src.replace("_on.gif", ".gif");
        $(this).attr("src",replace);
    });



    // $(".gnb li img").on("mouseent er", activeImg);







    $(".visual .slider").slick({
        arrows: true,

        prevArrow: $(".visual .prev"),
        nextArrow: $(".visual .next"),

        dots: true,
        appendDots: $(".visual .navi"),
        dotsClass: "navbutton"
    });

})