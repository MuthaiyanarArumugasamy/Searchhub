import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDBzGxoDVgauOvYqs9jFOiS1g1LDDFTy8c",

  authDomain: "searchhub-88337.firebaseapp.com",

  projectId: "searchhub-88337",

  storageBucket: "searchhub-88337.firebasestorage.app",

  messagingSenderId: "103097306398",

  appId: "1:103097306398:web:caf65a3049d4228f174d0f",

  measurementId: "G-6JMX5V0NRY"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
