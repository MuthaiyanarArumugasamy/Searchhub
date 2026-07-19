```javascript
/* ==========================================
   SearchHub AI
   theme.js
========================================== */

const themeButton = document.getElementById("themeBtn");

// Load saved theme
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-mode");

        if(themeButton){
            themeButton.innerHTML = "☀️";
        }

    }else{

        document.body.classList.remove("light-mode");

        if(themeButton){
            themeButton.innerHTML = "🌙";
        }

    }

});

// Toggle Theme
if(themeButton){

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            localStorage.setItem("theme","light");

            themeButton.innerHTML="☀️";

        }else{

            localStorage.setItem("theme","dark");

            themeButton.innerHTML="🌙";

        }

    });

}
```
