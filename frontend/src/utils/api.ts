import axios from 'axios';
import type { Continent, Question } from '../data/questions.ts';
import type { RankingEntry } from '../data/ranking.ts';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
});

export const fetchQuestions = async (continent: Continent) => {
  const response = await api.get<{ continent: Continent; total: number; questions: Question[] }>(
    '/questions',
    { params: { continent } }
  );
  return response.data;
};

export const fetchRanking = async () => {
  const response = await api.get<{ updatedAt: string; entries: RankingEntry[] }>('/ranking');
  return response.data;
};

export const login = async (username: string) => {
  const response = await api.post<{ token: string }>('/auth/login', { username });
  return response.data;
};

export default api;
