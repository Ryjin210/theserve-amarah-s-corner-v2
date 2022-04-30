let searchForm = document.querySelector('.search-form');
let overlay = document.querySelector('#backgroundOverlay');
let mobileMenu = document.querySelector('.dropdown-nav');
let login = document.querySelector('.login-form-container');
let reg = document.querySelector('.reg-form-container');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    overlay.classList.toggle('active');
}

document.querySelector('#backgroundOverlay').onclick = () => {
    searchForm.classList.remove('active');
    overlay.classList.remove('active');
}

document.querySelector('#navbar').onclick = () => {
    mobileMenu.classList.toggle('active');
}

document.querySelector('#close-menu').onclick = () => {
    mobileMenu.classList.remove('active');
}

document.querySelector('.dropdown-nav').onclick = () => {
    mobileMenu.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
}

document.querySelector('#register').onclick = () => {
    login.classList.remove('active');
    reg.classList.toggle('active');
}

document.querySelector('#login').onclick = () => {
    reg.classList.remove('active');
    login.classList.toggle('active');
}

document.querySelector('#close-login').onclick = () => {
    login.classList.remove('active');
}

document.querySelector('#close-reg').onclick = () => {
    reg.classList.remove('active');
}

window.onscroll = () => {

    navbar.classList.remove('active');
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.custom-nav').classList.add('active');
    }
    else {
        document.querySelector('.custom-nav').classList.remove('active');
    }
}