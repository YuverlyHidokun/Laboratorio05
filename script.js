
function fetchPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, user: "Andres Soria", content: "Hola Manola" },
        { id: 2, user: "Jared Gonzales", content: "Este es una red social muerta" },
        { id: 3, user: "Joshua Lojan", content: "Me gusta Guayaquil" }
      ]);
    }, 1000);
  });
}

async function renderPosts() {
  const posts = await fetchPosts();
  const postContainer = document.getElementById('post-container');

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.user}</h3>
      <p>${post.content}</p>
    `;
    postContainer.appendChild(postElement);
  });
}

window.onload = renderPosts;
