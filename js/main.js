 (function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add('header_active')
        }else{
            header.classList.remove('header_active')
        }
    }
}());
// burger handler
(function(){
    const burgerItem = document.querySelector('.burger');
    const headerNav = document.querySelector('.header_nav');
    const closeItem = document.querySelector('.header_nav-close')
    burgerItem.addEventListener('click', () =>{
        headerNav.classList.add('header_nav_active')
    })
    closeItem.addEventListener('click', () =>{
        headerNav.classList.remove('header_nav_active')
    })
}());