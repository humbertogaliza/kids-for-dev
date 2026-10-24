# Kids for Dev 🌍🐍

Um curso gratuito de programação e criação de jogos para crianças de 8 a 12 anos. A primeira trilha ensina Python por meio de missões de 5 a 10 minutos. O projeto de conclusão é um site interativo chamado **Explorador do Mundo**.

## Começar hoje

1. Abra [o curso no navegador](https://humbertogaliza.github.io/kids-for-dev/).
2. Escolha **Missão 1: Olá, explorador!** e leia o enunciado junto com a criança.
3. Deixe a criança mudar o código, apertar **Rodar Python** e explicar o que aconteceu.
4. Faça 3 missões (cerca de 25 minutos), com uma pausa curta entre elas.

Ao abrir o site público, o navegador baixa o Python uma vez; isso pode levar alguns segundos. O progresso fica apenas no navegador usado, sem conta e sem coleta de dados. O curso também pode ser aberto localmente com `python3 -m http.server 8000 --directory docs` e `http://localhost:8000`, mesmo sem internet depois de baixar o repositório.

## Trilha

| Módulo | Missões | Ideia principal | Conexão com outras matérias |
| --- | ---: | --- | --- |
| 1. Primeiro contato | 4 | `print`, texto, números e variáveis | linguagem e matemática |
| 2. Matemática em ação | 4 | contas, decisões, repetição e funções | operações e padrões |
| 3. Volta ao mundo | 4 | listas, dados e perguntas | geografia |
| 4. Máquina do tempo | 4 | anos, ordenação e narrativas | história |
| 5. Laboratório de física | 4 | medidas, velocidade e gravidade | física e matemática |
| 6. Explorador do Mundo | 4 etapas | HTML, CSS e JavaScript em um site com perguntas dinâmicas | integração de tudo |

As 20 missões de Python são interativas no site. O último módulo é um projeto guiado em [`projeto-final/`](projeto-final/README.md), com um site pronto para personalizar. Há objetivos e critérios de progresso em [`CURRICULO.md`](CURRICULO.md) e uma sessão pronta para hoje em [`GUIA-RESPONSAVEL.md`](GUIA-RESPONSAVEL.md).

## Como ensinamos

- Uma ideia nova por missão, instruções curtas e resposta imediata.
- Repetição com variação: um conceito volta em outros contextos.
- Dicas graduais e erros tratados como pistas, sem punição por tentativas.
- Meta diária opcional de 3 missões, estrelas e revisão ao fim de cada módulo.
- A criança explica o raciocínio antes de o adulto mostrar a solução.

Essas escolhas se inspiram em princípios de aprendizagem por prática e feedback comuns em apps de idiomas. Este curso é independente e não é afiliado ao Duolingo.

## Para quem desenvolve

O site é HTML, CSS e JavaScript sem compilação. Python roda em um Web Worker do tipo módulo usando [Pyodide 314.0.7](https://pyodide.org/en/stable/usage/webworker.html), incluído em `docs/pyodide/` para funcionar sem depender de outro site. Os exercícios estão em `docs/lessons.js`. O código da criança é executado no navegador e um limite de tempo reinicia o Worker se houver um loop infinito.

Para testar localmente, inicie `python3 -m http.server 8000 --directory docs`, abra o endereço no navegador e complete a primeira missão. Confira também o [projeto final](http://localhost:8000/projeto-final/).

## Privacidade e segurança

Não peça nome completo, foto, localização ou conta GitHub à criança. Um adulto deve cuidar de qualquer publicação. O site não tem anúncios nem analytics. O editor executa código Python no navegador; use apenas exercícios de fontes confiáveis e não cole senhas no editor. O site final de exemplo usa dados fictícios e locais.

## Licença

Código sob MIT; textos e atividades sob CC BY 4.0. Veja [`LICENSE`](LICENSE) e [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).
