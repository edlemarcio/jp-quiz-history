import { Router } from 'express';
import { continents, getByContinent } from '../data/questions.js';

const router = Router();

router.get('/', (req, res) => {
  const { continent = 'mundo' } = req.query;
  if (!continents.includes(continent)) {
    return res.status(400).json({ message: 'Continente inválido', allowed: continents });
  }
  const payload = getByContinent(continent);
  res.json({ continent, total: payload.length, questions: payload });
});

export default router;
