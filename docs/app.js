const lessons = window.LESSONS;
const modules = window.MODULES;
const progressKey = "kids-for-dev-progress-v1";
const localeKey = "kids-for-dev-locale";
const translations = { en: window.LESSON_EN, es: window.LESSON_ES };
const $ = (id) => document.getElementById(id);

function storedValue(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function chooseLocale() {
  const requested = new URLSearchParams(location.search).get("lang");
  const saved = storedValue(localeKey);
  const browser = navigator.language.slice(0, 2);
  return [requested, saved, browser, "pt"].find((value) => ["pt", "en", "es"].includes(value));
}
function readProgress() {
  try {
    const saved = JSON.parse(storedValue(progressKey) || "{}");
    return { done: Array.isArray(saved.done) ? saved.done.filter((id) => Number.isInteger(id) && lessons.some((lesson) => lesson.id === id)) : [], drafts: saved.drafts || {}, dates: saved.dates || {} };
  } catch (_) { return { done: [], drafts: {}, dates: {} }; }
}

let locale = chooseLocale();
const progress = readProgress();
let current = Math.max(0, lessons.findIndex((lesson) => !progress.done.includes(lesson.id)));
let worker;
let workerReady = false;
let runTimer;
let runningLessonId;
let runningLocale;
let runningCode;

function ui() { return window.COURSE_UI[locale]; }
function localized(lesson) { return { ...lesson, ...(translations[locale]?.[lesson.id] || {}) }; }
function draftKey(id) { return `${locale}:${id}`; }
function save() {
  try { localStorage.setItem(progressKey, JSON.stringify(progress)); } catch (_) { /* O curso funciona sem armazenamento. */ }
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
function setText(id, value) { $(id).textContent = value; }

function applyLocale() {
  const t = ui();
  document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es" }[locale];
  document.title = t.pageTitle;
  $("meta-desc").content = t.meta;
  $("language").value = locale;
  $("language").setAttribute("aria-label", t.languageLabel);
  setText("language-label", t.languageLabel);
  setText("guide-link", t.guide);
  $("guide-link").href = `https://github.com/humbertogaliza/kids-for-dev/blob/main/GUIA-RESPONSAVEL${locale === "pt" ? "" : `.${locale}`}.md`;
  for (const [id, value] of Object.entries({ "welcome-tag": t.welcomeTag, "welcome-title": t.welcomeTitle, "welcome-desc": t.welcomeDesc, "project-title": t.projectTitle, "project-desc": t.projectDesc, "project-link": t.projectLink, "editor-title": t.codeTitle, reset: t.reset, "result-title": t.resultTitle, hint: t.hintButton, "adult-note-text": t.adultNote, "footer-text": t.footer, "repo-link": t.repo, speak: t.listen })) setText(id, value);
  $("project-link").href = `projeto-final/index.html?lang=${locale}`;
  setText("code-label", { pt: "Escreva seu código Python", en: "Write your Python code", es: "Escribe tu código Python" }[locale]);
  $("modules").setAttribute("aria-label", { pt: "Módulos do curso", en: "Course modules", es: "Módulos del curso" }[locale]);
  $("course-meter").setAttribute("aria-label", { pt: "Progresso do curso", en: "Course progress", es: "Progreso del curso" }[locale]);
  $("daily-meter").setAttribute("aria-label", { pt: "Meta diária", en: "Daily goal", es: "Meta diaria" }[locale]);
  $("run").textContent = workerReady ? t.ready : t.loading;
}
function renderNav() {
  const nav = $("modules");
  nav.replaceChildren();
  modules.forEach((module) => {
    const group = document.createElement("section");
    group.className = "module";
    const title = document.createElement("h2");
    title.className = "module-heading";
    title.textContent = `${module.emoji} ${ui().modules[module.id][0]}`;
    group.append(title);
    const list = document.createElement("div");
    list.className = "mission-list";
    for (const lesson of lessons.filter((item) => item.module === module.id)) {
      const index = lessons.findIndex((item) => item.id === lesson.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mission";
      button.textContent = `${progress.done.includes(lesson.id) ? "⭐" : "○"} ${localized(lesson).title}`;
      if (index === current) button.setAttribute("aria-current", "step");
      button.addEventListener("click", () => show(index));
      list.append(button);
    }
    group.append(list);
    nav.append(group);
  });
}
function renderProgress() {
  const count = progress.done.length;
  setText("stars", `⭐ ${count}`);
  $("course-fill").style.width = `${100 * count / lessons.length}%`;
  $("course-meter").setAttribute("aria-valuemax", lessons.length);
  $("course-meter").setAttribute("aria-valuenow", count);
  const today = Math.min(progress.dates[dayKey()] || 0, 3);
  setText("daily-label", ui().daily(today));
  $("daily-fill").style.width = `${100 * today / 3}%`;
  $("daily-meter").setAttribute("aria-valuenow", today);
}
function show(index) {
  if (index < 0 || index >= lessons.length) return;
  current = index;
  const lesson = localized(lessons[index]);
  const moduleIndex = modules.findIndex((item) => item.id === lesson.module);
  const module = modules[moduleIndex];
  const t = ui();
  setText("step-label", t.step(index + 1, lessons.length));
  setText("module-label", `${module.emoji} ${t.module(moduleIndex + 1, t.modules[module.id][1])}`);
  setText("lesson-title", lesson.title);
  setText("goal", lesson.goal);
  setText("concept", lesson.concept);
  $("code").value = progress.drafts[draftKey(lesson.id)] ?? (locale === "pt" ? progress.drafts[lesson.id] : undefined) ?? lesson.starter;
  $("previous").disabled = index === 0;
  setText("previous", t.previous);
  $("next").disabled = !progress.done.includes(lesson.id);
  setText("next", index === lessons.length - 1 ? t.finalNext : t.next);
  $("speak").hidden = !lesson.say || !("speechSynthesis" in window);
  setOutput(t.outputInitial);
  setFeedback(progress.done.includes(lesson.id) ? t.alreadyDone : "");
  renderNav();
  renderProgress();
}
function startWorker() {
  workerReady = false;
  $("run").disabled = true;
  setText("run", ui().loading);
  worker = new Worker("python-worker.js", { type: "module" });
  worker.onmessage = (event) => {
    if (event.data.type === "ready") {
      workerReady = true;
      $("run").disabled = false;
      setText("run", ui().ready);
      return;
    }
    if (event.data.type === "load-error") {
      workerReady = false;
      $("run").disabled = false;
      setText("run", ui().retry);
      setFeedback(ui().loadError, "error");
      return;
    }
    if (event.data.type === "result") {
      clearTimeout(runTimer);
      $("run").disabled = false;
      setText("run", ui().ready);
      if (event.data.id === lessons[current].id && runningLocale === locale) evaluate(event.data.result);
    }
  };
  worker.onerror = () => {
    clearTimeout(runTimer);
    worker.terminate();
    workerReady = false;
    $("run").disabled = false;
    setText("run", ui().retry);
    setFeedback(ui().workerError, "error");
  };
}
function evaluate(result) {
  const lesson = localized(lessons[current]);
  const t = ui();
  if (result.error) {
    setOutput(result.output || t.noOutput);
    setFeedback(`${t.errorPrefix} ${result.error}. ${t.errorTip}`, "error");
    return;
  }
  const output = clean(result.output);
  setOutput(output || t.noOutput);
  const usedConcept = !lesson.required || runningCode.includes(lesson.required);
  if (output === clean(lesson.target) && usedConcept) {
    if (!progress.done.includes(lesson.id)) {
      progress.done.push(lesson.id);
      progress.dates[dayKey()] = (progress.dates[dayKey()] || 0) + 1;
      save();
    }
    setFeedback(`${t.success}${t.review[lesson.id] ? ` ${t.review[lesson.id]}` : ""}`, "good");
    $("next").disabled = false;
    renderNav();
    renderProgress();
  } else if (!usedConcept) {
    setFeedback(t.needsConcept(lesson.required), "try");
  } else {
    setFeedback(t.wrong(lesson.target.replace(/\n/g, ", ")), "try");
  }
}

$("language").addEventListener("change", (event) => {
  locale = event.target.value;
  try { localStorage.setItem(localeKey, locale); } catch (_) { /* Seleção vale nesta visita. */ }
  history.replaceState(null, "", `${location.pathname}?lang=${locale}`);
  applyLocale();
  show(current);
});
$("code").addEventListener("input", () => {
  progress.drafts[draftKey(lessons[current].id)] = $("code").value;
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
  setText("run", ui().running);
  setFeedback("");
  setOutput(ui().thinking);
  runningLessonId = lessons[current].id;
  runningLocale = locale;
  runningCode = $("code").value;
  worker.postMessage({ type: "run", id: runningLessonId, code: runningCode });
  runTimer = setTimeout(() => {
    worker.terminate();
    if (runningLessonId === lessons[current].id && runningLocale === locale) {
      setOutput(ui().timeoutOutput);
      setFeedback(ui().timeoutTip, "error");
    }
    startWorker();
  }, 6000);
});
$("reset").addEventListener("click", () => {
  $("code").value = localized(lessons[current]).starter;
  delete progress.drafts[draftKey(lessons[current].id)];
  if (locale === "pt") delete progress.drafts[lessons[current].id];
  save();
  setOutput(ui().resetOutput);
  setFeedback("");
});
$("hint").addEventListener("click", () => setFeedback(`${ui().hintPrefix} ${localized(lessons[current]).hint}`, "try"));
$("speak").addEventListener("click", () => {
  const sample = lessons[current].say;
  if (!sample || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(sample.text);
  utterance.lang = sample.lang;
  utterance.rate = 0.85;
  speechSynthesis.speak(utterance);
});
$("previous").addEventListener("click", () => show(current - 1));
$("next").addEventListener("click", () => {
  if (current === lessons.length - 1) location.href = `projeto-final/index.html?lang=${locale}`;
  else show(current + 1);
});

applyLocale();
show(current);
startWorker();
