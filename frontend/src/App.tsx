import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Quiz from './pages/Quiz.tsx';
import ContinentSelect from './pages/ContinentSelect.tsx';
import Ranking from './pages/Ranking.tsx';
import Settings from './pages/Settings.tsx';
import Results from './pages/Results.tsx';
import { GameProvider } from './context/GameContext.tsx';

const App = () => (
  <GameProvider>
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/continentes" element={<ContinentSelect />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/resultado" element={<Results />} />
      </Route>
    </Routes>
  </GameProvider>
);

export default App;
