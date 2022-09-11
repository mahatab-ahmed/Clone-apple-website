const navbar = document.querySelector('.mobile-menu');
const head = document.querySelector('header');
navbar.onclick = function() {
    navbar.classList.toggle('active')
    head.classList.toggle('active')
}