# Kids for Dev 🌍🐍

A free coding and game-making course for children aged 8–12. The 42 short Python quests connect programming with maths, physics, history, geography, English, and Spanish. The final project is a dynamic quiz website called **World Explorer**. The course and game are available in **Português, English, and Español**.

[Português](README.md) · [Español](README.es.md)

## Start today

1. Open [the course](https://humbertogaliza.github.io/kids-for-dev/?lang=en).
2. Read **Quest 1: Hello, explorer!** together.
3. Let the child change the code, press **Run Python**, and explain what happened.
4. Pick a character and a scene. The speech bubble changes when Python prints a message. Save a PNG card of the creation to show an adult.
5. Try three quests in about 25 minutes, with a short break if needed.

The first visit downloads Python into the browser and may take a few seconds. Progress stays in that browser, without an account or tracking. An adult can serve the course locally with `python3 -m http.server 8000 --directory docs` and open `http://localhost:8000/?lang=en`.

## Learning path

| Module | Quests | Main ideas |
| --- | ---: | --- |
| 1. First steps | 4 | `print`, text, numbers, variables |
| 2. Data types | 4 | `str`, `int`, `float`, `bool` |
| 3. Maths in action | 4 | arithmetic, decisions, loops, functions |
| 4. Data collections | 4 | lists, dictionaries, tuples, sets |
| 5. Coding logic | 4 | comparisons, `and`, `or`, `not` |
| 6. Building algorithms | 4 | steps, counting, searching, sorting |
| 7. Around the world | 4 | geography and lists |
| 8. Time machine | 4 | history and timelines |
| 9. Physics lab | 4 | distance, speed, simple models |
| 10. English lab | 3 | greetings, words, plurals |
| 11. Spanish lab | 3 | greetings, colours, phrases |
| 12. World Explorer | 4 project steps | HTML, CSS, JavaScript, dynamic questions |

See the [learning plan](CURRICULO.en.md), [adult guide for the first lesson](GUIA-RESPONSAVEL.en.md), and [final project guide](projeto-final/README.en.md). The language labs have a **Listen** button when the browser provides speech synthesis.

## How learning works

Each of the 42 quests now includes a fuller explanation and a worked Python example with its output. Fourteen visual activities cover ordering blocks, sorting cards into boxes, and predicting results. Children can drag with a mouse or use taps, clicks, and a keyboard; the visual activity does not block the code editor. Children may retry freely. Stars and an optional goal of three quests a day mark progress; brief review prompts ask the child to explain their thinking. These choices draw on practice and feedback patterns common in language-learning apps. Kids for Dev is independent and is not affiliated with Duolingo.

## Development and privacy

The site uses plain HTML, CSS, and JavaScript. Python runs locally in a module Web Worker through [Pyodide 314.0.7](https://pyodide.org/en/stable/usage/webworker.html), bundled in `docs/pyodide/`. Quests are in `docs/lessons.js`, worked examples in `docs/guides.js`, and visual activities in `docs/visual-lessons.js`; English and Spanish content is in `docs/lesson-en.js` and `docs/lesson-es.js`. A time limit stops endless loops. Saved stars are shared across languages; code drafts are kept separately for each language.

Do not ask a child for their full name, photo, location, or GitHub account. An adult should manage publication. There are no ads or analytics. Do not paste secrets into the code editor.

Original code is MIT licensed, original lesson content is CC BY 4.0, and bundled Pyodide is MPL 2.0. See the license files.
