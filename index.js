// SELECTORS    

const navBtn = document.getElementById('nav-btn');
const menuPanel = document.getElementById('menu-panel');
const links = document.querySelectorAll('.links');


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
        menuPanel.classList.remove('active')
    } else {
        menuPanel.classList.add('active');
        navBtn.classList.add('toggle')
    }
}

function closePanel() {
    navBtn.classList.remove('toggle');
    menuPanel.classList.remove('active')
}