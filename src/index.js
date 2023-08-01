import './style.css';
import icons from './asset/icons8-heart-30.png';

const parent = document.querySelector('.parent-div');

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.categories.splice(0, 2);
    data.categories.forEach((category) => {
      const name = category.strCategory;
      const img = category.strCategoryThumb;

      const child = document.createElement('div');
      child.className = 'child-div';
      child.innerHTML = `<img class="img" src="${img}"> <p>${name}</p> `;

      const like = document.createElement('div');
      like.className = 'child-like';
      like.innerHTML = ` likes:${1} <img class="icon" src="${icons}">`;

      child.appendChild(like);
      parent.appendChild(child);
    });
  });
