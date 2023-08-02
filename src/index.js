import './style.css';
import getData from './modules/display-homepage';
import showPopupCategories from './modules/show-popup-category';

getData();

const menuCat = document.getElementById('categories');
menuCat.addEventListener('click', () => {
  showPopupCategories();
});
