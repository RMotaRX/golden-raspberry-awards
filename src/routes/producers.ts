import express from 'express';
import { ProducerService } from '../services/ProducerService';

const router = express.Router();

router.get('/producers/intervals', async (req, res) => {
  const result = await ProducerService.getWinningProducers();
  res.json(result);
});

export default router;