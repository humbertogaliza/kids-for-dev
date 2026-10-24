# Projeto final: Explorador do Mundo

Você vai personalizar um site que faz perguntas, mostra pistas e conta pontos. Ele já funciona: [abrir exemplo](https://humbertogaliza.github.io/kids-for-dev/projeto-final/). Um adulto ajuda na edição dos arquivos e decide se o projeto será publicado.

## Quatro etapas de 20 a 30 minutos

### 1. Monte o mapa — HTML

Abra [`docs/projeto-final/index.html`](../docs/projeto-final/index.html). Encontre `<h1>`, `<button>` e os elementos da pergunta. Troque o título e escreva, num papel, o que cada parte mostra. **Conseguiu quando:** o novo título aparece no navegador.

### 2. Escolha as cores — CSS

Abra [`docs/projeto-final/style.css`](../docs/projeto-final/style.css). Troque uma cor e o tamanho de um texto. Compare o antes e depois. **Conseguiu quando:** você sabe apontar a regra que mudou a aparência.

### 3. Crie perguntas — dados e JavaScript

Abra [`docs/projeto-final/questions.js`](../docs/projeto-final/questions.js). Adicione uma pergunta de cada tema: matemática, geografia, história, física, inglês e espanhol. Cada pergunta tem `topic`, `question`, `choices`, `answer` (posição da resposta certa começando em 0) e `explanation`. Para traduzir a nova pergunta, acrescente-a também em [`question-i18n.js`](../docs/projeto-final/question-i18n.js), na mesma posição e com a mesma resposta certa. Confira os fatos com um adulto. **Conseguiu quando:** a nova pergunta aparece nos três idiomas, a resposta certa aumenta a pontuação e uma resposta incorreta mostra a explicação.

### 4. Apresente sua criação

Jogue com alguém. Explique onde as perguntas estão guardadas e como o botão muda a tela. Faça uma alteração que não estava no roteiro: novo tema, nova cor ou pergunta surpresa. **Conseguiu quando:** você pode mostrar o site funcionando e explicar uma decisão sua.

## Abrir e editar

Para usar no computador, um adulto pode baixar o repositório e abrir `docs/projeto-final/index.html` no navegador. Para servir também o curso de Python localmente, na pasta do repositório use `python3 -m http.server 8000 --directory docs` e acesse `http://localhost:8000/projeto-final/`.

O GitHub Pages publica os arquivos em `docs/` da branch `main`. Se editar uma cópia própria do repositório, um adulto pode ativar Pages em **Settings → Pages → Deploy from a branch → main → /docs**. Nunca coloque dados pessoais da criança nas perguntas ou no código publicado.

## Ponte entre Python e JavaScript

Você já usou variáveis, listas e condições em Python. O site usa as mesmas ideias em JavaScript:

| Ideia | Python | JavaScript |
| --- | --- | --- |
| Variável | `pontos = 0` | `let pontos = 0;` |
| Lista | `["A", "B"]` | `["A", "B"]` |
| Decisão | `if resposta == certa:` | `if (resposta === certa) { ... }` |

Para um desafio extra, use Python para calcular uma resposta de física antes de colocá-la em uma pergunta do site.
