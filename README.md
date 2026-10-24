# Kids for Dev 🌍🐍

Um curso gratuito de programação e criação de jogos para crianças de 8 a 12 anos. As missões de 5 a 10 minutos ensinam Python, matemática, física, história, geografia e idiomas. O projeto de conclusão é um site interativo chamado **Explorador do Mundo**. A interface, as lições e o jogo podem ser usados em **Português, English e Español**.

[Read in English](README.en.md) · [Leer en español](README.es.md)

## Começar hoje

1. Abra [o curso no navegador](https://humbertogaliza.github.io/kids-for-dev/) e escolha o idioma no topo.
2. Escolha **Missão 1: Olá, explorador!** e leia o enunciado junto com a criança.
3. Deixe a criança mudar o código, apertar **Rodar Python** e explicar o que aconteceu.
4. Escolha um personagem e um cenário: a fala dele muda com a saída de `print(...)`. Ao terminar, salve um cartão PNG da criação para mostrar a um adulto.
5. Faça 3 missões (cerca de 25 minutos), com uma pausa curta entre elas.

Ao abrir o site público, o navegador baixa o Python uma vez; isso pode levar alguns segundos. O progresso fica apenas no navegador usado, sem conta e sem coleta de dados. O curso também pode ser aberto localmente com `python3 -m http.server 8000 --directory docs` e `http://localhost:8000`, mesmo sem internet depois de baixar o repositório.

## Trilha

| Módulo | Missões | Ideia principal | Conexão com outras matérias |
| --- | ---: | --- | --- |
| 1. Primeiro contato | 4 | `print`, texto, números e variáveis | linguagem e matemática |
| 2. Tipos de dados | 4 | `str`, `int`, `float`, `bool` | classificação e medidas |
| 3. Matemática em ação | 4 | contas, decisões, repetição e funções | operações e padrões |
| 4. Coleções de dados | 4 | lista, dicionário, tupla e conjunto | organização de informação |
| 5. Lógica de programação | 4 | comparações, `and`, `or`, `not` | raciocínio lógico |
| 6. Construindo algoritmos | 4 | sequência, contagem, busca e ordenação | resolução de problemas |
| 7. Volta ao mundo | 4 | listas, dados e perguntas | geografia |
| 8. Máquina do tempo | 4 | anos, ordenação e narrativas | história |
| 9. Laboratório de física | 4 | medidas, velocidade e gravidade | física e matemática |
| 10. Laboratório de inglês | 3 | saudações, vocabulário e plural | língua inglesa |
| 11. Laboratório de espanhol | 3 | saudações, cores e frases | língua espanhola |
| 12. Explorador do Mundo | 4 etapas | HTML, CSS e JavaScript em um site com perguntas dinâmicas | integração de tudo |

As **42 missões de Python** são interativas no site. O último módulo é um projeto guiado em [`projeto-final/`](projeto-final/README.md), com um site pronto para personalizar. Há objetivos e critérios de progresso em [`CURRICULO.md`](CURRICULO.md) e uma sessão pronta para hoje em [`GUIA-RESPONSAVEL.md`](GUIA-RESPONSAVEL.md). O progresso já salvo na versão anterior continua disponível; os rascunhos são separados por idioma.

## Como ensinamos

- Uma ideia nova por missão, instruções curtas e resposta imediata.
- Repetição com variação: um conceito volta em outros contextos.
- Dicas graduais e erros tratados como pistas, sem punição por tentativas.
- Um mundo visual reage ao resultado de cada programa e pode ser personalizado; o cartão criado é salvo no aparelho, sem envio a um servidor.
- Meta diária opcional de 3 missões, estrelas e perguntas de revisão ao fim de cada módulo.
- Laboratórios de idiomas com exemplos curtos e botão de áudio quando o navegador oferece síntese de voz.
- A criança explica o raciocínio antes de o adulto mostrar a solução.

Essas escolhas se inspiram em princípios de aprendizagem por prática e feedback comuns em apps de idiomas. Este curso é independente e não é afiliado ao Duolingo.

## Para quem desenvolve

O site é HTML, CSS e JavaScript sem compilação. Python roda em um Web Worker do tipo módulo usando [Pyodide 314.0.7](https://pyodide.org/en/stable/usage/webworker.html), incluído em `docs/pyodide/` para funcionar sem depender de outro site. Os exercícios estão em `docs/lessons.js`, e as traduções em `docs/lesson-en.js`, `docs/lesson-es.js` e `docs/i18n-ui.js`. O código da criança é executado no navegador e um limite de tempo reinicia o Worker se houver um loop infinito.

Para testar localmente, inicie `python3 -m http.server 8000 --directory docs`, abra o endereço no navegador e complete a primeira missão. Confira também o [projeto final](http://localhost:8000/projeto-final/).

## Privacidade e segurança

Não peça nome completo, foto, localização ou conta GitHub à criança. Um adulto deve cuidar de qualquer publicação. O site não tem anúncios nem analytics. O editor executa código Python no navegador; use apenas exercícios de fontes confiáveis e não cole senhas no editor. O site final de exemplo usa dados fictícios e locais.

## Licença

Código sob MIT; textos e atividades sob CC BY 4.0. Veja [`LICENSE`](LICENSE) e [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).
