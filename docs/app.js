const lessons = window.LESSONS;
const modules = window.MODULES;
const progressKey = "kids-for-dev-progress-v1";
const localeKey = "kids-for-dev-locale";
const worldKey = "kids-for-dev-world-v1";
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
let worldMessage = "";
const expandedModules = new Set();
const avatars = { robot: "🤖", cat: "🐱", dragon: "🐉" };
const scenes = ["space", "forest", "sea"];
let worldChoice;
try { worldChoice = JSON.parse(storedValue(worldKey) || "{}"); } catch (_) { worldChoice = {}; }
if (!worldChoice || typeof worldChoice !== "object" || Array.isArray(worldChoice)) worldChoice = {};
if (!Object.prototype.hasOwnProperty.call(avatars, worldChoice.avatar)) worldChoice.avatar = "robot";
if (!scenes.includes(worldChoice.scene)) worldChoice.scene = "space";

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
function renderWorld() {
  const t = ui();
  $("avatar").value = worldChoice.avatar;
  $("scene").value = worldChoice.scene;
  $("world-avatar").textContent = avatars[worldChoice.avatar];
  $("world-scene").className = `world-scene ${worldChoice.scene}`;
  $("world-bubble").textContent = worldMessage || t.worldWaiting;
  $("world-stars").textContent = `⭐ ${progress.done.length}`;
  $("save-card").disabled = !worldMessage;
}
function updateWorld(output, success = false) {
  worldMessage = clean(output).replace(/\s+/g, " ").slice(0, 100);
  renderWorld();
  if (success) {
    const scene = $("world-scene");
    scene.classList.add("celebrate");
    setTimeout(() => scene.classList.remove("celebrate"), 500);
  }
}

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
  for (const [id, value] of Object.entries({ "world-tag": t.worldTag, "world-title": t.worldTitle, "avatar-label": t.avatarLabel, "scene-label": t.sceneLabel, "world-help": t.worldHelp, "save-card": t.saveCard, "world-privacy": t.worldPrivacy })) setText(id, value);
  $("avatar").querySelectorAll("option").forEach((option, index) => { option.textContent = t.avatars[index]; });
  $("scene").querySelectorAll("option").forEach((option, index) => { option.textContent = t.scenes[index]; });
  $("project-link").href = `projeto-final/index.html?lang=${locale}`;
  setText("code-label", { pt: "Escreva seu código Python", en: "Write your Python code", es: "Escribe tu código Python" }[locale]);
  $("modules").setAttribute("aria-label", { pt: "Módulos do curso", en: "Course modules", es: "Módulos del curso" }[locale]);
  $("course-meter").setAttribute("aria-label", { pt: "Progresso do curso", en: "Course progress", es: "Progreso del curso" }[locale]);
  $("daily-meter").setAttribute("aria-label", { pt: "Meta diária", en: "Daily goal", es: "Meta diaria" }[locale]);
  $("run").textContent = workerReady ? t.ready : t.loading;
  renderWorld();
}
function renderNav() {
  const nav = $("modules");
  nav.replaceChildren();
  expandedModules.add(lessons[current].module);
  modules.forEach((module) => {
    const group = document.createElement("details");
    group.className = "module";
    group.open = expandedModules.has(module.id);
    group.addEventListener("toggle", () => {
      if (group.open) expandedModules.add(module.id);
      else expandedModules.delete(module.id);
    });
    const title = document.createElement("summary");
    title.className = "module-heading";
    const complete = lessons.filter((item) => item.module === module.id && progress.done.includes(item.id)).length;
    const total = lessons.filter((item) => item.module === module.id).length;
    title.textContent = `${module.emoji} ${ui().modules[module.id][0]} · ${complete}/${total}`;
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
  worldMessage = "";
  renderWorld();
  renderNav();
  renderProgress();
}
function startWorker() {
  workerReady = false;
  $("run").disabled = true;
  setText("run", ui().loading);
  worker = new Worker("python-worker.js?v=20261024-2", { type: "module" });
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
    updateWorld(result.output);
    const errorType = Object.keys(t.errorHints).find((name) => result.error.includes(name));
    setFeedback(`${t.errorPrefix} ${result.error}. ${errorType ? t.errorHints[errorType] : t.errorTip}`, "error");
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
    updateWorld(output, true);
    $("next").disabled = false;
    renderNav();
    renderProgress();
  } else if (!usedConcept) {
    updateWorld(output);
    setFeedback(t.needsConcept(lesson.required), "try");
  } else {
    updateWorld(output);
    setFeedback(t.wrong(lesson.target.replace(/\n/g, ", ")), "try");
  }
}

$("language").addEventListener("change", (event) => {
  locale = event.target.value;
  try { localStorage.setItem(localeKey, locale); } catch (_) { /* Seleção vale nesta visita. */ }
  const url = new URL(location.href);
  url.searchParams.set("lang", locale);
  history.replaceState(null, "", url);
  applyLocale();
  show(current);
});
for (const id of ["avatar", "scene"]) $(id).addEventListener("change", (event) => {
  worldChoice[id] = event.target.value;
  try { localStorage.setItem(worldKey, JSON.stringify(worldChoice)); } catch (_) { /* Escolha vale nesta visita. */ }
  renderWorld();
});
$("save-card").addEventListener("click", () => {
  if (!worldMessage) return;
  const canvas = document.createElement("canvas");
  canvas.width = 960;
  canvas.height = 540;
  const context = canvas.getContext("2d");
  const colors = { space: ["#263767", "#61458d"], forest: ["#b6e3e8", "#48885a"], sea: ["#a6e6f5", "#167baf"] };
  const fill = context.createLinearGradient(0, 0, 960, 540);
  colors[worldChoice.scene].forEach((color, index) => fill.addColorStop(index, color));
  context.fillStyle = fill;
  context.fillRect(0, 0, 960, 540);
  context.fillStyle = "#ffffff";
  context.font = "bold 34px system-ui";
  context.fillText("Kids for Dev", 48, 68);
  context.font = "72px system-ui";
  context.fillText(avatars[worldChoice.avatar], 70, 300);
  context.fillStyle = "#ffffff";
  context.fillRect(240, 140, 660, 255);
  context.fillStyle = "#17324d";
  context.font = "bold 30px system-ui";
  const words = worldMessage.split(" ");
  let line = "";
  let y = 210;
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (context.measureText(next).width > 580 && line) {
      context.fillText(line, 275, y, 580);
      line = word;
      y += 42;
    } else line = next;
  }
  if (line) context.fillText(line, 275, y, 580);
  context.fillStyle = "#ffffff";
  context.font = "bold 25px system-ui";
  context.fillText(localized(lessons[current]).title.slice(0, 45), 48, 467);
  context.fillText(`⭐ ${progress.done.length}`, 830, 68);
  const link = document.createElement("a");
  link.download = `kids-for-dev-missao-${lessons[current].id}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
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
