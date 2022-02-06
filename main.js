const hamburgerBtn = document.getElementById('hamburger-btn');
const navUl = document.getElementById('nav-ul');

hamburgerBtn.addEventListener('click', () => {
    navUl.classList.toggle('show');
})