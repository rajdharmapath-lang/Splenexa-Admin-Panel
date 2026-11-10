// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
// Live preview: mirror title and message into the preview card
  const t = document.getElementById('title'), m = document.getElementById('msg');
  const pt = document.querySelector('.pv-t'), pb = document.querySelector('.pv-b');
  const dt = pt.textContent, db = pb.innerHTML;
  t.addEventListener('input', () => pt.textContent = t.value.trim() || dt);
  m.addEventListener('input', () => pb.textContent = m.value.trim() || '') ;
  m.addEventListener('blur', () => { if (!m.value.trim()) pb.innerHTML = db; });
}
