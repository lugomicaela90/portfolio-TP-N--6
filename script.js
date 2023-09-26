const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    if (navMenu.style.width === '250px') {
        navMenu.style.width = '0';
    } else {
        navMenu.style.width = '250px';
    }
});