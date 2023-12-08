const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o email está vazio ou em um formato inválido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, insira um endereço de e-mail válido");
        return;
    }

    // Verifica se a senha está preenchida
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 digitos.");
        return;
    }

    // Verifica se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situação!")
        return;
    }

    // Verifica se a caixa de mensagem está vazia
    if (messageTextarea.value === "") {
        alert("Por favor, Deixe sua Mensagem!");
        return;
    }

    // Se todos os campos estiverem preenchidos corretamente
    form.submit()
})

// Função que valida e-mail
function isEmailValid(email) {

    // cria um regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha válida
        return true
    }

    // Senha inválida
    return false
}