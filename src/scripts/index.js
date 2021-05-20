import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import main from './components-menus/main.js';

document.addEventListener("DOMContentLoaded", main)
const clickMenu = () => {
  const menuBtn = document.querySelector('.nav__btn');
  const navList = document.querySelector('.nav__list');
  menuBtn.addEventListener('click', function(){ 
    navList.classList.toggle('show');
  })
}

clickMenu();
