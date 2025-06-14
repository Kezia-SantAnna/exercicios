// fetch("https://api.adviceslip.com/advice")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Erro:", error));

document.getElementById("click-button").addEventListener("click", function () {
  const mensagem = document.getElementById("message");

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(({ slip }) => (mensagem.innerText = slip.advice)) // data foi desestruturado (({}))
    .catch((error) => console.error("Erro:", error));

  // mensagem.innerText = 'texto qualquer';
});
