// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCorexF4lnSVN0uoZTEKvijdUcv9AkO01o",
  authDomain: "basic-fairbase-project.firebaseapp.com",
  projectId: "basic-fairbase-project",
  storageBucket: "basic-fairbase-project.appspot.com",
  messagingSenderId: "648357138119",
  appId: "1:648357138119:web:1e041e5a81952490a8f8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;