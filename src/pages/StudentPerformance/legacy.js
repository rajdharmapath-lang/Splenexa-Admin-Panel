// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
window.addEventListener('message',function(event){
 const student=event.data&&event.data.type==='fmge-student'&&event.data.student;
 if(!student)return;
 const initials=student.name.split(/\s+/).map(function(part){return part[0]}).join('').slice(0,2).toUpperCase();
 document.getElementById('studentInitials').textContent=initials;
 document.getElementById('studentName').firstChild.textContent=student.name+' ';
 document.getElementById('studentEmail').textContent=student.email;
 document.getElementById('studentPhone').textContent='+91 '+student.phone;
 document.getElementById('studentCourse').textContent=student.course;
});
const $=id=>document.getElementById(id);
$('ses').innerHTML=[['30 Apr 2024','Cardiovascular System - Live Class','Live Class','1.5 hrs'],['28 Apr 2024','Medicine - Doubt Clearing Session','Live Class','1 hr'],['25 Apr 2024','Test Series - Paper 3','Test Series','2 hrs'],['22 Apr 2024','Anatomy - Video Lecture','Video','45 mins'],['18 Apr 2024','Pathology - Live Class','Live Class','1.5 hrs']]
.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="pl ok">Attended</span></td></tr>`).join('');
$('vids').innerHTML=[['Cardiovascular System - Part 1','42:35','30 Apr 2024, 09:15 AM',1],['Respiratory System - Anatomy','36:20','28 Apr 2024, 03:42 PM',1],['Pharmacology - Antimicrobials','28:15','25 Apr 2024, 11:20 AM',1],['Biochemistry - Carbohydrate Metabolism','32:40','22 Apr 2024, 04:10 PM',1],['Pathology - Cell Injury','25:30','20 Apr 2024, 02:15 PM',0]]
.map(v=>`<div class="vd"><div class="th"><i class="bi bi-play-circle-fill"></i></div><div><b>${v[0]}</b><span>${v[1]}</span><span>Watched on ${v[2]}</span></div><span class="pl ${v[3]?'ok':'ip'}" style="margin:0">${v[3]?'Completed':'In Progress'}</span></div>`).join('');
$('sc').innerHTML=[['Medicine',75,'#3b82f6'],['Surgery',68,'#8b5cf6'],['OBG',62,'#f0486f'],['Pediatrics',58,'#f9a23b'],['Pathology',55,'#12b886']]
.map(s=>`<div><i style="background:${s[2]}"></i><span>${s[0]}</span><span class="bar" style="height:6px"><i style="width:${s[1]}%;background:${s[2]};height:100%;display:block;border-radius:3px;width:${s[1]}%"></i></span><b>${s[1]}%</b></div>`).join('');
}
