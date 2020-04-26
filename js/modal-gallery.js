const images = [...document.querySelectorAll('.galleryImg')];
const imgsrc = [...images].map(e=>e.src);
const modal = document.querySelector('.modal');
const prevButton = modal.querySelector('.prev');
const nextButton = modal.querySelector('.next');
const count = modal.querySelector('.count');
const close = modal.querySelector('.close');
const modalImg = document.querySelector('.modal-img');
let currImgIndex;
let isModalOpen = false;

count.innerHTML = `1/${imgsrc.length}`;

images.forEach(e=>{
    e.addEventListener('click',img=>{
        const index = images.indexOf(img.target);
        updateModalImg(index);
        modal.classList.add('modal-open')
    })
})

modal.addEventListener('click',e=>{
    e.stopPropagation();
    if(e.target===modal){
        modal.classList.remove('modal-open');
    }
});
close.addEventListener('click',e=>{
    modal.classList.remove('modal-open');
});

prevButton.addEventListener('click',()=>{
    updateModalImg(currImgIndex===0?imgsrc.length-1:currImgIndex-1)
})
nextButton.addEventListener('click',()=>{
    updateModalImg(currImgIndex===imgsrc.length-1?0:currImgIndex+1)
})

function updateModalImg(i){
    modalImg.src=imgsrc[i]
    currImgIndex = i;
    count.innerHTML = `${currImgIndex+1}/${imgsrc.length}`;
}