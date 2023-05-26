'use strict'

const boxmenu = document.querySelector('.box-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.fa-solid');



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
