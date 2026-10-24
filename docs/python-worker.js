/* Python roda separado da interface. Um programa que não termina pode ser interrompido. */
let pyodide;

(async () => {
  try {
    importScripts("https://cdn.jsdelivr.net/pyodide/v314.0.7/full/pyodide.js");
    pyodide = await loadPyodide();
    postMessage({ type: "ready" });
  } catch (error) {
    postMessage({ type: "load-error", message: String(error) });
  }
})();

self.onmessage = async (event) => {
  if (!pyodide || event.data.type !== "run") return;
  try {
    pyodide.globals.set("student_code", String(event.data.code).slice(0, 10000));
    const result = await pyodide.runPythonAsync(`
import contextlib, io, json, traceback
_saida = io.StringIO()
try:
    with contextlib.redirect_stdout(_saida):
        exec(student_code, {"__name__": "__main__"})
    _result_json = json.dumps({"output": _saida.getvalue()[:4000], "error": ""})
except Exception as erro:
    _result_json = json.dumps({"output": _saida.getvalue()[:4000], "error": "".join(traceback.format_exception_only(type(erro), erro)).strip()[:1000]})
_result_json
`);
    postMessage({ type: "result", id: event.data.id, result: JSON.parse(result) });
  } catch (error) {
    postMessage({ type: "result", id: event.data.id, result: { output: "", error: String(error) } });
  }
};
