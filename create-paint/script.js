document.getElementById("create-button").addEventListener("click", function () {
  let quadrado = document.createElement("span");
  quadrado.className = "square";
  document.getElementById("square-box").appendChild(quadrado);
});

document.getElementById("circle-button").addEventListener("click", function () {
  let circulo = document.createElement("span");
  circulo.className = "circle";
  document.getElementById("square-box").appendChild(circulo);
});

document.getElementById("triangle-button").addEventListener("click", function () {
  let triangulo = document.createElement("span");
  triangulo.className = "triangle";
  document.getElementById("square-box").appendChild(triangulo);
});

document.getElementById("color-button").addEventListener("click", function () {
  const arrayElement = document.querySelectorAll("span");
  const value = document.getElementById("write-button").value;
  arrayElement.forEach((_element, ind, arr) => {
    arr[ind].style.backgroundColor = value;
  });
});

document.getElementById("write-button").addEventListener("keyup", function(event) {
  document.getElementById("h1").style.color = event.target.value;
})


document.getElementById("delete-button").addEventListener("click", function () {
  // document.getElementById("square-box").lastChild.remove();
  const arrayElement = document.querySelectorAll("span");
  arrayElement[arrayElement.length - 1].remove();
});


// const arrayName = ["joao", "maria"];
// console.log(arrayName);

// arrayName.forEach((_name, ind, arr) => {
//   arr[ind] = "pedro";
// });

// console.log(arrayName);

let novaLista = document.createElement("ul");

novaLista.innerHTML = "<li>Tarefa 1</li><li>Tarefa 2</li>";

document.body.appendChild(novaLista);
