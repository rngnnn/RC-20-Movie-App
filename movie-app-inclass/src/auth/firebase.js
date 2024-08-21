// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";





//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
//!.env dosyası hazırladıktan sonra projeyi durdurup tekrar çalıştırmak lazım
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDDD1Oawc4HJssxl_ChtdnElD3e6Bw9zeY",
  authDomain: "movie-app-33ee9.firebaseapp.com",
  projectId: "movie-app-33ee9",
  storageBucket: "movie-app-33ee9.appspot.com",
  messagingSenderId: "1044018191375",
  appId: "1:1044018191375:web:005b413f6b9b9f5215d77a",
  measurementId: "G-VHF8GKTZ7J"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)