
document.getElementById("submit").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let description = document.getElementById("description").value;

  if (name === "" || age === "" || description === "") {
    alert("Por favor preencha todos os campos");
    return
  }

  alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${description}!`);

  while(true) {

    let choice = prompt(`Você gosta de estudar ${description}?, Responda o número 1 para SIM ou 2 para NÃO`);
    if (choice === "") {
      alert("Por favor responda a pergunta");
      continue;
    }
    if (choice === null) {
      break;
    }
    if (choice !== "1" && choice !== "2") {
      alert("Por favor responda a pergunta com 1 para SIM ou 2 para NÃO");
      continue;
    }
    if (choice === "1") {
      alert("Muito bom! Continue estudando e você terá muito sucesso.");
      break;
    }
    if (choice === "2") {
      alert("Ahh que pena... Já tentou aprender outras linguagens?");
      break;
    }

  }

})