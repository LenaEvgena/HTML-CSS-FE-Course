'use strict';

const menuBtn = document.querySelector('#burger');
const burgerImg = document.querySelector('#burger_img');
const overlay = document.querySelector('.overlay');
const menuList = document.querySelector('.menu_list');
const menuContent = document.querySelectorAll('.menu_content');
const links = document.querySelectorAll('.link');

burgerImg.addEventListener('click', () => {
  toggleMenu();
});

overlay.addEventListener('click', (e) => {
  const isClickInside = menuList.contains(e.target);
  if (isClickInside) {
    return;
  } else {
    removeActiveClasses();
  }
});

links.forEach(item => item.addEventListener('click', () => {
  removeActiveClasses();
}));

function toggleMenu(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  menuList.classList.toggle('open');
  burgerImg.style.transform = 'rotate(90deg)';
  overlay.classList.toggle('active');
  if (menuList.classList.contains('open')) {
    burgerImg.style.transform = 'rotate(90deg)';
  } else {
    burgerImg.style.transform = 'rotate(0deg)';
  }
}

function removeActiveClasses() {
  menuList.classList.remove('open');
  burgerImg.style.transform = 'rotate(0deg)';
  overlay.classList.remove('active');
}
