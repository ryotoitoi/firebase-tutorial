import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; 
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  "apiKey": "AIzaSyCBsJqBS3Yf8sqZJDFcfuyCXf68xFvfktU",
  "authDomain": "fir-auth-20230423.firebaseapp.com",
  "projectId": "fir-auth-20230423",
  "storageBucket": "fir-auth-20230423.appspot.com",
  "messagingSenderId": "218586698019",
  "appId": "1:218586698019:web:8d87fb1ad2f1bb50c5bc96",
  "measurementId": "G-GRL23RHV5W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign in with popup
async function signInWithPopup() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
}

// Add an event listener for the "Sign in with Google" button
window.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.getElementById('signInWithGoogle');
  signInButton.addEventListener('click', signInWithPopup);
});