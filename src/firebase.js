// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbY46ZMytsSPfu6mjMfmse50-N7HC1Xo",
  authDomain: "currency-converter-108.firebaseapp.com",
  projectId: "currency-converter-108",
  storageBucket: "currency-converter-108.appspot.com",
  messagingSenderId: "1020899784797",
  appId: "1:1020899784797:web:121d813f264e3bda8ab5b4",
  measurementId: "G-7J2XELJC2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);