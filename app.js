const button = document.getElementById("displayRandomCar");
let data = [
  {
    rec: 1,
    Name: "DOG",
    img: "https://picsum.photos/id/237/200/200",
  },
  {
    rec: 2,
    Name: "HOME",
    img: "https://picsum.photos/id/297/200/200",
  },
  {
    rec: 3,
    Name: "STREET",
    img: "https://picsum.photos/id/257/200/200",
  },
  {
    rec: 4,
    Name: "MOUNTAIN",
    img: "https://picsum.photos/id/247/200/200",
  },
  {
    rec: 5,
    Name: "ROME",
    img: "https://picsum.photos/id/267/200/200",
  },
];
button.addEventListener("click", function () {
  function randomobj() {
    var allbody = document.body;
    var randomarr = Math.floor(Math.random() * data.length);
    var objitem = data[randomarr];
    var objDiv = document.createElement("div");
    objDiv.innerHTML =
      "<h3>" +
      objitem.Name +
      "</h3><img src='" +
      objitem.img +
      "' alt='" +
      objitem.Name +
      "'>";
    allbody.appendChild(objDiv);
  }
  button = randomobj();
});
