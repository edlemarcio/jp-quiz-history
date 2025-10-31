import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext.tsx';

const Results = () => {
  const navigate = useNavigate();
  const { score, streak, timeBonus, startQuiz } = useGame();

  const handleReplay = async () => {
    await startQuiz('mundo');
    navigate('/quiz');
  };

  const handleSelectContinent = () => {
    navigate('/continentes');
  };

  return (
    <section className="space-y-6">
      <header className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Fim da partida</p>
        <h1 className="text-3xl font-bold text-white">Parabéns! Aqui está seu desempenho.</h1>
        <p className="text-slate-300">Compare com a média global e busque o topo do ranking.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {[{ title: 'Pontuação total', value: score, description: 'Pontos acumulados considerando acertos e bônus.' },
          { title: 'Maior sequência', value: streak, description: 'Quantidade de respostas corretas consecutivas nesta partida.' },
          { title: 'Bônus de velocidade', value: timeBonus, description: 'Pontos extras ao responder em menos de 5 segundos.' }].map(card => (
          <div key={card.title} className="card space-y-2 text-center">
            <h2 className="text-sm uppercase tracking-widest text-slate-400">{card.title}</h2>
            <p className="text-4xl font-black text-primary-light">{card.value}</p>
            <p className="text-xs text-slate-300">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="card space-y-4 text-sm text-slate-300">
        <p>
          💡 Dica de melhoria: revise os continentes com maior dificuldade e explore o modo duel quando for lançado
          para treinar com amigos.
        </p>
        <p>
          Próximo passo: acesse o{' '}
          <button
            type="button"
            className="text-primary-light underline"
            onClick={() => navigate('/ranking')}
          >
            ranking mundial
          </button>{' '}
          e veja em qual faixa você se encaixa.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button type="button" onClick={handleReplay} className="btn-primary">
          Jogar novamente
        </button>
        <button
          type="button"
          onClick={handleSelectContinent}
          className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-primary hover:text-primary-light"
        >
          Escolher novo continente
        </button>
      </div>
    </section>
  );
};

export default Results;
