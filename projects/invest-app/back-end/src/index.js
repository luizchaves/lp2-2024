import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { investments } from './data.js';

const server = express();

server.use(express.json());

server.use(morgan('tiny'));

server.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
  })
);

server.get('/investments', (req, res) => {
  return res.json(investments);
});

server.post('/investments', (req, res) => {
  const investment = req.body;

  const id = uuidv4();

  const newInvestment = { ...investment, id };

  if (investment) {
    investments.push(newInvestment);

    res.status(201).json(newInvestment);
  } else {
    throw new HTTPError('Unable to create investment', 400);
  }
});

server.use((req, res, next) => {
  return res.status(404).json({
    message: 'Content not found',
  });
});

server.use((error, req, res, next) => {
  return res.status(500).json({
    message: 'Something broken',
  });
});

server.listen(3000, () => console.log('Server is running on port 3000'));
