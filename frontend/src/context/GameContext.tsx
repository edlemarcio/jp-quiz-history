import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import type { Continent, Question } from '../data/questions.ts';
import { getQuestions } from '../data/questions.ts';
import { fetchQuestions } from '../utils/api.ts';

interface GameState {
  continent: Continent;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  streak: number;
  timeBonus: number;
  startQuiz: (continent: Continent) => Promise<void>;
  answerQuestion: (isCorrect: boolean, timeLeft: number) => void;
  goToNextQuestion: () => void;
  resetQuiz: () => void;
}

const defaultState: GameState = {
  continent: 'mundo',
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  streak: 0,
  timeBonus: 0,
  startQuiz: async () => undefined,
  answerQuestion: () => undefined,
  goToNextQuestion: () => undefined,
  resetQuiz: () => undefined
};

const GameContext = createContext<GameState>(defaultState);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [continent, setContinent] = useState<Continent>('mundo');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeBonus, setTimeBonus] = useState(0);

  const startQuiz = async (selectedContinent: Continent) => {
    setContinent(selectedContinent);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setTimeBonus(0);

    try {
      const { questions: remoteQuestions } = await fetchQuestions(selectedContinent);
      setQuestions(remoteQuestions);
    } catch (error) {
      console.warn('Falha ao buscar API, utilizando base local.', error);
      setQuestions(getQuestions(selectedContinent));
    }
  };

  const answerQuestion = (isCorrect: boolean, timeLeft: number) => {
    if (!questions.length) return;

    if (isCorrect) {
      setScore(prev => prev + 100);
      setStreak(prev => prev + 1);
      if (timeLeft > 5) {
        setScore(prev => prev + 50);
        setTimeBonus(prev => prev + 50);
      }
    } else {
      setStreak(0);
    }
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setTimeBonus(0);
  };

  const value = useMemo(
    () => ({
      continent,
      questions,
      currentQuestionIndex,
      score,
      streak,
      timeBonus,
      startQuiz,
      answerQuestion,
      goToNextQuestion,
      resetQuiz
    }),
    [continent, questions, currentQuestionIndex, score, streak, timeBonus]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
