function showCommentsList(id, parent) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const title = document.createElement('h3');
      title.className = 'meal-popup-comments-title';
      title.innerHTML = `Comments (${data.length || 0})`;
      parent.appendChild(title);

      Object.keys(data).forEach((key) => {
        const commentRow = document.createElement('p');
        commentRow.className = 'meal-popup-comments-row';
        commentRow.innerHTML = `${data[key].creation_date} ${data[key].username}: ${data[key].comment} `;
        parent.appendChild(commentRow);
      });
    });
}

export default showCommentsList;
