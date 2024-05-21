const burger = document.querySelector('.burger');
const leftNav = document.querySelector('.left-nav');

burger.addEventListener('click', () => {
    leftNav.classList.toggle('active');
  });

  