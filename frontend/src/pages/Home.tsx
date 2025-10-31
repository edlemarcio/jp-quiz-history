import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext.tsx';

const Home = () => {
  const navigate = useNavigate();
  const { startQuiz } = useGame();

  const handleQuickPlay = async () => {
    await startQuiz('mundo');
    navigate('/quiz');
  };

  return (
    <section className="space-y-10">
      <header className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Bem-vindo a GeoMind</p>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Descubra o mundo em desafios de 2 minutos
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Teste seus conhecimentos em geografia, cultura e curiosidades. Dispute partidas rápidas,
          desbloqueie conquistas épicas e alcance o topo do ranking mundial.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button type="button" onClick={handleQuickPlay} className="btn-primary">
            Jogar Agora
          </button>
          <button
            type="button"
            onClick={() => navigate('/continentes')}
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-primary hover:text-primary-light"
          >
            Escolher Continente
          </button>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {[{ title: 'Capitais e Bandeiras', description: 'Teste seus conhecimentos com perguntas contextualizadas por continente.' },
          { title: 'Partidas em Tempo Real', description: 'Compita com jogadores do mundo inteiro e acompanhe o ranking ao vivo.' },
          { title: 'Curiosidades Memoráveis', description: 'Aprenda fatos relevantes após cada pergunta e construa repertório cultural.' }].map(feature => (
          <div key={feature.title} className="card space-y-3">
            <h2 className="text-xl font-semibold text-primary-light">{feature.title}</h2>
            <p className="text-sm text-slate-300">{feature.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;
