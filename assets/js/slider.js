const dotsWrapper = document.querySelector(".slider__dots");
const slides = document.querySelectorAll(".slider__slide");
const slideWidth = document.querySelector(".jb").offsetWidth;
const sliderTrack = document.querySelector(".slider__track");

slides.forEach(dot => {
    dotsWrapper.insertAdjacentHTML('beforeend', `
        <div class="dot"></div>
    `)
});

const dots = document.querySelectorAll(".dot")
let position = slideWidth;

dots[0].classList.add("dot_active");

setInterval(() => {
    position -= slideWidth;
    if (-position/(slideWidth*slides.length) == 1) {
        position=0;
    }    
    dots.forEach(dot=>dot.classList.remove("dot_active"))
    dots[position/-slideWidth].classList.add("dot_active")
    sliderTrack.style.transform = `translateX(${position}px)`;
}, 3000);
