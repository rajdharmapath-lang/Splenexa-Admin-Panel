// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
document.getElementById('upload-video-button').addEventListener('click',function(){
 parent.postMessage({type:'fmge-page',label:'Upload Video'},'*');
});
const NS='http://www.w3.org/2000/svg',$=i=>document.getElementById(i);
const el=(p,t,a,x)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(x)e.textContent=x;p.appendChild(e);return e};
(function(){const s=$('c1'),L=44,R=600,T=6,B=138,H=B-T;
 const v=[1.2,1.8,2.3,2.7,3.1,2.4,2.8,3.4,2.5,3.2,4.4,3.0,3.8,4.0,3.1,3.4,4.5,3.3,4.2,4.0,4.8,4.0,5.2,5.6,6.4,5.0,5.6,6.2,7.2,7.0,6.8];
 const w=[200,220,250,280,300,310,340,300,310,330,320,310,330,330,340,350,390,400,420,380,410,420,440,430,440,490,520,500,470,450,480];
 const xs=i=>L+10+i*(R-L-20)/30;
 [0,2,4,6,8,10].forEach((t,i)=>{const y=B-t/10*H;el(s,'line',{x1:L,x2:R,y1:y,y2:y,stroke:'#e5eef5'});el(s,'text',{x:L-8,y:y+4,'text-anchor':'end'},t==0?'0':t+'K');el(s,'text',{x:R+12,y:y+4},t*50)});
 for(let i=0;i<31;i++)el(s,'line',{x1:xs(i),x2:xs(i),y1:T,y2:B,stroke:'#eef4f8'});
 v.forEach((a,i)=>{const h=a/10*H;el(s,'rect',{x:xs(i)-5,y:B-h,width:10,height:h,rx:1.5,fill:'#0f3f95'})});
 const pts=w.map((a,i)=>[xs(i),B-a/500*H]);
 el(s,'path',{d:pts.map((p,i)=>(i?'L':'M')+p[0]+' '+p[1]).join(''),fill:'none',stroke:'#1ea7e8','stroke-width':2.2});
 pts.forEach(p=>el(s,'circle',{cx:p[0],cy:p[1],r:3,fill:'#1ea7e8',stroke:'#fff','stroke-width':1}));
 [1,5,10,15,20,25,30].forEach(d=>el(s,'text',{x:xs(d-1),y:B+22,'text-anchor':'middle'},'Apr '+d));
})();
const TV=[['High Yield Anatomy Revision',12456,'#0a56a8','t1'],['Medicine Important Questions',8920,'#0b5cc4','t2'],['Surgery MCQs Discussion',6542,'#38aef5','t3'],['Pathology Quick Revision',5820,'#7ccaf7','t4'],['Pharmacology Essential Topics',4210,'#b9e1fa','t5']];
$('tp').innerHTML=TV.map(t=>`<div><span class="th ${t[3]}"><i class="bi bi-play-circle-fill"></i></span><span>${t[0]}</span><span class="bar"><i style="width:${t[1]/12456*205}px;background:${t[2]}"></i>${t[1].toLocaleString('en-US')} views</span></div>`).join('');
const RU=[['Cardiovascular System - Part 1','28 Apr 2024','t1'],['Respiratory System - Overview','27 Apr 2024','t2'],['Antibiotics - Important Points','26 Apr 2024','t3'],['ENT Clinical Cases','25 Apr 2024','t1'],['Biochemistry - Enzymes','24 Apr 2024','t3']];
$('ru').innerHTML=RU.map((r,i)=>`<div><span class="rk ${i==2?'y':''}">${i+1}</span><span class="th ${r[2]}"><i class="bi bi-play-circle-fill"></i></span><span>${r[0]}</span><span class="d">${r[1]}</span></div>`).join('');
const V=[['Cardiovascular System - Part 1','Medicine','Cardiology','42:18','12,456','28 Apr 2024',1,'t1'],['Respiratory System - Overview','Medicine','Pulmonology','38:25','8,920','27 Apr 2024',1,'t2'],['Antibiotics - Important Points','Pharmacology','Antimicrobials','26:10','6,542','26 Apr 2024',1,'t5'],['ENT Clinical Cases','Surgery','ENT','31:45','5,820','25 Apr 2024',0,'t1'],['Biochemistry - Enzymes','Biochemistry','Enzymes','28:30','4,210','24 Apr 2024',1,'t3']];
$('rows').innerHTML=V.map((v,i)=>`<tr><td>${i+1}</td><td><span class="th ${v[7]}" style="width:50px;height:28px;margin:2px 0"><i class="bi bi-play-circle-fill"></i></span></td><td>${v[0]}</td><td>${v[1]}</td><td>${v[2]}</td><td class="m">${v[3]}</td><td>${v[4]}</td><td>${v[5]}</td><td><span class="pl ${v[6]?'ok':'pr'}">${v[6]?'Published':'Processing'}</span></td><td><div class="act"><i class="bi bi-eye"></i><i class="bi bi-pencil-fill"></i><i class="bi bi-bar-chart-fill"></i><i class="bi bi-three-dots-vertical"></i></div></td></tr>`).join('');
}
