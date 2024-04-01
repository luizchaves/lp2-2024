import express from 'express';
import morgan from 'morgan';

const server = express();

server.use(morgan('tiny'));

server.get('/', (req, res) => {
  return res.send('Hello world!');
});

server.get('/ola', (req, res) => {
  return res.send('Olá, mundo!');
});

// Query String (?name=IFPB)
server.get('/hello/en', (req, res) => {
  const name = req.query.name;

  if (name) {
    return res.json({
      name: `Hello, ${name}`,
    });
  } else {
    throw Error('Invalid Params');
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
