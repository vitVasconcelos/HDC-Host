//seleção de variáveis
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav a");

const inputNome = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const textAreaMessage = document.querySelector("#message");
const spanErroName = document.querySelector("#erro-name");
const spanErroEmail = document.querySelector("#erro-email");
const spanErroMessage = document.querySelector("#erro-message");
const spanErroSend = document.querySelector("#erro-send");
const sendButton = document.querySelector("#send-button");
//Eventos
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("ativo");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("ativo");
    }
  });
});

console.log("testando");


function checkName(){
  let nome = inputNome.value;
  console.log("apertei uma tecla")

  if (nome === "") {
    inputNome.classList.add("empty");
    inputNome.classList.remove("notEmpty");
    spanErroName.innerText = "O campo de nome é obrigatório";
  } else {
    inputNome.classList.add("notEmpty");
    inputNome.classList.remove("empty");
    spanErroName.innerText = "";
  }
}

function checkEmail() {
  let email = inputEmail.value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValido.test(email)) {
      inputEmail.classList.add("notEmpty");
      inputEmail.classList.remove("empty");
      spanErroEmail.innerText = "";
  } else {
      inputEmail.classList.add("empty");
      inputEmail.classList.remove("notEmpty");
      spanErroEmail.innerText = "Digite um email válido";
  }
}

function checkMessage(){
    let message = textAreaMessage.value;
    if(message === ""){
      textAreaMessage.classList.add("empty");
      textAreaMessage.classList.remove("notEmpty");
      spanErroMessage.innerText = "Digite sua mensagem";
    }else{
      textAreaMessage.classList.add("notEmpty");
      textAreaMessage.classList.remove("empty");
      spanErroMessage.innerText = "";
    }
}

inputNome.addEventListener("blur", checkName);
inputEmail.addEventListener("blur", checkEmail);
textAreaMessage.addEventListener("blur", checkMessage);

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  checkName();
  checkEmail();
  checkMessage();

  const inputs = [
    inputNome,
    inputEmail,
    textAreaMessage
  ];

  const existsClasse = inputs.some(input =>
    input.classList.contains("empty")
  );

  if (existsClasse) {
    spanErroSend.innerText = "Preencha todos os campos antes de enviar";
  } else {
    spanErroSend.innerText = "";
  
    inputNome.value = "";
    inputEmail.value = "";
    textAreaMessage.value = "";
    inputNome.classList.remove("notEmpty");
    inputEmail.classList.remove("notEmpty");
    textAreaMessage.classList.remove("notEmpty");
    alert("Sua mensagem foi enviada");
  }
});