import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const secret = process.env.JWT_SECRET || 'geomind-secret';

router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Informe um nome de usuário' });
  }
  const token = jwt.sign({ username }, secret, { expiresIn: '12h' });
  res.json({ token });
});

router.get('/profile', (req, res) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: 'Token obrigatório' });
  }
  const [, token] = header.split(' ');
  try {
    const payload = jwt.verify(token, secret);
    res.json({ user: payload });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido', details: error.message });
  }
});

export default router;
