function handlePhotoclick() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}

function displayComments(photos) {
  const commentContainer = document.getElementById("comments-container");
  commentContainer.classList.add('photos')
  for (const photo of photos.slice(0,10)) {
    const div = document.createElement("div");
    div.classList.add('photo')
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    const p = document.createElement("p");
    div.appendChild(p);
    const img = document.createElement("img");
    img.classList.add('img-width');
    div.appendChild(img);
    img.src = photo.url;
    div.innerHTML = `<h2>${photo.title}</h2>`
    commentContainer.appendChild(img);
    // commentContainer.appendChild(div);
  }
}
