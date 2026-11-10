// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
document.getElementById('create-coupon-button').addEventListener('click',function(){
parent.postMessage({type:'fmge-page',label:'Create Coupon'},'*');
});
const NS='http://www.w3.org/2000/svg',$=i=>document.getElementById(i);
const el=(p,t,a,x)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(x)e.textContent=x;p.appendChild(e);return e};
(function(){const s=$('c1'),L=36,R=480,T=6,B=134,H=B-T;
 const v=[20,28,35,40,48,38,44,52,42,50,66,48,58,62,50,54,70,52,64,62,74,60,80,86,98,76,86,94,108,100,112];
 const w=[40,55,62,75,82,70,90,100,85,105,120,95,110,125,105,115,135,118,140,135,155,145,170,185,200,175,190,205,225,215,240];
 const xs=i=>L+8+i*(R-L-16)/30;
 [0,50,100,150,200].forEach(t=>{const y=B-t/200*H;el(s,'line',{x1:L,x2:R,y1:y,y2:y,stroke:'#e5eef5'});el(s,'text',{x:L-6,y:y+3,'text-anchor':'end'},t);el(s,'text',{x:R+8,y:y+3},(t*1.25/50).toFixed(0)=='0'?'0':'₹'+(t/50*.5).toFixed(1)+'L')});
 for(let i=0;i<31;i++)el(s,'line',{x1:xs(i),x2:xs(i),y1:T,y2:B,stroke:'#eef4f8'});
 v.forEach((a,i)=>{const h=a/200*H;el(s,'rect',{x:xs(i)-4,y:B-h,width:8,height:h,rx:1.5,fill:'#0f3f95'})});
 const pts=w.map((a,i)=>[xs(i),B-a/300*H]);
 el(s,'path',{d:pts.map((p,i)=>(i?'L':'M')+p[0]+' '+p[1]).join(''),fill:'none',stroke:'#19c3b0','stroke-width':2});
 pts.forEach(p=>el(s,'circle',{cx:p[0],cy:p[1],r:2.5,fill:'#19c3b0',stroke:'#fff','stroke-width':1}));
 [1,5,10,15,20,25,30].forEach(d=>el(s,'text',{x:xs(d-1),y:B+20,'text-anchor':'middle'},'Apr '+d));
})();
const TP=[['FMGE2024',420,'#0a56a8'],['NEET50',356,'#0b5cc4'],['STUDY30',298,'#2da6f0'],['WELCOME20',245,'#7ccaf7'],['LIVECLASS25',186,'#b9e1fa']];
$('tp').innerHTML=TP.map((t,i)=>`<div><span class="rk ${i==2?'y':''}">${i+1}</span><span>${t[0]}</span><span class="bar"><i style="width:${t[1]/420*150}px;background:${t[2]}"></i>${t[1]} uses</span></div>`).join('');
$('ra').innerHTML=[['FMGE2024','Neha Gupta','Full Course','30%','30 Apr 2024'],['NEET50','Priya Singh','Test Series','50%','30 Apr 2024'],['STUDY30','Karan Mehta','Study Material','30%','29 Apr 2024'],['WELCOME20','Neha Gupta','Live Classes','20%','29 Apr 2024'],['LIVECLASS25','Vikram Reddy','Live Classes','25%','28 Apr 2024']]
.map((r,i)=>`<tr><td>${i+1}</td><td>${r[0]}</td><td>${r[1]}</td><td class="c">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('');
$('ac').innerHTML=[['FMGE2024','FMGE Special Offer','Percentage','30%','Full Course','420 / 1000','01 Apr – 30 Jun 2024'],['NEET50','NEET Mega Discount','Percentage','50%','Test Series','356 / 500','01 Apr – 31 May 2024'],['STUDY30','Study Material Offer','Percentage','30%','Study Material','298 / 600','15 Apr – 15 Jul 2024'],['WELCOME20','Welcome Offer','Percentage','20%','All Products','245 / ∞','01 Jan – 31 Dec 2024'],['LIVECLASS25','Live Class Offer','Percentage','25%','Live Classes','186 / 300','10 Apr – 10 Jun 2024']]
.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td class="c">${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td><td><span class="pl ok">Active</span></td><td><div class="act"><i class="bi bi-eye"></i><i class="bi bi-pencil-fill"></i><i class="bi bi-trash"></i></div></td></tr>`).join('');
document.querySelectorAll('#tabs span').forEach(t=>t.onclick=()=>{document.querySelectorAll('#tabs span').forEach(x=>x.classList.remove('on'));t.classList.add('on')});
$('gen').onclick=()=>{$('code').value='FMGE'+Math.random().toString(36).slice(2,6).toUpperCase()};
$('st').onchange=e=>$('stt').textContent=e.target.checked?'Active':'Inactive';
$('reset').onclick=()=>document.querySelectorAll('.panel input.in').forEach(i=>i.value='');
}
