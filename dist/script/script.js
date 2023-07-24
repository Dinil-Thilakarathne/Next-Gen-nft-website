// mobile navbar 
const headerNav = document.querySelector('.header__nav');
const navIcon = document.querySelector('.header__nav_icon');

navIcon.addEventListener('click', () => {
    headerNav.classList.toggle('active');
})


// navbar show/hiden 
const headerNavItems = document.querySelectorAll('.nav__item');

headerNavItems.forEach((link)  => {
    link.addEventListener('click',() => {
        headerNav.classList.toggle('active')
    })
})

function showHideGoToTopBtn() {
    const goToTopBtn = document.getElementById('goToTopBtn');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= 100 * window.innerHeight / 100) {
      goToTopBtn.style.display = 'flex';
    } else {
      goToTopBtn.style.display = 'none';
    }
}
  
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
  
// Attach the showHideGoToTopBtn function to the scroll event of the window
window.addEventListener('scroll', showHideGoToTopBtn);
  