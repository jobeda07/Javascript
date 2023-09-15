function loadapi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
    .then(json => console.log(json))
}  
function loadapi2() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
  .then(data=>loadapi2add(data))
} 

function loadapi2add(data) {
  const ul = document.getElementById('userlist');
  for (const item of data) {
    //  console.log(item.name);
    const li = document.createElement('li');
    li.innerText = item.name;
    ul.appendChild(li);
    
  }
}
    