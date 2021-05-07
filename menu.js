const menu_icon = document.querySelector('.header .menu-bar .menu-list .menu-icon');
const mobile_menu = document.querySelector('.header .menu-bar .menu-list ul');
const mobile_menu_item = document.querySelectorAll('.header .menu-bar .menu-list ul li a');
const header = document.querySelector('.header.container');

menu_icon.addEventListener('click', ()=>{
    menu_icon.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#344553';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});


mobile_menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        menu_icon.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
