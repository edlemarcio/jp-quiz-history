import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import questionsRouter from './routes/questions.js';
import rankingRouter from './routes/ranking.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/questions', questionsRouter);
app.use('/api/ranking', rankingRouter);
app.use('/api/auth', authRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`GeoMind API running on port ${port}`);
});
