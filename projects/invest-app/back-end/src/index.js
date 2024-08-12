import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes.js';
import Seed from './database/seeders.js';

const server = express();

server.use(express.json());

server.use(morgan('tiny'));

server.use(express.static('public'));

server.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
  })
);

server.use(router);

await Seed.up();

server.listen(3000, () => console.log('Server is running on port 3000'));
