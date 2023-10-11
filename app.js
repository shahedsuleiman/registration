
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG2eK-Mt3GXILUGuUrmCbj2yZSC6oC2iQ",
  authDomain: "reg-form1-4cfa2.firebaseapp.com",
  projectId: "reg-form1-4cfa2",
  storageBucket: "reg-form1-4cfa2.appspot.com",
  messagingSenderId: "619364163401",
  appId: "1:619364163401:web:6bf1a2226f5ec755444498",
  measurementId: "G-DQKE3STJKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var tel = document.getElementById('phone').value;
window.signup = function (e) {
  e.preventDefault();

  
  if (username.value.includes(' ')) {
    alert('Username cannot contain spaces.');
    return;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    alert('Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert('Invalid email format.');
    return;
  }

  const phoneRegex = /^07\d{8}$/;
  if (!phoneRegex.test(tel.value)) {
    alert('Invalid phone number format. It should start with 07 and have 10 digits.');
    return;
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(function (userCredential) {
      alert('User already exists. Please log in.');
    })
    .catch(function (error) {
      
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(function (success) {
          alert("Signup successful");
        })
        .catch(function (err) {
          alert("Error: " + err.message);
        });
    });

  console.log(obj);
};