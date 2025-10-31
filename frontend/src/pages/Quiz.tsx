import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext.tsx';

const QUESTION_TIME = 60;

const Quiz = () => {
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, answerQuestion, goToNextQuestion } = useGame();
  const question = questions[currentQuestionIndex];
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFact, setShowFact] = useState(false);

  useEffect(() => {
    if (!question) {
      navigate('/');
      return;
    }
    setTimeLeft(QUESTION_TIME);
    setSelectedOption(null);
    setShowFact(false);
  }, [question, navigate]);

  useEffect(() => {
    if (!question) return;
    if (selectedOption !== null) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAnswer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, selectedOption]);

  const handleAnswer = (optionIndex: number | null) => {
    if (selectedOption !== null) return;
    if (!question) return;

    const isCorrect = optionIndex === question.answerIndex;
    answerQuestion(isCorrect, timeLeft);
    setSelectedOption(optionIndex ?? -1);
    setShowFact(true);

    setTimeout(() => {
      if (currentQuestionIndex + 1 >= questions.length) {
        navigate('/resultado');
      } else {
        goToNextQuestion();
      }
    }, 2500);
  };

  const progress = useMemo(() => {
    if (!questions.length) return 0;
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  }, [currentQuestionIndex, questions.length]);

  if (!question) {
    return null;
  }

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Pergunta {currentQuestionIndex + 1}</p>
        <h1 className="text-3xl font-semibold text-white">{question.prompt}</h1>
      </header>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {question.options.map((option, index) => {
          const isCorrect = index === question.answerIndex;
          const isSelected = selectedOption === index;
          const isWrongSelection = isSelected && !isCorrect;
          return (
            <button
              key={option}
              onClick={() => handleAnswer(index)}
              className={`card text-left transition ${
                isCorrect && selectedOption !== null ? 'border-green-400 bg-green-500/20' : ''
              } ${isWrongSelection ? 'border-rose-400 bg-rose-500/20' : ''}`}
              disabled={selectedOption !== null}
            >
              <span className="text-sm font-semibold text-slate-400">Opção {index + 1}</span>
              <p className="text-lg font-medium text-slate-100">{option}</p>
            </button>
          );
        })}
      </div>

      <footer className="card flex flex-col gap-3 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p>
            Tempo restante: <strong className="text-white">{timeLeft}s</strong>
          </p>
          <p>Responda em menos de 5 segundos para ganhar bônus de velocidade (+50).</p>
        </div>
        {showFact && <p className="max-w-xl text-slate-200">💡 {question.fact}</p>}
      </footer>
    </section>
  );
};

export default Quiz;
