// Função para exibir configuração do gerador de senhas na tela:
const passwordContainer = document.querySelector(".password-generator");
const showPasswordScreen = document.querySelector(".create-account span");
const result = document.querySelector(".password-result");
const resultText = document.querySelector(".password-result h3");

showPasswordScreen.addEventListener("click", () => {
  passwordContainer.style.display = "flex";
});

const charQtd = document.querySelector("#charQtd");
const lettersIn = document.querySelector("#lettersIn");
const numbersIn = document.querySelector("#numbersIn");
const symbolsIn = document.querySelector("#symbolsIn");

const getPasswordButton = document.querySelector("#generate-password");

getPasswordButton.addEventListener("click", (e) => {
  resultText.innerHTML = "";

  e.preventDefault();
  generatePassword();
});

//Gerar senha aleatória
const generatePassword = () => {
  let characters = "";

  if (
    (lettersIn.checked == false &&
      numbersIn.checked == false &&
      symbolsIn.checked == false) ||
    !charQtd.value
  ) {
    result.style.display = "none";
    return;
  } else {
    result.style.display = "flex";

    if (lettersIn.checked) {
      characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbersIn.checked) {
      characters += "1234567890";
    }
    if (symbolsIn.checked) {
      characters += '~`!@#$%^&*()_-+={[}]|;:"<,>.?/';
    }
    for (let c = 0; c < charQtd.value; c++) {
      let charactersLength = characters.length;

      resultText.innerHTML += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
  }
};

// Copiar a senha para área de transferência
const copyToClipboard = document.querySelector("#copy-clipboard");

copyToClipboard.addEventListener("click", (e) => {
  e.preventDefault();

  const password = resultText.innerText;

  navigator.clipboard.writeText(password).then(() => {
    copyToClipboard.style.background = "none";
    copyToClipboard.style.color = "rgb(33, 54, 23)";
    copyToClipboard.style.boxShadow = "inset 0px 0px 0px 2px rgb(33, 54, 23)";
    copyToClipboard.innerHTML = "Copiado!";

    setTimeout(() => {
      copyToClipboard.style.backgroundColor = "rgb(33, 54, 23)";
      copyToClipboard.style.color = "#f8f9fa";
      copyToClipboard.style.border = "none";

      copyToClipboard.innerHTML = "Copiar";
    }, 1000);
  });
});
