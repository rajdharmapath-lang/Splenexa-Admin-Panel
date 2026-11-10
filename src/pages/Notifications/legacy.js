// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
document.addEventListener('click',function(event){var link=event.target.closest('.nav-s a');if(link){event.preventDefault();parent.postMessage({type:'fmge-page',label:link.textContent.trim()},'*')}});
document.getElementById('create-notification-button').addEventListener('click',function(){parent.postMessage({type:'fmge-page',label:'Create Notification'},'*')});
}
