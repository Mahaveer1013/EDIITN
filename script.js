let sliderCount = 0;
let slides = document.querySelectorAll('.slider-item');
let totalSlides = slides.length;
let prevBtn = document.querySelector('.slider-left-btn');
let nextBtn = document.querySelector('.slider-right-btn');
prevBtn.addEventListener('click', () => {
    prevSlide();
})
nextBtn.addEventListener('click', () => {
    nextSlide();
})
function updateSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[sliderCount].classList.add('active');
}
function prevSlide() {
    if (sliderCount == 0) {
        sliderCount = totalSlides - 1;
    }
    else {
        sliderCount--;
    }
    updateSlide()
}
function nextSlide() {
    if (sliderCount == totalSlides - 1) {
        sliderCount = 0;
    }
    else {
        sliderCount++;
    }
    updateSlide()
}

setInterval(() => {
    nextSlide()
}, 3000);


let navLi = document.querySelectorAll('.left-nav-li');
navLi.forEach(li => {
    li.addEventListener('click', () => {
        navLi.forEach(li => {
            li.classList.remove('nav-active');
        })
        li.classList.add('nav-active');
    })
})

let menuBar = document.querySelector('.sidemenu-bar');
let sidemenu = document.querySelector('.sidemenu-nav');
let sidemenuClose = document.querySelector('.sidemenu-close');
if (menuBar) {
    menuBar.addEventListener('click', () => {
        sidemenu.classList.add('sidemenu-active');
        document.querySelector('.main').style.filter = 'blur(2px)';
    })
}
if (sidemenuClose) {
    sidemenuClose.addEventListener('click', () => {
        sidemenu.classList.remove('sidemenu-active');
        document.querySelector('.main').style.filter = '';
    })
}
