const lessons = window.LESSONS;
const modules = window.MODULES;
const key = "kids-for-dev-progress-v1";
const $ = (id) => document.getElementById(id);

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    return { done: Array.isArray(saved.done) ? saved.done.filter(Number.isInteger) : [], drafts: saved.drafts || {}, dates: saved.dates || {} };
  } catch (_) { return { done: [], drafts: {}, dates: {} }; }
}
const progress = readProgress();
let current = 0;
let worker;
let workerReady = false;
let runTimer;
let runningLessonId;
let runningCode;
const review = {
  4: "Pausa de explorador: explique para alguém o que print e uma variável fazem.",
  8: "Pausa de explorador: mude um número e diga por que o resultado mudou.",
  12: "Pausa de explorador: mostre outra lista e aponte seu primeiro item.",
  16: "Pausa de explorador: coloque dois fatos em ordem e confira a fonte com um adulto.",
  20: "Pausa de explorador: explique distância, tempo e velocidade antes do projeto final."
};

function save() {
  try { localStorage.setItem(key, JSON.stringify(progress)); } catch (_) { /* O curso continua sem armazenamento. */ }
}
function dayKey() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
function clean(value) { return value.trim().replace(/\r\n/g, "\n"); }
function setFeedback(message, kind = "") {
  $("feedback").textContent = message;
  $("feedback").className = `feedback ${kind}`;
}
function setOutput(message) { $("output").textContent = message; }
function unlocked(index) { return index === 0 || progress.done.includes(lessons[index - 1].id); }

function renderNav() {
  const nav = $("modules");
  nav.replaceChildren();
  for (const module of modules) {
    const group = document.createElement("section");
    group.className = "module";
    const title = document.createElement("h2");
    title.className = "module-heading";
    title.textContent = `${module.emoji} ${module.title}`;
    group.append(title);
    const list = document.createElement("div");
    list.className = "mission-list";
    for (const lesson of lessons.filter((item) => item.module === module.id)) {
      const index = lessons.findIndex((item) => item.id === lesson.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mission";
      button.disabled = !unlocked(index);
      button.textContent = `${progress.done.includes(lesson.id) ? "⭐" : unlocked(index) ? "○" : "🔒"} ${lesson.title}`;
      if (index === current) button.setAttribute("aria-current", "step");
      button.addEventListener("click", () => show(index));
      list.append(button);
    }
    group.append(list);
    nav.append(group);
  }
}
function renderProgress() {
  const count = progress.done.length;
  $("stars").textContent = `⭐ ${count}`;
  $("course-fill").style.width = `${100 * count / lessons.length}%`;
  $("course-meter").setAttribute("aria-valuenow", count);
  const today = Math.min(progress.dates[dayKey()] || 0, 3);
  $("daily-label").textContent = `Meta de hoje: ${today} de 3 missões`;
  $("daily-fill").style.width = `${100 * today / 3}%`;
  $("daily-meter").setAttribute("aria-valuenow", today);
}
function show(index) {
  if (!unlocked(index)) return;
  current = index;
  const lesson = lessons[index];
  const module = modules.find((item) => item.id === lesson.module);
  $("step-label").textContent = `Missão ${index + 1} de ${lessons.length}`;
  $("module-label").textContent = `${module.emoji} Módulo ${module.id} · ${module.subject}`;
  $("lesson-title").textContent = lesson.title;
  $("goal").textContent = lesson.goal;
  $("concept").textContent = lesson.concept;
  $("code").value = progress.drafts[lesson.id] ?? lesson.starter;
  $("previous").disabled = index === 0;
  $("next").disabled = !progress.done.includes(lesson.id);
  $("next").textContent = index === lessons.length - 1 ? "Ver projeto final →" : "Próxima missão →";
  setOutput("Aperte “Rodar Python” para ver o resultado.");
  setFeedback(progress.done.includes(lesson.id) ? "Você já ganhou esta estrela. Pode experimentar mais!" : "");
  renderNav();
  renderProgress();
}
function startWorker() {
  workerReady = false;
  $("run").disabled = true;
  $("run").textContent = "Preparando Python…";
  worker = new Worker("python-worker.js", { type: "module" });
  worker.onmessage = (event) => {
    if (event.data.type === "ready") {
      workerReady = true;
      $("run").disabled = false;
      $("run").textContent = "▶ Rodar Python";
      return;
    }
    if (event.data.type === "load-error") {
      $("run").textContent = "Tentar carregar de novo";
      $("run").disabled = false;
      setFeedback("Não foi possível carregar Python. Confira a internet e tente novamente.", "error");
      return;
    }
    if (event.data.type === "result") {
      clearTimeout(runTimer);
      $("run").disabled = false;
      $("run").textContent = "▶ Rodar Python";
      if (event.data.id === lessons[current].id) evaluate(event.data.result);
    }
  };
  worker.onerror = () => {
    clearTimeout(runTimer);
    worker.terminate();
    setFeedback("O Python parou. Vou prepará-lo de novo.", "error");
    startWorker();
  };
}
function evaluate(result) {
  const lesson = lessons[current];
  if (result.error) {
    setOutput(result.output || "Nenhuma mensagem apareceu ainda.");
    setFeedback(`O computador encontrou uma pista: ${result.error}. Confira aspas, parênteses e espaços.`, "error");
    return;
  }
  const output = clean(result.output);
  setOutput(output || "Seu programa rodou, mas não mostrou nenhuma mensagem. Use print(...). ");
  const usedConcept = !lesson.required || runningCode.includes(lesson.required);
  if (output === clean(lesson.target) && usedConcept) {
    if (!progress.done.includes(lesson.id)) {
      progress.done.push(lesson.id);
      progress.dates[dayKey()] = (progress.dates[dayKey()] || 0) + 1;
      save();
    }
    setFeedback(`⭐ Conseguiu! ${lesson.celebrate}${review[lesson.id] ? ` ${review[lesson.id]}` : ""}`, "good");
    $("next").disabled = false;
    renderNav();
    renderProgress();
  } else if (!usedConcept) {
    setFeedback(`Quase! Use ${lesson.required} no código. Toque em “Preciso de uma dica” se quiser uma pista.`, "try");
  } else {
    setFeedback(`Boa tentativa! Sua missão é mostrar exatamente: “${lesson.target.replace(/\n/g, ", ")}”. Tente de novo ou peça uma dica.`, "try");
  }
}

$("code").addEventListener("input", () => {
  progress.drafts[lessons[current].id] = $("code").value;
  save();
});
$("code").addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  event.preventDefault();
  const field = event.target;
  field.setRangeText("    ", field.selectionStart, field.selectionEnd, "end");
  field.dispatchEvent(new Event("input"));
});
$("run").addEventListener("click", () => {
  if (!workerReady) {
    worker.terminate();
    startWorker();
    return;
  }
  $("run").disabled = true;
  $("run").textContent = "Rodando…";
  setFeedback("");
  setOutput("O Python está pensando…");
  runningLessonId = lessons[current].id;
  runningCode = $("code").value;
  worker.postMessage({ type: "run", id: runningLessonId, code: runningCode });
  runTimer = setTimeout(() => {
    worker.terminate();
    if (runningLessonId === lessons[current].id) {
      setOutput("O programa demorou demais para terminar.");
      setFeedback("Talvez haja uma repetição sem fim. Confira o código e tente novamente.", "error");
    }
    startWorker();
  }, 6000);
});
$("reset").addEventListener("click", () => {
  $("code").value = lessons[current].starter;
  delete progress.drafts[lessons[current].id];
  save();
  setOutput("Código inicial restaurado. Faça sua mudança e rode de novo.");
  setFeedback("");
});
$("hint").addEventListener("click", () => setFeedback(`💡 ${lessons[current].hint}`, "try"));
$("previous").addEventListener("click", () => show(current - 1));
$("next").addEventListener("click", () => {
  if (current === lessons.length - 1) window.location.href = "projeto-final/index.html";
  else show(current + 1);
});
show(0);
startWorker();
