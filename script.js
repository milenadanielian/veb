const target = new Date("September 12, 2026 17:00:00").getTime();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

function countdown(){

 const now = new Date().getTime();

 const diff = target-now;

 d.innerHTML = Math.floor(diff/(1000*60*60*24));

 h.innerHTML = Math.floor(diff%(1000*60*60*24)/(1000*60*60));

 m.innerHTML = Math.floor(diff%(1000*60*60)/(1000*60));
 s.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);

}

setInterval(countdown,1000);

countdown();

const observer = new IntersectionObserver(entries=>{

 entries.forEach(entry=>{

 if(entry.isIntersecting){

 entry.target.classList.add("show");

 }

 });

});

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = ()=>{

 if(music.paused){

 music.play();

 musicBtn.innerHTML="❚❚";

 }else{

 music.pause();

 musicBtn.innerHTML="♫";

 }

}

document.getElementById("openBtn").onclick = ()=>{

 document.getElementById("content").scrollIntoView({
 behavior:"smooth"
 });

}