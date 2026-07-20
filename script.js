// ===============================
// SearchHub AI Script
// ===============================

// Search Function

function searchNow() {

    const input = document.getElementById("searchInput");

    const query = input.value.trim();

    if(query===""){

        alert("Please enter something to search.");

        return;

    }

    // Save History

    saveHistory(query);

    // Google Search

    window.open(
        "https://www.google.com/search?q="+
        encodeURIComponent(query),
        "_blank"
    );

}

// Enter Key Search

const input=document.getElementById("searchInput");

if(input){

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

searchNow();

}

});

}

// ===============================
// Search History
// ===============================

function saveHistory(text){

let history=JSON.parse(localStorage.getItem("history"))||[];

history.unshift(text);

history=history.slice(0,10);

localStorage.setItem("history",JSON.stringify(history));

loadHistory();

}

function loadHistory(){

const list=document.querySelector(".recent ul");

if(!list) return;

list.innerHTML="";

let history=JSON.parse(localStorage.getItem("history"))||[];

history.forEach(item=>{

let li=document.createElement("li");

li.innerHTML=item;

li.onclick=function(){

document.getElementById("searchInput").value=item;

}

list.appendChild(li);

});

}

loadHistory();

// ===============================
// Theme Toggle
// ===============================

const themeBtn=document.querySelector(".theme");

themeBtn.onclick=function(){

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")

);

}

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("light");

}

// ===============================
// Quick Buttons
// ===============================

document.querySelectorAll(".quick-actions button")

.forEach(btn=>{

btn.onclick=function(){

document.getElementById("searchInput").value=

this.innerText;

searchNow();

}

});

// ===============================
// New Chat
// ===============================

document.querySelector(".new-chat").onclick=function(){

document.getElementById("searchInput").value="";

}

// ===============================
// Sidebar Mobile
// ===============================

const sidebar=document.querySelector(".sidebar");

const menu=document.createElement("button");

menu.innerHTML="<i class='fa-solid fa-bars'></i>";

menu.className="menuBtn";

document.querySelector("header .left").prepend(menu);

menu.onclick=function(){

sidebar.classList.toggle("active");

}

// ===============================
// Card Animation
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

setTimeout(()=>{

card.style.transition=".5s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*120);

});

// ===============================
// Model Buttons
// ===============================

document.querySelectorAll(".model button")

.forEach(btn=>{

btn.onclick=function(){

document.getElementById("searchInput").value=

this.parentElement.querySelector("h3").innerText;

searchNow();

}

});

// ===============================
// Footer Links Hover
// ===============================

document.querySelectorAll("footer li")

.forEach(item=>{

item.onclick=function(){

alert(this.innerText+" page coming soon.");

}

});

// ===============================
// Fake AI Greeting
// ===============================

console.log("SearchHub AI Ready");

// ===============================
// Welcome Toast
// ===============================

setTimeout(()=>{

console.log("Welcome to SearchHub AI");

},1000);
