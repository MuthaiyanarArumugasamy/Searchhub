// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
}

from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {

getFirestore

}

from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig={

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"YOUR_SENDER_ID",

appId:"YOUR_APP_ID"

};

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db=getFirestore(app);

const provider=new GoogleAuthProvider();

export function signup(email,password){

return createUserWithEmailAndPassword(auth,email,password);

}

export function login(email,password){

return signInWithEmailAndPassword(auth,email,password);

}

export function googleLogin(){

return signInWithPopup(auth,provider);

}

export function logout(){

return signOut(auth);

}

export function checkUser(callback){

onAuthStateChanged(auth,user=>{

callback(user);

});

}
