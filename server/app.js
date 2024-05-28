// import express from 'express';
// import {createServer} from 'http';
// import { Server } from 'socket.io';
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", "notus-7b-v1.Q4_K_M.gguf")
})

const context = new LlamaContext({model});
const session = new LlamaChatSession({context});


const q1 = "Hi there, how are you?";
console.log("User: " + q1);

const a1 = await session.prompt(q1);
console.log("AI: " + a1);


const q2 = "Summerize what you said";
console.log("User: " + q2);

const a2 = await session.prompt(q2);
console.log("AI: " + a2);



// const app = express();
// const server = createServer();
// const io = new Server(server);

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//     console.log('server on in port' + PORT);
// });

