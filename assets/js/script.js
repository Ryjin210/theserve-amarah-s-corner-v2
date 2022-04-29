let searchForm = document.querySelector('.search-form');
let overlay = document.querySelector('#backgroundOverlay');
let mobileMenu = document.querySelector('.dropdown-nav');

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