import express from 'express';
import Investment from './models/Investment.js';

const router = express.Router();

router.get('/investments', (req, res) => {
  return res.json(Investment.read());
});

router.post('/investments', (req, res) => {
  const investment = req.body;

  if (investment) {
    const newInvestment = Investment.create(investment);

    res.status(201).json(newInvestment);
  } else {
    throw new HTTPError('Unable to create investment', 400);
  }
});

router.use((req, res, next) => {
  return res.status(404).json({
    message: 'Content not found',
  });
});

router.use((error, req, res, next) => {
  return res.status(500).json({
    message: 'Something broken',
  });
});

export default router;
