# Proyecto final: Explorador del Mundo

Personaliza un sitio web que hace preguntas, muestra explicaciones y suma puntos. [Juega con el ejemplo](https://humbertogaliza.github.io/kids-for-dev/projeto-final/?lang=es). Un adulto ayuda a editar los archivos y decide si se publica.

## Cuatro pasos de 20–30 minutos

1. **Estructura — HTML.** Abre [`docs/projeto-final/index.html`](../docs/projeto-final/index.html). Encuentra `<h1>`, `<button>` y la zona de preguntas. Cambia el título. Lo logras cuando el nuevo título aparece en el navegador.
2. **Aspecto — CSS.** Abre [`style.css`](../docs/projeto-final/style.css). Cambia un color y el tamaño de un texto. Señala la regla que modificó la página.
3. **Preguntas — datos y JavaScript.** Abre [`questions.js`](../docs/projeto-final/questions.js). Añade una pregunta de matemáticas, geografía, historia, física, inglés y español. Cada pregunta tiene `topic`, `question`, `choices`, `answer` (posición de la respuesta correcta, comenzando por 0) y `explanation`. Añade las traducciones en la misma posición de [`question-i18n.js`](../docs/projeto-final/question-i18n.js). Comprueba los datos con un adulto. Lo logras cuando una respuesta correcta suma un punto y otra muestra una explicación en los tres idiomas.
4. **Presentación.** Juega con alguien. Explica dónde se guardan las preguntas y cómo un botón cambia la pantalla. Añade una idea propia: un tema, un color o una pregunta sorpresa.

Para trabajar localmente, un adulto puede descargar el repositorio, iniciar `python3 -m http.server 8000 --directory docs` y abrir `http://localhost:8000/projeto-final/?lang=es`. Una copia del repositorio se puede publicar con GitHub Pages desde **Settings → Pages → Deploy from a branch → main → /docs**. Nunca incluyas datos personales de un menor en el código publicado.

## De Python a JavaScript

| Idea | Python | JavaScript |
| --- | --- | --- |
| Variable | `puntos = 0` | `let puntos = 0;` |
| Lista | `["A", "B"]` | `["A", "B"]` |
| Decisión | `if respuesta == correcta:` | `if (respuesta === correcta) { ... }` |

Como reto extra, usa Python para calcular una respuesta de física antes de añadirla al sitio.
