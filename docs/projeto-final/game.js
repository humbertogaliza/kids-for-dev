const questions = window.QUESTIONS;
const translations = window.QUESTION_I18N;
const messages = {
  pt: { title: "Explorador do Mundo", description: "Um jogo de perguntas criado no Kids for Dev.", back: "← Voltar ao curso", label: "🌎 Projeto final", tag: "Jogo de perguntas", intro: "Use o que aprendeu para viajar pela matemática, geografia, história, física e idiomas.", points: (n) => `⭐ ${n} ${n === 1 ? "ponto" : "pontos"}`, round: (n) => `Pergunta ${n} de ${questions.length}`, choose: "Escolha uma resposta.", right: "Boa!", wrong: "Boa tentativa!", next: "Próxima pergunta →", again: "Jogar de novo ↻", tip: "Quer criar perguntas próprias? Veja o", guide: "guia do projeto", tipEnd: "com um adulto.", footer: "Aprender é explorar. Confira fatos e fontes antes de compartilhar sua criação.", language: "Idioma" },
  en: { title: "World Explorer", description: "A quiz game made with Kids for Dev.", back: "← Back to course", label: "🌎 Final project", tag: "Quiz game", intro: "Use what you learned to explore maths, geography, history, physics, and languages.", points: (n) => `⭐ ${n} ${n === 1 ? "point" : "points"}`, round: (n) => `Question ${n} of ${questions.length}`, choose: "Choose an answer.", right: "Great!", wrong: "Good try!", next: "Next question →", again: "Play again ↻", tip: "Want to write your own questions? See the", guide: "project guide", tipEnd: "with an adult.", footer: "Learning is exploring. Check facts and sources before sharing your creation.", language: "Language" },
  es: { title: "Explorador del Mundo", description: "Un juego de preguntas creado con Kids for Dev.", back: "← Volver al curso", label: "🌎 Proyecto final", tag: "Juego de preguntas", intro: "Usa lo que aprendiste para explorar matemáticas, geografía, historia, física e idiomas.", points: (n) => `⭐ ${n} ${n === 1 ? "punto" : "puntos"}`, round: (n) => `Pregunta ${n} de ${questions.length}`, choose: "Elige una respuesta.", right: "¡Bien!", wrong: "¡Buen intento!", next: "Siguiente pregunta →", again: "Jugar de nuevo ↻", tip: "¿Quieres crear tus propias preguntas? Mira la", guide: "guía del proyecto", tipEnd: "con un adulto.", footer: "Aprender es explorar. Comprueba los datos y las fuentes antes de compartir tu creación.", language: "Idioma" }
};

function savedLocale() {
  try { return localStorage.getItem("kids-for-dev-locale"); } catch (_) { return null; }
}
let locale = [new URLSearchParams(location.search).get("lang"), savedLocale(), navigator.language.slice(0, 2), "pt"].find((value) => ["pt", "en", "es"].includes(value));
let order = questions.map((_, index) => index);
let round = 0;
let score = 0;
let answered = false;
let selectedIndex = -1;
const $ = (id) => document.getElementById(id);

function shuffle() {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
}
function questionAt(index) { return { ...questions[index], ...(translations[locale]?.[index] || {}) }; }
function applyLocale() {
  const t = messages[locale];
  document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es" }[locale];
  document.title = t.title;
  $("meta-desc").content = t.description;
  $("language").value = locale;
  $("language").setAttribute("aria-label", t.language);
  $("language-label").textContent = t.language;
  for (const [id, value] of Object.entries({ back: t.back, "project-label": t.label, "hero-tag": t.tag, "hero-title": t.title, "hero-desc": t.intro, "tip-text": t.tip, "project-guide": t.guide, "tip-end": t.tipEnd, "footer-text": t.footer })) $(id).textContent = value;
  $("back").href = `../index.html?lang=${locale}`;
  $("project-guide").href = `https://github.com/humbertogaliza/kids-for-dev/blob/main/projeto-final/README${locale === "pt" ? "" : `.${locale}`}.md`;
}
function renderQuestion() {
  const question = questionAt(order[round]);
  const t = messages[locale];
  $("round").textContent = t.round(round + 1);
  $("score").textContent = t.points(score);
  $("topic").textContent = question.topic;
  $("question").textContent = question.question;
  $("feedback").textContent = answered ? `${selectedIndex === question.answer ? t.right : t.wrong} ${question.explanation}` : t.choose;
  $("next").hidden = !answered;
  $("next").textContent = round === questions.length - 1 ? t.again : t.next;
  const container = $("choices");
  container.replaceChildren();
  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice;
    button.disabled = answered;
    if (answered && index === question.answer) button.classList.add("correct");
    if (answered && index === selectedIndex && selectedIndex !== question.answer) button.classList.add("wrong");
    button.addEventListener("click", () => answer(index));
    container.append(button);
  });
}
function answer(index) {
  if (answered) return;
  answered = true;
  selectedIndex = index;
  if (index === questions[order[round]].answer) score++;
  renderQuestion();
}
$("next").addEventListener("click", () => {
  round++;
  if (round >= questions.length) { round = 0; score = 0; shuffle(); }
  answered = false;
  selectedIndex = -1;
  renderQuestion();
});
$("language").addEventListener("change", (event) => {
  locale = event.target.value;
  try { localStorage.setItem("kids-for-dev-locale", locale); } catch (_) { /* Vale nesta visita. */ }
  history.replaceState(null, "", `${location.pathname}?lang=${locale}`);
  applyLocale();
  renderQuestion();
});
shuffle();
applyLocale();
renderQuestion();
