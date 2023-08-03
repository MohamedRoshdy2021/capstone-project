const count = () => {
  const box = document.getElementById('data');

  const directChildren = box.children.length;
  const cat = document.getElementById('meals');
  cat.innerHTML = `Meals (${directChildren})`;
};

export default count;
