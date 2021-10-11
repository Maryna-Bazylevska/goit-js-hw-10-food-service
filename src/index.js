import './sass/main.scss';

import menu from './menu.json';
import itemsTemplate from './templates/menuItemTemplate.hbs';

const refs = {
  menu: document.querySelector('ul.js-menu'),
  theme: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};
const markUp = itemsTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', markUp);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.theme.checked = true;
} else refs.body.setAttribute('class', 'light-theme');
refs.body.addEventListener('change', onThemeChange);
function onThemeChange(event) {
  if (refs.theme.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.setAttribute('class', 'dark-theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.setAttribute('class', 'light-theme');
  }
}
