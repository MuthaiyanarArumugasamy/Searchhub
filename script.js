```javascript
/* ======================================
   SearchHub - script.js
====================================== */

// Theme Button
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    if(themeBtn){
        themeBtn.textContent = "☀️";
    }
}

if(themeBtn){

    themeBtn.addEventListener("click", ()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
            themeBtn.textContent="☀️";
        }else{
            localStorage.setItem("theme","light");
            themeBtn.textContent="🌙";
        }

    });

}

// Fade Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{threshold:0.2});

document.querySelectorAll(".card,.hero,.about-short").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s";

    observer.observe(el);

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Keyboard Shortcut
document.addEventListener("keydown",(e)=>{

    // Press D to toggle theme
    if(e.key==="d" || e.key==="D"){

        if(themeBtn){

            themeBtn.click();

        }

    }

});

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="45px";
topBtn.style.height="45px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.fontSize="18px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Console Message
console.log("%cWelcome to SearchHub","color:#2563eb;font-size:20px;font-weight:bold");

console.log("Powered by Google Programmable Search Engine");

// Current Year (if an element exists)
const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}

// Page Loaded
window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
```
import { auth, db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.searchWeb = async function(){

const input = document.getElementById("searchInput");

if(!input) return;

const query = input.value.trim();

if(query==""){

alert("Enter search");

return;

}

if(auth.currentUser){

await addDoc(collection(db,"searchHistory"),{

uid:auth.currentUser.uid,

query:query,

createdAt:serverTimestamp()

});

}

window.location.href =
"result.html?q="+encodeURIComponent(query);

}
