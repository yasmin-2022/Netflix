// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxmuzxwZd49bWR-RQ4r_wqMOLyEhX9Mq4",
  authDomain: "netflix-4c7d7.firebaseapp.com",
  projectId: "netflix-4c7d7",
  storageBucket: "netflix-4c7d7.appspot.com",
  messagingSenderId: "635292171881",
  appId: "1:635292171881:web:f53e6ed9b46a42d5eb6cf8",
  measurementId: "G-SDL4WEX2RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);