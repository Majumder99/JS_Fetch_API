document.getElementById("getText").addEventListener("click", getText);

function getText() {
  fetch("sample.txt")
    .then(function (res) {
      // console.log(res.text());
      return res.text();
    })
    .then(function (data) {
      //   console.log(data);
      document.getElementById("output").innerHTML = data;
    });
}
