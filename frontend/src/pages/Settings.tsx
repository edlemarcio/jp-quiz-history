import { useState } from 'react';

const Settings = () => {
  const [language, setLanguage] = useState<'pt-BR' | 'en' | 'es'>('pt-BR');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [notifications, setNotifications] = useState(true);

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Configurações</h1>
        <p className="text-slate-300">
          Personalize sua experiência com preferências de idioma, tema e notificações para ser avisado sobre
          rankings e eventos especiais.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-4">
          <h2 className="text-xl font-semibold text-primary-light">Idioma</h2>
          <select
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100"
            value={language}
            onChange={event => setLanguage(event.target.value as typeof language)}
          >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en">Inglês</option>
            <option value="es">Espanhol</option>
          </select>
          <p className="text-xs text-slate-400">Mais idiomas chegam na Fase 7 do roadmap.</p>
        </div>

        <div className="card space-y-4">
          <h2 className="text-xl font-semibold text-primary-light">Tema</h2>
          <div className="flex gap-3">
            {(['dark', 'light'] as const).map(mode => (
              <button
                key={mode}
                className={`flex-1 rounded-2xl border p-4 text-sm font-semibold transition ${
                  theme === mode ? 'border-primary bg-primary/20 text-white' : 'border-slate-700 text-slate-300'
                }`}
                onClick={() => setTheme(mode)}
              >
                {mode === 'dark' ? 'Modo Noturno' : 'Modo Claro'}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400">Sincronização com preferências do sistema será adicionada futuramente.</p>
        </div>

        <div className="card space-y-4 md:col-span-2">
          <h2 className="text-xl font-semibold text-primary-light">Notificações</h2>
          <label className="flex items-center gap-3 text-sm text-slate-200">
            <input
              type="checkbox"
              checked={notifications}
              onChange={event => setNotifications(event.target.checked)}
              className="h-5 w-5 rounded border-slate-700 bg-slate-900"
            />
            Receber alertas de ranking semanal e novos modos de jogo
          </label>
          <p className="text-xs text-slate-400">
            As notificações serão enviadas por e-mail e push web quando os serviços de tempo real estiverem ativos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Settings;
