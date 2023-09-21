let menu_open = document.getElementById('menu-open');
let menu_close = document.getElementById('menu-close');
let side_menu = document.getElementById('side-menu');
let body = document.querySelector('body');
let teams = document.getElementById('teams');
let menu_close2 = document.getElementById('menu-close2');
let btn = document.getElementById('btn');

menu_open.addEventListener('click',openMenu);
menu_close.addEventListener('click',closeMenu);
btn.addEventListener('click',teamsOpen);
menu_close2.addEventListener('click',teamsClose);

function openMenu(){
    side_menu.style.display = 'block';
    body.style.overflowY = 'hidden';
}

function closeMenu(){
    side_menu.style.display = 'none';
    body.style.overflowY = 'visible';
}

function teamsOpen() {
    teams.style.display='block';
    
  
}

function teamsClose() {
    teams.style.display='none';
}