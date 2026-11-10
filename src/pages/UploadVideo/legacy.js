// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
const videoDropzone=document.getElementById('video-dropzone');
const videoFile=document.getElementById('video-file');
const videoFileName=document.getElementById('video-file-name');
const videoStatus=document.getElementById('video-upload-status');
function showVideoFile(file){
 if(!file)return;
 const allowed=['video/mp4','video/quicktime','video/x-msvideo','video/x-matroska'];
 if(!allowed.includes(file.type)&&!/\.(mp4|mov|avi|mkv)$/i.test(file.name)){videoStatus.textContent='Please choose an MP4, MOV, AVI, or MKV video.';return}
 if(file.size>5*1024*1024*1024){videoStatus.textContent='The selected video exceeds the 5 GB limit.';return}
 videoFileName.textContent=file.name+' ('+(file.size/1024/1024/1024).toFixed(2)+' GB)';
 videoStatus.textContent='Video selected: '+file.name;
}
videoDropzone.addEventListener('click',()=>videoFile.click());
videoDropzone.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();videoFile.click()}});
videoFile.addEventListener('change',()=>showVideoFile(videoFile.files[0]));
['dragenter','dragover'].forEach(type=>videoDropzone.addEventListener(type,event=>{event.preventDefault();videoDropzone.classList.add('dragover')}));
['dragleave','drop'].forEach(type=>videoDropzone.addEventListener(type,event=>{event.preventDefault();videoDropzone.classList.remove('dragover')}));
videoDropzone.addEventListener('drop',event=>showVideoFile(event.dataTransfer.files[0]));
document.getElementById('save-video-draft').addEventListener('click',()=>{videoStatus.textContent='Video draft saved locally in this page preview.'});
document.getElementById('publish-video').addEventListener('click',()=>{if(!videoFile.files[0]){videoStatus.textContent='Choose a video file before publishing.';videoDropzone.focus();return}videoStatus.textContent='Video ready to publish: '+videoFile.files[0].name});
}
