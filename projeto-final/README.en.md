# Final project: World Explorer

Personalise a website that asks questions, shows explanations, and counts points. [Play the example](https://humbertogaliza.github.io/kids-for-dev/projeto-final/?lang=en). An adult helps edit files and decides whether to publish.

## Four steps of 20–30 minutes

1. **Structure — HTML.** Open [`docs/projeto-final/index.html`](../docs/projeto-final/index.html). Find `<h1>`, `<button>`, and the question area. Change the title. You succeed when the new title appears in the browser.
2. **Appearance — CSS.** Open [`style.css`](../docs/projeto-final/style.css). Change a colour and a text size. Point to the rule that changed the page.
3. **Questions — data and JavaScript.** Open [`questions.js`](../docs/projeto-final/questions.js). Add a question in each subject: maths, geography, history, physics, English, and Spanish. A question has `topic`, `question`, `choices`, `answer` (the correct choice's position, starting at 0), and `explanation`. Add translations in the same position in [`question-i18n.js`](../docs/projeto-final/question-i18n.js). Check facts with an adult. You succeed when a correct choice adds a point and another choice shows an explanation in all three languages.
4. **Presentation.** Play with someone. Explain where the questions are stored and how a button changes the screen. Add one idea of your own: a topic, colour, or surprise question.

To work locally, an adult can download the repository and serve `docs/` with `python3 -m http.server 8000 --directory docs`, then open `http://localhost:8000/projeto-final/?lang=en`. GitHub Pages can publish a fork from **Settings → Pages → Deploy from a branch → main → /docs**. Never put a child's personal information in published code.

## From Python to JavaScript

| Idea | Python | JavaScript |
| --- | --- | --- |
| Variable | `points = 0` | `let points = 0;` |
| List | `["A", "B"]` | `["A", "B"]` |
| Decision | `if answer == correct:` | `if (answer === correct) { ... }` |

For an extra challenge, use Python to calculate a physics answer before adding it to the website.
