// INPUT DA MENSAGEM DIGITADA PELO USUÁRIO <input>
let inputMessage = document.getElementById("message");

// DIV ONDE IREI EXIBIR AS MENSAGENS DO USUÁRIO E DO GEMINI
let chatlog = document.getElementById("chat-log");

// ARRAY QUE IRÁ SALVAR O HISTÓRICO DE MSGS TROCADAS COM GEMINI
let messages = [];

// FORMULÁRIO
const form = document.querySelector("form");

// FUNÇÃO ANÔNIMA
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let messageText = inputMessage.value; // Texto do Usuário
    // console.log(messageText)
    // Mensagem Estruturada para o Gemini
    let structuredMessage = {
        "role": "user",
        "parts": [{"text": messageText}]
    };

    // Adicionando a mensagem ao Array
    messages.push(structuredMessage);

    // Exibindo o Array de Mensagens
    console.log(messages);

    // Esvaziar
    inputMessage.value = "";

    // Criando o Elemento da Mensagem do Usuário (DIV)
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML = `
        <div class="message__text">${messageText}</div>
    `;

    // Adicionando o elemento pai
    chatlog.appendChild(messageElement);
    
    // Requisição para sua API Local (Back-End)
    // Promise (Promessa de uma resposta)
    fetch("http://localhost:3000/sendMessage/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages
        })
    })
    // then (então) - Promessa da resposta
    .then(res => res.json())
    .then(data => {
        // Data é a resposta da API
        console.log(data);
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add("message--assistant");
        messageElement.innerHTML = `
            <div class="message__text">${data.chat_completion}</div>
    `;
    chatlog.appendChild(messageElement);
    });
});

// https://ai.google.dev/gemini-api/docs/text-generation?hl=pt-br&lang=node
// Geração de Texto
// Estrutura de geração de mensagens
// Contexto, histórico (objeto)