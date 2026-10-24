const questions = window.QUESTIONS;
let order = questions.map((_, index) => index);
let round = 0;
let score = 0;
let answered = false;

function shuffle() {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
}
function showQuestion() {
  answered = false;
  const question = questions[order[round]];
  document.getElementById("round").textContent = `Pergunta ${round + 1} de ${questions.length}`;
  document.getElementById("score").textContent = `⭐ ${score} ${score === 1 ? "ponto" : "pontos"}`;
  document.getElementById("topic").textContent = question.topic;
  document.getElementById("question").textContent = question.question;
  document.getElementById("feedback").textContent = "Escolha uma resposta.";
  document.getElementById("next").hidden = true;
  const container = document.getElementById("choices");
  container.replaceChildren();
  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => answer(index));
    container.append(button);
  });
}
function answer(index) {
  if (answered) return;
  answered = true;
  const question = questions[order[round]];
  const correct = index === question.answer;
  if (correct) score++;
  const buttons = [...document.querySelectorAll("#choices button")];
  buttons.forEach((button, position) => {
    button.disabled = true;
    if (position === question.answer) button.classList.add("correct");
    if (position === index && !correct) button.classList.add("wrong");
  });
  document.getElementById("score").textContent = `⭐ ${score} ${score === 1 ? "ponto" : "pontos"}`;
  document.getElementById("feedback").textContent = `${correct ? "Boa!" : "Boa tentativa!"} ${question.explanation}`;
  const next = document.getElementById("next");
  next.hidden = false;
  next.textContent = round === questions.length - 1 ? "Jogar de novo ↻" : "Próxima pergunta →";
}
document.getElementById("next").addEventListener("click", () => {
  round++;
  if (round >= questions.length) { round = 0; score = 0; shuffle(); }
  showQuestion();
});
shuffle();
showQuestion();
