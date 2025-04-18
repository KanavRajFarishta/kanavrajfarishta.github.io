document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("blog-container");
    if (!container) {
      //console.error("blog-container not found");
      return;
    }
  
    fetch("/blog/blog-data.json")
      .then(res => res.json())
      .then(posts => {
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        posts.forEach(post => {
          container.innerHTML += `
            <div class="blog-card">
              <h2><a href="${post.link}">${post.title}</a></h2>
              <p class="blog-date">${new Date(post.date).toDateString()}</p>
              <p class="blog-snippet">${post.snippet}</p>
              <a href="${post.link}" class="read-more">Read More →</a>
            </div>
          `;
        });
      })
      .catch(err => console.error(err));
  });
  
  