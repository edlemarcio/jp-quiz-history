import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useGame } from '../context/GameContext.tsx';

const navLinks = [
  { path: '/', label: 'Início', action: null },
  { path: '/quiz', label: 'Jogar Agora', action: 'quickPlay' as const },
  { path: '/continentes', label: 'Escolher Continente', action: null },
  { path: '/ranking', label: 'Ranking Mundial', action: null },
  { path: '/configuracoes', label: 'Configurações', action: null }
];

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startQuiz } = useGame();

  const handleNavigate = async (path: string, action: typeof navLinks[number]['action']) => {
    if (action === 'quickPlay') {
      await startQuiz('mundo');
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="text-2xl font-bold tracking-wide text-primary-light">
            GeoMind
          </Link>
          <nav className="flex flex-wrap gap-3 text-sm font-medium uppercase text-slate-300">
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path, link.action)}
                className={clsx(
                  'rounded-full px-4 py-2 transition-colors hover:bg-primary-light hover:text-white',
                  location.pathname === link.path && 'bg-primary text-white'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto flex max-w-6xl flex-1 flex-col px-6 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 bg-slate-900/80 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} GeoMind -- Construído para explorar o mundo.
      </footer>
    </div>
  );
};

export default Layout;
