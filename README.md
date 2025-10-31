# GeoMind -- Quiz do Mundo

GeoMind é um MVP completo de um jogo de perguntas e respostas sobre geografia mundial.
O repositório reúne um front-end em React + TailwindCSS e uma API Node.js pronta para
entregar questões, ranking e autenticação básica, seguindo o roteiro definido em
[GeoMind_Quiz_do_Mundo.md](GeoMind_Quiz_do_Mundo.md).

## 📁 Estrutura do projeto

```
.
├── backend/        # API Express com dados em memória
├── frontend/       # Aplicação React (Vite + TailwindCSS)
├── GeoMind_Quiz_do_Mundo.md  # Documento conceitual e plano de execução
└── README.md
```

### Front-end (`frontend/`)
- React 18 com React Router para navegação entre fluxos.
- Context API armazena progresso da partida, pontuação, sequência de acertos e bônus.
- Interface responsiva com componentes estilizados via Tailwind (configuração incluída).
- Telas implementadas: Início, Quiz, Seleção de Continentes, Ranking, Configurações e Resultado.

### Back-end (`backend/`)
- API Express modular com rotas para questões, ranking e autenticação.
- Dados persistidos em memória (mock) para facilitar desenvolvimento do MVP.
- Suporte a JWT simples para login demo e endpoint de saúde para monitoramento.

## 🚀 Como executar

> **Importante:** o ambiente deste desafio não possui acesso à internet, então `npm install`
não foi executado. Instale as dependências em seu ambiente local antes de rodar os comandos.

### Pré-requisitos
- Node.js 18+
- npm 9+

### Passos

1. **Instalar dependências**
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Executar o front-end**
   ```bash
   npm run dev --prefix frontend
   ```
   A aplicação estará disponível em `http://localhost:5173`.

3. **Executar o back-end**
   ```bash
   npm run dev --prefix backend
   ```
   A API responde em `http://localhost:3000`.

## 🧪 Endpoints disponíveis

| Método | Rota                 | Descrição                               |
| ------ | -------------------- | --------------------------------------- |
| GET    | `/api/health`        | Status da API                           |
| GET    | `/api/questions`     | Perguntas aleatórias (query `continent`)|
| GET    | `/api/ranking`       | Ranking semanal                         |
| POST   | `/api/auth/login`    | Retorna token JWT demo                  |
| GET    | `/api/auth/profile`  | Valida token e retorna payload          |

## 📘 Roadmap e fases

As entregas implementadas cobrem até a **Fase 6** do plano original:

1. **Descoberta** – Requisitos consolidados no documento conceitual.
2. **UX & Identidade** – Fluxos/telas codificados com navegação completa.
3. **Curadoria** – Banco inicial de questões e ranking mockados.
4. **Front-end** – React + Tailwind com Context API e feedbacks educativos.
5. **Back-end** – API Express estruturada, endpoints REST e JWT básico.
6. **Integração** – Comunicação prevista via Axios (incluir em fases futuras).
7. **Deploy** – Scripts preparados para deploy em Vercel/Render (pendente).

Futuras evoluções podem seguir a seção de expansões em `GeoMind_Quiz_do_Mundo.md`.

## 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais dentro do desafio proposto.
