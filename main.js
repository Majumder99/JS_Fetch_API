document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addForm").addEventListener("submit", addForm);

// For fetching api we are using promises because it will give us the data

// Promises
function getText() {
  fetch("sample.txt")
    .then(function (res) {
      // console.log(res.text());
      return res.text(); // Because it is simple text file
    })
    .then(function (data) {
      //   console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// JSON USERS
function getUsers() {
  fetch("users.json")
    .then((res) => res.json()) // Because it is json file
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((user) => {
        output += `
        <ul>
          <li>${user.id}</li>
          <li>${user.name}</li>
          <li>${user.email}</li>
        </ul>
        `;
      });
      document.getElementById("users").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Fake Api
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json()) // Because it is json file
    .then((data) => {
      let output1 = "<h2>Users</h2>";
      data.forEach((user) => {
        output1 += `
        <ul class = "usersPost">
          <li>${user.id}</li>
          <li>${user.title}</li>
          <li>${user.body}</li>
        </ul>
        `;
      });
      document.getElementById("posts").innerHTML = output1;
    })
    .catch((err) => console.log(err));
}

function addForm(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
