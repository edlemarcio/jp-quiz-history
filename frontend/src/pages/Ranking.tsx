import { useEffect, useState } from 'react';
import { ranking as localRanking, type RankingEntry } from '../data/ranking.ts';
import { fetchRanking } from '../utils/api.ts';

const getTier = (position: number) => {
  if (position < 10) return '🥇 Ouro';
  if (position < 50) return '🥈 Prata';
  return '🥉 Bronze';
};

const Ranking = () => {
  const [entries, setEntries] = useState<RankingEntry[]>(localRanking);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchRanking();
        setEntries(data.entries);
        setUpdatedAt(data.updatedAt);
      } catch (error) {
        console.warn('Falha ao carregar ranking remoto, utilizando dados locais.', error);
      }
    };
    load();
  }, []);

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Ranking Mundial</h1>
        <p className="text-slate-300">
          Atualizado semanalmente com base no desempenho médio dos jogadores. Conquiste destaque ao manter
          alta taxa de acertos e partidas constantes.
        </p>
        {updatedAt && <p className="text-xs text-slate-500">Última atualização: {new Date(updatedAt).toLocaleString('pt-BR')}</p>}
      </header>

      <div className="card overflow-hidden p-0">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-900/70 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Posição</th>
              <th className="px-4 py-3 text-left">Jogador</th>
              <th className="px-4 py-3 text-left">País</th>
              <th className="px-4 py-3 text-left">Pontuação Média</th>
              <th className="px-4 py-3 text-left">Partidas</th>
              <th className="px-4 py-3 text-left">Categoria</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {entries.map((entry, index) => (
              <tr key={entry.id} className="transition hover:bg-slate-800/50">
                <td className="px-4 py-3 font-semibold text-primary-light">#{index + 1}</td>
                <td className="px-4 py-3">{entry.name}</td>
                <td className="px-4 py-3">{entry.country}</td>
                <td className="px-4 py-3">{entry.score.toLocaleString('pt-BR')}</td>
                <td className="px-4 py-3">{entry.matches}</td>
                <td className="px-4 py-3 text-slate-300">{getTier(index)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Ranking;
