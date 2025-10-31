# 🌍 GeoMind -- Quiz do Mundo

## 🌐 Visão Geral

**GeoMind** é um jogo web educativo e competitivo, voltado para
adolescentes e adultos interessados em ampliar seus conhecimentos
geográficos e culturais de forma divertida e responsiva. O jogo oferece
partidas rápidas com perguntas de múltipla escolha sobre países,
capitais, bandeiras e curiosidades do mundo.

------------------------------------------------------------------------

## 🎮 Objetivo

Testar o conhecimento do jogador sobre o mundo, promovendo aprendizado e
competição global através de partidas curtas, com ranking mundial.

------------------------------------------------------------------------

## 🔍 Estrutura do Jogo

### 1. Tela Inicial

**Componentes:** - Logotipo e nome do jogo - Botões principais: - ▶️
**Jogar Agora** (modo aleatório) - 🌎 **Escolher Continente** (modo
filtrado) - 🏆 **Ranking Mundial** - ⚙️ **Configurações**

------------------------------------------------------------------------

### 2. Modos de Jogo

#### 🔹 Modo Mundial

Perguntas aleatórias sobre todos os continentes.

#### 🔹 Modo por Continente

Escolha entre: - 🌍 África - 🌎 América - 🌏 Ásia - 🌐 Europa - 🌊
Oceania

**Tipos de perguntas:** - Bandeiras e capitais - Costumes e cultura -
Idiomas e culinária - Pontos turísticos - Curiosidades gerais

------------------------------------------------------------------------

### 3. Mecânica de Partida

-   10 perguntas por partida
-   4 alternativas por pergunta
-   60 segundos para responder

**Pontuação:** - +100 pontos por acerto - +50 pontos se responder em
menos de 5 segundos

**Resultados:** - Pontuação total - Desempenho comparado à média
mundial - Posição no ranking global

------------------------------------------------------------------------

### 4. Ranking Mundial

**Atualização semanal**

Exibe: - Nome do jogador - País - Pontuação média - Quantidade de
partidas jogadas

**Destaques:** - 🥇 Ouro (Top 1--10) - 🥈 Prata (Top 11--50) - 🥉 Bronze
(Top 51--100)

------------------------------------------------------------------------

## 🔹 Exemplos de Perguntas

### 🌍 Mundo

> Qual desses países **não tem fronteiras terrestres**? - (A) Islândia -
> (B) Áustria - (C) Paraguai - (D) Suíça

### 🌐 Europa

> Qual é o **menor país da Europa**? - (A) Vaticano - (B) Mônaco - (C)
> Liechtenstein - (D) San Marino

### 🌎 América

> Em que país fica o deserto do Atacama? - (A) Chile - (B) Peru - (C)
> Bolívia - (D) Argentina

### 🌍 África

> Qual país é conhecido como o "Gigante da África"? - (A) Nigéria - (B)
> Egito - (C) África do Sul - (D) Quênia

### 🌏 Ásia

> Em qual país fica o Monte Fuji? - (A) Japão - (B) China - (C) Nepal -
> (D) Coreia do Sul

### 🌊 Oceania

> Qual país é formado por duas ilhas principais: a Ilha Norte e a Ilha
> Sul? - (A) Nova Zelândia - (B) Fiji - (C) Papua-Nova Guiné - (D) Tonga

------------------------------------------------------------------------

## 🔹 Curiosidades Educativas

Após cada pergunta, o jogo exibe uma curiosidade: \> ✅ Correto!\
\> A Islândia é uma ilha no Atlântico Norte e não tem fronteira com
nenhum país.\
\> 80% de sua energia vem de fontes renováveis!

------------------------------------------------------------------------

## 🏅 Conquistas

-   🌍 **Cidadão do Mundo** -- Jogar em todos os continentes
-   🧠 **Mente Global** -- Acertar 50 perguntas seguidas
-   ⚡ **Relâmpago** -- Responder 10 perguntas em menos de 5 segundos
-   🎓 **GeoMestre** -- Alcançar o top 10 mundial

------------------------------------------------------------------------

## 🎨 Interface e Estilo Visual

**Estilo:** Minimalista, inspirado no Duolingo.

**Elementos visuais:** - Cores suaves (azul e verde) - Feedback imediato
(sons e animações leves) - Layout responsivo (mobile e desktop)

------------------------------------------------------------------------

## ⚙️ Arquitetura Técnica

### **Front-end:**

-   React.js + TailwindCSS
-   Axios para comunicação com API
-   Context API para estado global (pontuação, idioma, tema)

### **Back-end:**

-   Node.js + Express
-   API REST para perguntas, ranking e autenticação
-   JWT para segurança de sessão

### **Banco de Dados:**

-   MongoDB (armazenamento de perguntas, usuários e ranking)

### **Infraestrutura:**

-   Deploy em Vercel (front-end) e Render (back-end)
-   CDN para imagens e bandeiras
-   WebSocket para partidas em tempo real (modo multiplayer)

------------------------------------------------------------------------

## 📊 Fluxo de Navegação

``` mermaid
graph TD
    A[Tela Inicial] -->|Jogar Agora| B[Quiz - Modo Mundial]
    A -->|Escolher Continente| C[Seleção de Continente]
    C --> D[Quiz - Modo por Continente]
    B --> E[Resultado da Partida]
    D --> E[Resultado da Partida]
    E --> F[Ranking Mundial]
    A --> F[Ranking Mundial]
```

------------------------------------------------------------------------

## 📘 Documento de Design do Jogo

**Nome:** GeoMind -- Quiz do Mundo\
**Versão:** 1.0\
**Idioma:** Português\
**Público-alvo:** Adolescentes e adultos\
**Gênero:** Quiz Educativo Competitivo\
**Plataforma:** Web responsiva (mobile + desktop)\
**Duração média da partida:** 2--3 minutos

------------------------------------------------------------------------

## 🎓 Objetivos Educacionais

-   Estimular o aprendizado sobre geografia mundial.
-   Reforçar memória cultural e conhecimento geral.
-   Promover competição saudável entre jogadores.

------------------------------------------------------------------------

## 📅 Futuras Expansões (Planejadas)

-   Inclusão de modo *duelo* entre amigos.
-   Temáticas especiais: **Culinária Mundial**, **Patrimônios da
    Humanidade**, **Curiosidades Naturais**.
-   Tradução para inglês e espanhol.
-   Gamificação com avatar e níveis.

------------------------------------------------------------------------

## 🛠️ Plano de Execução do Projeto

### Fase 1 – Descoberta e Alinhamento

-   Consolidar requisitos de visão, público-alvo, objetivos pedagógicos e
    ritmo das partidas para definir o escopo do MVP e os critérios de
    sucesso.

### Fase 2 – Experiência do Usuário e Identidade Visual

-   Mapear fluxos de navegação, telas principais e componentes essenciais
    (home, modos, ranking, configurações) antes da prototipação.
-   Produzir wireframes responsivos no estilo minimalista proposto,
    validando paleta, feedbacks e layout para mobile e desktop.

### Fase 3 – Curadoria de Conteúdo e Gamificação

-   Construir banco inicial de perguntas por continente com metadados de
    dificuldade e curiosidades educacionais.
-   Definir regras de pontuação, tempo e resultados, além de conquistas e
    destaque no ranking que reforcem a retenção dos jogadores.

### Fase 4 – Implementação do Front-end

-   Configurar projeto React com Tailwind e Context API para suportar
    estados globais de pontuação, idioma e tema.
-   Integrar componentes de quiz, timers, feedback e ranking conforme os
    fluxos definidos no design.

### Fase 5 – Serviços de Back-end e Banco de Dados

-   Montar API Express para autenticação, entrega de perguntas, registro
    de partidas e ranking semanal, protegida com JWT.
-   Modelar coleções MongoDB para usuários, questões, estatísticas e
    conquistas, assegurando consultas eficientes para o ranking global.

### Fase 6 – Integração e Funcionalidades em Tempo Real

-   Sincronizar front-end com API via Axios, validar regras de pontuação e
    ranking, e implementar push em tempo real (WebSocket) para partidas
    multiplayer.
-   Garantir atualizações agendadas do ranking e destaques visuais
    conforme posições do jogador.

### Fase 7 – Deploy, Monitoramento e Roadmap

-   Automatizar deploys em Vercel (front-end) e Render (back-end),
    configurando CDN de ativos e observabilidade básica.
-   Estabelecer plano de evolução contínua para modos especiais,
    localizações extras e elementos de gamificação futura.

------------------------------------------------------------------------

**Autor:** Design conceitual desenvolvido por ChatGPT (assistente IA)
para Edle Silva\
**Data:** 31/10/2025
