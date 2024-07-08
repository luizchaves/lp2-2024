import express from 'express';
import morgan from 'morgan';
import { investments } from './data.js';

const server = express();

server.use(morgan('tiny'));

server.get('/investments', (req, res) => {
  return res.json(investments);
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
