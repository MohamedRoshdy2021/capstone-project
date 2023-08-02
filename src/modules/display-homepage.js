import showPopupComment from './show-popup-comment';
import count from './count-items';
import addLike from './add-like';

async function getData() {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s',
  );
  const data = await response.json();
  const lengthData = data.meals.length;
  const header = document.querySelector('.head');
  const random = document.querySelector('.random');
  const listSection = document.querySelector('.home');
  listSection.before(header);
  listSection.before(random);
  listSection.replaceChildren();

  const response1 = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tnE2k6P5BdZ2HCTjbd0V/likes',
  );
  const data1 = await response1.json();
  const len = data1.length;
  for (let i = 0; i < lengthData; i += 1) {
    const list = document.createElement('div');
    list.className = 'meal';

    const div = document.createElement('div');
    div.className = 'div-img';
    list.appendChild(div);

    const descrpt1 = document.createElement('img');
    descrpt1.src = `${data.meals[i].strMealThumb}`;
    div.appendChild(descrpt1);

    const div2 = document.createElement('div');
    div2.className = 'div-like';
    list.appendChild(div2);

    const p = document.createElement('p');
    p.textContent = `${data.meals[i].strMeal}`;
    div2.appendChild(p);

    const div3 = document.createElement('div');
    div3.className = 'div-heart';
    div2.appendChild(div3);

    const like = document.createElement('i');
    like.className = 'fa-solid fa-heart';
    like.id = data.meals[i].idMeal;
    div3.appendChild(like);

    for (let j = 0; j < len; j += 1) {
      if (data1[j].item_id === data.meals[i].idMeal) {
        const likeCount = document.createElement('label');
        likeCount.innerHTML = `${data1[j].likes}likes`;
        div3.appendChild(likeCount);
      }
    }

    const button = document.createElement('button');
    button.id = data.meals[i].idMeal;
    button.innerHTML = 'Comment';
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener('click', (e) => {
      const { id } = e.target;
      showPopupComment(id);
    });

    like.addEventListener('click', (e) => {
      const { id } = e.target;
      addLike(id);
    });
  }
  count();
}

export default getData;
