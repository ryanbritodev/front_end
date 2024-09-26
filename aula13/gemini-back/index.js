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
    console.log(messages[0].parts)
});

// Rota /sendMessage
app.listen(port, () => {
    console.log(`Exemplo de App consumindo http://localhost:${port}`);
});
