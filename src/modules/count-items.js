const count = () => {
  const box = document.getElementById('data');

  const directChildren = box.children.length;
  const counter = document.getElementById('meals');
  let cat = document.getElementById('categories')
  cat.innerHTML = `Categories: ${directChildren}`
};

export default count;
