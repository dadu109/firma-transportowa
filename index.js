const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu')

let burgerOpen = false;

burger.addEventListener('click',()=>{
   if(burgerOpen){
       burger.classList.remove('burger--open');
       mobileMenu.classList.remove('mobile-menu--open')
       burgerOpen=false;
   }else{
       burger.classList.add('burger--open');
       mobileMenu.classList.add('mobile-menu--open');
       burgerOpen=true;
   }
});

