import { Router } from 'express';
import { leaderboard } from '../data/ranking.js';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ updatedAt: new Date().toISOString(), entries: leaderboard });
});

export default router;
