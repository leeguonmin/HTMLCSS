//
//
//
//
// let counter = 0;
//
// $("h1").text(counter);
//
//
// $(".container div").eq(0).addClass("active");
//
//
// function highlight () {
//     $(".container div").eq(counter).addClass("active");
//     $(".container div").eq(counter).siblings().removeClass("active");
// }
//
//
//
// $(".prev").on("click", function (){
//     counter = counter - 1;
//     highlight();
//     // 위에 하이라이트를 미리 써두고, 하ㅓ이라이트만 넣어서 적용시켜준거임 하나하나 안 넣고
//
//
//     // $("h1").text(counter);
//
//     // if (counter === -1) {
//     //     // alert("현재 카운터는 3이 맞습니다");
//     //     counter = 3;
//     // }
//
//     if (counter < 4) {
//         counter = counter + 1;
//     } else {
//         counter = 0;
//     }
//
//     $(".container div").eq(counter).addClass("active");
//     $(".container div").eq(counter).siblings().removeClass("active");
// });
//
//
//
// $(".next").on("click", function (){
//     counter = counter + 1;
//     highlight();
//
//
//     if (counter < 4) {
//         counter = counter + 1;
//     } else {
//         counter = 0;
//     }
//
//
//     // $("h1").text(counter);
//
//
//
//     // if (counter === 4) {
//     //     // alert("현재 카운터는 3이 맞습니다");
//     //     counter = 0;
//     // }
//
//     $(".container div").eq(counter).addClass("active");
//     $(".container div").eq(counter).siblings().removeClass("active");
// });
//






let counter = 0;

$("h1").text(counter);

$("container div").eq(0).addClass("active");

function  highlight () {
    $(".container div").eq(counter).addClass("active");
    $(".container div").eq(counter).siblings().removeClass("active");
}

function increment() {
    if (counter <4) {
        counter = counter +1;
    } else {
        counter = 0;
    }
}

function decrement () {
    if (counter > 0) {
        counter = counter -1;
    } else {
        counter = 4;
    }
}


$(".prev").on("click", function () {
    decrement();
    highlight();
});
$(".next").on("click", function () {
    increment();
    highlight();
});





