// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA99bPUMP0CUqbvI8gQsaL_cl0Th8qOe_Q",
  authDomain: "weatherapp-1d1ef.firebaseapp.com",
  projectId: "weatherapp-1d1ef",
  storageBucket: "weatherapp-1d1ef.appspot.com",
  messagingSenderId: "366844555461",
  appId: "1:366844555461:web:aa60720d354977a78380ac",
  measurementId: "G-2CNHGWW82V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
