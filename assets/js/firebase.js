// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCffIDnM1ajX20sQc9Xb1Vjr-OCvBu0J5A",
authDomain: "blog-389021.firebaseapp.com",
projectId: "blog-389021",
storageBucket: "blog-389021.appspot.com",
messagingSenderId: "826587089062",
appId: "1:826587089062:web:1ce4e7f48aedcec88a8c67",
measurementId: "G-Q4CG6PGZ87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);