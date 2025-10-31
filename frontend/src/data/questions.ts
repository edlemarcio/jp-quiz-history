export type Difficulty = 'facil' | 'medio' | 'dificil';
export type Continent = 'mundo' | 'africa' | 'america' | 'asia' | 'europa' | 'oceania';

export interface Question {
  id: string;
  continent: Continent;
  prompt: string;
  options: string[];
  answerIndex: number;
  difficulty: Difficulty;
  fact: string;
}

export const questions: Question[] = [
  {
    id: 'world-01',
    continent: 'mundo',
    prompt: 'Qual desses países não tem fronteiras terrestres?',
    options: ['Islândia', 'Áustria', 'Paraguai', 'Suíça'],
    answerIndex: 0,
    difficulty: 'medio',
    fact: 'A Islândia é uma ilha no Atlântico Norte e 80% de sua energia vem de fontes renováveis.'
  },
  {
    id: 'eu-01',
    continent: 'europa',
    prompt: 'Qual é o menor país da Europa?',
    options: ['Vaticano', 'Mônaco', 'Liechtenstein', 'San Marino'],
    answerIndex: 0,
    difficulty: 'facil',
    fact: 'O Vaticano tem apenas 0,49 km² e é o centro da Igreja Católica.'
  },
  {
    id: 'am-01',
    continent: 'america',
    prompt: 'Em que país fica o deserto do Atacama?',
    options: ['Chile', 'Peru', 'Bolívia', 'Argentina'],
    answerIndex: 0,
    difficulty: 'medio',
    fact: 'O Deserto do Atacama, no Chile, é um dos lugares mais áridos da Terra e abriga observatórios astronômicos.'
  },
  {
    id: 'af-01',
    continent: 'africa',
    prompt: 'Qual país é conhecido como o "Gigante da África"?',
    options: ['Nigéria', 'Egito', 'África do Sul', 'Quênia'],
    answerIndex: 0,
    difficulty: 'medio',
    fact: 'A Nigéria é o país mais populoso da África e possui a maior economia do continente.'
  },
  {
    id: 'as-01',
    continent: 'asia',
    prompt: 'Em qual país fica o Monte Fuji?',
    options: ['Japão', 'China', 'Nepal', 'Coreia do Sul'],
    answerIndex: 0,
    difficulty: 'facil',
    fact: 'O Monte Fuji é um vulcão ativo e um ícone cultural do Japão.'
  },
  {
    id: 'oc-01',
    continent: 'oceania',
    prompt: 'Qual país é formado por duas ilhas principais: a Ilha Norte e a Ilha Sul?',
    options: ['Nova Zelândia', 'Fiji', 'Papua-Nova Guiné', 'Tonga'],
    answerIndex: 0,
    difficulty: 'facil',
    fact: 'A Nova Zelândia possui mais de 600 ilhas e forte cultura maori.'
  }
];

export const getQuestions = (continent: Continent) => {
  if (continent === 'mundo') {
    return questions.sort(() => Math.random() - 0.5).slice(0, 10);
  }
  const filtered = questions.filter(question => question.continent === continent);
  return filtered.sort(() => Math.random() - 0.5).slice(0, 10);
};
