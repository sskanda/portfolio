'use strict'

const boxmenu = document.querySelector('.box-menu');
const navbar = document.querySelector('.navbar');
const icon = document.querySelector('.fa-solid');
const cursor = document.querySelector('.cursor');
const cursorBorder = document.querySelector("#cursor-border");
const cursorPosition = { x: 0, y: 0 };
const cursorBorderPosition = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
    cursorPosition.x = e.clientX;
    cursorPosition.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPosition.x += (cursorPosition.x - cursorBorderPosition.x) / easting;
    cursorBorderPosition.y += (cursorPosition.y - cursorBorderPosition.y) / easting;

    cursorBorder.style.transform = `translate(${cursorBorderPosition.x}px, ${cursorBorderPosition.y}px)`;
    requestAnimationFrame(loop);
});


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


//ripple effect---

window.addEventListener('click', function (e) {
    applyCursorRippleEffect(e);
})

function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.animation = `ripple-effect 1s  linear`;
    ripple.onanimationend = () => {
        document.body.removeChild(ripple);

    }

}

///test///
// const left = document.querySelectorAll('.left-navigate');
// const right = document.querySelectorAll('.right-navigate');
// const cardcontainer = document.querySelectorAll('.project-card-container');
// const card1 = document.querySelector('.card-1');
// const cards = document.querySelectorAll('.project-card');
// console.log(cards);
// let leftindex = 0;
// let rightindex = 0;
// cardcontainer.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     left[i].addEventListener('click', () => {
//         leftindex++;
//         card1.style.right = "350px";
//     })

//     right[i].addEventListener('click', () => {
//         rightindex++;
//         card1.style.transform = `translateX(${350}px)`;
//     })
// })







// left.addEventListener('click', function () {
//     console.log("left clicked");
//     let carddimension = card1.getBoundingClientRect();
//     console.log(carddimension);
//     let cardwidth = carddimension.width;
//     console.log(cardwidth);
//     card1.scrollLeft = cardwidth;
//     // card1.style.transform = "translateX(-100px)"


// })

// right.addEventListener('click', function () {
//     console.log("right clicked");

// })

//test parent///
// const usernameinput = document.querySelectorAll('.usernameinput');

// for (let q = 0; q < usernameinput.length; q++) {
//     var parent = usernameinput[q].parentElement;
//     usernameinput[q].addEventListener('focus', function () {
//         console.log(parent);
//         parent.style.borderColor = "red";

//         console.log("focused");
//     })
// }


// var parent = child.parentElement;
// console.log(parent);

// child.addEventListener('focus', function () {
//     console.log(parent);
//     parent.style.borderColor = "red";

//     console.log("focused");
// })