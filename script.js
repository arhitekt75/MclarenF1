let menu_open = document.getElementById('menu-open');
let menu_close = document.getElementById('menu-close');
let side_menu = document.getElementById('side-menu');
let body = document.querySelector('body');

menu_open.addEventListener('click',openMenu);
menu_close.addEventListener('click',closeMenu);

function openMenu(){
    side_menu.style.display = 'block';
    body.style.overflowY = 'hidden';
}

function closeMenu(){
    side_menu.style.display = 'none';
    body.style.overflowY = 'visible';
}