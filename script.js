'use strict'

const boxmenu = document.querySelector('.box-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.fa-solid');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
})



// window.addEventListener('click', function () {
//     // if (cursor.classList.contains("cursor-animation"))
//     // cursor.classList.remove("cursor-animation");
//     // cursor.classList.add("cursor-animation");
//     // cursor.classList.remove("cursor-animation");
//     cursor.style.animation = "ripple-effect 0.4s linear ";
//     cursor.onanimationend = () => {
//         cursor.style.animation = "none";
//     }

//     // cursor.style.background = "red";
//     console.log("clicked");
// })


boxmenu.addEventListener('click', function () {
    console.log('clicked');
    navbar.classList.toggle("nav-active");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark")

    }
    else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

})

// document.addEventListener('resize', function () {
//     console.log('screen changed');
// })
