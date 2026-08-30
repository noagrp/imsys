import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyBsdvefN3PyytR7x_7iC2UDJzlQQlICqrU",
    authDomain: "intentory-management-b1128.firebaseapp.com",
    projectId: "intentory-management-b1128",
    storageBucket: "intentory-management-b1128.firebasestorage.app",
    messagingSenderId: "219598370646",
    appId: "1:219598370646:web:d0183ac06d73b8b1e148f7",
    measurementId: "G-K6CZZ36M42"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
