function loadapi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => displayPosts(posts))
}
 loadapi();


/*
1. get the container element where you want to add the new element
2.create Child element
3.set innertext or innerHTML
4.appendChild

*/
function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const Postdiv = document.createElement('div');
        Postdiv.classList.add('postcss')
        console.log(post);
        Postdiv.innerHTML = `
          <h5>userId ${post.userId}</h5>
          <h4>Post title ${post.title}</h4>
          
          <p>post description ${post.body}</p>
         `;
        postContainer.appendChild(Postdiv);
    } 
}
