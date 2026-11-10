// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
const $=i=>document.getElementById(i);
document.querySelectorAll('#types .ty').forEach(t=>t.onclick=()=>{document.querySelectorAll('#types .ty').forEach(x=>x.classList.remove('on'));t.classList.add('on')});
$('code').oninput=e=>$('pc').textContent=e.target.value||'CODE';
$('nm').oninput=e=>$('pn').textContent=e.target.value;
$('dv').oninput=e=>$('pv').textContent=e.target.value;
$('gen').onclick=()=>{const c='FMGE'+Math.floor(10+Math.random()*80);$('code').value=c;$('pc').textContent=c};
}
