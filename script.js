const wedding = new Date('2027-01-24T10:30:00+05:30').getTime();
function updateCountdown(){
  const diff=wedding-Date.now();
  const timer=document.querySelector('.timer');
  if(diff<=0){timer.innerHTML='<div style="grid-column:1/-1;font-family:Cormorant Garamond,serif;font-size:2.5rem;text-align:center">Today is the day ♥</div>';return;}
  const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=d;document.getElementById('hours').textContent=String(h).padStart(2,'0');document.getElementById('minutes').textContent=String(m).padStart(2,'0');document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
