

const menu = document.querySelectorAll(".gnb li img");

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("mouseenter", function (event) {
        if (event.target.tagName === "IMG") {
            const src = event.target.getAttribute("src");
            const replace = src.replace(".gif", "_on.gif");
            event.target.setAttribute("src", replace);
        }
    });
    menu[i].addEventListener("mouseleave", function (event) {
        if (event.target.tagName === "IMG") {
            const src = event.target.getAttribute("src");
            const replace = src.replace("_on.gif", ".gif");
            event.target.setAttribute("src", replace);
        }
    });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    speed : 700,
    autoplay: {
        delay: 2000,
    }
    // And if we need scrollbar
});