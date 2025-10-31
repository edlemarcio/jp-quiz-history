import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext.tsx';
import type { Continent } from '../data/questions.ts';

const continents: { key: Continent; title: string; description: string }[] = [
  { key: 'mundo', title: 'Mundo', description: 'Partidas rápidas com mix global de perguntas.' },
  { key: 'africa', title: 'África', description: 'Descubra culturas, idiomas e maravilhas do continente-mãe.' },
  { key: 'america', title: 'América', description: 'Da Patagônia ao Alasca: diversidade em clima e histórias.' },
  { key: 'asia', title: 'Ásia', description: 'Tradições milenares, megacidades e paisagens extremas.' },
  { key: 'europa', title: 'Europa', description: 'Clássicos históricos, capitais icônicas e curiosidades modernas.' },
  { key: 'oceania', title: 'Oceania', description: 'Ilhas fascinantes, biodiversidade única e culturas ancestrais.' }
];

const ContinentSelect = () => {
  const navigate = useNavigate();
  const { startQuiz } = useGame();

  const handleSelect = async (continent: Continent) => {
    await startQuiz(continent);
    navigate('/quiz');
  };

  return (
    <section className="space-y-6">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Escolha um continente</h1>
        <p className="text-slate-300">Personalize sua partida e avance rumo ao título de Cidadão do Mundo.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {continents.map(continent => (
          <button
            key={continent.key}
            className="card text-left transition hover:border-primary hover:shadow-primary/30"
            onClick={() => handleSelect(continent.key)}
          >
            <h2 className="text-xl font-semibold text-primary-light">{continent.title}</h2>
            <p className="text-sm text-slate-300">{continent.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ContinentSelect;
