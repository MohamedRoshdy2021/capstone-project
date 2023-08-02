const count = () => {
  const box = document.getElementById('data');

  const directChildren = box.children.length;
  const cat = document.getElementById('categories');
  cat.innerHTML = `Categories: ${directChildren}`;
};

export default count;
