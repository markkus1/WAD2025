const postsContainer = document.querySelector(".posts"); //finds HTML element .posts (where we will insert posts) 

// Fetches posts from online json bin
// fetch('https://api.jsonbin.io/v3/b/68fe0947ae596e708f2dd156')

// Fetches posts from json file
fetch('data/posts.json')
  .then(response => response.json()) // converts data into a javascript object
  .then(posts => {
    //const posts = data.record; // jsonbin.io v3 stores JSON under data.record, turns into array

    // looping through each post
    posts.forEach(post => {
      const postElement = document.createElement("article"); // new <article> element.
      postElement.classList.add("post"); // adds css style

      // fills the post html
      postElement.innerHTML = `
        <div class="post-header">
          <img src="res/images/me.png" alt="User" class="avatar">
          <span class="author">${post.author}</span>
          <span class="date">${post.date}</span>
        </div>
        <p>${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-photo">` : ''}
        <button class="like">👍</button>
      `;

      postsContainer.appendChild(postElement); // adds the post to the container
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));

document.addEventListener("DOMContentLoaded", function() { // starts after html is loaded
    // find the necessary parts in the html
    const profilePicture = document.querySelector(".profile-picture");
    const dropdown = document.getElementById("dropdown-menu");

    // add a listener for clicking on the profile picture
    profilePicture.addEventListener("click", function(event) {
        dropdown.classList.toggle("show"); // shows the dropdown
        event.stopPropagation(); // this is necessary so the dropdown won't close automatically
    });

    // similar logic as above but for closing logic, important that the constant is profilePic in order to open and close the dropdown only when clicking on the profile pic
    profilePicture.addEventListener("click", function(event) {
        if (!profilePicture.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});

