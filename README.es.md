# Kids for Dev 🌍🐍

Un curso gratuito de programación y creación de juegos para niños y niñas de 8 a 12 años. Las 42 misiones breves de Python conectan programación con matemáticas, física, historia, geografía, inglés y español. El proyecto final es un sitio de preguntas dinámicas llamado **Explorador del Mundo**. El curso y el juego están disponibles en **Português, English y Español**.

[Português](README.md) · [English](README.en.md)

## Empieza hoy

1. Abre [el curso](https://humbertogaliza.github.io/kids-for-dev/?lang=es).
2. Lee con el niño o la niña la **Misión 1: ¡Hola, explorador!**.
3. Deja que cambie el código, pulse **Ejecutar Python** y explique qué pasó.
4. Elige un personaje y un escenario. El bocadillo cambia cuando Python muestra un mensaje. Guarda una tarjeta PNG de la creación para enseñársela a una persona adulta.
5. Haz tres misiones en unos 25 minutos, con una pausa si hace falta.

La primera visita descarga Python en el navegador y puede tardar unos segundos. El progreso queda en ese navegador, sin cuenta ni seguimiento. Un adulto también puede iniciar el curso localmente con `python3 -m http.server 8000 --directory docs` y abrir `http://localhost:8000/?lang=es`.

## Ruta de aprendizaje

| Módulo | Misiones | Ideas principales |
| --- | ---: | --- |
| 1. Primeros pasos | 4 | `print`, texto, números, variables |
| 2. Tipos de datos | 4 | `str`, `int`, `float`, `bool` |
| 3. Matemáticas en acción | 4 | operaciones, decisiones, bucles, funciones |
| 4. Colecciones de datos | 4 | listas, diccionarios, tuplas, conjuntos |
| 5. Lógica de programación | 4 | comparaciones, `and`, `or`, `not` |
| 6. Construir algoritmos | 4 | pasos, conteo, búsqueda, ordenación |
| 7. Vuelta al mundo | 4 | geografía y listas |
| 8. Máquina del tiempo | 4 | historia y líneas de tiempo |
| 9. Laboratorio de física | 4 | distancia, velocidad, modelos sencillos |
| 10. Laboratorio de inglés | 3 | saludos, palabras, plurales |
| 11. Laboratorio de español | 3 | saludos, colores, frases |
| 12. Explorador del Mundo | 4 pasos | HTML, CSS, JavaScript, preguntas dinámicas |

Consulta el [plan de aprendizaje](CURRICULO.es.md), la [guía para adultos](GUIA-RESPONSAVEL.es.md) y la [guía del proyecto final](projeto-final/README.es.md). Los laboratorios de idiomas ofrecen un botón para escuchar palabras cuando el navegador tiene síntesis de voz.

## Cómo se aprende

Cada una de las 42 misiones incluye una explicación más completa y un ejemplo resuelto de Python con su salida. Hay 14 actividades visuales para ordenar bloques, clasificar tarjetas en cajas y predecir resultados. Se puede arrastrar con el ratón o usar toques, clics y teclado; la actividad visual no bloquea el editor. Se puede intentar cuantas veces sea necesario. Las estrellas y una meta opcional de tres misiones diarias muestran el progreso; las preguntas de repaso invitan a explicar el razonamiento. Son prácticas habituales en aplicaciones de aprendizaje de idiomas. Kids for Dev es independiente y no está afiliado a Duolingo.

## Desarrollo y privacidad

El sitio usa HTML, CSS y JavaScript sin compilación. Python se ejecuta en el navegador con [Pyodide 314.0.7](https://pyodide.org/en/stable/usage/webworker.html), incluido en `docs/pyodide/`. Las misiones están en `docs/lessons.js`, los ejemplos en `docs/guides.js` y las actividades visuales en `docs/visual-lessons.js`; las traducciones, en `docs/lesson-en.js` y `docs/lesson-es.js`. Un límite de tiempo detiene los bucles infinitos. Las estrellas se comparten entre idiomas; cada idioma conserva su propio borrador de código.

No pidas nombre completo, foto, ubicación ni cuenta de GitHub a un menor. Un adulto debe ocuparse de cualquier publicación. No hay anuncios ni analítica. No pegues contraseñas en el editor.

El código original tiene licencia MIT, el contenido original CC BY 4.0 y Pyodide incluido MPL 2.0. Consulta los archivos de licencia.
