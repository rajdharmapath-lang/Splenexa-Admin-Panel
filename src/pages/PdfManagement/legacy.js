// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
document.getElementById('create-pdf-button').addEventListener('click',function(){parent.postMessage({type:'fmge-page',label:'Upload PDF'},'*');});
const NS='http://www.w3.org/2000/svg';
const svgEl=function(parent,type,attrs,text){const node=document.createElementNS(NS,type);for(const key in attrs)node.setAttribute(key,attrs[key]);if(text)node.textContent=text;parent.appendChild(node);return node};
const trend=document.querySelector('.row2 .trend-svg');
trend.innerHTML='';
const L=44,R=600,T=6,B=138,H=B-T;
const views=[1.2,1.8,2.3,2.7,3.1,2.4,2.8,3.4,2.5,3.2,4.4,3.0,3.8,4.0,3.1,3.4,4.5,3.3,4.2,4.0,4.8,4.0,5.2,5.6,6.4,5.0,5.6,6.2,7.2,7.0,6.8];
const downloads=[200,220,250,280,300,310,340,300,310,330,320,310,330,330,340,350,390,400,420,380,410,420,440,430,440,490,520,500,470,450,480];
const xs=function(i){return L+10+i*(R-L-20)/30};
[0,2,4,6,8,10].forEach(function(t){const y=B-t/10*H;svgEl(trend,'line',{x1:L,x2:R,y1:y,y2:y,class:'grid'});svgEl(trend,'text',{x:L-8,y:y+4,'text-anchor':'end'},t===0?'0':t+'K');svgEl(trend,'text',{x:R+12,y:y+4},String(t*50))});
for(let i=0;i<31;i++)svgEl(trend,'line',{x1:xs(i),x2:xs(i),y1:T,y2:B,class:'grid'});
views.forEach(function(value,i){const height=value/10*H;svgEl(trend,'rect',{x:xs(i)-5,y:B-height,width:10,height:height,rx:1.5,class:'bar'})});
const points=downloads.map(function(value,i){return [xs(i),B-value/500*H]});
svgEl(trend,'path',{d:points.map(function(point,i){return(i?'L':'M')+point[0]+' '+point[1]}).join(' '),class:'line'});
points.forEach(function(point){svgEl(trend,'circle',{cx:point[0],cy:point[1],r:3,class:'dot'})});
[1,5,10,15,20,25,30].forEach(function(day){svgEl(trend,'text',{x:xs(day-1),y:B+22,'text-anchor':'middle'},'Apr '+day)});
const top=document.querySelector('.row2 .card:nth-child(2)');
top.querySelector('.performance-svg').remove();
const list=document.createElement('div');list.className='pdf-tp';
const topPdfs=[['Rapid Revision Notes',18456,'#0a56a8','pdf-t1'],['Medicine Important Topics',13920,'#0b5cc4','pdf-t2'],['FMGE Previous Papers',10542,'#38aef5','pdf-t3'],['Pathology Quick Notes',8820,'#7ccaf7','pdf-t4'],['Pharmacology Essential Topics',6410,'#b9e1fa','pdf-t5']];
list.innerHTML=topPdfs.map(function(item){return '<div><span class="pdf-th '+item[3]+'"><i class="bi bi-file-earmark-pdf-fill"></i></span><span>'+item[0]+'</span><span class="bar"><i style="width:'+item[1]/18456*205+'px;background:'+item[2]+'"></i>'+item[1].toLocaleString('en-US')+' views</span></div>'}).join('');
top.appendChild(list);
}
