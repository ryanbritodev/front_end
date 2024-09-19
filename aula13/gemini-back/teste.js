import { GoogleGenerativeAI } from "@google/generative-ai";

// Instaciando o Gemini com a API KEY
const genAI = new GoogleGenerativeAI("AIzaSyAsIbssMbQpbg_tud4pv2phIemKa6FgdDU");

// Selecionando o modelo a ser utilizado
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Prompt do Usuário
const prompt = "Coé fi, você tá bem?";

// Espera o conteúdo ser gerado com base no prompt, utilizando o await
const result = await model.generateContent(prompt);

// Resultado
console.log(result.response.text());


// npm init
// Criar projeto Node.js
// npm init -y skippa tudi


// node teste.js
// Executar arquivos JS sem o navegador, utilizando o Node localmente

// https://ai.google.dev/gemini-api/docs/quickstart?hl=pt-br&lang=python
// https://aistudio.google.com/app/apikey?hl=pt-br&_gl=1*1cz82u*_ga*NjUyMDA0NTE3LjE3MjQ5NTg1NTg.*_ga_P1DBVKWT6V*MTcyNjcwODM0NC4zLjAuMTcyNjcwODM0NC42MC4wLjc0ODU0MDE3OA..

// Google AI Studio
// Git Ignore Node Modules
//https://www.toptal.com/developers/gitignore/

// console.log("Olá mundo!")
