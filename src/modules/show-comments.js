function showCommentsList(id, parent) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
 fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
 )
  .then(response => response.json())
  .then(data => {

    const title = document.createElement('h3');
    title.className = 'meal-popup-comments-title';
    title.innerHTML = `Comments (${data.length || 0})`;
    parent.appendChild(title);

    data.forEach((comment) => {
      const commentRow = document.createElement('p');
      commentRow.className = 'meal-popup-comments-row';
      commentRow.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment} `;
      parent.appendChild(commentRow);
    });
  })
}

export default showCommentsList;
