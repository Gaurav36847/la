const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const mainText = document.querySelector('.main-text');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    mainText.classList.toggle('active')
})