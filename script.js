let menu_open = document.getElementById('menu-open');
let menu_close = document.getElementById('menu-close');
let side_menu = document.getElementById('side-menu');
let body = document.querySelector('body');
let teams = document.getElementById('teams');
let menu_close2 = document.getElementById('menu-close2');
let btn = document.getElementById('btn');
let rm1 = document.getElementById('rm1');
let more1 = document.getElementById('more1');
let rm2 = document.getElementById('rm2');
let more2 = document.getElementById('more2');
let rm3 = document.getElementById('rm3');
let more3 = document.getElementById('more3');
let rm4 = document.getElementById('rm4');
let more4 = document.getElementById('more4');

menu_open.addEventListener('click',openMenu);
menu_close.addEventListener('click',closeMenu);
btn.addEventListener('click',teamsOpen);
menu_close2.addEventListener('click',teamsClose);
rm1.addEventListener('click',openMore1);
rm2.addEventListener('click',openMore2);
rm3.addEventListener('click',openMore3);
rm4.addEventListener('click',openMore4);

function openMenu(){
    side_menu.style.display = 'block';
    body.style.overflowY = 'hidden';
    menu_open.style.display = 'none';
}

function closeMenu(){
    side_menu.style.display = 'none';
    body.style.overflowY = 'visible';
    menu_open.style.display = 'block';
}

function teamsOpen() {
    teams.style.display='block';
}

function teamsClose() {
    teams.style.display='none';
}

function openMore1() {
    more1.style.display ='block';
    rm1.style.display ='none';
}
function openMore2() {
    more2.style.display ='block';
    rm2.style.display ='none';
}
function openMore3() {
    more3.style.display ='block';
    rm3.style.display ='none';
}
function openMore4() {
    more4.style.display ='block';
    rm4.style.display ='none';
}