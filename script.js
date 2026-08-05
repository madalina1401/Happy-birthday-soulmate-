const login=document.getElementById("login");
const envelopePage=document.getElementById("envelopePage");
const letterPage=document.getElementById("letterPage");
const galleryPage=document.getElementById("galleryPage");
const finalPage=document.getElementById("finalPage");

const loginBtn=document.getElementById("loginBtn");
const password=document.getElementById("password");
const error=document.getElementById("error");

const envelope=document.getElementById("envelope");
const music=document.getElementById("music");

const title=document.getElementById("letterTitle");
const content=document.getElementById("letterContent");
const next=document.getElementById("nextButton");

const galleryImage=document.getElementById("galleryImage");

let step=0;
let storyStep=0;
let currentPhoto=0;
let musicStarted=false;

loginBtn.onclick=()=>{

if(password.value.trim()==="12.11.2023"){

login.classList.add("hidden");
envelopePage.classList.remove("hidden");

}else{

error.innerHTML="Parola nu este corectă 🤍";

}

};

password.addEventListener("keydown",function(e){

if(e.key==="Enter"){

loginBtn.click();

}

});

envelope.onclick=()=>{

showLetter();

};

function showLetter(){

envelopePage.classList.add("hidden");
letterPage.classList.remove("hidden");

if(!musicStarted){

music.volume=.25;
music.play();
musicStarted=true;

}

switch(step){

case 0:

title.innerHTML=letters[0].title;

content.innerHTML=letters[0].text;

next.innerHTML="Deschide următorul plic →";

break;

case 1:

title.innerHTML=letters[1].title;

content.innerHTML=`

<img src="${letters[1].image}">

${letters[1].text}

`;

next.innerHTML="Deschide următorul plic →";

break;

case 2:

title.innerHTML="";

content.innerHTML=`

<img src="${letters[2].image}">

${letters[2].text}

`;

next.innerHTML="Continuă →";

break;

}

}

next.onclick=()=>{

step++;

// După fiecare dintre cele 3 plicuri revine la ecranul cu plicul
if(step<=2){

letterPage.classList.add("hidden");
envelopePage.classList.remove("hidden");
return;

}

// După plicul 3 afișează 7.jpg, 8.jpg și 9.jpg
if(step>=3 && step<=5){

title.innerHTML="";

content.innerHTML=`

<img src="${storyImages[storyStep]}" class="galleryPhoto">

`;

storyStep++;

if(step<5){

next.innerHTML="Continuă →";

}else{

next.innerHTML="Vezi amintirile noastre 🤍";

}

return;

}

// După ultima imagine începe pagina cu mesajul și slideshow-ul
if(step==6){

letterPage.classList.add("hidden");
galleryPage.classList.remove("hidden");

startGallery();

}

};

function startGallery(){

galleryImage.style.display="none";

const galleryTitle=document.querySelector("#galleryPage h2");

galleryTitle.style.display="block";

setTimeout(()=>{

galleryImage.style.display="block";

currentPhoto=0;

galleryImage.src=photos[currentPhoto];

const timer=setInterval(()=>{

currentPhoto++;

if(currentPhoto>=photos.length){

clearInterval(timer);

galleryPage.classList.add("hidden");

finalPage.classList.remove("hidden");

return;

}

galleryImage.style.opacity=0;

setTimeout(()=>{

galleryImage.src=photos[currentPhoto];

galleryImage.style.opacity=1;

},300);

},3500);

},3000);

}

music.addEventListener("play",()=>{

// Muzica a pornit

});

music.addEventListener("error",()=>{

console.log("Melodia nu a putut fi încărcată.");

});