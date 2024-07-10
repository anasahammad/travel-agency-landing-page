const toggleMenu = document.getElementById('toggle-menue')
const navLinks = document.querySelector('.nav-links')


toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log("clicked");
  });