import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/* -----------------------------
   Signup
------------------------------*/

const signupBtn = document.getElementById("signupBtn");

if(signupBtn){

signupBtn.onclick = async()=>{

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value;

if(!name || !email || !password){

alert("Fill all fields");

return;

}

try{

const user = await createUserWithEmailAndPassword(
auth,
email,
password
);

await setDoc(doc(db,"users",user.user.uid),{

name:name,

email:email,

plan:"Free",

photo:"",

createdAt:serverTimestamp(),

subscription:false,

projects:0,

plugins:0,

searches:0

});

alert("Account Created Successfully");

window.location.href="dashboard.html";

}

catch(error){

alert(error.message);

}

};

}

/* -----------------------------
   Login
------------------------------*/

const loginBtn =
document.getElementById("loginBtn");

if(loginBtn){

loginBtn.onclick = async()=>{

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value;

const remember =
document.getElementById("remember");

try{

await setPersistence(

auth,

remember && remember.checked ?

browserLocalPersistence :

browserSessionPersistence

);

await signInWithEmailAndPassword(

auth,

email,

password

);

window.location.href="dashboard.html";

}

catch(error){

alert(error.message);

}

};

}

/* -----------------------------
Forgot Password
------------------------------*/

const forgotBtn =
document.getElementById("forgotBtn");

if(forgotBtn){

forgotBtn.onclick = async()=>{

const email =
prompt("Enter your Email");

if(!email) return;

try{

await sendPasswordResetEmail(auth,email);

alert("Password Reset Email Sent");

}

catch(error){

alert(error.message);

}

};

}

/* -----------------------------
Logout
------------------------------*/

const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.onclick = async()=>{

await signOut(auth);

window.location.href="login.html";

};

}

/* -----------------------------
Auto Login
------------------------------*/

onAuthStateChanged(auth,async(user)=>{

if(!user){

if(window.location.pathname.includes("dashboard")){

window.location.href="login.html";

}

return;

}

const snap =
await getDoc(doc(db,"users",user.uid));

if(!snap.exists()) return;

const data=snap.data();

const username =
document.getElementById("username");

const email =
document.getElementById("userEmail");

const plan =
document.getElementById("plan");

if(username)
username.innerHTML=data.name;

if(email)
email.innerHTML=data.email;

if(plan)
plan.innerHTML=data.plan;

});
