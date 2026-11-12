const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();

const demoPlay=document.getElementById('demoPlay');
const audioFill=document.getElementById('audioFill');
const audioStatus=document.getElementById('audioStatus');
let demoTimer=null,progress=0;
demoPlay.addEventListener('click',()=>{
  if(demoTimer){clearInterval(demoTimer);demoTimer=null;demoPlay.textContent='▶';audioStatus.textContent='PAUSED';return;}
  if(progress>=100)progress=0;
  demoPlay.textContent='Ⅱ';audioStatus.textContent='DEMO';
  demoTimer=setInterval(()=>{progress=Math.min(100,progress+2);audioFill.style.width=progress+'%';if(progress>=100){clearInterval(demoTimer);demoTimer=null;demoPlay.textContent='↻';audioStatus.textContent='END';}},180);
});
const adminDialog=document.getElementById('adminDialog');
document.getElementById('adminHint').addEventListener('click',()=>adminDialog.showModal());
document.getElementById('dialogClose').addEventListener('click',()=>adminDialog.close());
adminDialog.addEventListener('click',e=>{if(e.target===adminDialog)adminDialog.close();});
