const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const swiperContainer = document.querySelector('.swiper-container');
const navWrapper = document.querySelector('.nav-wrapper');
const mobileNavLinks = mobileMenu.querySelectorAll("a");
console.log(mobileNavLinks);

let burgerOpen = false;

const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true,
    effect:'fade',
    fadeEffect: {
        crossFade: true
    },
});

const adjustSwiperHeight = (e) => {
    if (window.innerHeight < 1000) {
        swiperContainer.style.height = `${window.innerHeight - navWrapper.clientHeight}px`
    }else{
        swiperContainer.style.height = '1000px';
    }
};

burger.addEventListener('click', () => {
    if (burgerOpen) {
        burger.classList.remove('burger--open');
        mobileMenu.classList.remove('mobile-menu--open');
        burgerOpen = false;
    } else {
        burger.classList.add('burger--open');
        mobileMenu.classList.add('mobile-menu--open');
        burgerOpen = true;
    }
});

mobileNavLinks.forEach(e=>{
    e.addEventListener('click',()=>{
        burger.classList.remove('burger--open');
        mobileMenu.classList.remove('mobile-menu--open');
        burgerOpen = false;
    })
});

window.addEventListener('resize', adjustSwiperHeight);


adjustSwiperHeight();