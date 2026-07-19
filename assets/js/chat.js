```javascript
/* ==========================================
   SearchHub AI
   chat.js
========================================== */

const messages = document.getElementById("messages");
const prompt = document.getElementById("prompt");
const sendBtn = document.getElementById("sendBtn");
const newChat = document.getElementById("newChat");

/* -----------------------------
   Auto Scroll
------------------------------ */

function scrollBottom(){

    messages.scrollTop = messages.scrollHeight;

}

/* -----------------------------
   User Message
------------------------------ */

function addUserMessage(text){

    const html = `

    <div class="message user">

        <div class="bubble">

            <p>${text}</p>

        </div>

        <div class="avatar">

            😊

        </div>

    </div>

    `;

    messages.insertAdjacentHTML("beforeend",html);

    scrollBottom();

}

/* -----------------------------
   AI Message
------------------------------ */

function addAIMessage(text){

    const html = `

    <div class="message ai">

        <div class="avatar">

            🤖

        </div>

        <div class="bubble">

            <p>${text}</p>

        </div>

    </div>

    `;

    messages.insertAdjacentHTML("beforeend",html);

    scrollBottom();

}

/* -----------------------------
   Typing Animation
------------------------------ */

function typingAnimation(){

    const html = `

    <div class="message ai" id="typingBox">

        <div class="avatar">

            🤖

        </div>

        <div class="bubble">

            <div class="typing">

                <span></span>

                <span></span>

                <span></span>

            </div>

        </div>

    </div>

    `;

    messages.insertAdjacentHTML("beforeend",html);

    scrollBottom();

}

function removeTyping(){

    const box = document.getElementById("typingBox");

    if(box){

        box.remove();

    }

}

/* -----------------------------
   Demo AI Response
------------------------------ */

function aiReply(question){

    typingAnimation();

    setTimeout(()=>{

        removeTyping();

        addAIMessage(

`You asked:

"${question}"

Currently SearchHub AI is running in Demo Mode.

Later we will connect Google Gemini API or OpenAI API so it can answer intelligently.`

        );

    },1800);

}

/* -----------------------------
   Send
------------------------------ */

function sendMessage(){

    const text = prompt.value.trim();

    if(text=="") return;

    addUserMessage(text);

    prompt.value="";

    aiReply(text);

}

/* -----------------------------
   Button
------------------------------ */

sendBtn.addEventListener("click",sendMessage);

/* -----------------------------
   Enter
------------------------------ */

prompt.addEventListener("keydown",(e)=>{

    if(e.key==="Enter" && !e.shiftKey){

        e.preventDefault();

        sendMessage();

    }

});

/* -----------------------------
   New Chat
------------------------------ */

newChat.addEventListener("click",()=>{

    if(confirm("Start a new conversation?")){

        messages.innerHTML = `

<div class="message ai">

<div class="avatar">

🤖

</div>

<div class="bubble">

<p>

Hello 👋

How can I help you today?

</p>

</div>

</div>

`;

    }

});

/* -----------------------------
   Local Storage
------------------------------ */

window.addEventListener("beforeunload",()=>{

    localStorage.setItem(

        "searchhub_chat",

        messages.innerHTML

    );

});

window.addEventListener("load",()=>{

    const data = localStorage.getItem("searchhub_chat");

    if(data){

        messages.innerHTML=data;

    }

});
```
