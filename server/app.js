import express from 'express';
import {createServer} from 'http';
import { Server } from 'socket.io';
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", "notus-7b-v1.Q4_K_M.gguf")
});


const context = new LlamaContext({
    model,
    maxLength: 2048,
    temperature: 0.7, 
    top_p: 0.9 
});


const session = new LlamaChatSession({
    context,
    initialPrompt: "Eres un psicologo"
});

const response = await session.prompt('Hola');


const app = express();
const server = createServer();
const io = new Server(server);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('server on in port' + PORT);
});

