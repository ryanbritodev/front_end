import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// npm i express body-parser cors
// Camada de Segurança para evitar erros de navegador
// Express pra criar o Endpoint (App)

const app = express()
const port = 3000; // Endpoint local que configuramos

app.use(bodyParser.json());
app.use(cors());

// Criando a rota
// Arrow Function assíncrona
// Request (mensagem) e Response (resposta da API)
app.post("/sendMessage", async (req, res) => {
    // Local das Mensangens
    const { messages } = req.body;
    // console.log(messages[0].parts[0].text)

    // Instaciando o Gemini com a API KEY
    const genAI = new GoogleGenerativeAI("AIzaSyAsIbssMbQpbg_tud4pv2phIemKa6FgdDU");

    // Selecionando o modelo a ser utilizado
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Prompt do Usuário
    // NÃO ESQUECER DE RELODAR O SERVIDOR
    const prompt = messages[messages.length -1].parts[0].text;
    console.log(prompt);

    // Espera o conteúdo ser gerado com base no prompt, utilizando o await
    const result = await model.generateContent(prompt);

    // Resultado da Requisição
    console.log(result.response.text());

    // Resposta da API
    // Conveção usar "chat_completion" para o chatbot
    res.json({ chat_completion: result.response.text() });
});

// Rota /sendMessage
app.listen(port, () => {
    console.log(`Exemplo de App consumindo http://localhost:${port}`);
});
