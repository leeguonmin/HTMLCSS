

// $("body").css("background", "blue");


// $(".container button").on("click", function () {
//
//     $(this).addClass("active");
//     $(this).siblings().removeClass("active");
//
// });

let counter = 0;

$("h1").text(counter);

$(".container div").eq(0).addClass("active");
// $(".container div").eq(1).addClass("active");
// $(".container div").eq(2).addClass("active");


// console.log(     );


$(".button").on("click", function (){
    counter = counter + 1;
    // $("h1").text(counter);

    if (counter === 5) {
        // alert("현재 카운터는 3이 맞습니다");
        counter = 0;
    }

    $(".container div").eq(counter).addClass("active");
    $(".container div").eq(counter).siblings().removeClass("active");

});