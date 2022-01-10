// SELECTORS    

const navBtn = document.getElementById('nav-btn');
const menuPanel = document.getElementById('menu-panel');
const links = document.querySelectorAll('.links');
const body = document.getElementById('body');

// EVENTLISTENERS

navBtn.addEventListener('click', navBtnClick);

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closePanel)
}

// FUNCTIONS

// navigation

function navBtnClick() {
    if(menuPanel.classList.contains('active')) {
        navBtn.classList.remove('toggle');
        menuPanel.classList.remove('active');
        body.style.position = ''
    } else {
        menuPanel.classList.add('active');
        navBtn.classList.add('toggle');
        body.style.position = 'fixed'
    }
}

function closePanel() {
    body.style.position = '';
    navBtn.classList.remove('toggle');
    menuPanel.classList.remove('active')
}