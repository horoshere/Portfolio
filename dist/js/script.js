const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const persent = document.querySelectorAll('.progress__persent'),
      lines = document.querySelectorAll('.progress__rectangle-atachment');

persent.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
