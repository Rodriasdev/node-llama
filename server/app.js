import express from 'express';
import {createServer} from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer();
const io = new Server(server)

const PORT = process.env.PORT || 4000;

app.get('/test', (_,res) => {
    res.send('test')
})

app.listen(PORT, () => {
    console.log('server on in port' + PORT);
});

