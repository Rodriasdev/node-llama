import express from 'express';
import {createServer} from 'http';

const app = express();
const server = createServer();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('server on in port' + PORT);
});